import React from "react"
import ItemSelectRow from "./itemSelectRow"
import { Box } from "@chakra-ui/react"

const ItemSelectItemContainer = props => {
  return (
    <Box>
      {props.itemList.map(item => (
        <ItemSelectRow
          key={item.name}
          handlePlus={props.handlePlus}
          handleMinus={props.handleMinus}
          item={item}
        />
      ))}
    </Box>
  )
}

export default ItemSelectItemContainer
