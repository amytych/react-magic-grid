import React from "react"
import PropTypes from "prop-types"
import { storiesOf } from "@storybook/react"

import MagicGrid from "./index"

const cards = [1, 2, 3, 4, 5, 6, 7, 9]

const Card = ({ item }) => (
  <div
    style={{
      width: `${100 / 4}%`,
      minWidth: 200,
      height: Math.floor(Math.random() * (300 - 100 + 1)) + 100,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      padding: "1rem",
      backgroundColor: "antiquewhite",
      borderRadius: "8px",
      border: "1px solid brown",
    }}
  >
    {item}
  </div>
)

Card.propTypes = { item: PropTypes.number }

storiesOf("MagicGrid", module)
  .add("default", () => (
    <MagicGrid items={cards.length} gutter={0}>
      {cards.map(item => (
        <Card key={item} item={item} />
      ))}
    </MagicGrid>
  ))
  .add("animated", () => (
    <MagicGrid items={cards.length} gutter={0} animate={true}>
      {cards.map(item => (
        <Card key={item} i={item} />
      ))}
    </MagicGrid>
  ))
