export const THEME_COLOR = "rgb(70,140,212)";

const LAYOUT = [
  {
    w: 4,
    h: 6,
    x: 20,
    y: 0,
    i: "item_0",
    moved: false,
    static: false,
    value:
      "![avatar](https://github.com/guanpengchn/Figure/raw/master/resume-avatar-1.jpg)",
    origin:
      '<section><p><img src="https://github.com/guanpengchn/Figure/raw/master/resume-avatar-1.jpg" alt="avatar"></p>\n</section>'
  },
  {
    w: 19,
    h: 1,
    x: 5,
    y: 39,
    i: "item_1",
    moved: false,
    static: false,
    value: "- 蓝桥杯个人赛国家级二等奖",
    origin:
      "<section><ul>\n<li>蓝桥杯个人赛国家级二等奖</li>\n</ul>\n</section>"
  },
  {
    w: 5,
    h: 1,
    x: 0,
    y: 2,
    i: "item_2",
    moved: false,
    static: false,
    value: "联系方式",
    origin: "<section><p>联系方式</p>\n</section>"
  },
  {
    w: 3,
    h: 1,
    x: 18,
    y: 7,
    i: "item_3",
    moved: false,
    static: false,
    value: "**硕士**",
    origin: "<section><p><strong>硕士</strong></p>\n</section>"
  },
  {
    w: 5,
    h: 1,
    x: 13,
    y: 7,
    i: "item_4",
    moved: false,
    static: false,
    value: "**计算机系统结构**",
    origin: "<section><p><strong>计算机系统结构</strong></p>\n</section>"
  },
  {
    w: 3,
    h: 1,
    x: 21,
    y: 7,
    i: "item_5",
    moved: false,
    static: false,
    value: "**Rank:10%**",
    origin: "<section><p><strong>Rank:10%</strong></p>\n</section>"
  },
  {
    w: 8,
    h: 1,
    x: 5,
    y: 7,
    i: "item_6",
    moved: false,
    static: false,
    value: "**中国科学院大学计算技术研究所**",
    origin:
      "<section><p><strong>中国科学院大学计算技术研究所</strong></p>\n</section>"
  },
  {
    w: 5,
    h: 1,
    x: 0,
    y: 7,
    i: "item_7",
    moved: false,
    static: false,
    value: "2016.09 - 2019.07",
    origin: "<section><p>2016.09 - 2019.07</p>\n</section>"
  },
  {
    w: 15,
    h: 1,
    x: 5,
    y: 2,
    i: "item_8",
    moved: false,
    static: false,
    value: "(+86)188-0123-4567",
    origin: "<section><p>(+86)188-0123-4567</p>\n</section>"
  },
  {
    w: 15,
    h: 1,
    x: 5,
    y: 4,
    i: "item_9",
    moved: false,
    static: false,
    value: "**`后台研发工程师`**",
    origin:
      "<section><p><strong><code>后台研发工程师</code></strong></p>\n</section>"
  },
  {
    w: 15,
    h: 1,
    x: 5,
    y: 3,
    i: "item_10",
    moved: false,
    static: false,
    value: "example@qq.com",
    origin: "<section><p>example@qq.com</p>\n</section>"
  },
  {
    w: 5,
    h: 2,
    x: 0,
    y: 0,
    i: "item_11",
    moved: false,
    static: false,
    value: "## `小机智`[+e]",
    origin: '<section class="vEnd"><h2><code>小机智</code></h2>\n</section>'
  },
  {
    w: 15,
    h: 1,
    x: 5,
    y: 1,
    i: "item_12",
    moved: false,
    static: false,
    value: "**`Xiao Jizhi`**",
    origin:
      "<section><p><strong><code>Xiao Jizhi</code></strong></p>\n</section>"
  },
  {
    w: 5,
    h: 1,
    x: 0,
    y: 3,
    i: "item_13",
    moved: false,
    static: false,
    value: "电子邮件",
    origin: "<section><p>电子邮件</p>\n</section>"
  },
  {
    w: 5,
    h: 1,
    x: 0,
    y: 8,
    i: "item_14",
    moved: false,
    static: false,
    value: "2012.09 - 2016.07",
    origin: "<section><p>2012.09 - 2016.07</p>\n</section>"
  },
  {
    w: 8,
    h: 1,
    x: 5,
    y: 8,
    i: "item_15",
    moved: false,
    static: false,
    value: "**大连理工大学软件学院**",
    origin: "<section><p><strong>大连理工大学软件学院</strong></p>\n</section>"
  },
  {
    w: 5,
    h: 1,
    x: 13,
    y: 8,
    i: "item_16",
    moved: false,
    static: false,
    value: "**软件工程(日语强化)**",
    origin: "<section><p><strong>软件工程(日语强化)</strong></p>\n</section>"
  },
  {
    w: 3,
    h: 1,
    x: 18,
    y: 8,
    i: "item_17",
    moved: false,
    static: false,
    value: "**学士**",
    origin: "<section><p><strong>学士</strong></p>\n</section>"
  },
  {
    w: 3,
    h: 1,
    x: 21,
    y: 8,
    i: "item_18",
    moved: false,
    static: false,
    value: "**Rank:5%**",
    origin: "<section><p><strong>Rank:5%</strong></p>\n</section>"
  },
  {
    w: 5,
    h: 1,
    x: 0,
    y: 4,
    i: "item_19",
    moved: false,
    static: false,
    value: "求职意向",
    origin: "<section><p>求职意向</p>\n</section>"
  },
  {
    w: 20,
    h: 1,
    x: 0,
    y: 5,
    i: "item_20",
    moved: false,
    static: false,
    value: "**`---`**[+C]",
    origin:
      '<section class="vCenter"><strong><code><ins><hr></ins></code></strong></section>'
  },
  {
    w: 24,
    h: 1,
    x: 0,
    y: 6,
    i: "item_21",
    moved: false,
    static: false,
    value: "> ## `教育经历`",
    origin:
      "<section><blockquote>\n<h2><code>教育经历</code></h2>\n</blockquote>\n</section>"
  },
  {
    w: 24,
    h: 1,
    x: 0,
    y: 12,
    i: "item_22",
    moved: false,
    static: false,
    value: "> ## `实习经历`",
    origin:
      "<section><blockquote>\n<h2><code>实习经历</code></h2>\n</blockquote>\n</section>"
  },
  {
    w: 13,
    h: 1,
    x: 5,
    y: 18,
    i: "item_23",
    moved: false,
    static: false,
    value: "**DRG 采集系统和数据分析系统**",
    origin:
      "<section><p><strong>DRG 采集系统和数据分析系统</strong></p>\n</section>"
  },
  {
    w: 6,
    h: 1,
    x: 18,
    y: 18,
    i: "item_24",
    moved: false,
    static: false,
    value: "**前端负责人**[-E]",
    origin:
      '<section class="hEnd"><p><strong>前端负责人</strong></p>\n</section>'
  },
  {
    w: 19,
    h: 1,
    x: 5,
    y: 21,
    i: "item_25",
    moved: false,
    static: false,
    value: "- 相关技术：Spring / Vue.js / DevOps",
    origin:
      "<section><ul>\n<li>相关技术：Spring / Vue.js / DevOps</li>\n</ul>\n</section>"
  },
  {
    w: 19,
    h: 1,
    x: 5,
    y: 20,
    i: "item_26",
    moved: false,
    static: false,
    value:
      "- 实验室横向课题，采集医疗数据，通过数据分析为国家医保投入做技术支持和追溯",
    origin:
      "<section><ul>\n<li>实验室横向课题，采集医疗数据，通过数据分析为国家医保投入做技术支持和追溯</li>\n</ul>\n</section>"
  },
  {
    w: 19,
    h: 1,
    x: 5,
    y: 37,
    i: "item_27",
    moved: false,
    static: false,
    value: "- 大连理工大学软件学院学生会副主席，负责活动组织相关工作",
    origin:
      "<section><ul>\n<li>大连理工大学软件学院学生会副主席，负责活动组织相关工作</li>\n</ul>\n</section>"
  },
  {
    w: 13,
    h: 1,
    x: 5,
    y: 13,
    i: "item_28",
    moved: false,
    static: false,
    value: "**IBM 中国研究院(CRL) - 认知医疗部**",
    origin:
      "<section><p><strong>IBM 中国研究院(CRL) - 认知医疗部</strong></p>\n</section>"
  },
  {
    w: 6,
    h: 1,
    x: 18,
    y: 13,
    i: "item_29",
    moved: false,
    static: false,
    value: "**区块链医疗平台研发**[-E]",
    origin:
      '<section class="hEnd"><p><strong>区块链医疗平台研发</strong></p>\n</section>'
  },
  {
    w: 19,
    h: 1,
    x: 5,
    y: 16,
    i: "item_30",
    moved: false,
    static: false,
    value: "- 相关技术：Hyperleger Fabric / Node.js / Golang",
    origin:
      "<section><ul>\n<li>相关技术：Hyperleger Fabric / Node.js / Golang</li>\n</ul>\n</section>"
  },
  {
    w: 19,
    h: 1,
    x: 5,
    y: 14,
    i: "item_31",
    moved: false,
    static: false,
    value:
      "- IBM 认知医疗数据共享平台，共享实验数据和机器学习模型，辅助诊断与学术研究",
    origin:
      "<section><ul>\n<li>IBM 认知医疗数据共享平台，共享实验数据和机器学习模型，辅助诊断与学术研究</li>\n</ul>\n</section>"
  },
  {
    w: 19,
    h: 1,
    x: 5,
    y: 15,
    i: "item_32",
    moved: false,
    static: false,
    value:
      "- 完成 2 个区块链网络平台搭建，包括 SDK 和 Chaincode 开发，RESTful API 封装",
    origin:
      "<section><ul>\n<li>完成 2 个区块链网络平台搭建，包括 SDK 和 Chaincode 开发，RESTful API 封装</li>\n</ul>\n</section>"
  },
  {
    w: 5,
    h: 4,
    x: 0,
    y: 13,
    i: "item_33",
    moved: false,
    static: false,
    value: "2017.01 - 2017.06",
    origin: "<section><p>2017.01 - 2017.06</p>\n</section>"
  },
  {
    w: 24,
    h: 1,
    x: 0,
    y: 17,
    i: "item_34",
    moved: false,
    static: false,
    value: "> ## `项目经历`",
    origin:
      "<section><blockquote>\n<h2><code>项目经历</code></h2>\n</blockquote>\n</section>"
  },
  {
    w: 19,
    h: 1,
    x: 5,
    y: 19,
    i: "item_35",
    moved: false,
    static: false,
    value:
      "- 完成 DRG 采集系统设计，完成 DRG 数据分析系统设计和其前端开发与部署工作",
    origin:
      "<section><ul>\n<li>完成 DRG 采集系统设计，完成 DRG 数据分析系统设计和其前端开发与部署工作</li>\n</ul>\n</section>"
  },
  {
    w: 5,
    h: 4,
    x: 0,
    y: 18,
    i: "item_36",
    moved: false,
    static: false,
    value: "2018.01 - 2018.07",
    origin: "<section><p>2018.01 - 2018.07</p>\n</section>"
  },
  {
    w: 5,
    h: 4,
    x: 0,
    y: 22,
    i: "item_37",
    moved: false,
    static: false,
    value: "2017.10 - 2017.12",
    origin: "<section><p>2017.10 - 2017.12</p>\n</section>"
  },
  {
    w: 13,
    h: 1,
    x: 5,
    y: 22,
    i: "item_38",
    moved: false,
    static: false,
    value: "**施工团队协作系统 Plate**",
    origin:
      "<section><p><strong>施工团队协作系统 Plate</strong></p>\n</section>"
  },
  {
    w: 6,
    h: 1,
    x: 18,
    y: 22,
    i: "item_39",
    moved: false,
    static: false,
    value: "**项目负责人**[-E]",
    origin:
      '<section class="hEnd"><p><strong>项目负责人</strong></p>\n</section>'
  },
  {
    w: 19,
    h: 1,
    x: 5,
    y: 23,
    i: "item_40",
    moved: false,
    static: false,
    value:
      "- 土木工程管理平台，用来帮助施工人员进行现场照片采集，任务发布和工程管理",
    origin:
      "<section><ul>\n<li>土木工程管理平台，用来帮助施工人员进行现场照片采集，任务发布和工程管理</li>\n</ul>\n</section>"
  },
  {
    w: 19,
    h: 1,
    x: 5,
    y: 24,
    i: "item_41",
    moved: false,
    static: false,
    value:
      "- 完成原型设计，数据库设计，网站脚手架搭建，响应式布局实现和网站部署等工作",
    origin:
      "<section><ul>\n<li>完成原型设计，数据库设计，网站脚手架搭建，响应式布局实现和网站部署等工作</li>\n</ul>\n</section>"
  },
  {
    w: 19,
    h: 1,
    x: 5,
    y: 25,
    i: "item_42",
    moved: false,
    static: false,
    value: "- 相关技术：Node.js / Git / MySQL",
    origin:
      "<section><ul>\n<li>相关技术：Node.js / Git / MySQL</li>\n</ul>\n</section>"
  },
  {
    w: 19,
    h: 1,
    x: 5,
    y: 40,
    i: "item_43",
    moved: false,
    static: false,
    value: "- 辽宁省优秀毕业生 / 中国科学院大学三好学生 / 大连理工大学三好学生",
    origin:
      "<section><ul>\n<li>辽宁省优秀毕业生 / 中国科学院大学三好学生 / 大连理工大学三好学生</li>\n</ul>\n</section>"
  },
  {
    w: 5,
    h: 4,
    x: 0,
    y: 26,
    i: "item_44",
    moved: false,
    static: false,
    value: "2017.07 - 2017.10",
    origin: "<section><p>2017.07 - 2017.10</p>\n</section>"
  },
  {
    w: 13,
    h: 1,
    x: 5,
    y: 26,
    i: "item_45",
    moved: false,
    static: false,
    value: "**国家互联网应急中心云平台管理系统**",
    origin:
      "<section><p><strong>国家互联网应急中心云平台管理系统</strong></p>\n</section>"
  },
  {
    w: 6,
    h: 1,
    x: 18,
    y: 26,
    i: "item_46",
    moved: false,
    static: false,
    value: "**模块负责人**[-E]",
    origin:
      '<section class="hEnd"><p><strong>模块负责人</strong></p>\n</section>'
  },
  {
    w: 19,
    h: 1,
    x: 5,
    y: 27,
    i: "item_47",
    moved: false,
    static: false,
    value:
      "- 平台负责管理服务器设备中的虚拟机、数据库和容器等资源，还包括计费和预警",
    origin:
      "<section><ul>\n<li>平台负责管理服务器设备中的虚拟机、数据库和容器等资源，还包括计费和预警</li>\n</ul>\n</section>"
  },
  {
    w: 19,
    h: 1,
    x: 5,
    y: 28,
    i: "item_48",
    moved: false,
    static: false,
    value:
      "- 完成 OpenStack 弹性伸缩模块，搭建 SaltStack 完成自动化运维模块和集群部署",
    origin:
      "<section><ul>\n<li>完成 OpenStack 弹性伸缩模块，搭建 SaltStack 完成自动化运维模块和集群部署</li>\n</ul>\n</section>"
  },
  {
    w: 19,
    h: 1,
    x: 5,
    y: 29,
    i: "item_49",
    moved: false,
    static: false,
    value: "- 相关技术: Smarty / SVN / SaltStack",
    origin:
      "<section><ul>\n<li>相关技术: Smarty / SVN / SaltStack</li>\n</ul>\n</section>"
  },
  {
    w: 24,
    h: 1,
    x: 0,
    y: 30,
    i: "item_50",
    moved: false,
    static: false,
    value: "> ## `专业技能`",
    origin:
      "<section><blockquote>\n<h2><code>专业技能</code></h2>\n</blockquote>\n</section>"
  },
  {
    w: 19,
    h: 1,
    x: 5,
    y: 31,
    i: "item_51",
    moved: false,
    static: false,
    value:
      "- 熟练使用 Java / JavaScript，熟悉高并发、JVM、Spring、ES6 等基础知识",
    origin:
      "<section><ul>\n<li>熟练使用 Java / JavaScript，熟悉高并发、JVM、Spring、ES6 等基础知识</li>\n</ul>\n</section>"
  },
  {
    w: 19,
    h: 1,
    x: 5,
    y: 32,
    i: "item_52",
    moved: false,
    static: false,
    value:
      "- 熟练使用 Git，熟悉团队协作流程，有开源社区交流、Linux 运维和部署经验",
    origin:
      "<section><ul>\n<li>熟练使用 Git，熟悉团队协作流程，有开源社区交流、Linux 运维和部署经验</li>\n</ul>\n</section>"
  },
  {
    w: 19,
    h: 1,
    x: 5,
    y: 33,
    i: "item_53",
    moved: false,
    static: false,
    value: "- 熟悉计算机网络，算法与数据结构等基础，英语四六级和日语 N2 通过",
    origin:
      "<section><ul>\n<li>熟悉计算机网络，算法与数据结构等基础，英语四六级和日语 N2 通过</li>\n</ul>\n</section>"
  },
  {
    w: 24,
    h: 1,
    x: 0,
    y: 34,
    i: "item_54",
    moved: false,
    static: false,
    value: "> ## `在校活动`",
    origin:
      "<section><blockquote>\n<h2><code>在校活动</code></h2>\n</blockquote>\n</section>"
  },
  {
    w: 19,
    h: 1,
    x: 5,
    y: 35,
    i: "item_55",
    moved: false,
    static: false,
    value: "- 国科大开源软件协会负责人，组织企业沙龙活动和开源项目",
    origin:
      "<section><ul>\n<li>国科大开源软件协会负责人，组织企业沙龙活动和开源项目</li>\n</ul>\n</section>"
  },
  {
    w: 19,
    h: 1,
    x: 5,
    y: 36,
    i: "item_56",
    moved: false,
    static: false,
    value: "- 中国科学院大学党委宣传部官微技术部负责人，负责设计和排版相关工作",
    origin:
      "<section><ul>\n<li>中国科学院大学党委宣传部官微技术部负责人，负责设计和排版相关工作</li>\n</ul>\n</section>"
  },
  {
    w: 24,
    h: 1,
    x: 0,
    y: 38,
    i: "item_57",
    moved: false,
    static: false,
    value: "> ## `荣誉奖励`",
    origin:
      "<section><blockquote>\n<h2><code>荣誉奖励</code></h2>\n</blockquote>\n</section>"
  },
  {
    w: 5,
    h: 1,
    x: 0,
    y: 10,
    i: "item_58",
    moved: false,
    static: false,
    value: "[Blog](https://guanpengchn.github.io/)",
    origin:
      '<section><p><a href="https://guanpengchn.github.io/">Blog</a></p>\n</section>'
  },
  {
    w: 19,
    h: 1,
    x: 5,
    y: 10,
    i: "item_59",
    moved: false,
    static: false,
    value:
      "部署于 GitHub Pages，包含精选文章、演示文稿，阅读量 20W 左右的 CSDN 博客",
    origin:
      "<section><p>部署于 GitHub Pages，包含精选文章、演示文稿，阅读量 20W 左右的 CSDN 博客</p>\n</section>"
  },
  {
    w: 5,
    h: 1,
    x: 0,
    y: 11,
    i: "item_60",
    moved: false,
    static: false,
    value: "[GitHub](https://github.com/guanpengchn/)",
    origin:
      '<section><p><a href="https://github.com/guanpengchn/">GitHub</a></p>\n</section>'
  },
  {
    w: 19,
    h: 1,
    x: 5,
    y: 11,
    i: "item_61",
    moved: false,
    static: false,
    value:
      "技术词汇读音 [awesome-pronunciation](https://github.com/guanpengchn/awesome-pronunciation)，GitHub 年度报告 [github-annual-report](https://github.com/guanpengchn/github-annual-report)",
    origin:
      '<section><p>技术词汇读音 <a href="https://github.com/guanpengchn/awesome-pronunciation">awesome-pronunciation</a>，GitHub 年度报告 <a href="https://github.com/guanpengchn/github-annual-report">github-annual-report</a></p>\n</section>'
  },
  {
    w: 24,
    h: 1,
    x: 0,
    y: 9,
    i: "item_62",
    moved: false,
    static: false,
    value: "> ## `个人博客`",
    origin:
      "<section><blockquote>\n<h2><code>个人博客</code></h2>\n</blockquote>\n</section>"
  },
  {
    w: 15,
    h: 1,
    x: 5,
    y: 0,
    i: "item_63",
    moved: false,
    static: false,
    value: "",
    origin: "<section></section>"
  }
];

export default LAYOUT;
