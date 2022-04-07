import { defineConfig } from 'dumi';

const repo = 'LiteBot Docs';

export default defineConfig({
  locales: [
    ['zh-CN', '中文'],
    ['en-US', 'English'],
  ],
  title: repo,
  favicon: './images/favicon.ico',
  logo: './images/logo.png',
  outputPath: 'docs-dist',
  mode: 'site',
  hash: true,
  // Because of using GitHub Pages
  base: `/`,
  publicPath: `/`,
  navs: [
    null,
    {
      title: 'Gitee',
      path: 'https://gitee.com/litebot/litebot-core',
    },
  ],
  // more config: https://d.umijs.org/config
});
