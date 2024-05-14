import path from "path";
const outputDirectory = "dist";

export default {
  entry: ["babel-polyfill", "./src/client/index.js"],
  output: {
    //path: path.join(__dirname, outputDirectory),
    
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        use: {
          loader: "url-loader",
          options: { limit: 100000 },
        },
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: "file-loader",
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  devServer: {
    static: "/",
    historyApiFallback: true,
    port: 1080,
    open: true,
    proxy: {
      "/api": `http://localhost:${process.env.API_PORT}`,
    },
  },
  node: {
    global: false,
    __filename: false,
    __dirname: false,
  },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     template: "./public/index.html",
  //     favicon: "./public/favicon.ico",
  //   }),
  //   new CaseSensitivePathsPlugin(),
  //   new Dotenv({
  //     safe: false,
  //   }),
  // ],
};
