import React, { useContext } from 'react'
import { StepDetails } from '../stepPages/StepDetails';
import { StepDetailsConfirm } from '../stepPages/StepDetailsConfirm';
import { StepDetailsSucess } from '../stepPages/StepDetailsSucess';
import { FormContext } from '../tabOrder/TabOrder'

export const Step = () => {
    const { activeStepIndex, setActiveStepIndex } = useContext(FormContext);
    let stepContent;
    switch (activeStepIndex) {
        case 0:
            stepContent = <StepDetails/>
            break;
    
        case 1:
            stepContent = <StepDetailsConfirm/>
            break;

        case 2:
            stepContent = <StepDetailsSucess/>
            break;    

    }
  return stepContent;
}
