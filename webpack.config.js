const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const fs = require('fs');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const pagesPath = path.resolve(__dirname, 'src/pages/')
const pages = fs.readdirSync(pagesPath);

module.exports = {
  entry: './src/entry.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    alias: {
      '@core': path.resolve(__dirname, 'src/core/'),
      '@assets': path.resolve(__dirname, 'src/assets/'),
      '@pages': path.resolve(__dirname, 'src/pages/'),
      '@components': path.resolve(__dirname, 'src/components/')
    }
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [
                  require('autoprefixer')({ overrideBrowserslist: "last 5 versions" })
                ];
              }
            }
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.svg$/,
        use: [
          'svg-sprite-loader',
          {
            loader: 'svgo-loader',
            options: {
              plugins: [
                { removeNonInheritableGroupAttrs: true },
                { collapseGroups: true },
                // { removeAttrs: { attrs: '(fill|stroke|fill-opacity)' } },
              ],
            }
          }
        ]
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader'
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: 'file-loader',
        options: {
          name: 'assets/fonts/[name].[ext]'
        }
      },
    ],
  },
  plugins: [
    ...pages.map(page =>
      new HtmlWebpackPlugin({
        template: `${pagesPath}/${page}/${page}.pug`,
        filename: `${page}.html`
      })
    ),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
}