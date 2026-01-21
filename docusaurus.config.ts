import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'MSYS DX Adapters',
  tagline: '',
  favicon: 'img/favicon.ico',

  url: 'https://msys-winactor.github.io',
  baseUrl: '/msys-dx-adapters-docs/',

  organizationName: 'msys-winactor',
  projectName: 'msys-dx-adapters-docs',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',

  markdown: {
    format: 'mdx',
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },

  presets: [
    [
      'classic',
      {
        docs: false,
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'wmc',
        path: 'docs-wmc',
        routeBasePath: 'wmc',
        sidebarPath: './sidebars-wmc.ts',
        editUrl: 'https://github.com/msys-winactor/msys-dx-adapters-docs/tree/main/',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'box',
        path: 'docs-box',
        routeBasePath: 'box',
        sidebarPath: './sidebars-box.ts',
        editUrl: 'https://github.com/msys-winactor/msys-dx-adapters-docs/tree/main/',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'kintone',
        path: 'docs-kintone',
        routeBasePath: 'kintone',
        sidebarPath: './sidebars-kintone.ts',
        editUrl: 'https://github.com/msys-winactor/msys-dx-adapters-docs/tree/main/',
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'MSYS DX Adapters',
      items: [
        {
          type: 'dropdown',
          label: '製品',
          position: 'left',
          items: [
            {
              label: 'WinActor for Manager on Cloud',
              to: '/wmc/intro',
            },
            {
              label: 'WinActor for Box',
              to: '/box/intro',
            },
            {
              label: 'WinActor for kintone',
              to: '/kintone/intro',
            },
          ],
        },
        {
          href: 'https://github.com/msys-winactor/msys-dx-adapters-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `© ${new Date().getFullYear()} MSYS DX Adapters`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
