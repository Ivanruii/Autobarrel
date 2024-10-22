import * as vscode from "vscode";
import * as path from "path";
import * as fs from "fs";
import { EXTENSION_CONFIGS, SUPPORTED_EXTENSIONS } from "./consts";

export function getUserConfig() {
  const removeExtension = vscode.workspace
    .getConfiguration()
    .get<boolean>(EXTENSION_CONFIGS.removeExtension, true);
  const useJavaScript = vscode.workspace
    .getConfiguration()
    .get<boolean>(EXTENSION_CONFIGS.useJavaScript, false);
  const fileExtension = useJavaScript ? ".js" : ".ts";
  return { removeExtension, fileExtension };
}

export async function getItemsToExport(dir: string): Promise<Set<string>> {
  const result = new Set<string>();
  const items = fs.readdirSync(dir);
  const { fileExtension } = getUserConfig();

  for (const item of items) {
    const fullPath = path.join(dir, item);
    if (fs.statSync(fullPath).isDirectory()) {
      if (fs.existsSync(path.join(fullPath, `index${fileExtension}`))) {
        result.add(fullPath);
      } else {
        const subdirFilesAndDirs = await getItemsToExport(fullPath);
        subdirFilesAndDirs.forEach((fileOrDir) => result.add(fileOrDir));
      }
    } else if (
      SUPPORTED_EXTENSIONS.some((ext) => fullPath.endsWith(ext)) &&
      !fullPath.endsWith(`index${fileExtension}`)
    ) {
      result.add(fullPath);
    }
  }

  return result;
}

export function generateBarrelContent(
  itemsToExport: Set<string>,
  rootPath: string,
  removeExtension: boolean
): string {
  const exports = Array.from(itemsToExport)
    .map((item) => {
      const relativePath = path.relative(rootPath, item).replace(/\\/g, "/");

      if (fs.statSync(item).isDirectory()) {
        const folderName = path.basename(item);
        return `export * from './${folderName}';`;
      }

      let exportPath = `./${relativePath}`;
      if (removeExtension) {
        SUPPORTED_EXTENSIONS.forEach((ext) => {
          exportPath = exportPath.replace(new RegExp(`\\${ext}$`), "");
        });
      }

      return `export * from '${exportPath}';`;
    })
    .filter((value, index, self) => self.indexOf(value) === index)
    .join("\n");

  return exports;
}
