const {join} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    join(__dirname, 'views/index.js'),
  ],
  output: {
    path: join(__dirname, 'build'),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './views/index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        include: join(__dirname, 'views'),
        use: [{
          loader: 'babel-loader',
          options: {
            babelrc: false,
            presets: ['env', 'react'],
          },
        }],
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ],
      },
    ],
  },
};
