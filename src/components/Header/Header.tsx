import { useState } from "react";
import ReactDOM from "react-dom";
import {
  ChakraProvider,
  Heading,
  useToast,
  Box,
  Button,
  HStack,
  Spacer,
  Image,
} from "@chakra-ui/react";
import { web3Accounts, web3Enable } from "@polkadot/extension-dapp";
import { GrUpdate } from "react-icons/gr";
import Identicon from "@polkadot/react-identicon";
import { App } from "../../App";
import "./app.css";

function Header() {
  const size = 33;

  const theme = "polkadot";

  const publicKey = localStorage.getItem("Publickey");

  const [Account, setAccount] = useState(publicKey);

  const fistsegment = publicKey!.slice(0, 4);

  const secondsegment = publicKey!.slice(-4);

  const toast = useToast();
  const [text, setText] = useState("");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);

    const content = document.querySelector<HTMLInputElement>("#input")?.value;

    if (content) {
      navigator.clipboard.writeText(content);
    }
  };

  const extensionaccount = async function () {
    await web3Enable("My wallet");
    const allAccounts = await web3Accounts();
    const account = allAccounts[0].address;
    localStorage.setItem("Publickey", account);
    setAccount(localStorage.getItem("Publickey"));

    ReactDOM.render(
      <ChakraProvider>
        <App />
      </ChakraProvider>,
      document.getElementById("root")
    );
  };

  return (
    <>
      <Box w="100%" h="20px" />
      <HStack>
        <Box>
          <HStack>
            <Image
              boxSize="40px"
              objectFit="cover"
              alignItems="center"
              src={
                "https://d33wubrfki0l68.cloudfront.net/6cc043f2cb1fa1b90cf3ae518f2d6b18bfbe2f4a/b22b3/static/hero-anim-token-1b2270fa949ba9dfbd9fcd8ec83da71b.png"
              }
              borderRadius="lg"
            />
            <Heading size="sm">Polkadot Study</Heading>
          </HStack>
        </Box>
        <Spacer />
        <Box></Box>
        <Box>
          <Button
            variant="solid"
            colorScheme="pink"
            borderRadius="30px"
            onClick={extensionaccount}
          >
            <GrUpdate color="white" size="20px" />
          </Button>
          <Button backgroundColor="pink.500" borderRadius="20px">
            <Identicon value={Account} size={size} theme={theme} />
            {fistsegment + "..." + secondsegment}
          </Button>
        </Box>
      </HStack>
      <Box w="100%" h="25px" />
    </>
  );
}

export { Header };
