/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  title: 'EddyChang 技術部落格',
  tagline: 'JavaScript, React, App技術開發心得、教學與筆記',
  url: 'https://eddychang.me',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'GOK', // Usually your GitHub org/user name.
  projectName: 'eddychang.me', // Usually your repo name.
  themeConfig: {
    prism: {
      defaultLanguage: 'javascript',
      theme: require('prism-react-renderer/themes/palenight'),
    },
    navbar: {
      title: 'EddyChang 技術部落格',
      logo: {
        alt: 'Logo',
        src: 'img/react-maid-cb2.png',
      },
      links: [
        { to: 'docs/doc3', label: 'React教學', position: 'right' },
        { to: 'docs/doc1', label: 'ES6+教學', position: 'right' },
        { to: 'docs/doc2', label: 'Promise教學', position: 'right' },
        {
          to: 'about',
          label: '關於',
          position: 'right',
        },
        {
          href: 'https://github.com/eyesofkids',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Docs',
              to: 'docs/doc1',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
          ],
        },
      ],
      logo: {
        alt: '創用 CC 姓名標示-相同方式分享 4.0 國際 授權條款授權',
        src: 'https://i.creativecommons.org/l/by-sa/4.0/88x31.png',
        href: 'http://creativecommons.org/licenses/by-sa/4.0/',
      },
      copyright: `Copyright © ${new Date().getFullYear()} EddyChang`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',

      {
        blog: {
          path: './blog',
          routeBasePath: '/', // Set this value to '/'.
        },
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
          fontCss: require.resolve('./src/css/hack.css'),
        },
      },
    ],
  ],
}
