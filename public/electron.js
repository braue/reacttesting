const { app, BrowserWindow } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
  // Create the browser window
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true, // Enable node integration for the app
      contextIsolation: false, // Disable context isolation (for convenience in this setup)
      //preload: path.join(__dirname, 'preload.js'), // Optionally, if you use preload.js
    },
  });

  //if (process.env.NODE_ENV === 'development') {
    // Load React app from the development server
    // mainWindow.loadURL('https://github.com'); // This is where your React app runs
  //} else {
    // In production, load the React app from the build folder
    // mainWindow.loadFile(path.join(__dirname, 'index.html'));
  //}

  mainWindow.loadURL('http://localhost:3000/')

  // Open the DevTools in development mode
  if (process.env.NODE_ENV === 'development') {
    mainWindow.webContents.openDevTools();
  }

  // Handle window close event
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

// This will be called when Electron has finished initialization
app.whenReady().then(() => {
  createWindow();

  // On macOS, it's common to re-create a window when the app is activated
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// Quit the app when all windows are closed (except on macOS)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
