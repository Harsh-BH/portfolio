import {
  SiChakraui,
  SiNextdotjs,
  SiReact,
  SiMongodb,
  SiLaravel,
  SiPostgresql,
  SiStripe,
  SiTailwindcss,
  SiThreedotjs,
  SiVite,
  SiSolidity,
  SiFlask,
  SiWalletconnect,
  SiCss3,
} from 'react-icons/si'
import Scanx from '@public/img/projects/scanx.png'
import Ridex from '@public/img/projects/ridex.png'
import CoinX from '@public/img/projects/coinx.png'
import MailCold from '@public/img/projects/mailcold.png'
import MemeCoin from '@public/img/projects/memecoinagent.png'
import KalabamImage from '@public/img/projects/kalabam.png'
import WhyPigeonsImage from '@public/img/projects/why-pigeons-full.png'
import type { Project } from '@utils/types'

export const projects: Project[] = [
  {
    id: '1',
    title: 'ScanX',
    description: {
      en: 'Unmask the Truth: Blockchain-Powered Verification for Media and Text Authenticity.',
      fr: 'Nous connectons des influenceurs et des marques pour collaborer sur des publicités de produits et plus encore.',
    },
    image: { src: Scanx },
    homepage: 'https://scan-x.vercel.app/',
    github: 'https://github.com/Harsh-BH/RideX',
    technologies: [
      { name: 'Vite.js', icon: SiVite, color: '#000000' },
      { name: 'Three.js', icon: SiThreedotjs, color: '#61DAFB' },
      { name: 'Solidity', icon: SiSolidity, color: '#47A248' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'Flask', icon: SiFlask, color: '#47A248' },
    ],
    tags: [
      { label: 'full-stack', colorScheme: 'pink' },
      { label: 'aws', colorScheme: 'orange' },
      { label: 'website', colorScheme: 'cyan' },
    ],
    isShowcased: true,
  },
  {
    id: '2',
    title: 'RideX',
    description: {
      en: 'Decentralized 🚘 ride-sharing system using Tron smart contracts deployed on Nile testnet and a React frontend.',
      fr: 'Créez des quiz multijoueurs pour les activités en classe ou des présentations interactives.',
    },
    image: { src: Ridex },
    homepage: 'https://ride-x-flax.vercel.app',
    github: 'https://github.com/Harsh-BH/RideX',
    technologies: [
      { name: 'React.js', icon: SiReact, color: '#000000' },
      { name: 'Solidity', icon: SiSolidity, color: '#61DAFB' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'ChakraUI', icon: SiChakraui, color: '#319795' },
    ],
    tags: [
      { label: 'full-stack', colorScheme: 'pink' },
      { label: 'websockets', colorScheme: 'green' },
      { label: 'aws', colorScheme: 'orange' },
      { label: 'website', colorScheme: 'cyan' },
    ],
    isShowcased: true,
  },
  {
    id: '3',
    title: 'CoinX',
    description: {
      en: 'A universal space for effortless crypto trading.',
      fr: 'Livraison rapide de plats directement à votre porte. Les tableaux de bord des utilisateurs, des restaurants, des chauffeurs et des administrateurs sont entièrement fonctionnels.',
    },
    image: { src: CoinX },
    homepage: 'https://build-the-new-internet.vercel.app',
    github: 'https://github.com/Harsh-BH/Build-the-New-Internet',

    technologies: [
      { name: 'Vite', icon: SiVite, color: '#FF2D20' },
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'Reown', icon: SiWalletconnect, color: '#336791' },
      { name: 'Css', icon: SiCss3, color: '#008CDD' },
    ],
    tags: [
      { label: 'full-stack', colorScheme: 'pink' },
      { label: 'e-commerce', colorScheme: 'purple' },
      { label: 'website', colorScheme: 'cyan' },
    ],
    isShowcased: true,
  },
  {
    id: '2',
    title: 'MailCold',
    description: {
      en: 'Cold Mailing Application for Research Internship Requests ',
      fr: 'Créez des quiz multijoueurs pour les activités en classe ou des présentations interactives.',
    },
    image: { src: MailCold },
    homepage: 'https://github.com/Harsh-BH/MailCold',
    github: 'https://mail-cold-hgur.vercel.app',
    technologies: [
      { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'ChakraUI', icon: SiChakraui, color: '#319795' },
    ],
    tags: [
      { label: 'full-stack', colorScheme: 'pink' },
      { label: 'websockets', colorScheme: 'green' },
      { label: 'aws', colorScheme: 'orange' },
      { label: 'website', colorScheme: 'cyan' },
    ],
    isShowcased: true,
  },
 
  {
    id: '2',
    title: 'MEMEcoin-Agent',
    description: {
      en: 'Memecoin-Agent is a Telegram Bot and Web Application built on the NEAR Blockchain that allows users to interact with smart contracts seamlessly.',
      fr: 'Créez des quiz multijoueurs pour les activités en classe ou des présentations interactives.',
    },
    image: { src: MemeCoin },
    homepage: 'https://github.com/Harsh-BH/memecoin-agent',
    github: ' https://github.com/Harsh-BH/memecoin-agent',
    technologies: [
      { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'ChakraUI', icon: SiChakraui, color: '#319795' },
    ],
    tags: [
      { label: 'full-stack', colorScheme: 'pink' },
      { label: 'websockets', colorScheme: 'green' },
      { label: 'aws', colorScheme: 'orange' },
      { label: 'website', colorScheme: 'cyan' },
    ],
    isShowcased: true,
  },
]
