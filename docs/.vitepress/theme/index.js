import DefaultTheme from "vitepress/theme";

import { ElPopover, ElButton } from 'element-plus';
import "./tailwind.css";
import "./var.css";
import "./article.css";
import "./print.css";




import LinkCard from "../components/LinkCard.vue";
import WarnBlock from "../components/warnBlock.vue";
import trueBlock from "../components/trueBlock.vue";
import Mypopover from "../components/MyPopover.vue";

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    ctx.app.component("LinkCard", LinkCard);
    ctx.app.component("WarnBlock", WarnBlock);
    ctx.app.component("trueBlock", trueBlock);
    ctx.app.component("my-popover", Mypopover);
    ctx.app.component(ElPopover.name, ElPopover);
    ctx.app.component(ElButton.name, ElButton);
   
 
  },
};