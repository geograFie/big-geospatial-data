// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

// define config object
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Big Geospatial Data',
  tagline: 'Extensive collection of resources for working with Big Geospatial Data',

  // GitHub pages deployment config
  organizationName: 'geograFie', // GitHub org/user name
  projectName: 'big-geospatial-data', // GitHub repo name
  url: 'https://geograFie.github.io', // site production url
  baseUrl: '/big-geospatial-data/', // site pathname; /<projectName>/
  deploymentBranch: 'gh-pages', // explicitly set deployment branch
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // set useful metadata like html lang
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      // classic preset
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        // docs configuration
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
        },
        blog: false,

        // theme configuration
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // navigation bar configuration
      navbar: {
        title: 'Big Geospatial Data',
        logo: {
          alt: 'Big Geospatial Data Logo',
          src: 'imgs/custom_map_vector_points.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            label: 'Tutorial',
            position: 'left',
          },
          {
            href: 'https://github.com/geograFie/big-geospatial-data',
            // label: 'GitHub',
            position: 'right',
            html: '<i class="fa fa-github fa-lg"></i>', // Add GitHub icon
            // html: '<i class="fa fa-github fa-lg"></i>', // Add GitHub icon
            // icon: faGithub,
            // add github icon to link
          },
        ],
      },

      // footer configuration
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [],
          },
          {
            title: 'Community',
            items: [],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/geograFie/big-geospatial-data',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Foo Bar.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;

