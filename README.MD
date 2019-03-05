# React Magic Grid

A react adapter for [Magic Grid](https://github.com/e-oj/Magic-Grid).
Uses react hooks, so requires react at least in version 16.8.0.

There is [another react adapter available](https://github.com/IniZio/Magic-Grid-React) that uses react's Component Class so it also supports older versions of react.

[See example use cases](https://amytych.github.io/react-magic-grid/).

### Usage

`npm i -S magic-grid react-magic-grid`

```jsx
import MagicGrid from "react-magic-grid"

const Cards = ({ cards }) => (
  <MagicGrid items={cards.length}>
    {cards.map(item => (
      <Card key={item} item={item} />
    ))}
  </MagicGrid>
)
```

### Props

Supports all options in [Magic-Grid's config](https://github.com/e-oj/Magic-Grid#magicgridconfig).
