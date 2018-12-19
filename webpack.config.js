var path = require('path');

module.exports = {
  entry: './dom.js', // entry point for a project
  output: { // where to output the bundle
    path: path.resolve(__dirname),
    filename: 'bundle.js'
  },
  mode: 'development'//development or production
}
