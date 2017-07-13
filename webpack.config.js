var webpack = require('webpack');
var LiveReloadPlugin = require('webpack-livereload-plugin');

var config = [{
  devtool: 'cheap-source-map',
  plugins: [
  new LiveReloadPlugin({
    appendScriptTag : true
  }),
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  })
  ],
  context: __dirname + '/client/js', 
  entry: {
    app: './app.js',
  },
  output: {
    path: __dirname + '/client/js', // `dist` is the destination
    filename: '[name].bundle.js',
  },
  module: {
    rules: [

    {
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ["babel-loader"],
    },
    {
      test: /\.(sass|scss)$/, //Check for sass or scss file names
      exclude: /node_modules/,
      use: [
      'style-loader',
      'css-loader',
      'sass-loader',
      ]
    }

    ]
  }
}];

module.exports = config;