import { readdirSync } from "fs";
import matter from "gray-matter";

// 笔记顶级分类
export const COLS = [
  { text: "🔮 随想杂文", link: "/Thoughts/" },
  { text:"操作系统",  link:"/操作系统/"},
  {text:"计算机网络编程",link:"/计算机网络编程/"}
];

/**
 * ! 各分类只对应单一文件夹，不考虑多级目录、混合目录的情况
 * @description 根据 `COLS` 生成侧边导航（二级）
 * @returns {Object} sidebar
 */
export const getSidebar = () => {
  const INDEX_FILE = "index";
  const sidebarData = COLS.map(({ link, text }) => {
    const dir = `./docs/src/Notes${link}`;
    const files = readdirSync(dir) || [];
    let colFiles = {
      text,
      link: `/Notes${link}`,
      collapsed: true,
      items: files
        .map((file) => {
          const path = `${dir}${file}`;
          const filename = file.replace(/\.md$/, "");
          // 剔除非md文件
          if (file === filename)
            return { text: "Not md File", link: "Error Link" };
          const filepath = `/Notes${link}${filename}`;
          const { data = {} } = matter.read(path) || {};
          return {
            ...data,
            text: data.title || filename,
            link: filepath,
          };
        })
        .filter(
          ({ text, link }) =>
            text !== "Not md File" && link.indexOf(INDEX_FILE) === -1
        )
        .sort((a, b) => {
          const av = a["updateTime"] ? new Date(a["updateTime"]).valueOf() : 0;
          const bv = b["updateTime"] ? new Date(b["updateTime"]).valueOf() : 0;
          return bv - av;
        }),
    };
    return colFiles;
  });
  return sidebarData;
};
