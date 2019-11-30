// paths.js

// Paths will export some path variables that we'll
// use in other Webpack config and server files

const path = require("path");
const fs = require("fs");

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
  appDist: resolveApp("dist"), // Built files end up here
  appConfig: resolveApp("config"), // config files
  appSrc: resolveApp("src"), // source
  appComponents: resolveApp("src/components") // Components
};
