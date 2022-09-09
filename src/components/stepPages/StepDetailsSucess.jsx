import { QuestionOutlineIcon } from '@chakra-ui/icons'
import { Avatar, AvatarGroup, Box, Button, Center, color, Divider, Flex, Highlight, Image, Input, Link, ListItem, OrderedList, Select, Stack, Text, Tooltip } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { FormContext } from '../tabOrder/TabOrder'

export const StepDetailsSucess = () => {
  const { activeStepIndex, setActiveStepIndex } = useContext(FormContext)
  return (
      <Box display={'flex'} flexDir={'column'} w={'100%'} alignItems={'center'}>
          <Box 
          border={"1px solid #e7e7e7"} 
          borderRadius={"sm"} 
          w={{base:'100%', md:'44%'}} 
          margin={'30px 0 10px 0'} 
          background={'#fff'}
          >
            <Box 
            order={{base:'1', md:'1'}}
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
                  Resumen de tu pedido
                </ListItem>
              </OrderedList>
              <Flex gap={'20px'}>
              <Image 
              boxSize={'60px'} 
              objectFit={'cover'} 
              border={'1px solid #e7e7e7'} 
              padding={'3px'} 
              borderRadius={'sm'} 
              src='https://img.ltwebstatic.com/images3_pi/2021/12/06/16387731737d9d37d4c55e06dd7c6a3d19c8c35092_thumbnail_405x552.jpg' 
              alt='Dan Abramov' 
              zIndex={'0'} />
              <Text as='b' w={'100%'} fontSize={{base:'md', md:'20px'}} lineHeight={'1.6'}>Chaqueta de Bombardero con cremallera | Mode de Mujer | SHEIN España</Text>
              </Flex>
              <Stack margin={'15px 0 0 0'}>
                <Flex justifyContent={'space-between'}>
                  <Text color={'#878787'} fontSize='md'>Entregar desde</Text>
                  <Text color={'#000000'} fontSize='md'>Estados Unidos</Text>
                </Flex>
                <Flex justifyContent={'space-between'}>
                  <Text color={'#878787'} fontSize='md'>Entregar en</Text>
                  <Text color={'#000000'} fontSize='md'>Quito, EC</Text>
                </Flex>
                <Flex justifyContent={'space-between'}>
                  <Text color={'#878787'} fontSize='md'>Entregar antes del</Text>
                  <Text color={'#000000'} fontSize='md'>26 de septiembre de 2022</Text>
                </Flex>
              </Stack>
              <Divider margin={'15px 0 0 0'}/>
              <Stack margin={'15px 0 0 0'}>
                <Flex justifyContent={'space-between'}>
                  <Text color={'#878787'} fontSize='md'>Cantidad</Text>
                  <Text color={'#000000'} fontSize='md'>1</Text>
                </Flex>
                <Flex justifyContent={'space-between'}>
                  <Text color={'#878787'} fontSize='md'>Embalaje</Text>
                  <Text color={'#000000'} fontSize='md'>sin caja</Text>
                </Flex>
                <Flex justifyContent={'space-between'}>
                  <Text color={'#878787'} fontSize='md'>Donde comprar</Text>
                  <Text fontSize='md'><Link color={'#469ebd'}> es.shein.com</Link></Text>
                </Flex>
                <Divider margin={'15px 0 0 0'}/>
                <Box>
                  <Text color={'#878787'} fontSize='md'>Detalles del Producto</Text>
                  <Text color={'#000000'} fontSize='md'>
                    Más de 500 novedades Diarias autodevoluciones Envío gratis a partir de de 29€ Pulsa para ver los detalles
                    de Chaqueta de Bombardero con cremallera. Compra tus favoritos y entérate de toda la informacion.
                  </Text>
                </Box>
              </Stack>
            </Box>
          </Box>
              

          <Box 
          order={{base:'3', md:'2'}}
          border={"1px solid #e7e7e7"} 
          borderRadius={"sm"} 
          w={{base:'100%', md:'44%'}} 
          margin={{base:'0', md:'10px 0'}} 
          background={'#fff'}
          >
            <Box 
            margin={{base:'5px', md:'20px'}}
            >
              <Flex flexDir={'column'} alignItems={'center'} gap={"10px"}>
                <AvatarGroup size='md' max={5}>
                  <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
                  <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
                  <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
                  <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
                  <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
                  <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
                  <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
                  <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
                  <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
                  <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
                  <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
                  <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
                  <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
                  <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
                </AvatarGroup>
              <Text color={'#000000'} fontSize='md' textAlign={'center'}>
              <Highlight query='¡30 viajeros verificados' styles={{ color:'#44d16b', fontWeight:'bold' }}>
              ¡30 viajeros verificados están listos para entregar tu producto en 
              </Highlight>
              </Text>
              </Flex>
              <Center>
                <Text color={'#000000'} fontSize='md'>
                          Quito!
                </Text>
              </Center>

            </Box>
          </Box>
                
                
          
          <Box 
          order={{base:'2',md:'3'}}
          border={"1px solid #e7e7e7"} 
          borderRadius={"sm"} 
          w={{base:'100%', md:'44%'}} 
          margin={{base:'10px 0 30px 0', md:'10px 0 50px 0'}} 
          background={'#fff'}
          >
            <Box 
            margin={{base:'10px', md:'20px'}}
            >
               <Stack margin={'10px 0 0 0'}>
                <Flex justifyContent={'space-between'}>
                  <Flex justifyContent={'center'} alignItems={'center'} gap={'4px'} h={'25px'}>
                  <Text color={'#878787'} fontSize='sm'>Precio del producto</Text>
                  <Tooltip hasArrow label='Phone number' fontSize='md'>
                    <QuestionOutlineIcon color={'#878787'}/>
                  </Tooltip>
                  </Flex>
                  <Text color={'#000'} fontSize='sm'>23,00 US$</Text>
                </Flex>
                <Flex justifyContent={'space-between'}>
                  <Flex justifyContent={'center'} alignItems={'center'} gap={'12px'} h={'25px'}>
                  <Text color={'#878787'} fontSize='sm'>Impuestos de EE.UU.</Text>
                  <Tooltip hasArrow label='Phone number' fontSize='md'>
                    <QuestionOutlineIcon color={'#878787'}/>
                  </Tooltip>
                  </Flex>
                  <Text color={'#000'} fontSize='sm'>1,84 US$</Text>
                </Flex>
                <Flex justifyContent={'space-between'}>
                  <Flex justifyContent={'center'} alignItems={'center'} gap={'12px'} h={'25px'}>
                  <Text color={'#878787'} fontSize='sm'>Recompensa del viajero </Text>
                  <Tooltip hasArrow label='Phone number' fontSize='md'>
                    <QuestionOutlineIcon color={'#878787'}/>
                  </Tooltip>
                  </Flex>
                  <Text color={'#000'} fontSize='sm'>10,00 US$</Text>
                </Flex>
                <Flex justifyContent={'space-between'}>
                  <Flex justifyContent={'center'} alignItems={'center'} gap={'12px'} h={'25px'}>
                  <Text color={'#878787'} fontSize='sm'>Tasa de Grabr </Text>
                  <Tooltip hasArrow label='Phone number' fontSize='md'>
                    <QuestionOutlineIcon color={'#878787'}/>
                  </Tooltip>
                  </Flex>
                  <Text color={'#000'} fontSize='sm'>2,09 US$</Text>
                </Flex>
                <Flex justifyContent={'space-between'}>
                  <Flex justifyContent={'center'} alignItems={'center'} gap={'12px'} h={'25px'}>
                  <Text color={'#878787'} fontSize='sm'>Procesamiento del pago</Text>
                  <Tooltip hasArrow label='Phone number' fontSize='md'>
                    <QuestionOutlineIcon color={'#878787'}/>
                  </Tooltip>
                  </Flex>
                  <Text color={'#000'} fontSize='sm'>1,94 US$</Text>
                </Flex>
              </Stack>
              <Divider margin={'30px 0'}/>
              <Flex justifyContent={'space-between'} margin={'0 0 30px 0'}>
                  <Flex justifyContent={'center'} alignItems={'center'} gap={'12px'} h={'25px'}>
                  <Text color={'#000'} fontSize='md'>Total estimado</Text>
                  <Tooltip hasArrow label='Phone number' fontSize='md'>
                    <QuestionOutlineIcon color={'#878787'}/>
                  </Tooltip>
                  </Flex>
                  <Text color={'#000'} fontSize='lg' fontWeight={'600'}>38,87 US$</Text>
                </Flex>
              <Button w={'100%'} h={'50px'} fontWeight={'normal'} _hover={{background:'#469ebd'}} background={'#469ebd'} color={'#fff'}onClick={()=>setActiveStepIndex(0)} >Solicitar ofertas de entrega</Button>
              <Text color={'#000'} fontSize={'14px'} fontWeight={'400'} margin={"10px 0 0 0"}>
              Al publicar mi pedido, acepto los <Link color={'#469ebd'} textDecor={'underline'}>Términos de uso de Grabr</Link>. Entiendo que si el precio del producto es incorrecto, mi pedido podrá ser cancelado.
              </Text>
            </Box>
          </Box>
      </Box>
      )
    }
              
              
              
