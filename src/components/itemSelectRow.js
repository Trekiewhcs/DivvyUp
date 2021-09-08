import React from "react"
import { Flex, Spacer, Text } from "@chakra-ui/react"
import { AddIcon, MinusIcon } from "@chakra-ui/icons"

const ItemSelectRow = props => {
  return (
    <Flex align="center" justify="center" py="1em">
      <Text textAlign="center" w="20%" fontSize="2em">
        {props.item.them}
      </Text>
      <Flex
        justify="center"
        align="center"
        w="60%"
        direction="column"
        borderRadius="lg"
        bgColor="gray.400"
        border="1px"
      >
        <Text px=".25em" fontSize="1.5em" textTransform="capitalize">
          {props.item.name} ${props.item.price}
        </Text>
        <Flex borderBottomRadius="lg" w="100%" bgColor="yellow.100">
          <MinusIcon
            onClick={props.handleMinus}
            id={props.item.name}
            borderBottomLeftRadius="lg"
            borderTop="1px"
            borderEnd="1px"
            p=".25em"
            w="50%"
            h="2em"
            bgColor="red.100"
            cursor="pointer"
            _hover={{ bgColor: "red.200" }}
          />
          <AddIcon
            onClick={props.handlePlus}
            id={props.item.name}
            borderBottomRightRadius="lg"
            bgColor="green.100"
            borderTop="1px"
            borderStart="1px"
            p=".25em"
            w="50%"
            h="2em"
            cursor="pointer"
            _hover={{ bgColor: "green.200" }}
          />
        </Flex>
      </Flex>
      <Text textAlign="center" w="20%" fontSize="2em" px="1em">
        {props.item.you}
      </Text>
    </Flex>
  )
}

export default ItemSelectRow
