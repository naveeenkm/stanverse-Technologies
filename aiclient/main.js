// main.js (ES module)
import { app, BrowserWindow } from "electron";
import path from "path";
import { fileURLToPath } from "url";

// Fix __dirname and __filename in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  if (process.env.NODE_ENV === "development") {
    // Vite dev server
    win.loadURL("http://localhost:5173");
    win.webContents.openDevTools(); // helpful for debugging
  } else {
    // Load built React app
    const indexPath = path.join(__dirname, "dist", "index.html");
    win.loadFile(indexPath);
  }
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
