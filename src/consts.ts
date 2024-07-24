const EXTENSION_ID = "autobarrel";

enum ExtensionCommands {
  CreateBarrel = "createBarrel",
  UpdateBarrel = "updateBarrel",
}

enum ExtensionConfigs {
  RemoveExtension = "removeExtension",
  UseJavaScript = "useJavaScript",
}

export const EXTENSION_COMMANDS = {
  [ExtensionCommands.CreateBarrel]: `${EXTENSION_ID}.${ExtensionCommands.CreateBarrel}`,
  [ExtensionCommands.UpdateBarrel]: `${EXTENSION_ID}.${ExtensionCommands.UpdateBarrel}`,
} as const;

export const EXTENSION_CONFIGS = {
  [ExtensionConfigs.RemoveExtension]: `${EXTENSION_ID}.${ExtensionConfigs.RemoveExtension}`,
  [ExtensionConfigs.UseJavaScript]: `${EXTENSION_ID}.${ExtensionConfigs.UseJavaScript}`,
} as const;

export const SUPPORTED_EXTENSIONS = [
  ".ts",
  ".tsx",
  ".js",
  ".jsx",
  ".astro",
  ".vue",
  ".svelte",
];
