import { useTranslation } from 'next-i18next'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Text,
  useDisclosure,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { VscChromeClose } from 'react-icons/vsc'
import { FiMoon, FiSun } from 'react-icons/fi'
import { usePostHog } from 'posthog-js/react'
import { NAME } from '@config/config'
import { Menu } from './Menu'

export const Header: React.FC = () => {
  const { t } = useTranslation('common')
  const { asPath, locale = 'en', query, pathname, push } = useRouter()
  const { isOpen, onToggle, onClose } = useDisclosure()
  const posthog = usePostHog()
  const { colorMode, toggleColorMode } = useColorMode()

  const toggleLocale = (): void => {
    posthog.capture('locale_toggled')
    push({ pathname, query }, asPath, {
      locale: locale === 'en' ? 'fr' : 'en',
    })
  }

  return (
    <Box as='header' pos='sticky' zIndex='banner' top='0' left='0' right='0'>
      <Flex
        pos='relative'
        zIndex='banner'
        align='center'
        justify='space-between'
        bg={useColorModeValue('white', 'gray.800')}
        pt='12'
        pb='4'
        px={{ base: '4', md: '8' }}
        borderColor={useColorModeValue('black', 'white')}
        borderBottom='1px solid'
      >
        <NextLink href='/' passHref legacyBehavior>
          <Text
            as='a'
            fontWeight='bold'
            fontSize={{ base: 'lg', md: '2xl' }}
            casing='uppercase'
          >
            {NAME}
          </Text>
        </NextLink>
        <HStack spacing='2'>
          <IconButton
            aria-label={colorMode === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            icon={colorMode === 'light' ? <FiMoon /> : <FiSun />}
            variant='icon'
            size='icon'
            onClick={() => {
              toggleColorMode();
              posthog.capture('color_mode_toggled', { mode: colorMode === 'light' ? 'dark' : 'light' });
            }}
          />
          <Button variant='icon' size='icon' onClick={toggleLocale}>
            {locale === 'en' ? 'FR' : 'EN'}
          </Button>
          <IconButton
            aria-label={t(isOpen ? 'close-menu' : 'open-menu')}
            icon={isOpen ? <VscChromeClose /> : <HiOutlineMenuAlt4 />}
            variant='icon'
            size='icon'
            onClick={onToggle}
          />
        </HStack>
      </Flex>
      <Menu isOpen={isOpen} onClose={onClose} />
    </Box>
  )
}