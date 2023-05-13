import { useState } from 'react';
import { 
  Heading, 
  Box,
  Button, 
  VStack,
  Input, 
  HStack } from '@chakra-ui/react'
import { AddAccountModal } from '../../components/Body/AddAccountModal';
// 1. Import library components


//


function Addaccounts() {

const [text, setText] = useState('');
  
const [copied, setCopied] = useState(false);

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


// 2. Create states in React

  


//


// 3. Add a addkeyring function


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
        <HStack>
        <Button
            className='center'   
            variant="solid" 
            colorScheme="green" 
            borderRadius="20px" 
             _active={{ bg: '#dddfe2', transform: 'scale(0.98)', backgroundColor: '#bec3c9',}} 
            _focus={{ backgroundColor: '#bec3c9'
                 }} 
            onClick={ addkeyring }  > 
            Create account
        </Button>    
        <AddAccountModal valueAddress={valueAddress}/>
        </HStack>
        <Box h="130px" w="100%"/>
  </VStack>
    </>
    )
  }
  
  export {Addaccounts };
  