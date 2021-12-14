import { Flex, Text } from "@chakra-ui/react";

interface TypesProps {
  textHead: string;
  subText: string;
}

export function Type({ textHead, subText }: TypesProps) {

  return (
    <Flex direction={["column"]} align="center" justify="center" mx="16px">

      <Text fontWeight="600" color="#FFBA08" fontSize={["24px", "32px", "48px"]}>
        {textHead}
      </Text>

      <Text fontWeight="600" color="gray.500" fontSize={["12px", "xl", "2xl"]}>
        {subText}
      </Text>
    </Flex>
  );
}
