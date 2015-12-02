'use strict';

const app = require('app');  
const BrowserWindow = require('browser-window');  
let currentURL = 'file://' + __dirname + '/index.html';

require('crash-reporter').start();

let mainWindow = null;

app.on('window-all-closed', () => {  
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', () => {  
  mainWindow = new BrowserWindow({width: 800, height: 600});
  mainWindow.loadUrl(currentURL);

  // デベロッパーツールを表示
  mainWindow.toggleDevTools();

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
});