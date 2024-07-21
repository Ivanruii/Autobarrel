# AutoBarrel VSCode Extension

**AutoBarrel** is a Visual Studio Code extension that simplifies the creation of barrel files (`index.ts` or `index.js`) in your TypeScript or JavaScript projects. A barrel file centralizes exports from a directory, making imports easier and cleaner in other files.

## ✨ Features

- **Automatic Barrel File Creation**: Creates an `index.ts` or `index.js` file in the selected directory, automatically exporting all modules within that directory.
- **Subdirectory Support**: Detects and handles subdirectories, exporting only the index (`index.ts` or `index.js`) of directories that contain it.
- **Customizable Settings**:
  - **File Extension**: Choose whether to generate barrel files with a `.ts` or `.js` extension.
  - **Remove File Extension**: Configure whether to remove the file extension from exported files in the barrel file.

## 🔧 Installation

1. Open Visual Studio Code.
2. Go to the Extensions view (square icon in the sidebar).
3. Search for [AutoBarrel](https://marketplace.visualstudio.com/items?itemName=Ivanruii.autobarrel&ssr=false#qna) and install it.
4. Restart Visual Studio Code if necessary.

## 🚀 Usage

1. Open the Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P` on macOS).
2. Type `Create Barrel` and run it.
3. Select the directory where you want to create the barrel file.
4. The extension will create an `index.ts` or `index.js` file in the selected directory, automatically exporting all modules in that directory.

## ⚙️ Configuration

You can customize the extension's behavior through VSCode settings. Go to `File > Preferences > Settings` (or `Code > Preferences > Settings` on macOS) and search for `AutoBarrel`.

### Configuration Options

- **Remove File Extension** (`autobarrel.removeExtension`): Removes the file extension in export statements.
  - Type: `boolean`
  - Default: `true`
- **Use JavaScript** (`autobarrel.useJavaScript`): Use `.js` extension instead of `.ts` for barrel files.
  - Type: `boolean`
  - Default: `false`

### Example Configuration

```json
{
  "autobarrel.removeExtension": true,
  "autobarrel.useJavaScript": false
}
```

## ⏰ Changelog

Take a look at the [changelog of the extension](./CHANGELOG.md).

## 🤝 Contributing

Contributions are welcome! Feel free to create issues and Pull Requests.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
