import { Flex, Center, Image } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex
      bg="white"
      w="100%"
      as="header"
      mx="auto"
      px="1rem"
      h={["50px", "100px"]}
      align="center"
      justify="center"
    >
      <Image boxSize="200" src='logo.svg' alt='Logo' />
    </Flex>
  );
}