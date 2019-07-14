const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

// production  development
module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: './src/index.js',
  output: {
    filename: '[name].bundle.js',
    path: __dirname + '/dist'
    // publicPath: './'
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: 'vendor'
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,

        use: [
          {
            loader: 'html-loader'
            // options: {
            // minimize: true,
            // removeComments: true,
            // collapseWhitespace: true
            // }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({ template: './src/index.html' }),
    new CopyPlugin(
      [
        { from: __dirname + '/src/manifest.json', to: __dirname + '/dist' },
        { from: __dirname + '/src/assets', to: __dirname + '/dist/assets' },
        { from: __dirname + '/src/background.js', to: __dirname + '/dist' },
        { from: __dirname + '/src/selector.js', to: __dirname + '/dist' },
        { from: __dirname + '/src/content.js', to: __dirname + '/dist' },
        { from: __dirname + '/src/content.css', to: __dirname + '/dist' }
      ],
      { copyUnmodified: true }
    ),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ]
};
