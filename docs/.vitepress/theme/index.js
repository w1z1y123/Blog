import DefaultTheme from "vitepress/theme";
import "./tailwind.css";
import "./var.css";
import "./article.css";
import "./print.css";


import LinkCard from "../components/LinkCard.vue";
import WarnBlock from "../components/warnBlock.vue";
import trueBlock from "../components/trueBlock.vue";

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    ctx.app.component("LinkCard", LinkCard);
    ctx.app.component("WarnBlock", WarnBlock);
    ctx.app.component("trueBlock", trueBlock);
 
  },
};