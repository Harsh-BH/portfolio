import { Center, Box, Tooltip, useDisclosure, useColorModeValue } from '@chakra-ui/react'
import type { Skill } from '@utils/types'
import React from 'react'
import { IconContext } from 'react-icons'

export interface SkillProps extends Skill {
  setBorderColor: (color: string) => void
}

export const SkillBox: React.FC<SkillProps> = ({
  name,
  icon,
  color,
  setBorderColor,
}) => {
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure()
  const bgColor = useColorModeValue('gray.100', 'gray.700')
  const defaultBorderColor = useColorModeValue('black', 'whiteAlpha.300')
  
  return (
    <Tooltip
      aria-label={name}
      label={name}
      isOpen={isOpen}
      placement='bottom'
      gutter={-8}
      shouldWrapChildren
      bg={useColorModeValue('gray.700', 'gray.200')}
      color={useColorModeValue('white', 'gray.800')}
    >
      <Center
        p='1'
        boxSize='16'
        bg={bgColor}
        borderRadius="md"
        transition="all 0.2s"
        _hover={{ transform: 'scale(1.05)' }}
        onMouseEnter={() => {
          setBorderColor(color)
          onOpen()
        }}
        onMouseLeave={() => {
          setBorderColor(defaultBorderColor)
          onClose()
        }}
        onClick={onToggle}
      >
        <Box color={color} fontSize="32px">
          <IconContext.Provider value={{ size: '32px', color: color }}>
            {/* @ts-ignore */}
            {React.createElement(icon)}
          </IconContext.Provider>
        </Box>
      </Center>
    </Tooltip>
  )
}