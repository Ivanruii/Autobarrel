import * as vscode from "vscode";
import * as path from "path";
import * as fs from "fs";
import {
  getItemsToExport,
  generateBarrelContent,
  getUserConfig,
} from "./utils";

export async function createBarrelFile() {
  const folderUri = await vscode.window.showOpenDialog({
    canSelectFolders: true,
    canSelectFiles: false,
    openLabel: "Select a folder to create the barrel",
    defaultUri: vscode.workspace.workspaceFolders
      ? vscode.workspace.workspaceFolders[0].uri
      : undefined,
  });

  if (!folderUri || folderUri.length === 0) {
    vscode.window.showInformationMessage("No folder selected.");
    return;
  }

  const selectedFolderPath = folderUri[0].fsPath;

  const itemsToExport = await getItemsToExport(selectedFolderPath);

  const userConfig = getUserConfig();
  const { removeExtension, fileExtension } = userConfig;

  const barrelFilePath = path.join(selectedFolderPath, `index${fileExtension}`);

  const barrelContent = generateBarrelContent(
    itemsToExport,
    selectedFolderPath,
    removeExtension,
    fileExtension
  );
  fs.writeFileSync(barrelFilePath, barrelContent, "utf8");

  vscode.window.showInformationMessage("Barrel file created successfully.");
}

export async function updateBarrelFile(uri: vscode.Uri) {
  const selectedFolderPath = path.dirname(uri.fsPath);

  const itemsToExport = await getItemsToExport(selectedFolderPath);

  const userConfig = getUserConfig();
  const { removeExtension, fileExtension } = userConfig;

  const barrelFilePath = path.join(selectedFolderPath, `index${fileExtension}`);

  const barrelContent = generateBarrelContent(
    itemsToExport,
    selectedFolderPath,
    removeExtension,
    fileExtension
  );
  fs.writeFileSync(barrelFilePath, barrelContent, "utf8");

  vscode.window.showInformationMessage("Barrel file updated successfully.");
}
