import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  color,
} from '@chakra-ui/react';
import { RepeatIcon, ExternalLinkIcon, EditIcon, AddIcon, BellIcon, EmailIcon, QuestionOutlineIcon } from '@chakra-ui/icons';
import React from 'react'

export const MenuItemNav = ({icon}) => {
  return (
    <>
        <Menu>
              <MenuButton
                borderRadius={'full'}
                bg={'#f2f8fa'}
                as={IconButton}
                aria-label='Options'
                icon={icon}
                variant='outline'
              />
              <MenuList>
                <MenuItem icon={<AddIcon />} command='⌘T'>
                  New Tab
                </MenuItem>
                <MenuItem icon={<ExternalLinkIcon />} command='⌘N'>
                  New Window
                </MenuItem>
                <MenuItem icon={<RepeatIcon />} command='⌘⇧N'>
                  Open Closed Tab
                </MenuItem>
                <MenuItem icon={<EditIcon />} command='⌘O'>
                  Open File...
                </MenuItem>
              </MenuList>
            </Menu>   
    </>
  )
}
