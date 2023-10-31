import { defineConfig } from "vitepress";
import { fileURLToPath, URL } from "node:url";
import { getSidebar } from "./utils/getSidebar";
export default defineConfig({
  title: "wzyll's Blog",
  titleTemplate: "wzyll",
  // md 文件根目录
  srcDir: "./src",
  lastUpdated: true,
  // 添加这一行来启用 mathjax 支持
  markdown: {
    math: true,
   },
  description:
    "",
  head: [["link", { rel: "icon", href: "/logo.svg" }]],
  themeConfig: {
    logo: "/logo.svg",
    // 顶部导航栏
    nav: [
      { text: "👋 About", link: "AboutMe.md" },
      { text: "💭 Blogs", link: "/Notes/index" },
      { text: "🦄 Projects", link: "Projects.md" },
     
    ],
    // 文章页面左侧导航
    sidebar: {
      "/Notes/": getSidebar(),
    },
    // 是否启动搜索功能
    search: {
      provider: "local",
    },
    // 顶部导航栏左侧的社交平台跳转
    socialLinks: [{ icon: "github", link: "hhttps://github.com/w1z1y123" }],
    // 首页底部版权声明
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2023-present wzyll",
    },
    // 文章内导航栏标题
    outlineTitle: "导航栏",
  },
  vite: {
    resolve: {
      alias: [
        {
          find: /^.*\/VPDocFooterLastUpdated\.vue$/,
          replacement: fileURLToPath(
            new URL("./components/UpdateTime.vue", import.meta.url)
          ),
        },
      ],
    },
  },
});
