import { QuestionOutlineIcon } from '@chakra-ui/icons'
import { IconButton } from '@chakra-ui/react'
import React from 'react'

export const FloatButton = () => {
  return (
    <>
        <IconButton 
       bg={"#469ebd"}
       color={"#fff"}
       borderRadius={'full'} 
       aria-label='Search database' 
       icon={<QuestionOutlineIcon />} 
       fontSize={"24px"}
       transition={'all 300ms'}
       _hover={{w:'58px', h:'58px'}}
       w={"56px"}
       h={"56px"}
       position={'fixed'} 
       right={"20px"}
       top={"88%"}
       display={{base:'none', md:'flex'}}
       zIndex={1000}
       />
    </>
  )
}
