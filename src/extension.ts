import * as vscode from "vscode";
import { createBarrelFile, updateBarrelFile } from "./business";

export function activate(context: vscode.ExtensionContext) {
  let createDisposable = vscode.commands.registerCommand(
    "autobarrel.createBarrel",
    async () => {
      await createBarrelFile();
    }
  );

  let updateDisposable = vscode.commands.registerCommand(
    "autobarrel.updateBarrel",
    async (uri: vscode.Uri) => {
      await updateBarrelFile(uri);
    }
  );

  context.subscriptions.push(createDisposable);
  context.subscriptions.push(updateDisposable);
}

export function deactivate() {}
