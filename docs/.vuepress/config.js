const path = require('path');

const projectRoot = process.cwd();
const alias = path.resolve(projectRoot, 'src');

// See https://vuepress.github.io/en/plugins/typescript/
module.exports = {
  configureWebpack(config) {
    config.resolve.alias['@'] = alias;
  },
  plugins: [
    [
      'vuepress-plugin-typescript',
      {
        tsLoaderOptions: {},
      },
    ],
  ],
}
