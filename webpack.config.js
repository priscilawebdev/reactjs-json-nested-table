const path = require('path')
const webpack = require('webpack')

module.exports = {
  context: __dirname,
  entry: './src/App.js',
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js',
    publicPath: './public/'
  },
  devServer: {
    publicPath: './public/',
    historyApiFallback: true
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx']
  },
  node: {
    fs: 'empty'
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true,
    errorDetails: true
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        include: path.resolve(__dirname, 'src'),
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        query:
        {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: false
            }
          }
        ]
      },
      {
        test: /\.sass$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }, {
          loader: 'sass-loader',
          options: {
            sourceMap: true
          }
        }]
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      },
      {
        test: /\react.js$/,
        loader: 'webpack-bem-loader',
        options: {
          naming: 'react',
          levels: path.resolve(__dirname, 'src'),
          techs: ['js', 'css'],
          techMap: {
            js: ['react.js']
          },
          langs: ['en']
        }
      }
    ]
  }
}
