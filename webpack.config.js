/* eslint-disable */
module.exports = {
  entry: "./client/react/index.jsx",
  output: {
    filename: "bundle.js",
    publicPath: '/'
  },
  resolve: {
       extensions: ['', '.js', '.jsx'],
       modulesDirectories: ["node_modules"]
  },
  devServer: {
    historyApiFallback: true
  },
  module:{
    loaders:[
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query:{
          presets: ['react', 'es2015', 'stage-1']
        }
      },
      {
        test: /\.css/,
        loaders: ['style', 'css'],
      },
      { test: /\.json$/, loader: 'json' }
    ]
  }


}
