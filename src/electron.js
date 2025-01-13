const { app, BrowserWindow } = require('electron');
const { spawn } = require('child_process');
const path = require('path');

// Run React from local web server (development) or static build (!development)
let development = false;

// Window creation/options
let mainWindow;
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  // Open the React frontend in Electron
  if (development) {
    mainWindow.loadURL("http://localhost:3000");
  } else {
    mainWindow.loadFile(path.join(__dirname, '..', 'build', 'index.html'));
  }

  // Spawn the Flask server
  const flaskPath = path.join(__dirname, 'dist', 'api.exe');
  const flaskApp = spawn(flaskPath, [], {
    stdio: 'inherit',
  });
  flaskApp.on('error', (err) => {
    console.error('Failed to start Flask server:', err);
  });
  flaskApp.on('exit', (code) => {
    console.log(`Flask server exited with code ${code}`);
  });

  // Boilerplate Electron startup
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}
app.whenReady().then(() => {
  createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});