import { Box, Flex, Image, Text, Grid } from "@chakra-ui/react";

export function HomeBanner() {
  return (
    <Box >
      <Flex
        w="100%"
        h={["163px", "250px", "250px", "335px"]}
        bgImage="url('/Background.png')"
        bgPosition={["100% 20%", "100% 20%", "100% 30%"]}
        bgRepeat="no-repeat"
        bgSize="cover"
      >
        <Grid
          h="100%"
          mx="auto"
          w="100%"
          maxW="1160px"
          alignItems="center"
          templateColumns="repeat(2, 1fr)"
          justifyContent="center"
          alignSelf="start"
        >
          <Flex display="block" w={["81px", "426px"]}>
            <Text
              fontSize="36px"
              fontFamily="Poppins"
              fontWeight="500"
              lineHeight="54px"
              color="#f5f8fa"
            >
              5 Continentes,
            </Text>
            <Text
              fontSize="36px"
              fontFamily="Poppins"
              fontWeight="500"
              lineHeight="54px"
              color="#f5f8fa"
            >
              infinitas possibilidades
            </Text>
            <Flex
              pt="20px"
              w={["81px", "426px"]}
            >
              <Text
                fontSize="20px"
                fontFamily="Poppins"
                fontWeight="500"
                lineHeight="30px"
                color="#c7c5c5"
              >
                Chegou a hora de tirar do papel a viagem que você sempre sonhou.
              </Text>
            </Flex>
          </Flex>
          <Image
            w={["81px", "380px"]}
            alignContent="right"
            src='airplane.svg'
            alt='Avião'
            justifySelf="right"
            gridColumn="2"
            pt="110px"
            transform="rotate(3deg)"
          />
        </Grid>
      </Flex>
    </Box>
  );
}