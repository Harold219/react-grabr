import { Box, Flex } from '@chakra-ui/react';
import React, { createContext, useState } from 'react'
import './TabOrder.css'
import { Step } from '../step/Step';
import { Stepper } from '../stepper/Stepper';
export const FormContext = createContext();
export const TabOrder = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  return (
    <FormContext.Provider value={{activeStepIndex, setActiveStepIndex}}>
      <Box className='stepper'  display={{base:'none', md:'flex'}}>
          <Stepper/>
      </Box>
      <Box className='step'>
        <Step/>
      </Box>
    </FormContext.Provider>
  )
}
