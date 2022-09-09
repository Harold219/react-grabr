import { AtSignIcon, CloseIcon, RepeatIcon } from '@chakra-ui/icons'
import { Box, Button, Flex, IconButton, Image, Input, InputGroup, InputLeftElement, InputRightElement, Link, ListItem, OrderedList, Select, Stack, Switch, Text, Textarea } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { FormContext } from '../tabOrder/TabOrder'

export const StepDetailsConfirm = () => {
  const { activeStepIndex, setActiveStepIndex } = useContext(FormContext)
  return (
    <Box 
    border={"1px solid #e7e7e7"} 
    borderRadius={"sm"} 
    w={{base:'100%', md:'44%'}} 
    margin={'30px 0'} 
    background={'#fff'}
    >
      <Box 
      margin={{base:'10px', md:'20px'}}
      >
        <OrderedList 
        display={{base:'none', md:'flex'}}
        listStylePosition={'inside'} 
        marginInlineStart={'none'} 
        fontWeight={'bold'} 
        margin={'0 0 20px 0'}
        >
          <ListItem 
          fontSize={"1.6em"}
          >
            Confirma la ciudad y la fecha de entrega
          </ListItem>
        </OrderedList>
        <Stack 
        spacing={4}
        >
          <Stack>
            <Text as='b'>Ruta de entrega</Text>
            <Input 
            value={'Estados Unidos'}
            size={'lg'} 
            _focusVisible={{borderColor:'#469ebd'}}
            placeholder='Entregar desde' 
            /> 
          </Stack>
          
          <Stack>
            <Input 
            value={'La Habana'}
            size={'lg'} 
            _focusVisible={{borderColor:'#469ebd'}}
            placeholder='Entregar en' 
            /> 
            <Text 
            color={'#878787'} 
            fontSize='sm'
            >
              Un viajero de Grabr yendo hacia tu ciudad entregará el pedido. 
              Introduce tu ciudad y cualquier detalle adicional aquí.
            </Text>
          </Stack>
          <Stack>
            <Text as='b'>¿Cuánto tiempo estás dispuesto a esperar?</Text>
            <Select placeholder='Hasta 1 mes' size='lg' /> 
            <Text 
            color={'#878787'} 
            fontSize='sm'
            >
              Cuánto más tiempo esperes más ofertas tendrás para elegir.</Text>
          </Stack>
        
          <Stack>
            <Button w={'100%'} h={'50px'} fontWeight={'normal'} background={'#469ebd'} _hover={{background:'#469ebd'}} color={'#fff'} onClick={()=>setActiveStepIndex(activeStepIndex+1)} >Siguiente</Button>
          </Stack>
        </Stack>
      </Box>
    </Box>
  )
}
