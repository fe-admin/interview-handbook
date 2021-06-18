const path = require("path");
module.exports = {
  base: "/interview/",
  head: [["link", { rel: "icon", href: "/logo.png" }]],
  title: "fe-admin", // Title for the site. This will be displayed in the navbar.
  themeConfig: {
    smoothScroll: true,
    logo: "/nav.png",
    sidebar: {
      "/js/": [
        {
          title: "基础",
          collapsable: false,
          children: [
            {
              title: "flex",
              collapsable: false,
              children: [
                ["first", "介绍"],
                ["layout", "布局"],
              ],
            },
            {
              title: "guild",
              collapsable: false,
              children: [
                ["first", "介绍"],
                ["layout", "布局"],
              ],
            },
          ],
        },
        {
          title: "CSS深入",
          collapsable: false,
          children: ["g2"],
        },
      ],
      "/css/": [
        {
          title: "CSS基础",
          collapsable: false,
          children: [
            {
              title: "flex",
              collapsable: false,
              children: [
                ["first", "介绍"],
                ["layout", "布局"],
              ],
            },
            {
              title: "guild",
              collapsable: false,
              children: [
                ["first", "介绍"],
                ["layout", "布局"],
              ],
            },
          ],
        },
        {
          title: "CSS深入",
          collapsable: false,
          children: ["g2"],
        },
      ],
      "/donate/": [
        {
          title: "配置",
        },
      ],
    },
    nav: [
      { text: "JS面试", link: "/js/first" },
      { text: "CSS面试", link: "/css/first" },
      { text: "捐赠", link: "/donate/" },
      {
        text: "GitHub",
        link: "https://github.com/fe-admin/interview-handbook",
      },
    ],
  },
  configureWebpack: (config) => {
    // config.output.publicPath = "/docs/";
  },
  plugins: ["@vuepress/nprogress"],
};
