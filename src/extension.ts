import * as vscode from "vscode";
import { createBarrelFile } from "./business";

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand(
    "autobarrel.createBarrel",
    async () => {
      await createBarrelFile();
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
