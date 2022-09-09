import { QuestionOutlineIcon } from '@chakra-ui/icons'
import { Box, Flex, IconButton } from '@chakra-ui/react'
import React, { useState } from 'react'
import { FloatButton } from '../../components/floatButton/FloatButton'
import Navbar from '../../components/navbar/Navbar'
import { TabOrder } from '../../components/tabOrder/TabOrder'

export const Order = () => {
  return (
    <Box w="100%" bg="rgb(252,252,252)" position={'relative'}>
       <Navbar/>
       <FloatButton/>
       <TabOrder/>
    </Box>
  )
}
