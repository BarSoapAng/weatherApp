const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  closeWindow: () => ipcRenderer.send('close-window'), // Expose closeWindow method
  requireModule: (moduleName) => require(moduleName),  // Expose require for specific modules if needed
});