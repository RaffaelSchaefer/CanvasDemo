"use strict";
const { app, BrowserWindow, Menu } = require("electron");
function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
    icon: __dirname + "img/app_icon/app_icon.icns",
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
  const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
  Menu.setApplicationMenu(mainMenu);
});
app.on("window-all-closed", function () {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
//Menu template
const mainMenuTemplate = [
  {
    label: "File",
    subMenu: [
      {
        label: "Export",
      },
      {
        label: "Quit",
        click() {
          app.quit;
        },
      },
    ],
  },
  {
    label: "Tools",
  },
];
