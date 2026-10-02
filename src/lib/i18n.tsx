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
    nameFirst: "Katherine ",
    nameLast: "Rush",
    nameEnd: ".",

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

    // Projects page
    projectsHeading1: "Things I've",
    projectsHeading2: "built.",
    projectsLive: "Live",
    projectsMoreOn: "More on",
    projectDesc1:
      "A meal planning web app designed to make weekly cooking simple and stress-free.",
    projectDesc2:
      "A fun, decision-based role-playing game, where you can create your own character and story or leave it up to AI to take you on a journey.",
    projectDesc3:
      "A developer-focused typing speed test. Choose a language, type real code snippets, and track your WPM, CPM, and accuracy.",
  },
  ja: {
    // Nav + home
    home: "ホーム",
    about: "プロフィール",
    projects: "プロジェクト",
    design: "デザイン",
    available: "お仕事受付中",
    role: "エンジニア / クリエイター",
    intro:
      "Railsを軸にしたフルスタックエンジニアです。使いやすくて、見た目もすっきりしたものを作るのが好きです。",
    webProjects: "Webプロジェクト",
    graphicDesign: "グラフィックデザイン",
    aboutMe: "自己紹介",
    nameFirst: "キャサリン・",
    nameLast: "ラッシュ",
    nameEnd: "",

    // About page
    aboutHeading1: "ちょっとだけ、",
    aboutHeading2: "自己紹介。",
    aboutBackground: "経歴",
    aboutBio1:
      "Ruby on Railsを中心に開発してきたエンジニアです。動作が速くて、見た目もすっきりしていて、ちゃんと役に立つものを作るのが好きです。",
    aboutBio2:
      "プログラミングを始める前は、グラフィックデザインを勉強していました。今は、日本で役に立つプロジェクトに取り組みつつ、最新のWeb開発について学ぶ毎日です。",
    aboutBio3:
      "デスクを離れたら、料理をしているか、走っているか、植物の世話をしています。",
    aboutEmail: "メール",
    aboutSkills: "スキル",
    skillsLanguages: "プログラミング言語",
    skillsFrameworks: "フレームワーク",
    skillsTools: "ツール",
    aboutRoleLabel: "職種",
    aboutRole: "フルスタックエンジニア",
    aboutLocationLabel: "拠点",
    aboutLocation: "東京",
    aboutStatusLabel: "状況",

    // Design page
    designHeading1: "アート &",
    designHeading2: "デザイン",
    designCheckOut: "詳しくはこちら",
    designBrandGuide: "ブランドガイドライン",
    designGetInTouch: "お問い合わせ",
    tagPrint: "印刷物",
    tagLogoDesign: "ロゴデザイン",
    tagBranding: "ブランディング",
    tagVideoEditing: "動画編集",
    designDesc1:
      "Kevinさんは、アメリカを拠点に活動するフリーランスのドラマーです。幅広い音楽ジャンルへの好みを表現した、力強くファンキーなロゴと名刺をデザインしました。",
    designDesc2:
      "The Gallant Greyhoundは、主に犬向けのかぎ針編みグッズをオーダーメイドで制作する個人経営のショップです。オーナーの愛犬であるグレイハウンドをマスコットに、リズム感があって遊び心のあるロゴをご希望でした。",
    designDesc3:
      "料理が大好きな気持ちや、普段の料理、そして日本で暮らす外国人としての食生活を発信したいと考えました。日本語と英語がまざり合うイメージを、楽しくて印象に残るマスコットで表現しました。",
    designDesc4:
      "オーナーの方々が立ち上げたのは、外国人が安心して仕事を探せる、誠実でわかりやすい求人サイトです。そのモダンでシンプルな世界観が伝わるロゴを制作しました。",
    designDesc5:
      "チームで、献立づくりの手間をなくすアプリを作ることになり、このカラフルなアプリの顔となる、モダンで新鮮なロゴを制作しました。",

    // Projects page
    projectsHeading1: "これまでに",
    projectsHeading2: "作ったもの",
    projectsLive: "デモ",
    projectsMoreOn: "その他のプロジェクトは",
    projectDesc1:
      "毎週の献立づくりをシンプルに、ストレスなく進められるようにしたWebアプリです。",
    projectDesc2:
      "選択で物語が進んでいくロールプレイングゲームです。キャラクターやストーリーを自分で作ることも、AIにおまかせで冒険に出ることもできます。",
    projectDesc3:
      "開発者向けのタイピング速度テストです。プログラミング言語を選んで実際のコードを入力し、WPM・CPM・正確率を記録できます。",
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
