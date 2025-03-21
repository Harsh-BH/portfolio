import { useEffect, useRef, useState } from 'react'
import { Box, Button, HStack, useColorModeValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

// Height of the header to calculate sticky position
const HEADER_HEIGHT = 105

interface TagsBarProps {
  tags: string[]
  activeTag: string
  onTagClick: (tag: string) => void
}

export const TagsBar: React.FC<TagsBarProps> = ({
  tags,
  activeTag,
  onTagClick,
}) => {
  const [isSticky, setIsSticky] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)
  
  // Color mode values
  const bgColor = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('black', 'whiteAlpha.300')
  const gradientLight = useColorModeValue(
    'linear-gradient(90deg, #fad0c4 0%, #ffd1ff 100%)',
    'linear-gradient(90deg, #2d3748 0%, #1a202c 100%)'
  )
  const gradientDark = useColorModeValue(
    'linear-gradient(90deg, #fdcbf1 0%, #e6dee9 100%)',
    'linear-gradient(90deg, #1a202c 0%, #2d3748 100%)'
  )

  useEffect(() => {
    // Create an observer to detect when the element becomes sticky
    const options = {
      threshold: 0,
      rootMargin: `-${HEADER_HEIGHT}px 0px 0px 0px`
    }
    
    const callback: IntersectionObserverCallback = (entries) => {
      const [entry] = entries
      setIsSticky(!entry.isIntersecting)
    }
    
    observerRef.current = new IntersectionObserver(callback, options)
    
    if (ref.current) {
      observerRef.current.observe(ref.current)
    }
    
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  return (
    <MotionBox
      ref={ref}
      pos='sticky'
      top='var(--chakra-sizes-header-height)'
      bg={bgColor}
      px={{ base: '4', md: '8' }}
      zIndex='dropdown'
      borderColor={borderColor}
      borderBottom='1px solid'
      overflowX='auto'
      initial={{ paddingTop: '4rem', paddingBottom: '1.5rem' }}
      animate={
        isSticky
          ? {
              paddingTop: '1rem',
              paddingBottom: '1rem',
              background: [
                gradientLight,
                gradientDark,
              ],
            }
          : {
              paddingTop: '4rem',
              paddingBottom: '1.5rem',
              background: bgColor,
            }
      }
      transition={{
        background: {
          repeat: isSticky ? Infinity : 0,
          repeatType: 'reverse',
          duration: isSticky ? 2 : 0.5,
        },
      }}
    >
      <HStack spacing='4' w='min-content'>
        {tags.map((tag) => (
          <Button
            key={tag}
            aria-label={tag}
            variant='filter'
            onClick={() => onTagClick(tag)}
            isActive={tag === activeTag}
          >
            {tag}
          </Button>
        ))}
      </HStack>
    </MotionBox>
  )
}