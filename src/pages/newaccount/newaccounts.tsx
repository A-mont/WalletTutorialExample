import React, { useState } from 'react';
import { CopyToClipboard    } from 'react-copy-to-clipboard';
import { useToast, Heading, Center,Box,
  useDisclosure,
  FormLabel,
  FormControl,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button, VStack,Input,HStack } from '@chakra-ui/react'
import {mnemonicGenerate, mnemonicToMiniSecret, mnemonicValidate } from '@polkadot/util-crypto';
import { waitReady } from '@polkadot/wasm-crypto';
import {Keyring} from '@polkadot/api'; 
import {MdContentCopy} from 'react-icons/md';


function Newaccounts() {

  const toast = useToast()

  const [copied, setCopied] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure()
  
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)
  


  const handleCopy = () => {
    setCopied(true);
  };


  // Insert your code





  //


    return (
  
      <VStack>
      <Box h="50px" w="100%"/>
      <Heading size="md" className='center' >Your seed phrase is: </Heading>
  
      <div>
        <HStack>
        <Input readOnly w="650px" h="100px" inputMode="text" type="text" className='center' value={text} onChange={(e) => setText(e.target.value)} />
        <CopyToClipboard text={text} onCopy={handleCopy}>
          <MdContentCopy></MdContentCopy>
        </CopyToClipboard>
        {copied ? toast({
    title: 'Copied',
    duration: 3000,
    status: 'success',
    isClosable: true,
  }) : null}
        </HStack>
      </div>
      <HStack>

      <Button colorScheme='green' borderRadius="20px" onClick={ keyring} className='center' > Generate phrase</Button>
      <Button colorScheme='red' borderRadius="20px" onClick={onOpen} className='center' > Add new account</Button>
      </HStack>
      <Modal
            size="lg"
            initialFocusRef={initialRef}
            finalFocusRef={finalRef}
            isOpen={isOpen}
            onClose={onClose}  
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader >Your Public Address is : </ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={8}>
                <FormControl mt={6}>
                  <FormLabel>Address: </FormLabel>
                </FormControl>
              </ModalBody>
              <Center>
              <ModalFooter>
               <VStack>
               
                <Button colorScheme='blue' borderRadius="20px">
                <a href="./Portfolio">
                  Add address
                  </a>
                </Button>
                </VStack>
                
              </ModalFooter>
              </Center>
            </ModalContent>
          </Modal>
          <Box h="295px" w="100%"/>
        
      </VStack>
     
    )
  }
  
  export {  Newaccounts };
  