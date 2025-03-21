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
        hideOnScroll: false,
        // style: 'dark',
        items: [
          // left side
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            label: 'Library',
            position: 'left',
          },
          // right side
          {
            href: 'https://orcid.org/0009-0003-5707-4705',
            position: 'right',
            html: '<i class="fa-brands fa-orcid"></i>' // add icon
          },
          {
            href: 'https://www.linkedin.com/in/friedrich-roeseler-048396253',
            position: 'right',
            html: '<i class="fa-brands fa-linkedin"></i>' // add icon
          },
          {
            href: 'https://github.com/geograFie/big-geospatial-data',
            position: 'right',
            html: '<i class="fa-brands fa-github"></i>' // add GitHub icon
          },
        ],
      },

      // footer configuration
      footer: {
        style: 'dark',
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()} Friedrich Röseler. Licensed under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">CC BY 4.0</a>.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;

