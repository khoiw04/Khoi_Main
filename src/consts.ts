import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'Khoi',
  description:
    'Khoi is Design Engineer in Vietnam. Asking, and answering the outstanding things by self-taught',
  href: 'https://khoiwn04.com',
  author: 'khoiw04',
  locale: 'en-US',
  featuredPostCount: 3,
  postsPerPage: 3,
}

export const NAV_LINKS: SocialLink[] = [
  {
    label: 'Work',
    href: '/work'
  },
  {
    label: 'Submit Form',
    href: 'https://blog.khoiwn04.com/en/form'
  }
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://discord.gg/NcuCYAjdp2',
    label: 'Discord',
  },
  {
    href: 'https://github.com/khoiw04',
    label: 'GitHub',
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
