const webpack = require('webpack');
const { resolve } = require('path');

module.exports = (baseConfig, env, defaultConfig) => {

  return {
    ...defaultConfig,
    plugins: [
      ...(defaultConfig.plugins || []),
      new webpack.ContextReplacementPlugin(
        /\@angular(\\|\/)core(\\|\/)esm5/,
        resolve(__dirname, "./src")
      ),
    ]
  };
};
