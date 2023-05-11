import React, { useState } from 'react';
import { Heading, Center,Box,
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
  Button, VStack,Input, HStack } from '@chakra-ui/react'
import { mnemonicToMiniSecret, mnemonicValidate, ed25519PairFromSeed} from '@polkadot/util-crypto';
import {Keyring} from '@polkadot/api'; 

function Addaccounts() {

  const [text, setText] = useState('');
  const [copied, setCopied] = useState(false);

  
  const [valueAddress, setValueAddress] = useState('');


  const { isOpen, onOpen, onClose } = useDisclosure()
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
  



  const handleCopy = () => {
    setCopied(true);
  };

let word1;
let word2;
let word3;
let word4;
let word5;
let word6;
let word7;
let word8;
let word9;
let word10;
let word11;
let word12;

  
  // 1. Insert your code



  //


    return (
  
      <>

    <VStack spacing={10} >
  
    <Heading className='center' size="sm">Add your seed phrase: </Heading>

    <HStack className='center' spacing={3}>
  <Input id="1" value={word1} type="text"  placeholder='1'  w="150px" h="50px" />
  <Input id="2" value={word2} type="text" placeholder='2' w="150px" h="50px" />
  <Input id="3" value={word3} type="text" placeholder='3' size='md' w="150px" h="50px" />
  <Input id="4" value={word4} type="text" placeholder='4' size='md' w="150px" h="50px" />
  </HStack>

  <HStack className='center' spacing={3}>
  <Input id="5" value={word5} type="text" placeholder='5' size='md' w="150px" h="50px" />
  <Input id="6" value={word6} type="text" placeholder='6' size='md' w="150px" h="50px" />
  <Input id="7" value={word7} type="text"  placeholder='7' size='md' w="150px" h="50px" />
  <Input id="8" value={word8} type="text"  placeholder='8' size='md' w="150px" h="50px" />
  </HStack>

  <HStack className='center' spacing={3}>
  <Input id="9" value={word9} type="text" placeholder='9' size='md' w="150px" h="50px" />
  <Input id="10" value={word10} type="text" placeholder='10' size='md' w="150px" h="50px" />
  <Input id="11"  value={word11} type="text" placeholder='11' size='md' w="150px" h="50px" />
  <Input id="12" value={word12} type="text" placeholder='12' size='md' w="150px" h="50px" />
  </HStack>

  <Button colorScheme='green' borderRadius="20px" onClick={ ()=> { addkeyring(); onOpen(); }}  className='center' > Add account</Button>

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
                <p> {valueAddress}</p>
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
        <Box h="130px" w="100%"/>
  </VStack>

    </>
  
    )
  }
  
  export {Addaccounts };
  