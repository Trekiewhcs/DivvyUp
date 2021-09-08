import React, { useState } from "react"
import ItemSelectSubtotalDisplay from "../components/itemSelectSubtotalDisplay"
import ItemSelectItemContainer from "../components/itemSelectItemContainer"
import { Box } from "@chakra-ui/react"
const ItemSelectPage = () => {
  const fItems = [
    { name: "burger", price: 10, quantity: 3 },
    { name: "pizza", price: 12, quantity: 1 },
    { name: "beer", price: 5, quantity: 5 },
    { name: "sandwich", price: 6, quantity: 4 },
    { name: "fudge", price: 2.5, quantity: 8 },
    { name: "soup", price: 9, quantity: 1 },
    { name: "curry", price: 16, quantity: 2 },
  ]
  const [items, setItems] = useState(
    fItems.map(fitem => {
      return { ...fitem, count: 0 }
    })
  )
  return (
    <Box minH="100vh" bgColor="orange.200">
      <ItemSelectSubtotalDisplay />
      <ItemSelectItemContainer itemList={items} />
    </Box>
  )
}

export default ItemSelectPage
