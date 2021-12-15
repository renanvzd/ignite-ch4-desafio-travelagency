import { Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import { Type } from "./Types";
import { ContinentProps } from "../../pages/continents/[slug]";

const continentInfos = [
  { textHead: "50", subText: "países" },
  { textHead: "60", subText: "línguas" },
  { textHead: "27", subText: "cidades + 100" },
];

export function ContinentInfo({ continent }: ContinentProps) {
  return (
    <Grid
      h="100%"
      mx="auto"
      w="100%"
      maxW={["600px", "600px", "600px", "1000px", "1300px"]}
      alignItems="center"
      templateColumns={["1fr", "1fr", "1fr", "repeat(2, 1fr)"]}
      justifyContent="center"
      alignSelf="start"
      direction={["column", "row"]}
      pt={["36px", "48px", "120px"]}

    >
      <Flex display="block" >
        <Flex
          w={["auto", "auto", "600px"]}
          mx={["16px", "40px"]}
        >
          <Text
            fontSize={["12px", "21px", "22px", "24px"]}
            fontWeight="500"
            lineHeight={["21px", "32px", "36px", "36px"]}
            color="#47585B"
            textAlign="justify"
          >
            {continent.data.description}

          </Text>
        </Flex>
      </Flex>
      <Grid
        templateColumns={["repeat(3, 1fr)"]}
        w="100%"
        justify="center"
        align="center"
        mt={["10px", "16px", "24px"]}
        maxW="1160px"
        flexWrap="wrap"
      // gap={[1, 1]}
      >
        {continentInfos.map((typeOf) => (
          <GridItem key="icon">
            <Type
              textHead={typeOf.textHead}
              subText={typeOf.subText}
            />
          </GridItem>
        ))}

      </Grid>
    </Grid>

  );
}
