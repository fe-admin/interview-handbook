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
              title: "语言基础",
              collapsable: false,
              children: ["1", "2", "3"],
            },
            {
              title: "网络基础",
              collapsable: false,
              children: ["1", "2", "3"],
            },
            {
              title: "基本问题",
              collapsable: false,
              children: ["3000"],
            },
          ],
        },
        {
          title: "深入",
          collapsable: false,
          children: ["g2"],
        },
      ],
      // "/css/": [
      //   {
      //     title: "CSS基础",
      //     collapsable: false,
      //     children: [
      //       {
      //         title: "flex",
      //         collapsable: false,
      //         children: [
      //           ["first", "介绍"],
      //           ["layout", "布局"],
      //         ],
      //       },
      //       {
      //         title: "guild",
      //         collapsable: false,
      //         children: [
      //           ["first", "介绍"],
      //           ["layout", "布局"],
      //         ],
      //       },
      //     ],
      //   },
      //   {
      //     title: "CSS深入",
      //     collapsable: false,
      //     children: ["g2"],
      //   },
      // ],
      "/donate/": [
        {
          title: "配置",
        },
      ],
    },
    nav: [
      { text: "JS面试", link: "/js/1" },
      // { text: "CSS面试", link: "/css/first" },
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
  plugins: ["@vuepress/nprogress", ["demo-code"]],
};
