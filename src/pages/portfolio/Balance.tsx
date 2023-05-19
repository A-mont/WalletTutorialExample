import { Heading, Flex, Spacer, Stack } from "@chakra-ui/react";
// 1. Import library components
import { useState, useEffect } from "react";
import { ApiPromise, WsProvider } from "@polkadot/api";

//

// Create a Balance function with wsEndpoint and token as props.
function Balance({ wsEndpoint, token }) {
  // 2. Use local storage.
  // Get the public key stored in local storage
  const publicKey = localStorage.getItem("Publickey");

  //

  // 3. Create states in React.
  // Store the public key in a state
  const [account, setAccount] = useState(publicKey);

  // Create a state for the balance.
  const [Balances, setBalances] = useState(0);

  //

  // 4. Create an instance.
  // Create an instance of the Polkadot network provider
  const wsProvider = new WsProvider(wsEndpoint);

  //

  // 5. Add Balance function.

  const Balance = async function (account: any) {
    // Create an instance of the Polkadot JS API
    const api = await ApiPromise.create({ provider: wsProvider });

    // Get the public key stored in local storage
    setAccount(localStorage.getItem("Publickey"));

    // Retrieve the initial balance. Since the call has no callback, it is simply a promise
    // that resolves to the current on-chain value
    let {
      data: { free: previousFree },
      nonce: previousNonce,
    }: any = await api.query.system.account(account);

    // Read balance on Network
    const amount = Number(previousFree) / 1000000000000;
    setBalances(amount);

    // Here we subscribe to any balance changes and update the on-screen value
    api.query.system.account(
      account,
      ({ data: { free: currentFree }, nonce: currentNonce }: any) => {
        // Calculate the delta
        const change = currentFree.sub(previousFree);

        // Only display positive value changes (Since we are pulling `previous` above already,
        // the initial balance change will also be zero)
        if (!change.isZero()) {
          previousFree = currentFree;
          previousNonce = currentNonce;

          // Read balance on Network
          const Newamount = Number(previousFree) / 1000000000000;

          // Update state
          setBalances(Newamount);
        }
      }
    );
  };

  //

  // 6. useEffect in React.

  // Update balance
  useEffect(() => {
    Balance(account);
  });

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
