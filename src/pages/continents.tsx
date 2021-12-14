import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { ContinentInfo } from '../components/ContinentInfo';

export default function Continents() {
  return (
    <Box >
      <Image
        w="100%"
        h={["163px", "250px", "270px", "500px"]}
        alignContent="right"
        src='continentBanner.png'
        alt='Europa'
        justifySelf="right"
      />
      <Flex
        display="absolute"
        w={["250px", "426px"]}
        ml={["30px", "60px", "150px", "200px"]}
        mt={["-40px", "-70px", "-80px", "-110px"]}
      >
        <Text
          fontSize={["14px", "26px", "26px", "48px"]}
          fontWeight="600"
          lineHeight={["30px", "54px"]}
          color="#ffffff"
        >
          Europa
        </Text>
      </Flex>


      <ContinentInfo />

    </Box >
  )
}