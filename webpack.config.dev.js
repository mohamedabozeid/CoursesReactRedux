const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

process.env.NODE_ENV = "development"; // import for babel to know that we are working on dev mode

module.exports = {
  mode: "development",
  target: "web",
  devtool: "cheap-module-source-map", // to be able to see your code inside browser
  entry: "./src/index",
  output: {
    //webpack does not generate files in dev mode, but it give the path to read it from memory
    path: path.resolve(__dirname, "build"),
    publicPath: "/",
    filename: "bundle.js" // again, not files will be generated in dev mode, but important to reference that in html, so that webpack can serve it
  },
  devServer: {
    // use dev sever locally instead of using express
    stats: "minimal", // minimal information in terminal
    overlay: true,
    historyApiFallback: true, //all requests will map to index.html
    disableHostCheck: true,
    headers: { "Access-Control-Allow-Origin": "*" }, // cross site scripting
    https: false
  },
  plugins: [
    new HtmlWebpackPlugin({
      // html
      template: "src/index.html",
      favicon: "src/favicon.ico"
    })
  ],
  module: {
    rules: [
      // how to deal with js
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader", "eslint-loader"] // lint will help to detect error while you write the code.
        //if you specify lint then it needs configuration, you can add it to package.json
      },
      {
        //how to deal with css, you can replace it with sass loader
        test: /(\.css)$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};
