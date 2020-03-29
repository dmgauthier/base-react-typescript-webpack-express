const path = require("path"),
  express = require("express"),
  webpack = require("webpack"),
  webpackConfig = require("./webpack.config.js"),
  expressApp = express(),
  port = process.env.PORT || 7500;
expressApp.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
expressApp.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "dist", "index.html"));
});
let compiler = webpack(webpackConfig);
expressApp.use(
  require("webpack-dev-middleware")(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
    stats: { colors: true }
  })
);
expressApp.use(require("webpack-hot-middleware")(compiler));
expressApp.use(express.static(path.resolve(__dirname, "dist")));
