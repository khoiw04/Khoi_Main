import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'Khoi',
  description:
    'astro-erudite is a opinionated, unstyled blogging template—built with Astro, Tailwind, and shadcn/ui.',
  href: 'https://khoiwn04.com',
  author: 'khoiw04',
  locale: 'en-US',
  featuredPostCount: 2,
  postsPerPage: 3,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/works',
    label: 'work',
  },
  {
    href: '/about',
    label: 'about',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/khoiw04',
    label: 'GitHub',
  },
  {
    href: 'https://discord.gg/NcuCYAjdp2',
    label: 'Discord',
  },
  {
    href: 'mailto:contact@khoiwn04.com',
    label: 'Email',
  },
  {
    href: '/rss.xml',
    label: 'RSS',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  Discord: 'simple-icons:discord',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}
