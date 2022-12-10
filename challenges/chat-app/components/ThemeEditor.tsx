import React from 'react'
import {
  ThemeEditor as ThemeEditorContainer,
  ThemeEditorDrawer,
  ThemeEditorColors,
  ThemeEditorFontSizes
} from '@hypertheme-editor/chakra-ui'
import { IconButton, Tooltip } from '@chakra-ui/react'
import { CgColorPicker } from 'react-icons/cg'
import { ImFontSize } from 'react-icons/im'
import { MdPalette } from 'react-icons/md'

export function ThemeEditor(props: any) {
  return (
    <ThemeEditorContainer>
      <ThemeEditorButton {...props} />
      <ThemeEditorDrawer hideUpgradeToPro hideCredits>
        <ThemeEditorColors icon={CgColorPicker} title="Colors" />
        <ThemeEditorFontSizes icon={ImFontSize} title="Font Sizes" />
      </ThemeEditorDrawer>
    </ThemeEditorContainer>
  )
}

function ThemeEditorButton({ onOpen, navbarIcon, ...rest }: { onOpen: any, navbarIcon: any }) {
  return (
    <Tooltip label="Themes" placement="right">
      <IconButton color={navbarIcon} icon={<MdPalette />} aria-label="Themes"
        _focus={{ boxShadow: 'none' }}
        onClick={onOpen}
        bg='transparent'
        h='40px'
        {...rest}
      />
    </Tooltip>
  )
}