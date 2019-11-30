module.exports = function({ config }) {
  config.module.rules.push({
    test: /\.story\.js$/,
    loaders: [require.resolve('@storybook/source-loader')],
    enforce: 'pre',
  });
 
  return config;
};