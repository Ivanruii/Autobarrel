import * as vscode from "vscode";
import { createBarrelFile, updateBarrelFile } from "./business";
import { EXTENSION_COMMANDS } from "./consts";

export function activate(context: vscode.ExtensionContext) {
  const createDisposable = vscode.commands.registerCommand(
    EXTENSION_COMMANDS.createBarrel,
    async () => {
      await createBarrelFile();
    }
  );

  const updateDisposable = vscode.commands.registerCommand(
    EXTENSION_COMMANDS.updateBarrel,
    async (uri: vscode.Uri) => {
      await updateBarrelFile(uri);
    }
  );

  context.subscriptions.push(createDisposable);
  context.subscriptions.push(updateDisposable);
}

export function deactivate() {}
