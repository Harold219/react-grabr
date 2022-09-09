import { ReactNode, useRef } from 'react';
import grabr from '../../assets/grabr.svg'
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
  Heading,
} from '@chakra-ui/react';
import {  ArrowBackIcon, BellIcon, EmailIcon, QuestionOutlineIcon } from '@chakra-ui/icons';
import { MenuItemNav } from '../menu/MenuItem';
import { Logo } from '../logo/Logo';
import { LinksGroup } from './LinksGroup/LinksGroup';
import { AcountButton } from './acountButton/AcountButton';
import { SideNav } from '../sideNav/SideNav';



export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <Box 
      bg={useColorModeValue('white')} 
      px={4} 
      borderBottom={1} 
      borderStyle={'solid'} 
      borderColor={'#e7e7e7'}
      position="sticky"
      top={0}
      zIndex={'1000'}
      >
        <Flex h={14} alignItems={'center'} justifyContent={'space-between'} >
          <IconButton
            size={'md'}
            icon={<ArrowBackIcon/>}
            aria-label={'Open Menu'}
            bg="transparent"
            display={{ base:'flex', md: 'none' }}
            fontSize="20px"
          />
          <Logo/>
          <LinksGroup/>
          <Flex 
          gap={5}
          display={{base:'none', md:'flex'}}
          marginRight={'10px'}
          >
            <MenuItemNav icon={<BellIcon color={'#469ebd'} fontSize={20}/>}/>
            <MenuItemNav icon={<EmailIcon color={'#469ebd'} fontSize={20}/>}/>
            <AcountButton onOpen={onOpen} btnRef={btnRef} src={'https://bit.ly/kent-c-dodds'} name={'Harold'}/>
            <SideNav isOpen={isOpen} onClose={onClose} btnRef={btnRef}/>
          </Flex>
          <Box display={{base:'flex', md:'none'}}>
          <IconButton borderRadius={'full'} aria-label='Search database' icon={<QuestionOutlineIcon  color={'#469ebd'}/>} />
          </Box>
        </Flex>

        
      </Box>
    </>
  );
}
