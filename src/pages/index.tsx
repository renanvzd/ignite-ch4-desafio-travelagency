import { Flex, Heading, Stack, Divider } from '@chakra-ui/react';
import { HomeBanner } from "../components/HomeBanner";
import { Types } from "../components/TravelTypes";

export default function Home() {
  return (
    <Flex direction="column" h="100px" w="100vw">

      <HomeBanner />
      <Types />
      <Stack width="90px" padding=".5px" bg="#47585B" mt={["36px", "80px"]} mb={["24px", "52px"]} ml="auto" mr="auto">
        <Divider />
      </Stack>


      <Heading
        textAlign="center"
        fontWeight="500"
        mb={["5", "14"]}
        fontSize={["lg", "3xl", "4xl"]}
      >
        Vamos nessa?
        <br />
        Então escolha seu continente
      </Heading>


    </Flex>
  )
}
