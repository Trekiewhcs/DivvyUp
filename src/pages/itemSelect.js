import React from "react"
import ItemSelectSubtotalDisplay from "../components/itemSelectSubtotalDisplay"
import ItemSelectItemContainer from "../components/itemSelectItemContainer"
import { Box } from "@chakra-ui/layout"
const ItemSelectPage = () => {
  return (
    <Box minH="100vh" bgColor="orange.200">
      <ItemSelectSubtotalDisplay />
      <ItemSelectItemContainer />
    </Box>
  )
}

export default ItemSelectPage
