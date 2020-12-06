import React from "react";
import { Box, Image, Flex, Heading, Text, Tag, HStack } from "@chakra-ui/react";
import { BiStar } from "react-icons/bi";

export const Card: React.FC = () => {
  return (
    <Flex>
      <Box flexBasis="300px" height="200px">
        <Image
          src="https://placeimg.com/300/200/arch"
          rounded="md"
          width="300px"
        />
      </Box>
      <Flex
        width="calc(100% - (300px + 16px))"
        direction="column"
        marginLeft={2}
      >
        <Heading fontSize="xl" isTruncated>
          title
        </Heading>
        <Box>prefecture</Box>
        <HStack spacing={2}>
          {["feature1", "feature2", "feature3"].map((val) => (
            <Tag borderRadius="full" key={`${val}`}>
              {val}
            </Tag>
          ))}
        </HStack>
        <Box marginTop="auto">
          <Flex justifyContent="space-between">
            <HStack spacing={1}>
              {Array(5)
                .fill(true)
                .map((_, index) => {
                  return <BiStar color="#F56565" key={index} />;
                })}
            </HStack>
            <Text>1泊&nbsp;price</Text>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};
