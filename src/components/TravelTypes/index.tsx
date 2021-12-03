import { Grid, GridItem } from "@chakra-ui/layout";
import { Type } from "./Types";

const travelTypes = [
  { icon: "drink", text: "vida noturna" },
  { icon: "surf", text: "praia" },
  { icon: "building", text: "moderno" },
  { icon: "museum", text: "clássico" },
];

export function Types() {
  return (
    <Grid
      templateColumns={["1fr 1fr", "1fr 1fr", "1fr 1fr", "repeat(5, 1fr)"]}
      w="100%"
      justify="space-between"
      align="center"
      mt={["10", "32"]}
      mx="auto"
      maxW="1160px"
      flexWrap="wrap"
      gap={[1, 5]}
    >
      {travelTypes.map((typeOf) => (
        <GridItem key="icon">
          <Type
            icon={typeOf.icon}
            text={typeOf.text}
          />
        </GridItem>
      ))}

      <GridItem colSpan={[2, 2, 2, 1]}>
        <Type icon="earth" text="e mais..." />
      </GridItem>
    </Grid>
  );
}
