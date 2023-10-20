import DefaultTheme from "vitepress/theme";
import "./tailwind.css";
import "./var.css";
import "./article.css";
import "./print.css";
import "./index.css"; /* 设计html 相关标签的全局样式 */

import LinkCard from "../components/LinkCard.vue";
import WarnBlock from "../components/warnBlock.vue";

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    ctx.app.component("LinkCard", LinkCard);
    ctx.app.component("WarnBlock", WarnBlock);
 
  },
};