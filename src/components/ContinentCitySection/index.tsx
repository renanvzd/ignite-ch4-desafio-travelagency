import { Flex, Heading, Grid, GridItem } from "@chakra-ui/layout";
import { City } from "./Cities";

const travelCities = [
  { cityImage: "london", city: "Londres", country: "Reino Unido" },
  { cityImage: "paris", city: "Paris", country: "França" },
  { cityImage: "roma", city: "Roma", country: "Itália" },
  { cityImage: "praga", city: "Praga", country: "República Tcheca" },
  { cityImage: "amsterda", city: "Amsterdã", country: "Holanda" },
];

export function Cities() {
  return (
    <>
      <Flex
        direction="column"
        pt={["32px", "80px"]}
        maxW={["600px", "600px", "600px", "1000px", "1220px"]}
        mx="auto"
      >
        <Heading
          pl={["44px", "44px", "0px"]}
          textAlign="left"
          fontWeight="500"
          fontSize={["lg", "3xl", "4xl"]}
        >
          Cidades + 100
        </Heading>
      </Flex>

      <Grid
        templateColumns={["1fr", "1fr", "1fr 1fr", "repeat(4, 1fr)"]}
        maxW={["600px", "600px", "600px", "1000px", "1270px"]}
        w="100%"
        justify="space-between"
        align="center"
        mt={["10", "20"]}
        mx="auto"
        flexWrap="wrap"
        gap={[1, 5]}
      >
        {travelCities.map((typeOf) => (
          <GridItem key="city">
            <City
              cityImage={typeOf.cityImage}
              city={typeOf.city}
              country={typeOf.country}
            />
          </GridItem>
        ))}
      </Grid>
    </>
  );
}
