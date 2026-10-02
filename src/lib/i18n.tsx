"use client";
import { createContext, useContext, useEffect, useState } from "react";

const dict = {
  en: {
    // Nav + home
    home: "Home",
    about: "About",
    projects: "Projects",
    design: "Design",
    available: "Available for work",
    role: "Developer & Builder",
    intro:
      "Full-stack developer with a background in Rails. I like building useful things with clean visuals.",
    webProjects: "Web Projects",
    graphicDesign: "Graphic Design",
    aboutMe: "About Me",

    // About page
    aboutHeading1: "A bit about",
    aboutHeading2: "who I am.",
    aboutBackground: "Background",
    aboutBio1:
      "I'm a developer with a background in Ruby on Rails. I enjoy building things that are fast, clean, and actually useful.",
    aboutBio2:
      "Before coding, I studied Graphic Design. These days I spend most of my time working on projects useful in Japan and learning everything I can about modern web development.",
    aboutBio3:
      "When I'm not at my desk, you'll find me cooking, running, and taking care of my plants.",
    aboutEmail: "Email",
    aboutSkills: "Skills",
    skillsLanguages: "Languages",
    skillsFrameworks: "Frameworks",
    skillsTools: "Tools",
    aboutRoleLabel: "Role",
    aboutRole: "Full-Stack Developer",
    aboutLocationLabel: "Location",
    aboutLocation: "Tokyo, Japan",
    aboutStatusLabel: "Status",

    // Design page
    designHeading1: "Art &",
    designHeading2: "Design.",
    designCheckOut: "Check them out",
    designBrandGuide: "Brand Guide",
    designGetInTouch: "Get in touch",
    tagPrint: "Print",
    tagLogoDesign: "Logo Design",
    tagBranding: "Branding",
    tagVideoEditing: "Video Editing",
    designDesc1:
      "Kevin is a US-based freelance drummer. I developed a bold, funky logo and business card that expresses his taste in a variety of music genres.",
    designDesc2:
      "The Gallant Greyhound is an independent shop that creates custom crocheted products mainly for dogs. The owner wanted to incorporate a rhythmic, whimsical logo using her own greyhound as the company mascot.",
    designDesc3:
      "I wanted to share my passion for cooking, how I make meals, and what I eat as a foreigner living in Japan. I wanted to create a fun, distinguishable mascot to represent the fusion of Japanese and English.",
    designDesc4:
      "The owners developed an honest, straightforward job site to help expats find jobs with no surprises. I developed a logo to help capture the modern simplicity of their vision.",
    designDesc5:
      "My team wanted to build an app to help take the hassle out of meal planning. I developed a modern, fresh logo to tie together this colorful tool.",
  },
  ja: {
    // Nav + home
    home: "ホーム",
    about: "私について",
    projects: "プロジェクト",
    design: "デザイン",
    available: "お仕事受付中",
    role: "デベロッパー & ビルダー",
    intro:
      "Railsを軸にしたフルスタックデベロッパーです。使いやすく、見た目もすっきりしたものづくりが好きです。",
    webProjects: "Webプロジェクト",
    graphicDesign: "グラフィックデザイン",
    aboutMe: "自己紹介",

    // About page
    aboutHeading1: "私について、",
    aboutHeading2: "少しだけ。",
    aboutBackground: "経歴",
    aboutBio1:
      "Ruby on Railsをバックグラウンドに持つデベロッパーです。速くて、すっきりしていて、本当に役立つものづくりが好きです。",
    aboutBio2:
      "プログラミングを始める前は、グラフィックデザインを学んでいました。最近は、日本で役立つプロジェクトに取り組みながら、モダンなWeb開発について学べることをすべて吸収しているところです。",
    aboutBio3:
      "デスクを離れているときは、料理をしたり、走ったり、植物の世話をしたりしています。",
    aboutEmail: "メール",
    aboutSkills: "スキル",
    skillsLanguages: "言語",
    skillsFrameworks: "フレームワーク",
    skillsTools: "ツール",
    aboutRoleLabel: "職種",
    aboutRole: "フルスタックデベロッパー",
    aboutLocationLabel: "所在地",
    aboutLocation: "東京、日本",
    aboutStatusLabel: "ステータス",

    // Design page
    designHeading1: "アート &",
    designHeading2: "デザイン。",
    designCheckOut: "詳しくはこちら",
    designBrandGuide: "ブランドガイド",
    designGetInTouch: "お問い合わせ",
    tagPrint: "印刷物",
    tagLogoDesign: "ロゴデザイン",
    tagBranding: "ブランディング",
    tagVideoEditing: "動画編集",
    designDesc1:
      "Kevinはアメリカを拠点に活動するフリーランスのドラマーです。さまざまな音楽ジャンルへの彼の好みを表現する、力強くファンキーなロゴと名刺をデザインしました。",
    designDesc2:
      "The Gallant Greyhoundは、主に犬向けのオリジナルかぎ針編み商品を作る個人ショップです。オーナーご自身のグレイハウンドをマスコットにした、リズミカルで遊び心のあるロゴを取り入れたいというご希望でした。",
    designDesc3:
      "料理への情熱や、普段の食事の作り方、そして日本に住む外国人として何を食べているのかを発信したいと考えました。日本語と英語の融合を表す、楽しくて覚えやすいマスコットを作りました。",
    designDesc4:
      "オーナーの方々は、予想外のことが起きない、誠実でわかりやすい求人サイトを立ち上げ、外国人の仕事探しをサポートしています。そのモダンでシンプルなビジョンを表現するロゴを制作しました。",
    designDesc5:
      "私のチームは、献立づくりの手間を省くアプリを作りたいと考えていました。このカラフルなツールをまとめ上げる、モダンで新鮮なロゴを制作しました。",
  },
} as const;

type Lang = keyof typeof dict;
export type Key = keyof (typeof dict)["en"];

const Ctx = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (k: Key) => string;
}>({ lang: "en", setLang: () => {}, t: (k) => dict.en[k] });

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = localStorage.getItem("lang") as Lang | null;
    if (saved && saved in dict) setLangState(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("lang", l);
  };

  return (
    <Ctx.Provider value={{ lang, setLang, t: (k) => dict[lang][k] }}>
      {children}
    </Ctx.Provider>
  );
}

export const useLang = () => useContext(Ctx);
