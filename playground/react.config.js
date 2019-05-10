'use strict';
module.exports = {
  // source of files
  source: './playground',
  // output path
  outputPath: 'dist',
  // port
  port: 8080,
  // hostname
  host: 'localhost',
  // all enviroments to be set in process.env
  nodeEnv: {
    comments: 'Comment from Node Enviroments'
  },
  // all enviroments to be set in HTMLWebpackPlugin
  // available in HTML thru <%= htmlWebpackPlugin.options.propertyName %>
  htmlEnv: {
    htmlComments: 'Comment from HTML Enviroment'
  },
};
