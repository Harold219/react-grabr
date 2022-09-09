import { Box } from '@chakra-ui/react'
import React, { useContext, useEffect } from 'react'
import { FormContext } from '../tabOrder/TabOrder'
import './Stepper.css'

export const Stepper = () => {
    const { activeStepIndex, setActiveStepIndex } = useContext(FormContext);
    const stepperItems = document.querySelectorAll(".stepper-item");
    useEffect(() => {
        const stepperItems = document.querySelectorAll(".stepper-item");
        const line = document.querySelectorAll(".line");
        stepperItems.forEach( (step, i) => {
          if (i <= activeStepIndex) {
            step.classList.add("active");
          } else {
            step.classList.remove("active");
          }
        });
        stepperItems.forEach((i)=>{
          if(activeStepIndex >=1 && activeStepIndex <= stepperItems.length){
            stepperItems[activeStepIndex -1].classList.add("check");
          } else{
            stepperItems.forEach((step)=>{
              step.classList.remove("check")
            })
          }
        });
        line.forEach((line,i)=>{
          if(i < activeStepIndex){
            line.classList.add("line-active");
          }else{
            line.classList.remove("line-active")
          }
        });
      }, [activeStepIndex]);
    
  return (
    <Box className='container-items' display={{ base:'none', md:'flex' }}>
        <div className='stepper-item'></div>
        <div className='line'></div>
        <div className='stepper-item'></div>
        <div className='line'></div>
        <div className='stepper-item'></div>
    </Box>
  )
}
