
// 1. Import the necessary components.

//

import { Heading,Flex, Spacer, Stack
    
} from '@chakra-ui/react'


// Create a Balance function with wsEndpoint and token as props.
function Balance({wsEndpoint,token}) {

  // 3. Add the necessary states.

  //


  // 3. Insert the balance function 

  //



    return (
    <Stack alignItems="center">
      <Heading size="md"> Balance</Heading>
        <Flex gap="30px">
          <Heading size='md'>{token}</Heading>
            <Spacer/>
          <Heading  size='md'>{Balances.toFixed(4)}</Heading>
        </Flex>
    </Stack>
     
    )
  }

  export {Balance};
