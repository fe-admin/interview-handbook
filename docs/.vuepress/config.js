const { render, defaults, theme } = require("./config/index.js");

const js = [
  {
    title: "基础知识",
    collapsable: false,
    children: render([
      ["语言基础", [0, 5]], //[1-1000]
      ["网络基础", [1000, 7]], //[1001-1999]
      ["数据结构与算法", [2000, 1]], //[2000-2999]
    ]),
  },
  {
    title: "面试题目",
    collapsable: false,
    children: render([
      ["基础", [3000, 13]], ////[3000-3999]
      ["进阶", [4000, 1]], ////[4000-4999]
    ]),
  },
];
const hc = [
  {
    title: "CSS基础",
    collapsable: false,
    children: render([
      ["基础", [0, 4]], //[1-999]
    ]),
  },
  {
    title: "面试题目",
    collapsable: false,
    children: render([
      ["基础", [1000, 2]], //[1-999]
    ]),
  },
];
const vue = [
  {
    title: "基础",
    collapsable: false,
    children: render([
      ["基础", [0, 2]], //[1-999]
    ]),
  },
  {
    title: "面试题目",
    collapsable: false,
    children: render([
      ["基础", [1000, 2]], //[1-999]
    ]),
  },
];
module.exports = {
  ...defaults,
  themeConfig: {
    ...theme,
    sidebar: {
      "/js/": js,
      "/hc/": hc,
      "/vue/": vue,
      "/donate/": [
        {
          title: "配置",
        },
      ],
    },
  },
};
