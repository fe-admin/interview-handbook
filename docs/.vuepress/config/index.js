module.exports = {
  default: {
    base: "/interview/",
    head: [["link", { rel: "icon", href: "/logo.png" }]],
    title: "fe-admin",
    configureWebpack: (config) => {
      // config.output.publicPath = "/docs/";
    },
    plugins: ["@vuepress/nprogress", ["demo-code"]],
  },
  theme: {
    smoothScroll: true,
    logo: "/nav.png",
    nav: [
      { text: "JS", link: "/js/1" },
      { text: "HTML/CSS", link: "/hc/1" },
      { text: "捐赠", link: "/donate/" },
      {
        text: "GitHub",
        link: "https://github.com/fe-admin/interview-handbook",
      },
    ],
  },
};
