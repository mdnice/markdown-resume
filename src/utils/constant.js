import THEME0 from "./theme0";
import THEME1 from "./theme1";
import THEME2 from "./theme2";
import THEME3 from "./theme3";
import THEME4 from "./theme4";

export const COLOR_CHOOSEN = "rgba(238,238,238)";
export const COLOR_RESIZABLE = "rgba(245,245,245)";
export const COLOR_NORMAL = "rgba(255,255,255,0)";

export const ADD_DEFAULT_WIDTH = 24;
export const ADD_DEFAULT_HEIGHT = 1;

export const ENTER_DELAY = 0;
export const LEAVE_DELAY = 0;

export const MARK = "_";

export const ITEM_MAX_NUMS = 100;

export const DATA_MARKDOWN = "data-markdown";
export const DATA_ORIGIN = "data-origin";
export const STORAGE_LAYOUT = "layout";
export const TEMPLATE_NUM = "templateNum";
export const MARKDOWN_MODE = "markdownMode";

export const SM_MS_PROXY =
  "https://cors-anywhere.herokuapp.com/https://sm.ms/api/upload";

// 帮助信息
export const HELP_USE = `
### 使用规则

1. **单击网格**后可使用上方工具栏更改样式
2. **双击网格**可直接编辑内容
3. 网格内禁止回车换行
4. 支持实时保存
5. 可自定义网格填补空白
6. **一页简历，可在预览处查看边界线**
7. 自定义最多**${ITEM_MAX_NUMS}**个网格
8. **一级标题、二级标题和链接默认加粗**
9. 请使用Chrome，导出设置如下图所示

![](https://github.com/guanpengchn/Figure/raw/master/resume-print-config.png)
`;

export const HELP_MARKDOWN = `
### 基本语法

**如对Markdown不感兴趣可以直接使用工具栏排版，请跳过本节**

|语法名|语法|优先级|
|:---|:---|:---|
|下划线|\`> test\`|6|
|普通字体|\`test\`|5|
|一级标题|\`# test\`|5|
|二级标题|\`## test\`|5|
|加粗|\`**test**\`|4|
|油漆桶|\`\`\` \`test\` \`\`\`|3|
|水平对齐|左 \`test[-S]\`中 \`test[-C]\`右 \`test[-E]\`|2|
|垂直对齐|上 \`test[+S]\`中 \`test[+C]\`下 \`test[+E]\`|1|
|列表|\`- test\`||
|横线|\`---\`||
|竖线|\`+++\`||
|图片|\`![alt](http://www.example.com/test.jpg)\`||
|链接|\`[name](http://www.example.com/)\`||

按照优先级顺序从外到内来写，同一优先级只能存在一种

例如：有主题色、水平居中、垂直居中的二级标题

\`\`\`
> ## \`test\`[-C][+C]
\`\`\`

例如：加粗、有主题色、垂直居中的横线

\`\`\`
**\`---\`**[+C]
\`\`\`
`;

export const HELP_NOTICE = `
### 简历数据目前自动保存在浏览器中，如果清理浏览器将会丢失！
### 记得编辑后保存到本地备份！
### 欢迎点击右上角查看该开源项目，欢迎STAR
`
export const HELP_INFO = [HELP_NOTICE, HELP_USE, HELP_MARKDOWN];

export const THEMES = [THEME0, THEME1, THEME2, THEME3, THEME4];
