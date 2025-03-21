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
import { FiBriefcase } from 'react-icons/fi'
import { motion } from 'framer-motion'

// Create motion components for text elements
const MotionText = motion(Text)
const MotionBadge = motion(Badge)

interface ExperienceProps {
  company: string
  role: string
  period: string
  description: string
  companyUrl?: string
  technologies?: string[]
  color?: string
}

export const Experience: React.FC<ExperienceProps> = ({
  company,
  role,
  period,
  description,
  companyUrl,
  technologies = [],
  color = '#3182CE', // Default blue color
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
            {companyUrl ? (
              <LinkOverlay href={companyUrl} isExternal>
                {company}
              </LinkOverlay>
            ) : (
              company
            )}
          </MotionText>
        </HStack>
        <Flex mt='2' mb='4'>
          <MotionBadge 
            colorScheme='blue'
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {role}
          </MotionBadge>
          <MotionText 
            ml='auto' 
            fontSize='sm' 
            opacity='0.8'
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {period}
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
            {technologies.map((tech, index) => (
              <Box
                as={motion.div}
                key={tech}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
              >
                <Tag
                  variant='subtle'
                  colorScheme='blue'
                  borderRadius='full'
                  size='sm'
                >
                  {tech}
                </Tag>
              </Box>
            ))}
          </HStack>
          <Box 
            as={motion(FiBriefcase)} 
            color={color} 
            boxSize='5'
            initial={{ opacity: 0, rotate: -20 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          />
        </Flex>
      </Flex>
    </LinkBox>
  )
}