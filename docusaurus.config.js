// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Manual Técnico HealTech',
  tagline: 'Guía completa para el uso y mantenimiento del sistema HealTech',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://healtech-docs.example.com', // Cambiar por tu dominio real
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'HealTech', // Nombre de tu organización
  projectName: 'manual-healtech', // Nombre del repositorio

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/healtech/manual-healtech/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themes: ['@docusaurus/theme-mermaid'], // Añadido aquí

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'HealTech',
        logo: {
          alt: 'HealTech Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            href: 'https://github.com/GerArg12/Healteach_RN',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Manual Técnico  ',
          },
          {
            type: 'docSidebar',
            sidebarId: 'manualUsuario',
            position: 'left',
            label: 'Manual de usuario',
          },
          
        ],
      },
      footer: {
        style: 'dark',
        links: [
          // {
          //   title: 'Documentación',
          //   items: [
          //     {
          //       label: 'Introducción',
          //       to: '/docs/intro',
          //     },
          //     {
          //       label: 'Guía de Usuario',
          //       to: '/docs/user-guide',
          //     },
          //     {
          //       label: 'API Reference',
          //       to: '/docs/api',
          //     },
          //   ],
          // },
          // {
          //   title: 'Comunidad',
          //   items: [
          //     {
          //       label: 'Foro de Discusión',
          //       href: 'https://forum.healtech.com',
          //     },
          //   ],
          // },
          // {
          //   title: 'Más',
          //   items: [
          //     {
          //       label: 'GitHub',
          //       href: 'https://github.com/healtech/manual-healtech',
          //     },
          //   ],
          // },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} HealTech.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
