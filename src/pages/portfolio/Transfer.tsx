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
import { ApiPromise, WsProvider} from '@polkadot/api';
import { web3Accounts,web3Enable, web3FromSource } from '@polkadot/extension-dapp';

//



function Transfer({wsEndpoint, token}) {


    // 2. Create states in React.

        // Create a state for the amount to be transferred
        const [valueAmount, setValueAmount] = useState('');

        // Create a state for the address
        const [valueAddress, setValueAddress] = useState('');
    
       // Create a state for the status transaction
        const [status, setStatus] = useState('');
    
         // Create a state for the blockhash
        const [blockhash, setBlockhash] = useState('');

   //


    // 3. Create an instance.

      // Create an instance of the Polkadot network provider
       const wsProvider = new WsProvider(wsEndpoint);

   //

   // 4. Add Transfer function.

   
const transfer = async function main () {

  // Enable connection to the extension
  await web3Enable('my wallet');

 // Known account we want to use on Polkadot extension
 const allAccounts = await web3Accounts();

 // Get the first visible account of the polkadot extension.
 const account = allAccounts[0];

 // Store the public key in local storage.
 localStorage.setItem("Publickey",account.address); 

 // Get the public key in local storage.
 const addressaccount:any=localStorage.getItem("Publickey");
     
 // Create an instance of the Polkadot JS API    
 const api = await ApiPromise.create({ provider: wsProvider });
 
 // Create a transfer extrinsic 
 const transferExtrinsic = api.tx.balances.transfer(valueAddress, Number(valueAmount)*1000000000000)
 
// Reset States
 setValueAmount('')
 setValueAddress('')
 
 // to be able to retrieve the signer interface from this account
 // we can use web3FromSource which will return an InjectedExtension type
 const injector = await web3FromSource(account.meta.source);
      
 // passing the injected account address as the first argument of signAndSend
 // will allow the api to retrieve the signer and the user will see the extension
 // popup asking to sign the balance transfer transaction
 transferExtrinsic.signAndSend(addressaccount, { signer: injector.signer }, ({ status }) => {
 if (status.isInBlock) {
     console.log(`Completed at block hash #${status.asInBlock.toString()}`);
     setBlockhash(status.asInBlock.toString())
 } else {
     console.log(`Current status: ${status.type}`);
 
     setStatus(status.type)
 
     if (status.type==='Finalized'){
   toast({
   title: 'Successful Transaction',
   duration: 3000,
   status: 'success',
   isClosable: true,
 })

 ReactDOM.render(
  <ChakraProvider>
    <App />
  </ChakraProvider>,
  document.getElementById('root')
);

onClose()
 }
 }
 }).catch((error: any) => {
 console.log(':( transaction failed', error);
 });

  };

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