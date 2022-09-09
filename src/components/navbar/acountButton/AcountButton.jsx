import React from 'react'
import {
    Avatar,
    Button,
  } from '@chakra-ui/react';
export const AcountButton = ({ onOpen, btnRef, src, name }) => {
  return (
    <>
        <Button 
              onClick={onOpen} 
              ref={btnRef} 
              bg={'transparent'} 
              _hover={{bg:'#c7ebf7'}}
              _active={{bg: '#c7ebf7'}} 
              color={'black'} 
              leftIcon={
                <Avatar 
                size='sm' 
                name='Kent Dodds' 
                src={src} 
                />
              } 
              colorScheme='teal' 
              variant='solid' 
              borderRadius={'3xl'} 
              padding={'1'} 
              fontSize={17} 
              fontWeight={600}
              transition= {'color 0.3s linear, background-color 0.3s linear'}
            >
              {name}
            </Button>
    </>
  )
}
