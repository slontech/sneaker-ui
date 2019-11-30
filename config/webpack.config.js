const webpack = require("webpack");
const path = require("path");
const paths = require("./paths");


module.exports = {
  mode: "production",
  entry: "./src/components/index.js",
  output: {
    path: path.resolve(paths.appDist),
    filename: "index.js",
    libraryTarget: "commonjs2"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(paths.appSrc),
        exclude: /(node_modules|config|dist)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/react"]
          }
        }
      },
  
    ]
  },
  resolve: {
    modules: ["src", "node_modules"],
    extensions: [".js"]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    })
  ]
};
