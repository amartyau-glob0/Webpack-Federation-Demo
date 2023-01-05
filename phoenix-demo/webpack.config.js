// phoenix-demo/webpack.config.js
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { dependencies } = require("./package.json");

module.exports = {
  entry: "./src/index",
  mode: "development",
  devServer: {
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new ModuleFederationPlugin({
        name: "PhoenixDemo", // exposes app
        filename: "moduleEntry.js",
        exposes: {
            "./GloMessage": "./src/GloMessage",
        },
        remotes: { // consume federated modules
          Proposals: `Proposals@http://localhost:4000/moduleEntry.js`,
          ProjectBrief: `ProjectBrief@http://localhost:5000/moduleEntry.js`,
        },
        shared: { // share deps between modules
          ...dependencies, // de-dup deps between all modules
          react: {
            singleton: true, // only run one instance of react app and react dom app 
            requiredVersion: dependencies["react"],
          },
          "react-dom": {
            singleton: true,
            requiredVersion: dependencies["react-dom"],
          },
        },
      }),
  ],
  resolve: {
    extensions: [".js", ".jsx"],
  },
  target: "web",
};