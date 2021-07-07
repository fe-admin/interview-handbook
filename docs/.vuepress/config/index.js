function children(prefix, num) {
  const map = [];
  for (let i = 1; i < num + 1; i++) {
    map.push(`${prefix ? prefix + i : i}`);
  }
  return map;
}
module.exports = {
  defaults: {
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
      { text: "HTML/CSS", link: "/hc/1" },
      { text: "JS", link: "/js/1" },
      { text: "Vue", link: "/vue/1" },
      { text: "捐赠", link: "/donate/" },
      {
        text: "GitHub",
        link: "https://github.com/fe-admin/interview-handbook",
      },
    ],
  },

  render(list) {
    const result = [];
    list.forEach(([title, arr]) => {
      result.push({
        title,
        collapsable: false,
        children: children(...arr),
      });
    });
    return result;
  },
};
