import React from "react"
import { CardBase } from "../../components/cards"
import { CardBody } from "../../components/cards/body"
import { CardHeader } from "../../components/cards/header"
import { Label } from "../../components/label"
import { PaginatedScrollView } from "../../components/paginated-scrollview"
import theme from "../../global/light.theme"
import { MyWalletCard } from "../my-wallet-card"

// const cards = [
//   <MyWalletCard />,
//   <MyWalletCard />,
//   <MyWalletCard />,
// ]

interface ScrollerProps {
  cardWidth: number;
  cardMargin: number;
  children: React.ReactNode[];
  style?: {}
  firstItemOffset?: number;
}

export const CardScroller = ({ cardWidth, cardMargin, style, firstItemOffset, children }: ScrollerProps) => {

  return (
    <PaginatedScrollView
      offsets={[...Array(children.length)].map(
        (x, index) => (index * (cardWidth - (4 * cardMargin)) + (index - 1) * 4 * cardMargin)
      )}
      style={[style]}
    >
      {children}
    </PaginatedScrollView>
  )
}
