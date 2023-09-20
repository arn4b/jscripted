// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// /** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'JScripted',
  tagline: 'JavaScript simplified to the bare minimum for acing your Frontend Interviews.',
  url: 'https://jscripted.vercel.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.svg',
  organizationName: 'arn4b', // Usually your GitHub org/user name.
  projectName: 'jscripted', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/arn4b/jscripted/tree/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/arn4b/jscripted/tree/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-N00B3QEC13',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'JScripted',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [{
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'JavaScript',
          },
          {
            type: 'docSidebar',
            sidebarId: 'challengeSidebar',
            position: 'left',
            label: 'UI Challenges',
          },
          {
            type: 'docSidebar',
            sidebarId: 'reactSidebar',
            position: 'left',
            label: 'React',
          },
          // {
          //   to: '/blog',
          //   label: 'Blog',
          //   position: 'left'
          // },
          {
            href: 'https://github.com/arn4b/jscripted',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://arn4b.notion.site/UI-Challenges-8e27a0fd6797402bb8235a285eead144',
            position: 'left',
            label: "Quick Revision",
            'aria-label': 'Quick Revision',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'About',
            items: [{
                label: 'About Me',
                href: 'https://arn4b.tech',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/_arn4b_',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/arn4b',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} JScripted. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'THN8PNBPVL',
  
        // Public API key: it is safe to commit it
        apiKey: '7551fff714227e2a7ecdb0c2222a8dad',
  
        indexName: 'YOUR_INDEX_NAME',
      },
    }),
};

module.exports = config;