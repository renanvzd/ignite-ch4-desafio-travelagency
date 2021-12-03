import { Flex, SimpleGrid, Image, Center, Text } from "@chakra-ui/react";

export function TravelTypes() {
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
      mt="140px"
    >
      <SimpleGrid
        h="100%"
        mx="auto"
        w="100%"
        maxW="1160px"
        alignItems="center"
        templateColumns="repeat(5, 1fr)"
        justifyContent="space-between"
        display="flex"
      >
        <Flex display="block">
          <Center>
            <Image
              src='icons/drink.svg'
              alt='Cocktail'
              w={["40px", "85px"]}
              h={["40px", "85px"]}
              gridColumn="1"
            />
          </Center>
          <Text
            fontSize="24px"
            fontFamily="Poppins"
            fontWeight="500"
            lineHeight="54px"
          >
            Vida noturna
          </Text>
        </Flex>
        <Flex display="block">
          <Center>
            <Image
              src='icons/surf.svg'
              alt='Prancha'
              w={["40px", "85px"]}
              h={["40px", "85px"]}
              alignContent="center"
              justifySelf="center"
              gridColumn="2"
            />
          </Center>
          <Text
            fontSize="24px"
            fontFamily="Poppins"
            fontWeight="500"
            lineHeight="54px"
          >
            Praia
          </Text>
        </Flex>
        <Flex display="block">
          <Center>
            <Image
              src='icons/building.svg'
              alt='Predio'
              w={["40px", "85px"]}
              h={["40px", "85px"]}
              alignContent="center"
              justifySelf="center"
              gridColumn="3"
            />
          </Center>
          <Text
            fontSize="24px"
            fontFamily="Poppins"
            fontWeight="500"
            lineHeight="54px"
          >
            Moderno
          </Text>
        </Flex>
        <Flex display="block">
          <Center>
            <Image
              src='icons/museum.svg'
              alt='Museu'
              w={["40px", "85px"]}
              h={["40px", "85px"]}
              alignContent="center"
              justifySelf="center"
              gridColumn="4"
            />
          </Center>
          <Text
            fontSize="24px"
            fontFamily="Poppins"
            fontWeight="500"
            lineHeight="54px"
          >
            Clássico
          </Text>
        </Flex>
        <Flex display="block">
          <Center>
            <Image
              src='icons/earth.svg'
              alt='Terra'
              w={["40px", "85px"]}
              h={["40px", "85px"]}
              alignContent="center"
              justifySelf="center"
              gridColumn="5"
            />
          </Center>
          <Text
            fontSize="24px"
            fontFamily="Poppins"
            fontWeight="500"
            lineHeight="54px"
          >
            e mais...
          </Text>
        </Flex>
      </SimpleGrid>
    </Flex >
  );
}