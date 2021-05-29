const { app, BrowserWindow, Menu } = require("electron");

const path = require('path')

const isMacOS = process.platform === 'darwin';
const isWin = process.platform === 'win32';
const isLinux = process.platform === 'linux';

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    }
  });

  win.loadFile("index.html");
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", function () {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });

  const mainMenu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(mainMenu);
});

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

//Menu template
const template = [
  // { role: 'appMenu' }
  ...(isMacOS ? [{
    label: app.name,
    submenu: [
      { role: 'about' },
      { role: 'quit' }
    ]
  }] : []),
  // { role: 'fileMenu' }
  {
    label: 'File',
    submenu: [
      {
        label: 'Clear Canvas'
      },
      {
        label: 'Export Canvas'
      }
    ]
  },
  // { role: 'editMenu' }
  {
    label: 'Edit',
    submenu: [
      {
        label: 'Colored Noise'
      },
      {
        label: 'Black & White Noise'
      },
      {
        label: 'Blended Noise'
      },
      {
        type: 'separator'
      },
      {
        label: 'Black & White Gradient'
      },
      {
        label: 'Red & Blue Gradient'
      },
      {
        type: 'separator'
      },
      {
        label: 'Saw Pattern'
      },
      {
        label: 'Dotted Pattern'
      },
      {
        label: 'Checkered Pattern'
      },
      {
        type: 'separator'
      },
      {
        label: 'Fill'
      },
      {
        type: 'separator'
      },
      {
        label: 'Use Brush'
      }
    ]
  },
  {
    role: 'help',
    submenu: [
      {
        label: 'Learn More about Noise-Art',
        click: async () => {
          const { shell } = require('electron')
          await shell.openExternal('https://github.com/RaffaelSchaefer/Noise-Art')
        }
      }
    ]
  }
];