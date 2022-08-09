const path = require('path');

const { app, BrowserWindow, Menu } = require('electron');
const isDev = require('electron-is-dev');


//creating a custom menu
const menuItems = [
  {
      label: app.name,
      submenu: [
          { role: 'about' },
          { type: 'separator' },
          { role: 'services' },
          { type: 'separator' },
          { role: 'hide' },
          { role: 'hideOthers' },
          { role: 'unhide' },
          { type: 'separator' },
          { role: 'quit' }
      ]
  },
  {
      label: 'Window',
      submenu: [
          { role: 'minimize' },
          { role: 'zoom' },
          { type: 'separator' },
          { role: 'close' }
      ]
    },
];

const menu = Menu.buildFromTemplate(menuItems);
Menu.setApplicationMenu(menu);

function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 1100,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  // and load the index.html of the app.
  // win.loadFile("index.html");
  win.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`
  );
  // Open the DevTools.
  if (isDev) {
    //open a developer tool in different window
    win.webContents.openDevTools({ mode: 'detach' });
  }
}

// this method will run when electron process is done and the window will be created
app.whenReady().then(createWindow);

// quit when all windows are close except MacOS because of default OS behaviour
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// run the app and open window when clicked on it without quiting the app
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});