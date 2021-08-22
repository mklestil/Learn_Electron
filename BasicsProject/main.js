//load electron
const { app, BrowserWindow } = require('electron')

// create window
function createWindow(){
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    })

    win.loadFile('index.html')
}
// app wide, create window
app.whenReady().then(createWindow)

// listener, all windows closed, exit app 
app.on('window-all-closed', () => {
    app.quit
})

// listener, if the app run but no window, create window
app.on('activate', () => {
    if (BrowserWindow.getAllWindows.length === 0){
        createWindow()
    }
})
