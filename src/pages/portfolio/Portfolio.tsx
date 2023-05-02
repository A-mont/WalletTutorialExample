import { Heading, Tabs, TabList, TabPanels, Tab, TabPanel, Center, Stack, VStack,Flex  } from '@chakra-ui/react';
import { GenericCard } from './card';


const image='https://s2.coinmarketcap.com/static/img/coins/64x64/5034.png';
const network='wss://rpc.ibp.network/westend';
const token='KSM'


function Portfolio() {

  const allassets = [
    { image: 'https://d33wubrfki0l68.cloudfront.net/6cc043f2cb1fa1b90cf3ae518f2d6b18bfbe2f4a/b22b3/static/hero-anim-token-1b2270fa949ba9dfbd9fcd8ec83da71b.png', token:"DOT", network: 'wss://rococo-contracts-rpc.polkadot.io' },
    { image:'https://cryptologos.cc/logos/kusama-ksm-logo.png', token:"KSM", network: 'wss://1rpc.io/ksm' }  
  ];

  const polkadotassets = [
    { image: 'https://d33wubrfki0l68.cloudfront.net/6cc043f2cb1fa1b90cf3ae518f2d6b18bfbe2f4a/b22b3/static/hero-anim-token-1b2270fa949ba9dfbd9fcd8ec83da71b.png', token:"DOT", network: 'wss://rococo-contracts-rpc.polkadot.io' }
    
  ];

  const kusamaassets = [
    { image:'https://cryptologos.cc/logos/kusama-ksm-logo.png', token:"KSM", network: 'wss://1rpc.io/ksm' } 
  ];



  return (

    <>
    <Center fontWeight="bold">
      <Heading size="md">
        Portfolio
      </Heading>
      </Center>
    <Tabs>
  <TabList>
    <Tab fontWeight="bold" >All assets</Tab>
    <Tab fontWeight="bold">Polkadot assets</Tab>
    <Tab fontWeight="bold" >Kusama assets</Tab>
  </TabList>

  <TabPanels>
    <TabPanel fontWeight="bold">
      <VStack spacing='10'>
      <Heading size="md" alignItems="center" >All assets</Heading >
      <Stack direction="row" alignItems="center"  spacing='10' >
      <Flex direction="row" gap="30px">
        {allassets.map((prop) => ( <GenericCard image={prop.image} network={prop.network} token= {prop.token}/>))}
      </Flex>

      </Stack>
      </VStack>
    </TabPanel>
    <TabPanel fontWeight="bold">
      <VStack spacing='10'>
        <Heading size="md">Polkadot assets</Heading>
        <Flex direction="row" gap="30px">
        {polkadotassets.map((prop) => ( <GenericCard image={prop.image} network={prop.network} token= {prop.token}/>))}
      </Flex>
      </VStack>
    </TabPanel>
    <TabPanel fontWeight="bold">
      <VStack spacing='10'>
      <Heading size="md" >Kusama assets</Heading>
      <Flex direction="row" gap="30px">
        {kusamaassets.map((prop) => ( <GenericCard image={prop.image} network={prop.network} token= {prop.token}/>))}
      </Flex>
      </VStack>
    </TabPanel>
  </TabPanels>
</Tabs>
  
    </>

    

  )
}

export { Portfolio };
