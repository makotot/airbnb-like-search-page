import React from "react";
import { Box, Image, Flex, Heading, Text, Tag, HStack } from "@chakra-ui/react";
import { BiStar } from "react-icons/bi";
import { Room } from "../../../../types";

export const Card: React.FC<{ room: Room }> = ({ room }) => {
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
          {room.title}
        </Heading>
        <Box>{room.prefecture.name}</Box>
        <HStack spacing={2}>
          {room.features.slice(0, 3).map((feature) => (
            <Tag borderRadius="full" key={`${feature}`}>
              {feature}
            </Tag>
          ))}
        </HStack>
        <Box marginTop="auto">
          <Flex justifyContent="space-between">
            <HStack spacing={1}>
              {Array(5)
                .fill(true)
                .map((_, index) => {
                  return (
                    <BiStar
                      color={room.rate > index ? "#F56565" : "#CCCCCC"}
                      key={index}
                    />
                  );
                })}
            </HStack>
            <Text>1泊&nbsp;{room.price}</Text>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};
