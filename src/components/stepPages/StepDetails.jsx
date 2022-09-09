import { AtSignIcon, CloseIcon, RepeatIcon } from '@chakra-ui/icons'
import { Box, Button, Flex, IconButton, Image, Input, InputGroup, InputLeftElement, InputRightElement, Link, ListItem, OrderedList, Stack, Switch, Text, Textarea } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { FormContext } from '../tabOrder/TabOrder'

export const StepDetails = () => {
  const { activeStepIndex, setActiveStepIndex } = useContext(FormContext)
  const datos_prueba = {
    enlace : 'https://es.shein.com/Men-Zip-Up-Bomber-Jacket-p-2773078-cat-1983.html?src_identifier=fc%3DMen%60sc%3DROPA%60tc%3D0%60oc%3D0%60ps%3Dtab04navbar04%60jc%3Dreal_2026&src_module=topcat&src_tab_page_id=page_home1661702533468&mallCode=1&scici=navbar_MenHomePage~~tab04navbar04~~4~~real_2026~~~~0',
    nombre_producto : 'Chaqueta de bombardero con cremallera | Mode de Mujer | SHEIN España',
    imagenUrl : 'https://img.ltwebstatic.com/images3_pi/2021/12/06/16387731737d9d37d4c55e06dd7c6a3d19c8c35092_thumbnail_405x552.jpg',
    precio : '23',
    detalles : 'Más de 500 Novedades Diarias✓Autodevoluciones✓Envío gratis a partir de 29€✓Pulsa para ver los detalles de Chaqueta de bombardero con cremallera. Compra tus favoritos y entérate de toda la infromación.',
    info_details : 'Provee tanta información sobre el producto como te sea posible para que el viajero compre el artículo correcto.',
    infoOther : 'Requerir la caja podría reducir el número de ofertas que recibes. Los viajeros normalmente prefieren entregar pedidos sin caja para ahorrar espacio.'
  }
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
            Detalles del producto
          </ListItem>
        </OrderedList>
        <Stack 
        spacing={4}
        >
          <Stack>
          <Text as='b'>Enlace al producto</Text>
            <Flex 
            gap={'10px'}
            >
              <InputGroup 
              size={'lg'}
              >
                <InputLeftElement
                  pointerEvents='none'
                  children={<AtSignIcon color='gray.300' />}
                />
                <Input  
                _focusVisible={{borderColor:'#469ebd'}}
                placeholder='Pegar un enlace' 
                value={datos_prueba.enlace}
                />
                <InputRightElement >
                  <IconButton 
                  background={'transparent'}
                  color={'#469ebd'}
                  fontSize={'13px'}
                  size={'md'}
                  icon={<CloseIcon/>}
                  />
                </InputRightElement>
              </InputGroup>
              <IconButton
              background={'#b6b6b6'}
              color={'#fff'}
              aria-label='Call Segun'
              size='lg'
              icon={<RepeatIcon />}
              />
            </Flex>
          </Stack>
          <Stack>
            <Text as='b'>Nombre del producto</Text>
            <Input 
            value={datos_prueba.nombre_producto}
            size={'lg'} 
            _focusVisible={{borderColor:'#469ebd'}}
            placeholder='Introduce el nombre del producto' 
            /> 
          </Stack>
          <Stack>
            <Text as='b'>Imagen del producto</Text>
            <Flex justifyContent={'flex-start'}>
              <Box 
              border={'1px solid #e7e7e7'} 
              w={"160px"} 
              display={'flex'} 
              justifyContent={"center"} 
              alignItems={'center'}
              position={'relative'}
              zIndex={"100"}
              >
                <Image w={"90%"} h={'95%%'} src={datos_prueba.imagenUrl} alt='Dan Abramov' zIndex={'0'} />
                <IconButton 
                  background={'rgba(255,255,255,0.60)'}
                  borderRadius={'full'}
                  position={'absolute'}
                  top={'5px'}
                  right={'6px'}
                  color={'#404040'}
                  zIndex={"200"}
                  fontSize={'13px'}
                  size={'md'}
                  icon={<CloseIcon/>}
                  />
              </Box>
            </Flex>
          </Stack>
          <Stack>
            <Text as='b'>Precio en <Link color={'#469ebd'}>es.shein.com</Link></Text>
            <Input 
            size={'lg'} 
            value={datos_prueba.precio}
            _focusVisible={{borderColor:'#469ebd'}}
            placeholder='Ingresa el precio del producto' 
            /> 
            <Text 
            color={'#878787'} 
            fontSize='sm'
            >
              Confirma el precio de venta de tu producto (no incluye el costo de entrega).</Text>
          </Stack>
          <Stack>
            <Text as='b'>Detalles del Producto</Text>
            <Textarea 
            value={datos_prueba.detalles}
            _focusVisible={{borderColor:'#469ebd'}} 
            width={"auto"} h={'100%'} 
            minHeight={'96px'} 
            boxSizing={'content-box'} 
            resize={'none'} 
            placeholder='Ingresa los detalles del producto, como talla, color, modelo, etc' 
            />
            <Text 
            color={'#878787'} 
            fontSize='sm'
            >
              {datos_prueba.info_details}</Text>
          </Stack>
          <Stack>
            <Text fontSize='md'>Con caja</Text>
            <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
              <Text 
              color={'#878787'} 
              fontSize='sm'
              >
                {datos_prueba.infoOther} 
              </Text>
              <Switch size='md' />
            </Box>
          </Stack>
          <Stack>
            <Button w={'100%'} h={'50px'} fontWeight={'normal'} background={'#469ebd'} color={'#fff'} _hover={{background:'#469ebd'}} onClick={()=>setActiveStepIndex(activeStepIndex+1)} >Siguiente</Button>
          </Stack>
        </Stack>
      </Box>
    </Box>
  )
}
