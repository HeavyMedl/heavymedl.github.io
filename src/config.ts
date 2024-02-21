import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://heavymedl.github.io", // replace this with your deployed domain
  author: "Kurt Medley",
  desc: "Kurt Medley is a full-stack engineer based in Seattle, WA.",
  title: "heavymedl.dev",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 10,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: true,
  svg: false,
  // width: '212', // edit directly in header.astro
  height: "50",
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/heavymedl",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "GitLab",
    href: "https://gitlab.com/kmedley",
    linkTitle: `${SITE.title} on GitLab`,
    active: true,
  },
  {
    name: "Facebook",
    href: "https://github.com/heavymedl",
    linkTitle: `${SITE.title} on Facebook`,
    active: false,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/heavy.medl",
    linkTitle: `${SITE.title} on Instagram`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/kurt-medley",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:kurtdmedley@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
  {
    name: "Twitter",
    href: "https://github.com/heavymedl",
    linkTitle: `${SITE.title} on Twitter`,
    active: false,
  },
  {
    name: "Twitch",
    href: "https://github.com/heavymedl",
    linkTitle: `${SITE.title} on Twitch`,
    active: false,
  },
  {
    name: "YouTube",
    href: "https://github.com/heavymedl",
    linkTitle: `${SITE.title} on YouTube`,
    active: false,
  },
  {
    name: "WhatsApp",
    href: "https://github.com/heavymedl",
    linkTitle: `${SITE.title} on WhatsApp`,
    active: false,
  },
  {
    name: "Snapchat",
    href: "https://github.com/heavymedl",
    linkTitle: `${SITE.title} on Snapchat`,
    active: false,
  },
  {
    name: "Pinterest",
    href: "https://github.com/heavymedl",
    linkTitle: `${SITE.title} on Pinterest`,
    active: false,
  },
  {
    name: "TikTok",
    href: "https://github.com/heavymedl",
    linkTitle: `${SITE.title} on TikTok`,
    active: false,
  },
  {
    name: "CodePen",
    href: "https://github.com/heavymedl",
    linkTitle: `${SITE.title} on CodePen`,
    active: false,
  },
  {
    name: "Discord",
    href: "https://github.com/heavymedl",
    linkTitle: `${SITE.title} on Discord`,
    active: false,
  },
  {
    name: "Reddit",
    href: "https://github.com/heavymedl",
    linkTitle: `${SITE.title} on Reddit`,
    active: false,
  },
  {
    name: "Skype",
    href: "https://github.com/heavymedl",
    linkTitle: `${SITE.title} on Skype`,
    active: false,
  },
  {
    name: "Steam",
    href: "https://github.com/heavymedl",
    linkTitle: `${SITE.title} on Steam`,
    active: false,
  },
  {
    name: "Telegram",
    href: "https://github.com/heavymedl",
    linkTitle: `${SITE.title} on Telegram`,
    active: false,
  },
  {
    name: "Mastodon",
    href: "https://github.com/heavymedl",
    linkTitle: `${SITE.title} on Mastodon`,
    active: false,
  },
];
