import { Heading, Flex, Spacer, Stack } from "@chakra-ui/react";
// 1. Import library components

//

function Balance({ wsEndpoint, token }) {
  // 2. Use local storage.

  //

  // 3. Create states in React.

  //

  // 4. Create an instance.

  //

  // 5. Add Balance function.

  //

  // 6. useEffect in React.

  //

  return (
    <Stack alignItems="center">
      <Heading size="md"> Balance</Heading>
      <Flex gap="30px">
        <Heading size="md">{token}</Heading>
        <Spacer />
        <Heading size="md">{Balances.toFixed(4)}</Heading>
      </Flex>
    </Stack>
  );
}

export { Balance };
