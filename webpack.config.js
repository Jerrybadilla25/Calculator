const path = require('path');

module.exports = {
  mode: 'development',
  entry: './Public/js/calc.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};