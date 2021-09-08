import React from "react"
import { Spacer, Flex, Box, Center, Text, Button } from "@chakra-ui/react"
const ItemSelectSubtotalDisplay = props => {
  return (
    <Box position="sticky" top="0" bgColor="orange.300">
      <Center>
        <Text fontSize="5em" fontWeight="bold">
          ${props.subTotal}
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
          _hover={{ bgColor: "cyan.200" }}
        >
          Pay
        </Button>
      </Center>
      <Flex>
        <Text
          minW="20%"
          textAlign="center"
          fontSize="1.25em"
          fontWeight="bold"
          p=".5em"
          textTransform="uppercase"
        >
          Them
        </Text>
        <Spacer />
        <Text
          minW="20%"
          textAlign="center"
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
