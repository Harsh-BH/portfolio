import { useState } from 'react'
import { useTranslation } from 'next-i18next'
import type { TFuncKey } from 'i18next'
import { Heading, SimpleGrid, VStack, useColorModeValue } from '@chakra-ui/react'
import { motion, type Variants } from 'framer-motion'
import type { SkillGroup as ISkillGroup } from '@utils/types'
import { SkillBox } from './SkillBox'

const group: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SkillGroupProps extends ISkillGroup {}

export const SkillGroup: React.FC<SkillGroupProps> = ({ category, skills }) => {
  const { t } = useTranslation('common')
  const headingColor = useColorModeValue('gray.800', 'gray.100')
  const initialBorderColor = useColorModeValue('black', 'whiteAlpha.300')
  const [borderColor, setBorderColor] = useState(initialBorderColor)

  return (
    <motion.div variants={group}>
      <VStack
        align='flex-start'
        p='6'
        borderColor={borderColor}
        borderWidth='1px'
        borderStyle='solid'
        spacing='6'
        transition='border-color 0.1s ease-in-out'
      >
        <Heading as='h3' variant='skillCategory' color={headingColor}>
          {t(category as TFuncKey<'common'>)}
        </Heading>
        <SimpleGrid columns={3} spacing='5'>
          {skills.map((skill) => (
            <SkillBox
              key={skill.name}
              setBorderColor={setBorderColor}
              {...skill}
            />
          ))}
        </SimpleGrid>
      </VStack>
    </motion.div>
  )
}