import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { App} from '../../App';
import {
    useToast,
    Heading,
    Input,
    useDisclosure,
    FormLabel,
    FormControl,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Center,
    VStack,
  } from '@chakra-ui/react'

// 1. Import library components


//



function Transfer({wsEndpoint, token}) {


    // 2. Create states in React.

        

   //


    // 3. Create an instance.

     
   //

   // 4. Add Transfer function.

   

   //

    const toast = useToast()

    const handleChangeAmount = (event:any) => {
    setValueAmount(event.target.value);
  }

    const handleChangeAddress = (event:any) => {
    setValueAddress(event.target.value);
  }

    const handleStatus = (event:any) => {
    setStatus(event.target.value);
  }

    const handleblockhash = (event:any) => {
    setBlockhash(event.target.value);
  }
  
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const initialRef = React.useRef(null)
    
    const finalRef = React.useRef(null)
   
    return (
      <>
       <Button onClick={onOpen}  variant='ghost' colorScheme='blue'>
        Transfer
      </Button>
      <Modal
          size="lg"
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent backgroundColor='pink.500' textColor="white" fontFamily="unset">
            <ModalHeader  >Tranfer {token} tokens</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={8}>
              <FormControl>
                <FormLabel>Amount</FormLabel>
                <Input type="text" value={valueAmount} onChange={handleChangeAmount} placeholder='Amount' />
                <p>Amount is : {valueAmount}</p>
              </FormControl>
  
              <FormControl mt={6}>
                <FormLabel>Address</FormLabel>
                <Input  type="text" value={valueAddress} onChange={handleChangeAddress} placeholder='Address' />
                <p>Address is : {valueAddress}</p>
              </FormControl>
            </ModalBody>
            <Center>
            <ModalFooter>
             <VStack>
              <Button onClick={transfer} colorScheme='blue' borderRadius="40px" mr={4}>
                     Send  
              </Button>
              <Heading size="sm"> Status Transaction :</Heading>
              <Heading size="sm" onChange={handleStatus}>{status}</Heading>
              <Heading size="sm"> Block Hash : </Heading>
              <Heading size="sm" onChange={handleblockhash}>{blockhash.substr(0,20) + '.....'}</Heading>
             </VStack>
            </ModalFooter>
            </Center>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export {Transfer};