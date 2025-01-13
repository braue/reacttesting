import electronInstaller from 'electron-winstaller';

try {
    await electronInstaller.createWindowsInstaller({
      appDirectory: './GRIT-win32-x64',
      loadingGif: './loading.gif', // The local path to a .gif file to display during install
      exe: 'GRIT.exe', // The name of your app's main .exe file
      setupExe: 'GRIT_SETUP.exe', // The name to use for the generated Setup.exe file
      setupIcon: './icon.ico', // The ICO file to use as the icon for the generated Setup.exe
      iconUrl: './icon.ico', // ICO file to use as the application icon (displayed in Control Panel > Programs and Features)
      noMsi: true // Should Squirrel.Windows create an MSI installer?
    });
    console.log('It worked!');
  } catch (e) {
    console.log(`No dice: ${e.message}`);
  }