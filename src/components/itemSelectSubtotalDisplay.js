import React from "react"
import { Spacer, Flex, Box, Center, Text, Button } from "@chakra-ui/react"
const ItemSelectSubtotalDisplay = () => {
  return (
    <Box position="sticky" top="0" bgColor="orange.300">
      <Center>
        <Text fontSize="5em" fontWeight="bold">
          $0
        </Text>
      </Center>
      <Center>
        <Button
          border="1px"
          borderRadius="2xl"
          bgColor="cyan.100"
          h="1.5em"
          w="4em"
          fontSize="3em"
          textTransform="uppercase"
        >
          Pay
        </Button>
      </Center>
      <Flex>
        <Text
          fontSize="1.25em"
          fontWeight="bold"
          p=".5em"
          textTransform="uppercase"
        >
          Them
        </Text>
        <Spacer />
        <Text
          fontSize="1.25em"
          fontWeight="bold"
          p=".5em"
          textTransform="uppercase"
        >
          You
        </Text>
      </Flex>
    </Box>
  )
}

export default ItemSelectSubtotalDisplay
