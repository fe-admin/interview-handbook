const jsMap = [
  {
    语言基础: [0, 3], //[1-999]
    网络基础: [1000, 3], //[1000-1999]
    数据结构与算法: [2000, 1], //[2000-2999]
  },
];
const js = [
  {
    title: "基础知识",
    collapsable: false,
    children: [
      {
        title: "语言基础", //[1-999]
        collapsable: false,
        children: children(0, 3),
      },
      {
        title: "网络基础", //[1000-1999]
        collapsable: false,
        children: children(1000, 3),
      },
      {
        title: "数据结构与算法",
        collapsable: false, //[2000-2999]
        children: children(2000, 1),
      },
    ],
  },
  {
    title: "面试题目",
    collapsable: false,
    children: [
      {
        title: "基础", //[3000-3999]
        collapsable: false,
        children: children(3000, 4),
      },
      {
        title: "进阶", //[4000-4999]
        collapsable: false,
        children: children(4000, 1),
      },
    ],
  },
];
const hc = [
  {
    title: "CSS基础",
    collapsable: false,
    children: [
      {
        title: "flex",
        collapsable: false,
        children: children(0, 1),
      },
      {
        title: "guild",
        collapsable: false,
        children: children(1000, 2),
      },
    ],
  },
  {
    title: "CSS深入",
    collapsable: false,
    children: children(1000, 2),
  },
];
const config = require("./config/index.js");
module.exports = {
  ...config.default,
  themeConfig: {
    ...config.theme,
    sidebar: {
      "/js/": js,
      "/hc/": hc,
      "/donate/": [
        {
          title: "配置",
        },
      ],
    },
  },
};

function children(prefix, num) {
  const map = [];
  for (let i = 1; i < num + 1; i++) {
    map.push(`${prefix ? prefix + i : i}`);
  }
  return map;
}
