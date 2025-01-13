module.exports = {
  packagerConfig: {
    icon: './icon.ico', // Path to your app's icon, without extension (will support .ico on Windows and .icns on macOS)
  },
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        name: 'grit',  // This should be the name of your app
        exe: 'grit.exe', // Executable file name for Windows
        setupExe: 'grit_install.exe', // Installer executable name
        setupIcon: './icon.ico', // Icon for the installer (optional)
        authors: 'Noah Braue', // The author's name or company name
        description: 'Generated RTAC Import Tool', // Optional: A description of your app
        version: '1.0.0', // Version of the app
        noMsi: true, // Prevents the creation of the .msi file
      }
    },
    {
      name: '@electron-forge/maker-zip',
      config: {
        platform: 'win32', // Can be 'win32', 'darwin', or 'linux'
      },
    },
  ],
};
