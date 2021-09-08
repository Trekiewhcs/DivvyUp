import React from "react"
import ItemSelectRow from "./itemSelectRow"
import { Box } from "@chakra-ui/react"

const ItemSelectItemContainer = props => {
  return (
    <Box>
      {props.itemList.map(item => (
        <ItemSelectRow
          key={item.name}
          itemName={item.name}
          itemPrice={item.price}
          itemQuantity={item.quantity}
          itemCount={item.count}
        />
      ))}
    </Box>
  )
}

export default ItemSelectItemContainer
