import { useTranslation } from 'next-i18next'
import {
  Badge,
  Box,
  Flex,
  HStack,
  LinkBox,
  LinkOverlay,
  Tag,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { FiFileText } from 'react-icons/fi'
import { motion } from 'framer-motion'

// Create motion components for text elements
const MotionText = motion(Text)
const MotionBadge = motion(Badge)

interface WhitePaperProps {
  title: string
  date: string
  description: string
  link: string
  topics?: string[]
  color?: string
}

export const WhitePaper: React.FC<WhitePaperProps> = ({
  title,
  date,
  description,
  link,
  topics = [],
  color = '#805AD5', // Default purple color
}) => {
  const { t } = useTranslation('common')
  const borderColor = useColorModeValue('black', 'white')
  const shadowColor = useColorModeValue(color, `${color}80`) // Add transparency for dark mode

  return (
    <LinkBox
      p='4'
      borderColor={borderColor}
      border='1px solid'
      shadow={`8px 8px 0px 0px ${shadowColor}`}
      transition='all 0.1s ease-in-out'
      _hover={{ shadow: 'none', transform: 'translate(8px, 8px)' }}
    >
      <Flex h='full' flexDir='column'>
        <HStack spacing='1' fontSize='xl'>
          <MotionText 
            fontWeight='semibold'
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <LinkOverlay href={link} isExternal>
              {title}
            </LinkOverlay>
          </MotionText>
        </HStack>
        <Flex mt='2' mb='4'>
          <MotionBadge 
            colorScheme='purple'
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Whitepaper
          </MotionBadge>
          <MotionText 
            ml='auto' 
            fontSize='sm' 
            opacity='0.8'
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {date}
          </MotionText>
        </Flex>
        <MotionText 
          flex='1' 
          mb='4'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          {description}
        </MotionText>
        <Flex justify='space-between' align='center'>
          <HStack spacing='2' flexWrap='wrap'>
            {topics.map((topic, index) => (
              <Box
                as={motion.div}
                key={topic}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
              >
                <Tag
                  variant='subtle'
                  colorScheme='purple'
                  borderRadius='full'
                  size='sm'
                >
                  {topic}
                </Tag>
              </Box>
            ))}
          </HStack>
          <Box 
            as={motion.div} 
            color={color} 
            boxSize='5'
            initial={{ opacity: 0, rotate: -20 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <FiFileText size="100%" />
          </Box>
        </Flex>
      </Flex>
    </LinkBox>
  )
}