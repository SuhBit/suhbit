const
  path              = require('path'),
  manifest          = require('../manifest'),
  HtmlWebpackPlugin = require('html-webpack-plugin');

const titles = {
  'index': 'Dashboard',
  'blank': 'Blank',
  'calendar': 'Calendar',
  'charts': 'Charts',
  'chat': 'Chat',
  'datatable': 'Datatable',
  'signin': 'Signin',
  'signup': 'Signup',
  '404': '404',
  '500': '500',
  'basic-table': 'Basic Table',
  'test': 'Test',
};

module.exports = Object.keys(titles).map(title => {
  return new HtmlWebpackPlugin({
    template: path.join(manifest.paths.src, `${title}.html`),
    path: manifest.paths.build,
    filename: `${title}.html`,
    inject: true,
    minify: {
      collapseWhitespace: true,
      minifyCSS: true,
      minifyJS: true,
      removeComments: true,
      useShortDoctype: true,
    },
  });
});
