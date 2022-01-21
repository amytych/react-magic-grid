import React from "react"
import { storiesOf } from "@storybook/react"

import MagicGrid from "./index"

const cards = [1, 2, 3, 4, 5, 6, 7, 9]

const getStyle = () => ({
  margin: 0,
  padding: 0,
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
})

// remember to forward ref when using custom components
const CustomUl = React.forwardRef((props, ref) =>
  <ul ref={ref} style={{ margin: 0, padding: 0, background: "#111" }} {...props} />
)

storiesOf("MagicGrid", module)
  .add("default", () => (
    <MagicGrid items={cards.length} gutter={0}>
      {cards.map(item => (
        <div key={item} style={getStyle()}>
          {item}
        </div>

      ))}
    </MagicGrid>
  ))
  .add("animated", () => (
    <MagicGrid items={cards.length} gutter={0} animate={true}>
      {cards.map(item => (
        <div key={item} style={getStyle()}>
          {item}
        </div>
      ))}
    </MagicGrid>
  ))
  .add("`as` prop", () => (
    <MagicGrid as="ul" items={cards.length} gutter={0}>
      {cards.map(item => (
        <li key={item} style={getStyle()}>
          {item}
        </li>
      ))}
    </MagicGrid>
  ))
  .add("`as` prop custom component", () => (
    <MagicGrid as={CustomUl} items={cards.length} gutter={0}>
      {cards.map(item => (
        <li key={item} style={getStyle()}>
          {item}
        </li>
      ))}
    </MagicGrid>
  ))

