import ItemSelectSubtotalDisplay from "../components/itemSelectSubtotalDisplay"
import ItemSelectItemContainer from "../components/itemSelectItemContainer"
import { Box } from "@chakra-ui/react"
import React, { useState } from "react"

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
  // const items = fItems.map(fitem => {
  //   return { ...fitem, them: fitem.quantity, you: 0 }
  // })
  const [items, setItems] = useState(
    fItems.map(fitem => {
      return { ...fitem, them: fitem.quantity, you: 0 }
    })
  )
  const [subTotal, setSubTotal] = useState(0)
  const handlePlus = e => {
    let tmpItems = [...items]
    let eItem = tmpItems.find(x => x.name === e.currentTarget.id)
    if (eItem.them > 0) {
      setSubTotal(subTotal + eItem.price)
      eItem.you++
      eItem.them--
    }
  }
  const handleMinus = e => {
    let tmpItems = [...items]
    let eItem = tmpItems.find(x => x.name === e.currentTarget.id)
    if (eItem.you > 0) {
      setSubTotal(subTotal - eItem.price)
      eItem.you--
      eItem.them++
    }
  }

  return (
    <Box minH="100vh" bgColor="orange.200">
      <ItemSelectSubtotalDisplay subTotal={subTotal} />
      <ItemSelectItemContainer
        itemList={items}
        handleMinus={handleMinus}
        handlePlus={handlePlus}
      />
    </Box>
  )
}

export default ItemSelectPage
