import { defineConfig } from "vitepress";

const ogDescription =
  "Fast prototyping with template engines and integrated frontend tools";
const ogImage = "https://vituum.dev/og-image.png";
const ogTitle = "ProjectDiscovery";
const ogUrl = "https://projectidscovery.io";

export default defineConfig({
  title: `ProjectDiscovery`,
  description:
    "Fast prototyping with template engines and integrated frontend tools",

  head: [
    ["link", { rel: "icon", type: "image/svg+xml", href: "/logo.svg" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:title", content: ogTitle }],
    ["meta", { property: "og:image", content: ogImage }],
    ["meta", { property: "og:url", content: ogUrl }],
    ["meta", { property: "og:description", content: ogDescription }],
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    ["meta", { name: "twitter:site", content: "@newlogicdigital" }],
    ["meta", { name: "theme-color", content: "#2d55ff" }],
  ],

  vue: {
    reactivityTransform: true,
  },

  themeConfig: {
    logo: "/logo.svg",

    editLink: {
      pattern: "https://github.com/vituum/docs/edit/main/docs/:path",
      text: "Suggest changes to this page",
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/vituum/vituum" },
      { icon: "twitter", link: "https://twitter.com/vituum_dev" },
    ],

    algolia: {
      appId: "VB79JXJIAA",
      apiKey: "a7c609cdca4e22d1249ab92a68d1d5ed",
      indexName: "vituum",
    },

    footer: {
      message: `Released under the MIT License.`,
      copyright:
        "Copyright © 2022-present lubomirblazek.cz, newlogic.cz & Vituum Contributors",
    },

    nav: [
      { text: "Nuclei", link: "/nuclei/", activeMatch: "/nuclei/" },
      { text: "LFIC", link: "/lfic/", activeMatch: "/lfic/" },
      {
        text: "Other tools",
        items: [
          {
            items: [
              {
                text: "Vite",
                link: "https://vitejs.dev",
              },
              {
                text: "Changelog",
                link: "https://github.com/vituum/vituum/blob/main/CHANGELOG.md",
              },
            ],
          },
        ],
      },
    ],

    sidebar: {
      "/nuclei/": [
        {
          text: "Nuclei",
          items: [
            {
              text: "Getting Started",
              link: "/nuclei/",
            },
            {
              text: "Features",
              link: "/nuclei/features",
            },
            {
              text: "Template engines",
              link: "/nuclei/template-engines",
            },
            {
              text: "Integrations",
              link: "/nuclei/integrations",
            },
          ],
        },
      ],
      "/lfic/": [
        {
          text: "LFIC",
          items: [
            {
              text: "Getting started",
              link: "/lfic/",
            },
            {
              text: "Main",
              link: "/lfic/main-options",
            },
            {
              text: "Integrations",
              link: "/lfic/integrations-options",
            },
          ],
        },
      ],
    },
  },
});
