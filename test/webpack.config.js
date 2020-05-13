const nodeExternals = require("webpack-node-externals");

module.exports = {
  target: "node",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  {
                    useBuiltIns: "usage",
                    corejs: { version: 3, proposals: false }
                  }
                ]
              ]
            }
          }
        ],
        exclude: /node_modules/
      }
    ]
  },
  externals: [nodeExternals()],
  devtool: process.env.NODE_ENV === "test" ? "source-map" : "eval"
};
