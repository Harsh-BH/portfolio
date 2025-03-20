import { useTranslation } from 'next-i18next'
import { Button, Heading, VStack, Center ,Box } from '@chakra-ui/react'
import { motion, type Variants } from 'framer-motion'
import { useState } from 'react'
import { projects } from '@data/projects'
import { OtherProjectsMarquee } from './OtherProjectsMarquee'
import { ProjectShowcase } from './ProjectShowcase'
import {  AnimatePresence } from 'framer-motion'


const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.25,
    },
  },
}

const item: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0 },
}

const MotionBox = motion(Box)

const MotionVStack = motion(VStack)

export const SelectedProjects: React.FC = () => {
  const { t } = useTranslation('common')
  const [showMore, setShowMore] = useState(false)
  
  // Filter showcased projects or all projects based on showMore state
  const displayedProjects = showMore 
    ? projects 
    : projects.filter((project) => project.isShowcased)

  return (
    <>
      <VStack
        id='projects'
        as='section'
        align='stretch'
        py='20'
        px={{ base: '4', md: '8' }}
        spacing='16'
        scrollMarginTop='var(--chakra-sizes-header-height)'
      >
        <Heading as='h2' variant='section' size='2xl'>
          {t('selected-projects')}
        </Heading>
        <MotionVStack
          align='stretch'
          spacing='12'
          variants={container}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
        >
          {displayedProjects.map((project) => (
            <motion.div key={project.id} variants={item}>
              <ProjectShowcase {...project} />
            </motion.div>
          ))}
        </MotionVStack>
        
        <Center>
        <MotionBox
            as="button"
            onClick={() => setShowMore(!showMore)}
            py="2"
            px="4"
            borderColor="black"
            border="1px solid"
           
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ ease: 'circOut' }}
            fontSize="md"
            fontWeight="medium"
          >
            {showMore ? t('Show less') : t('View more')}
          </MotionBox>
        </Center>
      </VStack>
      <OtherProjectsMarquee />
    </>
  )
}