var path = require('path');


module.exports = {
  entry: {
    app: [
      './src/index.js',
    ],
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },

      {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: 'file-loader?name=[name].[ext]',
      },

      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [{
            loader: 'style-loader',
          }, {
            loader: 'css-loader',
          }, {
            loader: 'sass-loader',
          }
        ]
      },
    ],
  },

  devtool: 'eval',

  devServer: {
    noInfo: true,
  }
};
