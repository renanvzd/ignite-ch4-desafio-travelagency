import { Flex } from '@chakra-ui/react';
import { Header } from "../components/Header";
import { HomeBanner } from "../components/HomeBanner";

export default function Home() {
  return (
    <Flex direction="column" h="100px" w="100vw">

      <Header />
      <HomeBanner />

    </Flex>
  )
}
