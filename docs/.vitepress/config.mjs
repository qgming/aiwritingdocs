import { defineConfig } from "vitepress";

export default defineConfig({
  title: "神笔写作",
  description: "AI 辅助小说创作软件使用指南",
  lang: "zh-CN",
  ignoreDeadLinks: true,

  themeConfig: {
    logo: "/logo.png",
    nav: [
      { text: "首页", link: "/" },
      { text: "指南", link: "/guide/getting-started" },
      { text: "更新日志", link: "/guide/update" },
    ],

    sidebar: {
      "/guide/": [
        {
          text: "指南",
          items: [
            { text: "什么是 神笔写作？", link: "/guide/what-is-the-app" },
            { text: "快速开始", link: "/guide/getting-started" },
            { text: "软件配置", link: "/guide/app-setting" },
          ],
        },
        {
          text: "写作",
          items: [
            { text: "开始写作", link: "/guide/start-writing" },
            { text: "正文编辑", link: "/guide/editor-writing" },
            { text: "知识图谱", link: "/guide/knowledgegraph" },
            { text: "提示词", link: "/guide/prompt" },
            { text: "实用工具", link: "/guide/tools" },
          ],
        },
      ],
    },

    footer: {
      message: "神笔写作",
      copyright: "Copyright © 2025 极点维度",
    },
  },
});
