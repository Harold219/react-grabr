import { Box, Link } from '@chakra-ui/react'
import grabr from '../../assets/grabr.svg'
import React from 'react'

export const Logo = () => {
  return (
    <>
        <Box display={{base:'none', md:'flex'}} marginLeft={'10px'}>
            <Link>
                <img src={grabr} alt="" />
            </Link>
          </Box>   
    </>
  )
}
