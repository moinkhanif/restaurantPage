/* eslint-disable import/no-unresolved */
const path = require('path');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageminWebP = require('imagemin-webp');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader',
        ],
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/img/'),
          to: path.resolve(__dirname, 'dist/img/[name].webp'),
        },
        {
          from: path.resolve(__dirname, 'src/img/'),
          to: path.resolve(__dirname, 'dist/img/'),
        },
      ],
    }),
    new ImageminPlugin({
      plugins: [ImageminWebP({ quality: 50 })],
    }),
  ],
};
