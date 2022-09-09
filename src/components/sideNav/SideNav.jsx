import React from 'react'
import {
    Button,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    color,
  } from '@chakra-ui/react';
export const SideNav = ({ isOpen, onClose,btnRef }) => {
  return (
    <>
        <Drawer
            isOpen={isOpen}
            placement='right'
            onClose={onClose}
            finalFocusRef={btnRef}
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Create your account</DrawerHeader>

                <DrawerBody>
                  ....
                </DrawerBody>

                <DrawerFooter>
                  <Button variant='outline' mr={3} onClick={onClose}>
                    Cancel
                  </Button>
                  <Button colorScheme='blue'>Save</Button>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
    </>
  )
}
