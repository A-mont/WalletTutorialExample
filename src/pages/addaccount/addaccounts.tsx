import { useState } from "react";
import { Heading, Box, Button, VStack, Input, HStack } from "@chakra-ui/react";
import { AddAccountModal } from "../../components/Body/AddAccountModal";
// 1. Import library components
import { Keyring } from "@polkadot/api";
import { waitReady } from "@polkadot/wasm-crypto";

//

function Addaccounts() {
  const [text, setText] = useState("");

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

  // Create state
  const [valueAddress, setValueAddress] = useState("");

  //

  // 3. Add a addkeyring function

  const addkeyring = async function main() {
    // Example:
    // spirit two cable team panther clap slush rhythm fish brave asthma nominee
    // publicKey = 5CFhkekD6ssN4A6AJrB8AUmwKhsR3vrx7GC8BGnruj1vdyk5

    // We wait for connection.
    await waitReady();

    //We get the words of the seed phrase from the inputs.

    word1 = document.getElementById("1") as HTMLInputElement;
    word2 = document.getElementById("2") as HTMLInputElement;
    word3 = document.getElementById("3") as HTMLInputElement;
    word4 = document.getElementById("4") as HTMLInputElement;
    word5 = document.getElementById("5") as HTMLInputElement;
    word6 = document.getElementById("6") as HTMLInputElement;
    word7 = document.getElementById("7") as HTMLInputElement;
    word8 = document.getElementById("8") as HTMLInputElement;
    word9 = document.getElementById("9") as HTMLInputElement;
    word10 = document.getElementById("10") as HTMLInputElement;
    word11 = document.getElementById("11") as HTMLInputElement;
    word12 = document.getElementById("12") as HTMLInputElement;

    // Add a space and concatenate the words of the seed phrase
    let wordlist =
      word1.value +
      " " +
      word2.value +
      " " +
      word3.value +
      " " +
      word4.value +
      " " +
      word5.value +
      " " +
      word6.value +
      " " +
      word7.value +
      " " +
      word8.value +
      " " +
      word9.value +
      " " +
      word10.value +
      " " +
      word11.value +
      " " +
      word12.value;

    const mnemonic = wordlist;

    // Create a new keyring type Sr25519
    const keyring = new Keyring({ type: "sr25519" });

    // We added seed phrase to the new keyring.
    const keys = keyring.createFromUri(mnemonic, { name: "sr25519" });

    // Update state
    setValueAddress(keys.address);

    //We store the public key in local storage.
    localStorage.setItem("Publickey", keys.address);
  };

  //
  return (
    <>
      <VStack spacing={10}>
        <Heading className="center" size="sm">
          Add your seed phrase:{" "}
        </Heading>
        <HStack className="center" spacing={3}>
          <Input
            id="1"
            value={word1}
            type="text"
            placeholder="1"
            w="150px"
            h="50px"
          />
          <Input
            id="2"
            value={word2}
            type="text"
            placeholder="2"
            w="150px"
            h="50px"
          />
          <Input
            id="3"
            value={word3}
            type="text"
            placeholder="3"
            size="md"
            w="150px"
            h="50px"
          />
          <Input
            id="4"
            value={word4}
            type="text"
            placeholder="4"
            size="md"
            w="150px"
            h="50px"
          />
        </HStack>
        <HStack className="center" spacing={3}>
          <Input
            id="5"
            value={word5}
            type="text"
            placeholder="5"
            size="md"
            w="150px"
            h="50px"
          />
          <Input
            id="6"
            value={word6}
            type="text"
            placeholder="6"
            size="md"
            w="150px"
            h="50px"
          />
          <Input
            id="7"
            value={word7}
            type="text"
            placeholder="7"
            size="md"
            w="150px"
            h="50px"
          />
          <Input
            id="8"
            value={word8}
            type="text"
            placeholder="8"
            size="md"
            w="150px"
            h="50px"
          />
        </HStack>
        <HStack className="center" spacing={3}>
          <Input
            id="9"
            value={word9}
            type="text"
            placeholder="9"
            size="md"
            w="150px"
            h="50px"
          />
          <Input
            id="10"
            value={word10}
            type="text"
            placeholder="10"
            size="md"
            w="150px"
            h="50px"
          />
          <Input
            id="11"
            value={word11}
            type="text"
            placeholder="11"
            size="md"
            w="150px"
            h="50px"
          />
          <Input
            id="12"
            value={word12}
            type="text"
            placeholder="12"
            size="md"
            w="150px"
            h="50px"
          />
        </HStack>
        <HStack>
          <Button
            className="center"
            variant="solid"
            colorScheme="green"
            borderRadius="20px"
            _active={{
              bg: "#dddfe2",
              transform: "scale(0.98)",
              backgroundColor: "#bec3c9",
            }}
            _focus={{ backgroundColor: "#bec3c9" }}
            onClick={addkeyring}
          >
            Create account
          </Button>
          <AddAccountModal valueAddress={valueAddress} />
        </HStack>
        <Box h="130px" w="100%" />
      </VStack>
    </>
  );
}

export { Addaccounts };
