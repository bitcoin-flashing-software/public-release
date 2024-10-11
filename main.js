const { app, Menu } = require("electron");

app.whenReady().then(() => {
  
  const window = require("./src/window");
  mainWindow = window.createBrowserWindow(app);

  mainWindow.loadURL("https://web.coinflashr.com");
  const menu = Menu.buildFromTemplate([]);
  Menu.setApplicationMenu(menu);

});


app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
