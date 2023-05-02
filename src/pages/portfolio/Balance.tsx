import { useState,useEffect } from 'react';
import { Heading,Flex, Spacer, Stack
    
  } from '@chakra-ui/react'
import { ApiPromise, WsProvider} from '@polkadot/api';



function Balance(props) {

  const publicKey= localStorage.getItem("Publickey");
  
  const [account, setAccount] = useState(publicKey);

  const [Balances, setBalances]= useState(0);
 
  const wsProvider = new WsProvider(props.wsEndpoint);
  
  const Balance = async function (account)  {

  const api = await ApiPromise.create({ provider: wsProvider });
  
  
  setAccount(localStorage.getItem("Publickey"));
  
  // Retrieve the initial balance. Since the call has no callback, it is simply a promise
  // that resolves to the current on-chain value

  let { data: { free: previousFree }, nonce: previousNonce }:any = await api.query.system.account(account);
  
  // Read balance on Network
  const amount=Number(previousFree)/1000000000000;
  console.log(amount)
  setBalances(amount) 
  
  // Here we subscribe to any balance changes and update the on-screen value
  api.query.system.account(account, ({ data: { free: currentFree }, nonce: currentNonce }) => {


      // Calculate the delta
      const change = currentFree.sub(previousFree  );
  
      // Only display positive value changes (Since we are pulling `previous` above already,
      // the initial balance change will also be zero)
      if (!change.isZero()) {
        
        previousFree = currentFree;
        previousNonce = currentNonce;
        
      // Read balance on Network
      const Newamount=Number(previousFree)/1000000000000;
      setBalances(Newamount) 
      }
    });
  
  }

  
  useEffect(() => {
    
    Balance(account)
  });



    return (
    <Stack alignItems="center">
      <Heading size="md"> Balance</Heading>
        <Flex gap="30px">
          <Heading size='md'>{props.token}</Heading>
            <Spacer/>
          <Heading  size='md'>{Balances.toFixed(4)}</Heading>
        </Flex>
    </Stack>
     
    )
  }

  export {Balance};
