import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import {
  useToast,
  Heading,
  Box,
  Button,
  VStack,
  Input,
  HStack,
} from "@chakra-ui/react";
import { MdContentCopy } from "react-icons/md";
import { AddAccountModal } from "../../components/Body/AddAccountModal";
// 1. Import library components
import { Keyring } from "@polkadot/api";
import { mnemonicGenerate } from "@polkadot/util-crypto";
import { waitReady } from "@polkadot/wasm-crypto";

//

function Newaccounts() {
  const toast = useToast();

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
  };

  // 2. Create states in React

  // We create a new states
  const [text, setText] = useState("");

  const [valueAddress, setValueAddress] = useState("");

  //

  // 3. Add a keyring function

  // We add a new function
  const keyring = async function main() {
    // We wait for connection.
    await waitReady();

    // Create mnemonic string
    const mnemonic = mnemonicGenerate();

    // Update state
    setText(mnemonic);

    // We create a new keychain type Sr25519
    const keyring = new Keyring({ type: "sr25519" });

    // We added seed phrase to the new keyring.
    const keys = keyring.createFromUri(mnemonic, { name: "sr25519" });

    //Update state
    setValueAddress(keys.address);

    //We store the public key in local storage.
    localStorage.setItem("Publickey", keys.address);
  };

  //

  return (
    <VStack>
      <Box h="50px" w="100%" />
      <Heading size="md" className="center">
        Your seed phrase is:{" "}
      </Heading>
      <div>
        <HStack>
          <Input
            readOnly
            w="650px"
            h="100px"
            inputMode="text"
            type="text"
            className="center"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <CopyToClipboard text={text} onCopy={handleCopy}>
            <MdContentCopy></MdContentCopy>
          </CopyToClipboard>
          {copied
            ? toast({
                title: "Copied",
                duration: 3000,
                status: "success",
                isClosable: true,
              })
            : null}
        </HStack>
      </div>
      <HStack>
        <Button
          colorScheme="green"
          borderRadius="20px"
          onClick={keyring}
          className="center"
        >
          {" "}
          Generate phrase
        </Button>
        <AddAccountModal valueAddress={valueAddress} />
      </HStack>
      <Box h="295px" w="100%" />
    </VStack>
  );
}

export { Newaccounts };
