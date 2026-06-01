document.documentElement.classList.add("js");

const languageKey = "zheChenAiGtmLanguage";

const localizedNodes = [
  { selector: ".brand", text: { en: "Zhe Chen", zh: "陈喆" } },
  { selector: ".navlinks a:nth-child(1)", text: { en: "Outcomes", zh: "成果" } },
  { selector: ".navlinks a:nth-child(2)", text: { en: "Proof", zh: "证明" } },
  { selector: ".navlinks a:nth-child(3)", text: { en: "Fit", zh: "匹配度" } },
  { selector: ".navlinks a:nth-child(4)", text: { en: "Owned Reach", zh: "自有触达" } },
  { selector: ".navlinks a:nth-child(5)", text: { en: "GTM", zh: "GTM 打法" } },
  { selector: ".navlinks a:nth-child(6)", text: { en: "Experience", zh: "经历" } },
  { selector: ".hero .eyebrow", text: { en: "AI go-to-market & business development", zh: "面向 AI Native 公司的 GTM 与生态 BD" } },
  { selector: ".hero h1", html: { en: "Zhe Chen <span>(Summer Chen)</span>", zh: "陈喆 <span>Zhe Chen / Summer Chen</span>" } },
  {
    selector: ".lede",
    text: {
      en: "I turn founder-led BD, strategic partnerships, creator/community distribution, and cross-border market insight into measurable adoption and growth for AI-native products.",
      zh: "我擅长把 AI 产品能力转译成客户场景、合作叙事、创作者/社群采用和可衡量的商业增长，能够面向 AI Native 公司推进 GTM、BD 与市场拓展。",
    },
  },
  { selector: ".hero-badges span:nth-child(1)", text: { en: "AI GTM", zh: "AI Native GTM" } },
  { selector: ".hero-badges span:nth-child(2)", text: { en: "Ecosystem BD", zh: "生态 BD" } },
  { selector: ".hero-badges span:nth-child(3)", text: { en: "Growth Marketing", zh: "增长营销" } },
  { selector: ".hero-badges span:nth-child(4)", text: { en: "U.S.-China Market Expansion", zh: "中美市场拓展" } },
  { selector: ".hero .actions .button:nth-child(1) span", text: { en: "Resume PDF", zh: "英文简历 PDF" } },
  { selector: ".hero .actions .button:nth-child(2) span", text: { en: "LinkedIn", zh: "LinkedIn" } },
  { selector: ".hero .actions .button:nth-child(3) span", text: { en: "Email", zh: "邮件联系" } },
  { selector: ".hero-visual figcaption", text: { en: "Partnership-led growth · AI adoption storytelling · market expansion", zh: "伙伴驱动增长 · AI 采用转化 · 市场拓展" } },
  {
    selector: ".hero-proof span:nth-child(1)",
    html: { en: "<strong>800%</strong> AI-native user growth", zh: "<strong>800%</strong> AI Native 用户增长" },
  },
  {
    selector: ".hero-proof span:nth-child(2)",
    html: { en: "<strong>100K+</strong> partner-channel sign-ups", zh: "<strong>100K+</strong> 合作渠道注册" },
  },
  {
    selector: ".hero-proof span:nth-child(3)",
    html: { en: "<strong>12.4K+</strong> AI agent users", zh: "<strong>12.4K+</strong> AI Agent 用户" },
  },
  {
    selector: ".hero-proof span:nth-child(4)",
    html: { en: "<strong>10x</strong> revenue growth", zh: "<strong>10x</strong> 收入增长结果" },
  },
  { selector: ".metric-band article:nth-child(1) em", text: { en: "AI-native growth", zh: "AI Native 增长" } },
  { selector: ".metric-band article:nth-child(1) .metric-tags b:nth-child(1)", text: { en: "GTM", zh: "GTM" } },
  { selector: ".metric-band article:nth-child(1) .metric-tags b:nth-child(2)", text: { en: "Partnerships", zh: "合作伙伴" } },
  { selector: ".metric-band article:nth-child(1) .metric-tags b:nth-child(3)", text: { en: "Events", zh: "活动" } },
  {
    selector: ".metric-band article:nth-child(1) span",
    text: {
      en: "user growth for an AI-native social product through GTM, partnerships, events, and community channels",
      zh: "服务 AI Native 社交产品，通过 GTM、合作伙伴、活动和社群渠道推动用户增长",
    },
  },
  { selector: ".metric-band article:nth-child(2) em", text: { en: "Partner activation", zh: "合作伙伴激活" } },
  { selector: ".metric-band article:nth-child(2) .metric-tags b:nth-child(1)", text: { en: "Partner-led motion", zh: "合作方合作" } },
  { selector: ".metric-band article:nth-child(2) .metric-tags b:nth-child(2)", text: { en: "733 universities", zh: "733 所大学" } },
  {
    selector: ".metric-band article:nth-child(2) span",
    text: {
      en: "partner-channel sign-ups from partner-led GTM motions, including one key campus collaboration",
      zh: "通过合作伙伴驱动的 GTM 动作转化合作渠道注册，其中包括一次关键校园合作",
    },
  },
  { selector: ".metric-band article:nth-child(3) em", text: { en: "Commercial BD", zh: "商业 BD 结果" } },
  { selector: ".metric-band article:nth-child(3) .metric-tags b:nth-child(1)", text: { en: "Revenue growth", zh: "收入增长" } },
  { selector: ".metric-band article:nth-child(3) .metric-tags b:nth-child(2)", text: { en: "Local partners", zh: "本地合作" } },
  { selector: ".metric-band article:nth-child(3) .metric-tags b:nth-child(3)", text: { en: "BD execution", zh: "BD 执行" } },
  {
    selector: ".metric-band article:nth-child(3) span",
    text: {
      en: "revenue growth through integrated marketing, local partnerships, paid media, campus channels, and BD execution",
      zh: "通过整合营销、本地合作、付费投放、校园渠道和 BD 执行推动收入增长",
    },
  },
  { selector: ".metric-band article:nth-child(4) em", text: { en: "AI workflow adoption", zh: "AI 工作流采用" } },
  { selector: ".metric-band article:nth-child(4) .metric-tags b:nth-child(1)", text: { en: "Coze", zh: "Coze" } },
  { selector: ".metric-band article:nth-child(4) .metric-tags b:nth-child(2)", text: { en: "Creator workflow", zh: "创作者工作流" } },
  { selector: ".metric-band article:nth-child(4) .metric-tags b:nth-child(3)", text: { en: "#1 Xiaohongshu tool", zh: "小红书工具榜第 1" } },
  {
    selector: ".metric-band article:nth-child(4) span",
    text: {
      en: "users of a Xiaohongshu (RED) copywriting AI agent for creator workflow adoption",
      zh: "小红书爆款文案 AI Agent 用户，用真实用户证明创作者工作流采用",
    },
  },
  { selector: ".metric-band article:nth-child(5) em", text: { en: "New-media creation", zh: "新媒体创作" } },
  { selector: ".metric-band article:nth-child(5) strong", text: { en: "100M+", zh: "1 亿+" } },
  { selector: ".metric-band article:nth-child(5) .metric-tags b:nth-child(1)", text: { en: "Original content", zh: "原创内容" } },
  { selector: ".metric-band article:nth-child(5) .metric-tags b:nth-child(2)", text: { en: "Cross-platform", zh: "全平台" } },
  { selector: ".metric-band article:nth-child(5) .metric-tags b:nth-child(3)", text: { en: "Audience building", zh: "受众积累" } },
  {
    selector: ".metric-band article:nth-child(5) span",
    text: {
      en: "cross-platform views on original new-media content, showing durable audience building and content-led market education",
      zh: "我创作的全平台新媒体作品累计浏览量，证明持续内容创作、受众积累和内容驱动的市场教育能力",
    },
  },
  { selector: "#fit .section-kicker", text: { en: "Role Fit", zh: "岗位匹配亮点" } },
  { selector: "#fit h2", text: { en: "Built for roles where BD, marketing, and AI adoption meet.", zh: "匹配 AI Native 客户 BD、GTM 和增长营销交汇的岗位。" } },
  { selector: ".fit-grid article:nth-child(1) h3", text: { en: "Business Development", zh: "商务拓展" } },
  {
    selector: ".fit-grid article:nth-child(1) p",
    text: {
      en: "Founder-led client conversations, partner-led GTM, vendor negotiation, sponsorships, campus/community partnerships, partner onboarding, co-marketing, and cross-border ecosystem expansion.",
      zh: "具备创始人级商务沟通经验，能推进客户与合作伙伴开发、生态合作、供应商谈判、赞助合作、校园/社群合作、伙伴 onboarding、联合营销和跨境市场拓展。",
    },
  },
  { selector: ".fit-grid article:nth-child(2) h3", text: { en: "Growth Marketing", zh: "增长营销" } },
  {
    selector: ".fit-grid article:nth-child(2) p",
    text: {
      en: "Demand generation, launch campaigns, offline-to-online conversion, community-led acquisition, creator/KOL activation, events, UTM tracking, and ROI review.",
      zh: "能把需求生成、上线 campaign、线下到线上转化、社群获客、创作者/KOL 激活、活动执行、UTM 追踪和 ROI 复盘串成完整增长闭环。",
    },
  },
  { selector: ".fit-grid article:nth-child(3) h3", text: { en: "AI Adoption & GTM", zh: "AI 产品采用与 GTM" } },
  {
    selector: ".fit-grid article:nth-child(3) p",
    text: {
      en: "Use-case framing, customer discovery support, AI product storytelling, creator workflow education, campaign playbooks, and cross-functional execution with product and technical teams.",
      zh: "能把 AI 能力转译成客户听得懂的使用场景，支持客户需求发现、产品叙事、创作者工作流教育、campaign playbook，并与产品和技术团队协同推进落地。",
    },
  },
  { selector: "#distribution .section-kicker", text: { en: "Owned GTM Distribution", zh: "自有 GTM 分发资产" } },
  { selector: "#distribution h2", text: { en: "Audience, communities, and creator trust I built and can activate.", zh: "我亲自搭建并可以直接调动的受众、社群和创作者信任。" } },
  {
    selector: "#distribution .section-intro",
    text: {
      en: "This is a distribution layer I personally built and operated across public content channels, private communities, creator/KOL relationships, and market feedback loops for AI product adoption.",
      zh: "这不是泛泛的影响力，而是我长期亲自搭建、运营并能在 GTM 中调动的分发层：公开内容渠道、私域社群、创作者/KOL 关系和市场反馈循环。",
    },
  },
  { selector: ".distribution-grid article:nth-child(1) h3", text: { en: "Owned audience channels", zh: "自有内容与受众渠道" } },
  {
    selector: ".distribution-grid article:nth-child(1) p",
    text: {
      en: "Personally built founder-led content and public-facing channels that translate product ideas, creator workflows, and market narratives into audience attention.",
      zh: "我亲自搭建 founder-led 内容和公开渠道，把产品想法、创作者工作流和市场叙事转化为真实受众注意力。",
    },
  },
  { selector: ".distribution-grid article:nth-child(1) .proof-stats strong:nth-child(1)", text: { en: "1M-view Xiaohongshu (RED) debut post", zh: "小红书首篇 100 万浏览" } },
  { selector: ".distribution-grid article:nth-child(1) .proof-stats strong:nth-child(2)", text: { en: "7K+ Xiaohongshu followers from 0", zh: "小红书从 0 到 7K+ 粉丝" } },
  { selector: ".distribution-grid article:nth-child(1) .proof-stats strong:nth-child(3)", text: { en: "1.114M Bilibili views in week one", zh: "Bilibili 首周 111.4 万播放" } },
  { selector: ".distribution-grid article:nth-child(2) h3", text: { en: "Owned community conversion layer", zh: "自有社群转化层" } },
  {
    selector: ".distribution-grid article:nth-child(2) p",
    text: {
      en: "Operated private communities that turn public attention into product education loops, user conversion, event participation, and partner-ready market feedback.",
      zh: "我运营私域社群，把公开内容注意力转化为产品教育、用户转化、活动参与和可用于合作伙伴沟通的市场反馈。",
    },
  },
  { selector: ".distribution-grid article:nth-child(2) .proof-stats strong:nth-child(1)", text: { en: "100K+ community reach", zh: "100K+ 社群触达" } },
  { selector: ".distribution-grid article:nth-child(2) .proof-stats strong:nth-child(2)", text: { en: "50+ active community groups", zh: "50+ 活跃社群" } },
  { selector: ".distribution-grid article:nth-child(2) .proof-stats strong:nth-child(3)", text: { en: "1,000 targeted users converted", zh: "转化 1,000 名目标用户" } },
  { selector: ".distribution-grid article:nth-child(3) h3", text: { en: "Owned creator and KOL network", zh: "自有创作者与 KOL 网络" } },
  {
    selector: ".distribution-grid article:nth-child(3) p",
    text: {
      en: "Built and maintained creator resources I can mobilize for co-marketing, launch validation, content testing, brand collaboration resources, and founder-led commercial conversations.",
      zh: "我长期沉淀并维护可调动的创作者资源，支持联合营销、上线验证、内容测试、合作过的品牌资源和创始人级商务沟通。",
    },
  },
  { selector: ".distribution-grid article:nth-child(3) .proof-stats strong:nth-child(1)", text: { en: "2,000+ influencer resources", zh: "2,000+ influencer 资源" } },
  { selector: ".distribution-grid article:nth-child(3) .proof-stats strong:nth-child(2)", text: { en: "1,000+ KOL/KOC network", zh: "1,000+ KOL/KOC 网络" } },
  { selector: ".distribution-grid article:nth-child(3) .proof-stats strong:nth-child(3)", text: { en: "200+ brand collaboration resources", zh: "200+ 合作过的品牌资源" } },
  { selector: ".distribution-grid article:nth-child(4) h3", text: { en: "AI-native community brand", zh: "AI Native 青年社群品牌" } },
  {
    selector: ".distribution-grid article:nth-child(4) p",
    text: {
      en: "Initiated and co-founded BrandYou, an AI-native youth action community brand; used practical AI workflow content to validate audience demand for hands-on AI adoption.",
      zh: "作为发起人和联合创始人发起 BrandYou，围绕 AI Native 青年行动派、Claude Code 教程和 AI 工作流教育，打造可公开传播的社群品牌。",
    },
  },
  { selector: ".distribution-grid article:nth-child(4) .proof-stats strong:nth-child(1)", text: { en: "100K+ WeChat article reads", zh: "10 万+ 微信公众号阅读" } },
  { selector: ".distribution-grid article:nth-child(4) .proof-stats strong:nth-child(2)", text: { en: "11K+ shares", zh: "1.1 万+ 转发" } },
  { selector: ".distribution-grid article:nth-child(4) .proof-stats strong:nth-child(3)", text: { en: "Initiator & Co-Founder", zh: "发起人 & 联合创始人" } },
  { selector: "#cases .section-kicker", text: { en: "Selected GTM Proof", zh: "核心 GTM 证明" } },
  { selector: "#cases h2", text: { en: "Commercial, creator, and AI workflow evidence for the GTM story.", zh: "用商业增长、AI Native 产品、创作者生态和 AI 工作流证明这套 GTM 定位。" } },
  { selector: ".case-card:nth-child(1) .case-meta span:nth-child(1)", text: { en: "AI social product", zh: "AI 社交产品" } },
  { selector: ".case-card:nth-child(1) .case-meta span:nth-child(2)", text: { en: "Integrated GTM", zh: "综合 GTM" } },
  { selector: ".case-card:nth-child(1) .case-meta span:nth-child(3)", text: { en: "Campus activation", zh: "校园激活" } },
  { selector: ".case-card:nth-child(1) .case-meta span:nth-child(4)", text: { en: "Viral campus GTM", zh: "校园病毒式传播" } },
  { selector: ".case-card:nth-child(1) h3", text: { en: "DITTO.AI: built an integrated campus GTM engine across partnerships, activations, creators, and content", zh: "DITTO.AI：用商务合作、校园激活、创作者营销和内容矩阵打造综合 GTM 增长链路" } },
  { selector: ".case-card:nth-child(1) p", text: { en: "Co-led an integrated campus GTM motion across partner collaboration, creative posters, a viral offline yacht activation, influencer marketing, and original videos, turning partner-led campaigns into 100K+ partner-channel sign-ups and 150K+ cumulative users with 800% growth.", zh: "通过合作方合作、创意海报、爆款线下游艇活动、influencer marketing 和创新视频等打法矩阵，打造综合校园 GTM 与病毒式传播链路，转化 100K+ 合作渠道注册，并获客 150K+ 用户、推动 800% 用户增长。" } },
  {
    selector: ".case-card:nth-child(1) .case-outcomes",
    html: {
      en: "<strong><span>150K+</span> users acquired</strong><strong><span>100K+</span> partner-channel sign-ups</strong><strong><span>733</span> U.S. universities</strong><strong><span>800%</span> user growth</strong>",
      zh: "<strong><span>150K+</span> 用户获客</strong><strong><span>100K+</span> 合作渠道注册</strong><strong><span>733</span> 所美国大学</strong><strong><span>800%</span> 用户增长</strong>",
    },
  },
  { selector: ".case-card:nth-child(1) li:nth-child(1)", text: { en: "Used the YikYak x Ditto collaboration as one key partner motion across 733 U.S. universities.", zh: "将 YikYak x Ditto 合作作为关键伙伴动作之一，覆盖 733 所美国大学。" } },
  { selector: ".case-card:nth-child(1) li:nth-child(2)", text: { en: "Built a broader campus viral growth matrix with partner collaboration, creative posters, a viral offline yacht activation, influencer marketing, and original video content.", zh: "通过合作方合作、创意海报、爆款线下游艇活动、influencer marketing 和创新视频内容，搭建更完整的校园病毒式增长矩阵。" } },
  { selector: ".case-card:nth-child(1) li:nth-child(3)", text: { en: "Activated campus, ambassador, event, and community channels to move users from awareness into conversion.", zh: "激活校园、ambassador、活动和社群渠道，把用户从认知推进到转化。" } },
  { selector: ".case-card:nth-child(1) li:nth-child(4)", text: { en: "Converted product signals, community behavior, and campaign feedback into repeatable GTM actions.", zh: "将产品信号、社群行为和 campaign 反馈转化为可复用的 GTM 动作。" } },
  { selector: ".case-card:nth-child(2) .case-meta span:nth-child(1)", text: { en: "Local market expansion", zh: "本地商业增长" } },
  { selector: ".case-card:nth-child(2) .case-meta span:nth-child(2)", text: { en: "BD + marketing", zh: "BD + 营销" } },
  { selector: ".case-card:nth-child(2) .case-meta span:nth-child(3)", text: { en: "U.S. university network", zh: "美国高校网络" } },
  { selector: ".case-card:nth-child(2) h3", text: { en: "ENCMOBILE: built repeatable student-market BD and growth channels", zh: "ENCMOBILE：搭建可复制的学生市场 BD 与增长体系" } },
  { selector: ".case-card:nth-child(2) p", text: { en: "Built a repeatable student-market GTM engine across paid media, local partnerships, student organizations, community operations, and deep relationships with 70+ U.S. universities.", zh: "整合付费投放、本地合作、学生组织、社群运营和线下活动，沉淀 70+ 所美国名校深度合作关系，搭建可复制的学生市场 GTM 引擎。" } },
  {
    selector: ".case-card:nth-child(2) .case-outcomes",
    html: {
      en: "<strong><span>8x</span> YoY user growth</strong><strong><span>10x</span> revenue growth</strong><strong><span>70+</span> U.S. universities</strong><strong><span>100+</span> partner relationships</strong>",
      zh: "<strong><span>8x</span> 年度用户增长</strong><strong><span>10x</span> 收入增长</strong><strong><span>70+</span> 美国名校</strong><strong><span>100+</span> 合作关系</strong>",
    },
  },
  { selector: ".case-card:nth-child(2) li:nth-child(1)", text: { en: "Built deep relationships and strong BD penetration across 70+ U.S. universities, including Harvard, Stanford, and Cornell.", zh: "合作 70+ 所美国名校，包括哈佛、斯坦福、康奈尔等，沉淀深度学校关系和极强商务突破力。" } },
  { selector: ".case-card:nth-child(2) li:nth-child(2)", text: { en: "Negotiated 40+ vendor partnerships and 60+ student organization relationships.", zh: "拓展并维护 40+ 供应商合作与 60+ 学生组织关系。" } },
  { selector: ".case-card:nth-child(2) li:nth-child(3)", text: { en: "Coordinated 60+ North American university events annually.", zh: "每年统筹 60+ 北美高校活动，沉淀本地市场资源网络。" } },
  { selector: ".case-card:nth-child(2) li:nth-child(4)", text: { en: "Reduced partnership costs by 50% through vendor consolidation and operating discipline.", zh: "通过供应商整合和流程标准化，将合作成本降低 50%。" } },
  { selector: ".case-card:nth-child(3) .case-meta span:nth-child(1)", text: { en: "AI campus community", zh: "AI 校园社区" } },
  { selector: ".case-card:nth-child(3) .case-meta span:nth-child(2)", text: { en: "Creator ecosystem", zh: "创作者生态" } },
  { selector: ".case-card:nth-child(3) .case-meta span:nth-child(3)", text: { en: "0 to 1", zh: "0 到 1" } },
  { selector: ".case-card:nth-child(3) h3", text: { en: "PandaPal: built a global digital solutions provider, marketing agency, and AI campus community product", zh: "PandaPal：打造 Global Digital Solutions Provider、Marketing Agency 与 AI 校园社区产品" } },
  { selector: ".case-card:nth-child(3) p", text: { en: "As Founder, built PANDAPAL as both a global digital solutions provider / marketing agency and a 0-to-1 AI campus community product, with 100K+ community reach and creator/KOL resources across Xiaohongshu (RED), TikTok, Instagram, Discord, Telegram, and WeChat.", zh: "作为 Founder，我把 PANDAPAL 打造成 Global Digital Solutions Provider / Marketing Agency 与 0 到 1 AI 校园社区产品，沉淀 100K+ 社群触达，并在小红书、TikTok、Instagram、Discord、Telegram 和微信等平台调动创作者/KOL 资源。" } },
  {
    selector: ".case-card:nth-child(3) .case-outcomes",
    html: {
      en: "<strong><span>100K+</span> community reach</strong><strong><span>2,000+</span> influencer resources</strong><strong><span>200+</span> brand collaboration resources</strong><strong><span>1M</span> Xiaohongshu debut views</strong>",
      zh: "<strong><span>100K+</span> 社群触达</strong><strong><span>2,000+</span> influencer 资源</strong><strong><span>200+</span> 合作品牌</strong><strong><span>1M</span> 小红书首篇浏览</strong>",
    },
  },
  { selector: ".case-card:nth-child(3) li:nth-child(1)", text: { en: "Personally led founder-level BD across brand, sponsor, vendor, and creator relationships, building 200+ brand collaboration resources.", zh: "作为 Founder 亲自推进 200+ 合作品牌、赞助商、供应商和创作者伙伴的商务谈判与合作落地。" } },
  { selector: ".case-card:nth-child(3) li:nth-child(2)", text: { en: "Built and activated 2,000+ influencer resources.", zh: "沉淀并激活 2,000+ influencer 资源，形成可复用的创作者合作池。" } },
  { selector: ".case-card:nth-child(3) li:nth-child(3)", text: { en: "Grew a Xiaohongshu account from 0 to 7K+ followers and converted 1,000 targeted users from a 1M-view debut post.", zh: "将小红书账号从 0 做到 7K+ 粉丝，并通过首篇 1M 浏览内容转化 1,000 名目标用户进入私域。" } },
  { selector: ".case-card:nth-child(3) li:nth-child(4)", text: { en: "Validated community-led growth and creator partnership monetization models.", zh: "验证社群增长、创作者合作和品牌商业化模型。" } },
  { selector: ".case-card:nth-child(4) .case-meta span:nth-child(1)", text: { en: "AI workflow adoption", zh: "AI 产品采用" } },
  { selector: ".case-card:nth-child(4) .case-meta span:nth-child(2)", text: { en: "Creator marketing", zh: "创作者营销" } },
  { selector: ".case-card:nth-child(4) .case-meta span:nth-child(3)", text: { en: "Independent creation", zh: "独立创作" } },
  { selector: ".case-card:nth-child(4) h3", text: { en: "Xiaohongshu AI Agent: turned creator content patterns into a workflow product", zh: "小红书 AI Agent：将内容增长方法论转化为可规模化的 AI 工具" } },
  { selector: ".case-card:nth-child(4) p", text: { en: "Independently built a Xiaohongshu Viral Copywriting AI Agent on Coze that ranked #1 on Xiaohongshu's copywriting tool leaderboard with 12,400+ users.", zh: "我独立创作并上线小红书爆款文案 AI Agent，登上小红书文案工具榜第 1，累计 12,400+ 用户。" } },
  {
    selector: ".case-card:nth-child(4) .case-outcomes",
    html: {
      en: "<strong><span>#1</span> Xiaohongshu leaderboard</strong><strong><span>12,400+</span> users</strong><strong><span>Built on</span> Coze</strong>",
      zh: "<strong><span>#1</span> 文案工具榜</strong><strong><span>12,400+</span> 用户</strong><strong><span>独立创作</span> Coze 工具</strong>",
    },
  },
  { selector: ".case-card:nth-child(4) li:nth-child(1)", text: { en: "Showed hands-on AI product adoption beyond AI buzzwords.", zh: "用真实用户证明 AI 应用采用能力，而不是停留在概念表达。" } },
  { selector: ".case-card:nth-child(4) li:nth-child(2)", text: { en: "Translated creator workflow pain points into repeatable product language.", zh: "将创作者工作流痛点转化为可理解、可复用的产品语言。" } },
  { selector: ".case-card:nth-child(4) li:nth-child(3)", text: { en: "Connected content strategy, user education, and creator tool adoption.", zh: "打通内容策略、用户教育和创作者工具采用链路。" } },
  { selector: ".case-card:nth-child(5) .case-meta span:nth-child(1)", text: { en: "Media & creator vertical", zh: "媒体与创作者垂直场景" } },
  { selector: ".case-card:nth-child(5) .case-meta span:nth-child(2)", text: { en: "AI-assisted workflows", zh: "AI 辅助工作流" } },
  { selector: ".case-card:nth-child(5) .case-meta span:nth-child(3)", text: { en: "Founder-led venture", zh: "创始人项目" } },
  { selector: ".case-card:nth-child(5) h3", text: { en: "PEACHJAM / Legend Co-Shooting: AI + film resource sharing and AI-assisted video production platform", zh: "PEACHJAM / Legend Co-Shooting：AI+影视资源共享与 AI 辅助视频制作平台" } },
  { selector: ".case-card:nth-child(5) p", text: { en: "As Founder, built an AI-assisted film and video production platform, a 3,000+ creator community, and 6,000+ production resources; the venture won \"Internet+\" National Silver Award from 3.4M+ entries, reached approx. top 0.03%, and I was recognized as Beijing Outstanding Entrepreneurial Team Leader.", zh: "作为创始人，我创立 AI 辅助影视制作平台，搭建 3,000+ 专业创作者社群，并聚合 6,000+ 影视制作资源；项目在 340 万+ 参赛项目中获得“互联网+”全国银奖，约 Top 0.03%，我本人因此获评北京市优秀创业团队负责人。" } },
  {
    selector: ".case-card:nth-child(5) .case-outcomes",
    html: {
      en: "<strong><span>Top 0.03%</span> Internet+ National Silver</strong><strong><span>Top 10</span> Beijing Outstanding Entrepreneurial Team Leader</strong><strong><span>3,000+</span> creators · 6,000+ resources</strong>",
      zh: "<strong><span>Top 0.03%</span> 互联网+ 全国银奖</strong><strong><span>Top 10</span> 荣获北京市优秀创业团队负责人</strong><strong><span>3,000+</span> 创作者 · 6,000+ 资源</strong>",
    },
  },
  { selector: ".case-card:nth-child(5) li:nth-child(1)", text: { en: "Designed workflows from script and storyboard to shot lists, schedules, props, camera movement, editing, and subtitles.", zh: "设计从剧本、分镜到 shot list、通告、道具、运镜、剪辑和字幕的端到端创作流程。" } },
  { selector: ".case-card:nth-child(5) li:nth-child(2)", text: { en: "Produced film/video work with 1.114M Bilibili views and 105K likes in week one.", zh: "影视作品首周在 Bilibili 获得 111.4 万播放和 10.5 万点赞。" } },
  { selector: ".case-card:nth-child(5) li:nth-child(3)", text: { en: "Provides vertical context for AI creative, gaming, media, and creator-economy GTM.", zh: "沉淀 AI 创意、游戏、媒体和创作者经济 GTM 所需的一线行业理解。" } },
  { selector: ".portfolio-proof-section .section-kicker", text: { en: "Selected Evidence", zh: "精选证明材料" } },
  { selector: ".portfolio-proof-section h2", text: { en: "Public materials that support the GTM story.", zh: "支撑 GTM 叙事的可公开证明材料。" } },
  {
    selector: ".portfolio-proof-section .section-intro",
    text: {
      en: "These materials provide additional context behind the business outcomes above, including product thinking, creator/community activation, and founder-led execution.",
      zh: "这些公开材料进一步补充前面的商业结果，展示产品思考、创作者/社群激活和创始人级执行能力。",
    },
  },
  { selector: ".portfolio-proof-grid article:nth-child(1) span", text: { en: "Founder · Global Digital Solutions Provider & Marketing Agency · AI Campus Product · Initiated in 2021", zh: "Founder · Global Digital Solutions Provider & Marketing Agency · AI 校园产品 · 发起于 2021 年" } },
  { selector: ".portfolio-proof-grid article:nth-child(1) h3", text: { en: "PandaPal: global digital solutions provider, marketing agency, and AI campus community product", zh: "PandaPal：Global Digital Solutions Provider、Marketing Agency 与 AI 校园社区产品" } },
  { selector: ".portfolio-proof-grid article:nth-child(1) p", text: { en: "As Founder, built a 0-to-1 AI campus community product and a marketing / digital solutions business with business planning, marketing strategy, product video, creator/community activation, and early mini-app demo materials.", zh: "作为 Founder，我从 0 到 1 打造 AI 校园社区产品，同时沉淀 marketing / digital solutions 业务，包含商业计划、营销策略、产品视频、创作者/社群激活和小程序早期 Demo 材料。" } },
  { selector: ".portfolio-proof-grid article:nth-child(1) .proof-stats strong:nth-child(1)", text: { en: "100K+ community reach", zh: "100K+ 社群触达" } },
  { selector: ".portfolio-proof-grid article:nth-child(1) .proof-stats strong:nth-child(2)", text: { en: "2,000+ influencer resources", zh: "2,000+ influencer 资源" } },
  { selector: ".portfolio-proof-grid article:nth-child(1) .proof-stats strong:nth-child(3)", text: { en: "Founder-led GTM", zh: "Founder 主导 GTM" } },
  { selector: ".portfolio-proof-grid article:nth-child(1) .proof-stats strong:nth-child(4)", text: { en: "Led team to win national entrepreneurship awards", zh: "带队赢取多项国家级创业比赛奖项" } },
  { selector: ".portfolio-proof-grid article:nth-child(1) .proof-links a:nth-child(1)", text: { en: "Product video", zh: "产品视频" } },
  { selector: ".portfolio-proof-grid article:nth-child(1) .proof-note", text: { en: "More proof available on request", zh: "更多材料可按需提供" } },
  { selector: ".portfolio-proof-grid article:nth-child(2) span", text: { en: "Co-Founder & Marketing Partner · Launched in 2023", zh: "联合创始人 & Marketing Partner · 上线于 2023 年" } },
  { selector: ".portfolio-proof-grid article:nth-child(2) h3", text: { en: "SWAP: skill-exchange platform", zh: "SWAP——技能交换平台" } },
  { selector: ".portfolio-proof-grid article:nth-child(2) p", text: { en: "As Co-Founder and Marketing Partner, drove 100K+ users for a skill-exchange social product through positioning, Xiaohongshu growth, offline activation, and user-education content.", zh: "作为联合创始人和 Marketing Partner，我通过产品定位、小红书增长、线下激活和用户教育内容，为技能交换社交产品 SWAP 带来 10 万+ 用户。" } },
  { selector: ".portfolio-proof-grid article:nth-child(2) .proof-stats strong:nth-child(1)", text: { en: "100K+ users acquired", zh: "10 万+ 用户增长" } },
  { selector: ".portfolio-proof-grid article:nth-child(2) .proof-stats strong:nth-child(2)", text: { en: "Co-Founder & Marketing Partner", zh: "联合创始人 & Marketing Partner" } },
  { selector: ".portfolio-proof-grid article:nth-child(2) .proof-stats strong:nth-child(3)", text: { en: "Public Xiaohongshu and offline proof", zh: "小红书与线下激活证明" } },
  { selector: ".portfolio-proof-grid article:nth-child(2) .proof-links a:nth-child(1)", text: { en: "Live website", zh: "官网" } },
  { selector: ".portfolio-proof-grid article:nth-child(2) .proof-note", text: { en: "More proof available on request", zh: "更多材料可按需提供" } },
  { selector: ".portfolio-proof-grid article:nth-child(3) span", text: { en: "Founder · Original Venture · Initiated in 2018", zh: "Founder · 早期创业项目 · 2018 年启动" } },
  { selector: ".portfolio-proof-grid article:nth-child(3) h3", text: { en: "Legend Co-Shooting: film resource sharing and AI-assisted video production platform", zh: "Legend Co-Shooting——影视资源共享与 AI 辅助视频制作平台" } },
  { selector: ".portfolio-proof-grid article:nth-child(3) p", text: { en: "As Founder, started this AI + film venture in 2018; it won Internet+ National Silver Award from 3.4M+ entries, reached approx. top 0.03%, and led to my recognition as Beijing Outstanding Entrepreneurial Team Leader.", zh: "作为 Founder，我在 2018 年启动 AI+影视项目；项目在 340 万+ 参赛项目中获得互联网+全国银奖，约 Top 0.03%，我本人获评北京市优秀创业团队负责人。" } },
  { selector: ".portfolio-proof-grid article:nth-child(3) .proof-stats strong:nth-child(1)", text: { en: "3,000+ creator community", zh: "3,000+ 创作者社群" } },
  { selector: ".portfolio-proof-grid article:nth-child(3) .proof-stats strong:nth-child(2)", text: { en: "6,000+ production resources", zh: "6,000+ 影视制作资源" } },
  { selector: ".portfolio-proof-grid article:nth-child(3) .proof-stats strong:nth-child(3)", text: { en: "Internet+ National Silver · top 0.03%", zh: "互联网+ 全国银奖 · Top 0.03%" } },
  { selector: ".portfolio-proof-grid article:nth-child(3) .proof-stats strong:nth-child(4)", text: { en: "Beijing Outstanding Entrepreneurial Team Leader", zh: "北京市优秀创业团队负责人" } },
  { selector: ".portfolio-proof-grid article:nth-child(3) .proof-links a:nth-child(1)", text: { en: "Pitch video", zh: "路演视频" } },
  { selector: ".portfolio-proof-grid article:nth-child(3) .proof-note", text: { en: "Plans available on request", zh: "计划书可按需提供" } },
  { selector: ".portfolio-proof-grid article:nth-child(4) span", text: { en: "Initiator & Co-Founder · AI Native Community", zh: "发起人 & 联合创始人 · AI Native 社群品牌" } },
  { selector: ".portfolio-proof-grid article:nth-child(4) h3", text: { en: "Brand You: AI-native action community brand", zh: "Brand You——AI Native 行动派社群品牌" } },
  { selector: ".portfolio-proof-grid article:nth-child(4) p", text: { en: "Initiated and co-founded an AI-native youth action community brand; published an independent WeChat article on Claude Code that reached 100K+ reads and 11K+ shares.", zh: "作为发起人和联合创始人发起 AI Native 青年行动派社群品牌，并创作 Claude Code 教程爆款文章，单篇获得 10 万+ 阅读和 1.1 万转发。" } },
  { selector: ".portfolio-proof-grid article:nth-child(4) .proof-stats strong:nth-child(1)", text: { en: "100K+ WeChat article reads", zh: "10 万+ 微信公众号阅读" } },
  { selector: ".portfolio-proof-grid article:nth-child(4) .proof-stats strong:nth-child(2)", text: { en: "11K+ shares", zh: "1.1 万+ 转发" } },
  { selector: ".portfolio-proof-grid article:nth-child(4) .proof-stats strong:nth-child(3)", text: { en: "2,467 likes", zh: "2,467 点赞" } },
  { selector: ".portfolio-proof-grid article:nth-child(4) .proof-stats strong:nth-child(4)", text: { en: "1,092 saves / favorites", zh: "1,092 收藏/喜欢" } },
  { selector: ".portfolio-proof-grid article:nth-child(4) .proof-links a:nth-child(1)", text: { en: "BrandYou website", zh: "BrandYou 官网" } },
  { selector: ".portfolio-proof-grid article:nth-child(4) .proof-note", text: { en: "Single-article metrics shown above", zh: "单篇文章数据如上" } },
  { selector: "#credentials .section-kicker", text: { en: "Additional Proof", zh: "补充背书" } },
  { selector: "#credentials h2", text: { en: "Awards, public influence, and business credibility that add context.", zh: "补充公司名、奖项和公众影响力背后的含金量。" } },
  {
    selector: "#credentials .section-intro",
    text: {
      en: "These signals are secondary to the AI GTM story, but they help recruiters quickly understand the credibility behind the company names, awards, and market-facing work.",
      zh: "这些信号不抢 AI GTM 主线，但能帮助面试官快速理解公司名、奖项和市场-facing 工作背后的可信度。",
    },
  },
  { selector: ".credential-grid article:nth-child(1) h3", text: { en: "National entrepreneurship awards", zh: "国家级创业奖项背书" } },
  { selector: ".credential-grid article:nth-child(1) p", text: { en: "Internet+ National Silver Award from 3.4M+ entries, approx. top 0.03%; Challenge Cup National Bronze; Beijing Outstanding Entrepreneurial Team Leader; 5 national-level entrepreneurship awards.", zh: "互联网+ 全国银奖，340 万+ 参赛项目，约 Top 0.03%；挑战杯全国铜奖；北京市优秀创业团队负责人；累计 5 项国家级创业奖项。" } },
  { selector: ".credential-grid article:nth-child(2) h3", text: { en: "Research and IP proof", zh: "科研与知识产权证明" } },
  { selector: ".credential-grid article:nth-child(2) p", text: { en: "2 national patents, including one invention patent; EI-indexed paper; contributor to The Essence of Chinese Folk Culture.", zh: "2 项国家专利，其中包括 1 项发明专利；EI 检索论文；参与《中国民俗文化精粹》相关内容。" } },
  { selector: ".credential-grid article:nth-child(3) h3", text: { en: "Public creator influence", zh: "公开平台影响力" } },
  { selector: ".credential-grid article:nth-child(3) p", text: { en: "Zhihu 30M+ views and 101K+ likes; Weibo V Light Program with a 6M-view post; Xiaohongshu 1M-view debut note; TikTok 350K+ cumulative likes.", zh: "知乎 3000 万+ 浏览与 10.1 万+ 点赞；入选微博 V 光计划，单条微博 600 万浏览；小红书首篇 100 万浏览；TikTok 累计 35 万+ 点赞。" } },
  { selector: ".credential-grid article:nth-child(4) h3", text: { en: "Agency and commercial context", zh: "代理商与商业化经历" } },
  { selector: ".credential-grid article:nth-child(4) p", text: { en: "4A agency experience supporting enterprise clients including Weichai Power and Sinotruk; YAMI, HungryPanda, Wanda, Hengdian, and Sohu experience preserved as supporting business proof.", zh: "具备 4A 代理商经验，服务过潍柴动力、中国重汽等企业客户；同时保留 YAMI、HungryPanda、万达、横店、搜狐等经历作为补充商业证明。" } },
  { selector: "#gtm .section-kicker", text: { en: "Fast-Start GTM", zh: "快速启动打法" } },
  { selector: "#gtm h2", text: { en: "Immediate activation, measurable pilots, repeatable GTM.", zh: "入职后立即推动商业信号、可衡量 pilot 和可复用 GTM 机制。" } },
  { selector: ".plan-grid article:nth-child(1) span", text: { en: "Week 1-2", zh: "第 1-2 周" } },
  { selector: ".plan-grid article:nth-child(1) h3", text: { en: "Activate the first commercial signals", zh: "启动第一批商业信号" } },
  { selector: ".plan-grid article:nth-child(1) p", text: { en: "Map priority segments, sharpen the use-case narrative, and identify design partners, communities, and partner channels that can produce fast market feedback.", zh: "快速定位优先客群和 AI use case，锁定能产生真实反馈的 design partners、社群和合作渠道。" } },
  { selector: ".plan-grid article:nth-child(2) span", text: { en: "Day 15-30", zh: "第 15-30 天" } },
  { selector: ".plan-grid article:nth-child(2) h3", text: { en: "Launch measurable pilot motions", zh: "落地可衡量 pilot" } },
  { selector: ".plan-grid article:nth-child(2) p", text: { en: "Turn early conversations into lightweight pilots, partner co-marketing tests, community activations, or creator-led demos with clear success metrics.", zh: "把早期客户/伙伴沟通转化为轻量 pilot、联合营销测试、社群激活或创作者 demo，并用明确指标验证效果。" } },
  { selector: ".plan-grid article:nth-child(3) span", text: { en: "Day 31-60", zh: "第 31-60 天" } },
  { selector: ".plan-grid article:nth-child(3) h3", text: { en: "Convert signal into repeatable GTM assets", zh: "沉淀可复制 GTM 资产" } },
  { selector: ".plan-grid article:nth-child(3) p", text: { en: "Package what works into case studies, outreach scripts, onboarding content, campaign reports, and follow-up sequences that support sales and partner expansion.", zh: "把有效动作沉淀为案例、外联话术、onboarding 内容、campaign 报告和跟进节奏，支持销售转化与伙伴扩展。" } },
  { selector: ".plan-grid article:nth-child(4) span", text: { en: "Day 61-90", zh: "第 61-90 天" } },
  { selector: ".plan-grid article:nth-child(4) h3", text: { en: "Scale the partner and community engine", zh: "放大有效渠道与伙伴引擎" } },
  { selector: ".plan-grid article:nth-child(4) p", text: { en: "Prioritize the highest-signal channels, refine conversion goals, and build a repeatable partner/community motion for pipeline, adoption, and market learning.", zh: "聚焦最高信号渠道，优化转化目标，形成可复制的合作伙伴/社群增长机制，持续服务 pipeline、产品采用和市场学习。" } },
  { selector: "#experience .section-kicker", text: { en: "Experience", zh: "核心经历" } },
  { selector: "#experience h2", text: { en: "GTM, partnerships, community, and AI workflow execution.", zh: "围绕 GTM、合作伙伴、社群增长和 AI 工作流落地的实战经历。" } },
  { selector: ".timeline article:nth-child(1) .timeline-date span:nth-child(1)", text: { en: "Nov 2025 - Present", zh: "2025年11月 - 至今" } },
  { selector: ".timeline article:nth-child(1) .timeline-date span:nth-child(2)", text: { en: "Los Angeles", zh: "洛杉矶" } },
  { selector: ".timeline article:nth-child(1) h3", text: { en: "Marketing Director & Growth Lead | DITTO.AI", zh: "市场总监与增长负责人 | DITTO.AI" } },
  { selector: ".timeline article:nth-child(1) p", text: { en: "AI-native dating platform · hands-on GTM, BD, and growth execution", zh: "AI Native dating 平台 · GTM、BD 与增长一线执行" } },
  { selector: ".timeline article:nth-child(1) li:nth-child(1)", text: { en: "Led campus growth and community strategy while coordinating marketing and BD workstreams with a 30+ member team, driving 800% user growth and 150K+ cumulative users.", zh: "负责校园增长与社群策略，协调 30+ 人团队的营销和 BD 工作流，推动 800% 用户增长和 150K+ 累计用户。" } },
  { selector: ".timeline article:nth-child(1) li:nth-child(2)", text: { en: "Used the YikYak x Ditto collaboration as one partner activation motion across 733 U.S. universities within a broader partner-led campaign that drove 100K+ partner-channel sign-ups.", zh: "将 YikYak x Ditto 合作作为关键伙伴激活动作之一，覆盖 733 所美国大学，并纳入更广义的合作方增长 campaign，共推动 100K+ 合作渠道注册。" } },
  { selector: ".timeline article:nth-child(1) li:nth-child(3)", text: { en: "Built a campus viral growth matrix across partner collaboration, creative posters, offline yacht activation, influencer marketing, and original video content.", zh: "通过合作方合作、创意海报、线下游艇活动、influencer marketing 和创新视频内容，搭建校园病毒式增长矩阵。" } },
  { selector: ".timeline article:nth-child(1) li:nth-child(4)", text: { en: "Built AI-native product knowledge and marketing workflows for product specs, ops data, influencer marketing, and field marketing.", zh: "搭建面向产品文档、运营数据、influencer marketing 和 field marketing 的 AI 知识与营销工作流。" } },
  { selector: ".timeline article:nth-child(2) .timeline-date span:nth-child(1)", text: { en: "May 2023 - Mar 2026", zh: "2023年5月 - 2026年3月" } },
  { selector: ".timeline article:nth-child(2) .timeline-date span:nth-child(2)", text: { en: "Los Angeles", zh: "洛杉矶" } },
  { selector: ".timeline article:nth-child(2) h3", text: { en: "Growth Marketing & Business Development Manager | ENCMOBILE", zh: "增长营销与商务拓展经理 | ENCMOBILE" } },
  { selector: ".timeline article:nth-child(2) p", text: { en: "Telecom, student market, and local growth", zh: "通信服务、学生市场与本地增长" } },
  { selector: ".timeline article:nth-child(2) li:nth-child(1)", text: { en: "Delivered 8x YoY user growth and 10x revenue growth through integrated marketing, local partnerships, paid media, campus channels, and BD execution.", zh: "通过整合营销、本地合作、付费投放、校园渠道和 BD 执行，实现 8x 年度用户增长与 10x 收入增长。" } },
  { selector: ".timeline article:nth-child(2) li:nth-child(2)", text: { en: "Built deep relationships across 70+ U.S. universities, including Harvard, Stanford, and Cornell, while negotiating 40+ vendor and 60+ student organization partnerships.", zh: "合作 70+ 所美国名校，包括哈佛、斯坦福、康奈尔等，并拓展 40+ 供应商与 60+ 学生组织合作。" } },
  { selector: ".timeline article:nth-child(2) li:nth-child(3)", text: { en: "Managed six-figure to multi-million budgets and was awarded Best Sales Champion in 2024.", zh: "管理从六位数到百万级预算，并获得 2024 Best Sales Champion。" } },
  { selector: ".timeline article:nth-child(3) .timeline-date span:nth-child(1)", text: { en: "Aug 2021 - Jan 2025", zh: "2021年8月 - 2025年1月" } },
  { selector: ".timeline article:nth-child(3) .timeline-date span:nth-child(2)", text: { en: "Los Angeles", zh: "洛杉矶" } },
  { selector: ".timeline article:nth-child(3) h3", text: { en: "Founder | Marketing & BD Lead | PANDAPAL", zh: "创始人 | 市场与 BD 负责人 | PANDAPAL" } },
  { selector: ".timeline article:nth-child(3) p", text: { en: "Global digital solutions provider, marketing agency, and AI campus community product", zh: "Global Digital Solutions Provider、Marketing Agency 与 AI 校园社区产品" } },
  { selector: ".timeline article:nth-child(3) li:nth-child(1)", text: { en: "Built PANDAPAL as both a global digital solutions provider / marketing agency and a 0-to-1 AI campus community product, reaching 100K+ members across Xiaohongshu (RED), TikTok, Discord, Telegram, and WeChat.", zh: "将 PANDAPAL 打造成 Global Digital Solutions Provider / Marketing Agency 与 0 到 1 AI 校园社区产品，在小红书、TikTok、Discord、Telegram 和微信触达 100K+ 成员。" } },
  { selector: ".timeline article:nth-child(3) li:nth-child(2)", text: { en: "Personally led founder-level BD with brands, sponsors, vendors, and creator partners while building 200+ brand collaboration resources.", zh: "作为创始人亲自推进品牌、赞助商、供应商和创作者伙伴商务合作，并沉淀 200+ 合作过的品牌资源。" } },
  { selector: ".timeline article:nth-child(3) li:nth-child(3)", text: { en: "Independently built a Xiaohongshu Viral Copywriting AI Agent with 12,400+ users.", zh: "独立创作小红书爆款文案 AI Agent，累计 12,400+ 用户。" } },
  { selector: ".timeline article:nth-child(4) .timeline-date span:nth-child(1)", text: { en: "2018 - Jun 2022", zh: "2018年 - 2022年6月" } },
  { selector: ".timeline article:nth-child(4) .timeline-date span:nth-child(2)", text: { en: "Beijing / Zhejiang", zh: "北京 / 浙江" } },
  { selector: ".timeline article:nth-child(4) h3", text: { en: "Founder & Product/GTM Lead | PEACHJAM / Legend Co-Shooting", zh: "创始人兼产品/GTM 负责人 | PEACHJAM / Legend Co-Shooting" } },
  { selector: ".timeline article:nth-child(4) p", text: { en: "Film production, creator workflow, and later AI-assisted workflow framing", zh: "影视制作、创作者工作流与 AI 辅助生产场景" } },
  { selector: ".timeline article:nth-child(4) li:nth-child(1)", text: { en: "Designed AI-assisted video and film production workflows from script and storyboard to shot planning and production coordination.", zh: "设计从剧本、分镜到拍摄计划和制作协同的 AI 辅助影视创作流程。" } },
  { selector: ".timeline article:nth-child(4) li:nth-child(2)", text: { en: "Built a 3,000+ professional creator community and aggregated 6,000+ film production resources.", zh: "搭建 3,000+ 专业创作者社群，并聚合 6,000+ 影视制作资源。" } },
  { selector: ".timeline article:nth-child(4) li:nth-child(3)", text: { en: "Led a 40+ person cross-functional team and reduced delivery cycle by 50% through workflow standardization.", zh: "带领 40+ 人跨职能团队，通过流程标准化将交付周期缩短 50%。" } },
  { selector: ".timeline article:nth-child(4) li:nth-child(4)", text: { en: "Won Internet+ National Silver Award from 3.4M+ entries, reached approx. top 0.03%, and was recognized as Beijing Outstanding Entrepreneurial Team Leader.", zh: "在 340 万+ 参赛项目中获得互联网+全国银奖，约 Top 0.03%，并获评北京市优秀创业团队负责人。" } },
  { selector: "#skills .section-kicker", text: { en: "Skills", zh: "能力组合" } },
  { selector: "#skills h2", text: { en: "Business, growth, and AI adoption toolkit.", zh: "兼具商务拓展、增长营销和 AI 产品采用的复合能力。" } },
  { selector: ".skills-grid article:nth-child(1) h3", iconText: { en: "BD & Partnerships", zh: "BD 与生态合作" } },
  { selector: ".skills-grid article:nth-child(1) p", text: { en: "Founder-led BD, ecosystem partnerships, partner-led GTM, co-marketing, client discovery, use-case framing, vendor negotiation, campus/community partnerships, partner activation.", zh: "Founder-led BD、生态合作、合作型 GTM、联合营销、客户需求发现、use case framing、供应商谈判、校园/社群合作与伙伴激活。" } },
  { selector: ".skills-grid article:nth-child(2) h3", iconText: { en: "GTM & Growth", zh: "GTM 与增长" } },
  { selector: ".skills-grid article:nth-child(2) p", text: { en: "GTM strategy, demand generation, launch campaigns, community-led acquisition, offline-to-online conversion, funnel analysis, UTM tracking, ROI review.", zh: "GTM 策略、需求生成、上线 campaign、社群获客、线下到线上转化、漏斗分析、UTM 追踪和 ROI 复盘。" } },
  { selector: ".skills-grid article:nth-child(3) h3", iconText: { en: "AI Workflow Adoption", zh: "AI 产品采用" } },
  { selector: ".skills-grid article:nth-child(3) p", text: { en: "AI-assisted content workflows, creator workflow education, product knowledge systems, agent-readable documentation, Coze, Claude, Codex, Cursor, Notion AI.", zh: "AI 辅助内容工作流、创作者工作流教育、产品知识系统、Agent 可读文档、Coze、Claude、Codex、Cursor、Notion AI。" } },
  { selector: ".skills-grid article:nth-child(4) h3", iconText: { en: "Creator & Community", zh: "创作者与社群" } },
  { selector: ".skills-grid article:nth-child(4) p", text: { en: "Xiaohongshu (RED), TikTok, Instagram, Discord, Telegram, WeChat, creator sourcing, KOL/KOC activation, ambassador programs, community engagement loops.", zh: "小红书、TikTok、Instagram、Discord、Telegram、微信、创作者 sourcing、KOL/KOC 激活、ambassador 计划和社群互动闭环。" } },
  { selector: ".skills-grid article:nth-child(5) h3", iconText: { en: "Analytics & Channels", zh: "数据与渠道" } },
  { selector: ".skills-grid article:nth-child(5) p", text: { en: "Tableau, GA4, PostHog, Excel, Google Ads, Meta Ads, Amazon Ads, Baidu SEO/SEM, campaign performance review, segmentation.", zh: "Tableau、GA4、PostHog、Excel、Google Ads、Meta Ads、Amazon Ads、百度 SEO/SEM、campaign 复盘与用户分层。" } },
  { selector: ".skills-grid article:nth-child(6) h3", iconText: { en: "Languages", zh: "语言与市场" } },
  { selector: ".skills-grid article:nth-child(6) p", text: { en: "English: full professional proficiency. Mandarin: native. Bilingual U.S.-China market and cross-cultural execution.", zh: "英文具备专业工作能力，中文母语；能够承担中美市场和跨文化协作场景。" } },
  { selector: ".closing-section .section-kicker", text: { en: "AI GTM · Partnerships · Growth", zh: "AI GTM · 生态 BD · 增长" } },
  { selector: ".closing-section h2", text: { en: "Ready to help AI-native products turn market signal into adoption, partnerships, and measurable growth.", zh: "期待帮助 AI Native 产品把市场信号转化为用户采用、合作伙伴增长和可衡量的商业结果。" } },
  { selector: ".closing-section .button:nth-child(1) span", text: { en: "Download Resume", zh: "下载英文简历" } },
  { selector: ".closing-section .button:nth-child(2) span", text: { en: "Contact", zh: "联系我" } },
];

const localizedMeta = {
  en: {
    htmlLang: "en",
    title: "Zhe Chen | AI GTM & Business Development",
    description: "Zhe Chen's AI go-to-market, business development, growth marketing, and partnership-led growth resume site.",
    headerLabel: "Primary navigation",
    navLabel: "Sections",
    toggleLabel: "Switch language",
    iconLabel: "Open resume PDF",
    focusLabel: "Focus areas",
    contactLabel: "Contact information",
    imageAlt: "Desk with campaign planning, analytics, and AI workflow materials",
    proofLabel: "Selected proof",
    outcomesLabel: "Selected outcomes",
  },
  zh: {
    htmlLang: "zh-Hans",
    title: "陈喆 | AI GTM 与商务拓展",
    description: "陈喆的 AI Native GTM、商务拓展、增长营销和伙伴驱动增长个人简历网站。",
    headerLabel: "主导航",
    navLabel: "页面章节",
    toggleLabel: "切换语言",
    iconLabel: "打开英文简历 PDF",
    focusLabel: "重点方向",
    contactLabel: "联系方式",
    imageAlt: "包含 campaign 规划、数据分析和 AI 工作流材料的桌面场景",
    proofLabel: "精选证明",
    outcomesLabel: "精选成果",
  },
};

const safeStorage = {
  get(key) {
    try {
      return window.localStorage.getItem(key);
    } catch {
      return null;
    }
  },
  set(key, value) {
    try {
      window.localStorage.setItem(key, value);
    } catch {
      // Ignore storage failures on restricted browser contexts.
    }
  },
};

const initIcons = () => {
  if (window.lucide) {
    window.lucide.createIcons({
      attrs: {
        "stroke-width": 2,
        "aria-hidden": "true",
      },
    });
  }
};

const setTextWithIcon = (element, text) => {
  const icon = element.querySelector("svg, i");
  element.textContent = "";
  if (icon) {
    element.append(icon);
  }
  element.append(document.createTextNode(text));
};

const metricSignalPattern =
  /#\d+|\d{1,3}(?:,\d{3})+\+?|\d+(?:\.\d+)?(?:K\+|M-view|M|x|%|\+)|\d+(?:,\d{3})?\s*(?:U\.S\. universities|universities|users|sign-ups|members|followers|plays|conversations|vendors|student organizations|brands|resources|groups|campaign users)|\d+(?:\.\d+)?\s*万(?:播放|点赞)|\d+\s*(?:所美国大学|名目标用户|人团队|供应商|学生组织|品牌|影视制作资源|创作者社群|活跃社群|对话|用户|注册|累计用户|成员)/g;

const highlightMetricSignals = () => {
  const selectors = [
    ".distribution-grid p",
    ".case-card p",
    ".case-card li",
    ".portfolio-proof-grid p",
    ".credential-grid p",
    ".timeline li",
  ].join(", ");

  document.querySelectorAll(selectors).forEach((container) => {
    const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const parent = node.parentElement;
        if (!parent || parent.closest("strong, a, button, script, style, .case-outcomes, .metric-tags")) {
          return NodeFilter.FILTER_REJECT;
        }
        metricSignalPattern.lastIndex = 0;
        return metricSignalPattern.test(node.nodeValue) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      },
    });

    const textNodes = [];
    while (walker.nextNode()) textNodes.push(walker.currentNode);

    textNodes.forEach((node) => {
      const text = node.nodeValue;
      const fragment = document.createDocumentFragment();
      let lastIndex = 0;
      metricSignalPattern.lastIndex = 0;

      for (const match of text.matchAll(metricSignalPattern)) {
        if (match.index > lastIndex) {
          fragment.append(document.createTextNode(text.slice(lastIndex, match.index)));
        }
        const signal = document.createElement("strong");
        signal.className = "text-signal";
        signal.textContent = match[0];
        fragment.append(signal);
        lastIndex = match.index + match[0].length;
      }

      if (lastIndex < text.length) {
        fragment.append(document.createTextNode(text.slice(lastIndex)));
      }

      node.replaceWith(fragment);
    });
  });
};

const applyLanguage = (language) => {
  const lang = language === "zh" ? "zh" : "en";
  const meta = localizedMeta[lang];

  document.documentElement.lang = meta.htmlLang;
  document.title = meta.title;
  document.querySelector('meta[name="description"]')?.setAttribute("content", meta.description);
  document.querySelector(".topbar")?.setAttribute("aria-label", meta.headerLabel);
  document.querySelector(".navlinks")?.setAttribute("aria-label", meta.navLabel);
  document.querySelector("[data-lang-toggle]")?.setAttribute("aria-label", meta.toggleLabel);
  document.querySelector("[data-lang-toggle]")?.setAttribute("aria-pressed", String(lang === "zh"));
  document.querySelector(".icon-button")?.setAttribute("aria-label", meta.iconLabel);
  document.querySelector(".hero-badges")?.setAttribute("aria-label", meta.focusLabel);
  document.querySelector(".contact-strip")?.setAttribute("aria-label", meta.contactLabel);
  document.querySelector(".hero-visual img")?.setAttribute("alt", meta.imageAlt);
  document.querySelector(".hero-proof")?.setAttribute("aria-label", meta.proofLabel);
  document.querySelector(".metric-band")?.setAttribute("aria-label", meta.outcomesLabel);

  localizedNodes.forEach((item) => {
    const element = document.querySelector(item.selector);
    if (!element) return;

    if (item.html) {
      element.innerHTML = item.html[lang];
      return;
    }

    if (item.iconText) {
      setTextWithIcon(element, item.iconText[lang]);
      return;
    }

    element.textContent = item.text[lang];
  });

  document.querySelectorAll("[data-lang-option]").forEach((option) => {
    option.classList.toggle("is-active", option.dataset.langOption === lang);
  });

  safeStorage.set(languageKey, lang);
  initIcons();
  highlightMetricSignals();
};

const initLanguageToggle = () => {
  const toggle = document.querySelector("[data-lang-toggle]");
  const stored = safeStorage.get(languageKey);
  const initialLanguage = stored === "zh" ? "zh" : "en";

  applyLanguage(initialLanguage);

  if (!toggle) return;

  toggle.addEventListener("click", () => {
    const nextLanguage = document.documentElement.lang === "zh-Hans" ? "en" : "zh";
    applyLanguage(nextLanguage);
  });
};

const initSectionTracking = () => {
  const links = Array.from(document.querySelectorAll('.navlinks a[href^="#"]'));
  const sections = links
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  if (!sections.length || !("IntersectionObserver" in window)) {
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visible) return;

      links.forEach((link) => {
        link.toggleAttribute("aria-current", link.getAttribute("href") === `#${visible.target.id}`);
      });
    },
    {
      rootMargin: "-25% 0px -60% 0px",
      threshold: [0.1, 0.35, 0.6],
    },
  );

  sections.forEach((section) => observer.observe(section));
};

const initReveal = () => {
  const revealItems = document.querySelectorAll(
    [
      ".metric-band article",
      ".fit-section .section-heading",
      ".fit-grid article",
      ".case-section .section-heading",
      ".case-card",
      ".portfolio-proof-section .section-heading",
      ".portfolio-proof-grid article",
      ".gtm-section .section-heading",
      ".plan-grid article",
      ".experience-section .section-heading",
      ".timeline article",
      ".skills-section .section-heading",
      ".skills-grid article",
      ".closing-section",
    ].join(", "),
  );

  revealItems.forEach((item) => item.setAttribute("data-reveal", ""));

  if (!("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    document.documentElement.classList.add("motion-ready");
    return;
  }

  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

  revealItems.forEach((item) => {
    const rect = item.getBoundingClientRect();
    if (rect.top < viewportHeight * 0.94 && rect.bottom > 0) {
      item.classList.add("is-visible");
    }
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      rootMargin: "0px 0px -12% 0px",
      threshold: 0.12,
    },
  );

  revealItems.forEach((item) => observer.observe(item));
  requestAnimationFrame(() => {
    document.documentElement.classList.add("motion-ready");
  });
};

const initMetricCountUp = () => {
  const metrics = Array.from(document.querySelectorAll("[data-count]"));
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const formatter = new Intl.NumberFormat("en-US");

  const renderFinal = (metric) => {
    const value = Number(metric.dataset.count || "0");
    metric.textContent = `${formatter.format(value)}${metric.dataset.suffix || ""}`;
  };

  const animateMetric = (metric) => {
    if (metric.dataset.counted === "true") return;
    metric.dataset.counted = "true";

    const target = Number(metric.dataset.count || "0");
    const suffix = metric.dataset.suffix || "";
    const duration = 1000;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      metric.textContent = `${formatter.format(Math.round(target * eased))}${suffix}`;
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  };

  if (!metrics.length || reduceMotion) {
    metrics.forEach(renderFinal);
    return;
  }

  if (!("IntersectionObserver" in window)) {
    metrics.forEach(animateMetric);
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        animateMetric(entry.target);
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.5 },
  );

  metrics.forEach((metric) => observer.observe(metric));
};

const initHeroDepth = () => {
  const visual = document.querySelector(".hero-visual");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!visual || reduceMotion) return;

  let frame = 0;

  const update = () => {
    frame = 0;
    const rect = visual.getBoundingClientRect();
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const midpoint = rect.top + rect.height / 2;
    const progress = Math.max(-1, Math.min(1, (midpoint - viewportHeight / 2) / viewportHeight));
    visual.style.setProperty("--hero-shift", `${progress * -12}px`);
  };

  const scheduleUpdate = () => {
    if (frame) return;
    frame = requestAnimationFrame(update);
  };

  update();
  window.addEventListener("scroll", scheduleUpdate, { passive: true });
  window.addEventListener("resize", scheduleUpdate);
};

initIcons();
initLanguageToggle();
initSectionTracking();
initReveal();
initMetricCountUp();
initHeroDepth();
