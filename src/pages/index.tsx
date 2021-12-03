import { Flex } from '@chakra-ui/react';
import { HomeBanner } from "../components/HomeBanner";
import { TravelTypes } from "../components/TravelTypes";

export default function Home() {
  return (
    <Flex direction="column" h="100px" w="100vw">

      <HomeBanner />
      <TravelTypes />

    </Flex>
  )
}
