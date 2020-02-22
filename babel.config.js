/* eslint-env commonjs */
module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./"],
        extensions: [
          ".js",
        ],
        alias: {
          Screens: "./app/screens",
          Api: "./app/api",
        },
      },
    ],
  ],
}
