module.exports = {
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: [{
        loader: 'babel-loader', options: {
          presets: ['@babel/preset-env']
        }
      }]
    }, {
      test: /\.tsx?$/,
      loader: 'ts-loader'
    }]
  }
}
