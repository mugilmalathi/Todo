import React from 'react'
import "./nav.scss"
import { FaGuilded } from "react-icons/fa";
import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Input, useDisclosure } from '@chakra-ui/react';
import { useNavigate } from 'react-router';
import nodata from "../../assets/Images/no.gif"

const Navbar = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const navigate = useNavigate()

  return (
    <>
        <div className='navbar'>
            <div onClick={()=>navigate("/")}>Your Todo</div>
            <div><FaGuilded ref={btnRef} colorScheme='teal' onClick={onOpen}/></div>
        </div>

        <Drawer
            isOpen={isOpen}
            placement='right'
            onClose={onClose}
            finalFocusRef={btnRef}
        >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Test Content</DrawerHeader>

          <DrawerBody>
            Coming Soon..!
          </DrawerBody>

          <img src={nodata} alt="" />

        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Navbar