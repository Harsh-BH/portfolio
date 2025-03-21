import { useTranslation } from 'next-i18next'
import { 
  Flex, 
  Link, 
  Text, 
  HStack, 
  IconButton, 
  Stack, 
  useColorModeValue,
  Icon
} from '@chakra-ui/react'
import { ArrowUpIcon } from '@chakra-ui/icons'
import { usePostHog } from 'posthog-js/react'
import { config } from '@config/config'

const links: { name: string; href: string }[] = [
  { name: 'Email', href: config.email_link },
  { name: 'Github', href: config.github },
  { name: 'LinkedIn', href: config.linkedin },
]

export const Footer: React.FC = () => {
  const { t } = useTranslation('common')
  const posthog = usePostHog()
  
  // Dark mode color values
  const borderColor = useColorModeValue('black', 'whiteAlpha.300')
  const textColor = useColorModeValue('gray.800', 'gray.200')
  const linkColor = useColorModeValue('black', 'white')
  const linkHoverColor = useColorModeValue('blue.800', 'blue.100')
  const iconBgHover = useColorModeValue('gray.100', 'whiteAlpha.200')

  return (
    <Flex
      as='footer'
      align={{ base: 'stretch', md: 'center' }}
      justify='space-between'
      direction={{ base: 'column', md: 'row' }}
      mt='4'
      pt='12'
      pb='24'
      px={{ base: '4', md: '8' }}
      borderColor={borderColor}
      borderTop='1px solid'
      color={textColor}
    >
      <Stack
        direction={{ base: 'column', lg: 'row' }}
        spacing={{ base: '6', lg: '16' }}
        mb={{ base: '16', md: 0 }}
      >
        <Text casing='uppercase'>{config.copyright}</Text>
        <Text casing='uppercase' cursor='url(/img/maple-leaf.png), text'>
          {t('made-in-mtl')}
        </Text>
      </Stack>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        align={{ base: 'flex-start', md: 'center' }}
        spacing='16'
      >
        <HStack
          w='full'
          spacing={{ base: '6', md: '8' }}
          justify={{ base: 'space-between', sm: 'flex-start' }}
        >
          {links.map(({ name, href }) => (
            <Link
              key={name}
              title={name}
              href={href}
              variant='social'
              color={linkColor}
              _hover={{ color: linkHoverColor }}
              onClick={() =>
                posthog.capture('footer_link_clicked', { name, link: href })
              }
              isExternal
            >
              {name}
            </Link>
          ))}
        </HStack>
        <IconButton
          aria-label={t('go-to-top')}
          title={t('go-to-top')}
          icon={<ArrowUpIcon />}
          variant='icon'
          size='icon'
          color={textColor}
          _hover={{ bg: iconBgHover }}
          onClick={() => window.scrollTo(0, 0)}
        />
      </Stack>
    </Flex>
  )
}