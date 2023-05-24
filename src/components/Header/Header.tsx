import { useState } from "react";
import {
  Heading,
  Box,
  Button,
  HStack,
  Spacer,
  Image,
} from "@chakra-ui/react";
import Identicon from "@polkadot/react-identicon";
import { AccountButton } from "./AccountModal";
import "./app.css";

function Header() {
  const size = 33;

  const theme = "polkadot";

  const publicKey = localStorage.getItem("Publickey");

  const [Account] = useState(publicKey);

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
          <Button backgroundColor="pink.500" borderRadius="20px">
            <Identicon value={Account} size={size} theme={theme} />
            <AccountButton/> 
          </Button>
        </Box>
      </HStack>
      <Box w="100%" h="25px" />
    </>
  );
}

export { Header };