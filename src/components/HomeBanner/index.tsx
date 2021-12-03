import { Box, Flex, Image, Text, Grid, useBreakpointValue } from "@chakra-ui/react";

export function HomeBanner() {

  const isMobile = useBreakpointValue({
    base: false,
    md: true,

  });

  return (
    <Box >
      <Flex
        w="100%"
        h={["163px", "250px", "270px", "335px"]}
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
          <Flex display="block" w={["250px", "426px"]} ml={["20px", "30px"]}>
            <Text
              fontSize={["18px", "26px", "36px"]}
              fontWeight="500"
              lineHeight={["30px", "54px"]}
              color="#f5f8fa"
            >
              5 Continentes,
            </Text>
            <Text
              fontSize={["18px", "26px", "36px"]}
              fontWeight="500"
              color="#f5f8fa"
            >
              infinitas possibilidades.
            </Text>
            <Flex
              pt={["8px", "20px"]}
              w={["285px", "400px", "426px"]}
            >
              <Text
                fontSize={["12px", "18px", "20px"]}
                fontWeight="500"
                lineHeight={["21px", "30px"]}
                color="#c7c5c5"
              >
                Chegou a hora de tirar do papel a viagem que você sempre sonhou.
              </Text>
            </Flex>
          </Flex>
          {isMobile && <Image
            w={["0px", "0px", "250px", "380px"]}
            alignContent="right"
            src='airplane.svg'
            alt='Avião'
            justifySelf="right"
            gridColumn="2"
            pt="130px"
            paddingRight="35px"
            transform="rotate(3deg)"
          />}
        </Grid>
      </Flex>
    </Box>
  );
}