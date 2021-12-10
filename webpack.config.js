const path = require('path');

module.exports = {
  mode: 'development',
  entry: './Public/js/df.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
