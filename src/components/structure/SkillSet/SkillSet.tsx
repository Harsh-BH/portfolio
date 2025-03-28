import { useTranslation } from 'next-i18next'
import { Heading, SimpleGrid, VStack, useColorModeValue } from '@chakra-ui/react'
import { motion, type Variants } from 'framer-motion'
import { SkillGroup } from './SkillGroup'
import { skills } from '@data/skills'

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      delayChildren: 0.5,
      staggerChildren: 0.5,
    },
  },
}

const MotionSimpleGrid = motion(SimpleGrid)

export const SkillSet: React.FC = () => {
  const { t } = useTranslation('common')
  const headingColor = useColorModeValue('gray.800', 'gray.100')
  const borderColor = useColorModeValue('black', 'whiteAlpha.300')

  return (
    <VStack
      as='section'
      align='stretch'
      py='20'
      px={{ base: '4', md: '8' }}
      borderColor={borderColor}
      borderTop='1px solid'
      spacing='16'
    >
      <Heading as='h2' variant='section' size='2xl' color={headingColor}>
        {t('skills-heading')}
      </Heading>
      <MotionSimpleGrid
        columns={[1, null, 2, 3]}
        spacing='12'
        variants={container}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
      >
        {skills.map((skill) => (
          <SkillGroup key={skill.id} {...skill} />
        ))}
      </MotionSimpleGrid>
    </VStack>
  )
}