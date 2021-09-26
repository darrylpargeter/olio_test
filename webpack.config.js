const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  optimization: {
    usedExports: true,
  },
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'index.bundle.js',
  },
  devServer: {
    port: 8000,
    hot: true,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    /*
     *  Setting up a number of alias to advoid using relative paths within the files
     */
    alias: {
      "@containers": resolve(__dirname, './src/containers'),
      "@components": resolve(__dirname, './src/components'),
      "@hooks": resolve(__dirname, './src/hooks'),
      "@styles": resolve(__dirname, './src/styles'),
      "@utils": resolve(__dirname, './src/utils'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        },
      },
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          'css-loader', 
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          }
        ]
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
};
