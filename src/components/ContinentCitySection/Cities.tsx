import { Flex, Image, Text } from "@chakra-ui/react";

interface CitiesProps {
  cityImage: string;
  city: string;
  country: string;
}

export function City({ cityImage, city, country }: CitiesProps) {

  return (
    <Flex direction={["column", "column"]} align="center" justify="center" mb="20px">

      <Image src={cityImage} w="250px" h="173px" alt={city} />

      <Flex
        w="250px"
        direction={["column"]}
        align="left"
        justify="left"
        mb="20px"
        pl="24px"
        textAlign="left"
        bg='#c4ddfa'
      >
        <Text pt="16px" fontWeight="600" color="#47585B" fontSize={["20px", "20px", "22px"]}>
          {city}
        </Text>
        <Text pb="16px" pt="8px" fontWeight="600" color="#999999" fontSize={["16px", "16px", "16px"]}>
          {country}
        </Text>
      </Flex>

    </Flex>
  );
}
