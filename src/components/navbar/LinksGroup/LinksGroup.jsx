import { Box, Link } from '@chakra-ui/react'
import React from 'react'

export const LinksGroup = () => {
  return (
    <>
        <Box 
          display={{base:'none',md:'flex'}} 
          gap={20} 
          color={'#469ebd'}
          marginLeft={'126px'}
          >
            <Link _hover={{color:'#367f99'}}>Comprar</Link>
            <Link _hover={{color:'#367f99'}}>Viajar</Link>
          </Box>   
    </>
  )
}
