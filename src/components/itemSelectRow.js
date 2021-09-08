import React from "react"
import { Flex, Spacer, Text } from "@chakra-ui/react"
import { AddIcon, MinusIcon } from "@chakra-ui/icons"

const ItemSelectRow = () => {
  return (
    <Flex align="center" justify="center" py="1em">
      <Text fontSize="2em" px="1em">
        2
      </Text>
      <Spacer />
      <Flex
        justify="center"
        align="center"
        direction="column"
        borderRadius="lg"
        bgColor="gray.400"
        border="1px"
      >
        <Text px=".25em" fontSize="1.5em">
          Burger $10
        </Text>
        <Flex>
          <MinusIcon
            borderBottomLeftRadius="lg"
            borderTop="1px"
            borderEnd="1px"
            p=".25em"
            w="50%"
            h="2em"
            bgColor="red.100"
          />
          <AddIcon
            borderBottomRightRadius="lg"
            bgColor="green.100"
            borderTop="1px"
            borderStart="1px"
            p=".25em"
            w="50%"
            h="2em"
          />
        </Flex>
      </Flex>
      <Spacer />
      <Text fontSize="2em" px="1em">
        0
      </Text>
    </Flex>
  )
}

export default ItemSelectRow
