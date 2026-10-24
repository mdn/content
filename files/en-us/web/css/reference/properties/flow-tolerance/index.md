---
title: "`flow-tolerance` CSS property"
short-title: flow-tolerance
slug: Web/CSS/Reference/Properties/flow-tolerance
page-type: css-property
status:
  - experimental
browser-compat: css.properties.flow-tolerance
sidebar: cssref
---

{{SeeCompatTable}}

The **`flow-tolerance`** [CSS](/en-US/docs/Web/CSS) property sets how close the filled lengths of the tracks in a [grid lanes](/en-US/docs/Web/CSS/Guides/Grid_layout/Grid_lanes) container must be for the tracks to be treated as equally filled. Within that tolerance, items are placed in order across the tracks instead of always going into the shortest one.

{{InteractiveExample("CSS Demo: flow-tolerance")}}

```css interactive-example-choice
flow-tolerance: normal;
```

```css interactive-example-choice
flow-tolerance: 0;
```

```css interactive-example-choice
flow-tolerance: infinite;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
    <div>7</div>
    <div>8</div>
  </div>
</section>
```

```css interactive-example
#example-element {
  border: 1px solid #c5c5c5;
  display: grid-lanes;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5em;
  width: 80%;
}

#example-element > div {
  background-color: rgb(0 0 255 / 0.2);
  border: 3px solid blue;
  box-sizing: border-box;
}

#example-element > div:nth-child(1) {
  block-size: 4em;
}

#example-element > div:nth-child(2),
#example-element > div:nth-child(3) {
  block-size: 6em;
}

#example-element > div:nth-child(4) {
  block-size: 3.5em;
}

#example-element > div:nth-child(5),
#example-element > div:nth-child(6) {
  block-size: 5em;
}

#example-element > div:nth-child(7),
#example-element > div:nth-child(8) {
  block-size: 3em;
}
```

## Syntax

```css
/* Keyword values */
flow-tolerance: normal;
flow-tolerance: infinite;

/* <length-percentage> values */
flow-tolerance: 0;
flow-tolerance: 2em;
flow-tolerance: 50px;
flow-tolerance: 10%;

/* Global values */
flow-tolerance: inherit;
flow-tolerance: initial;
flow-tolerance: revert;
flow-tolerance: revert-layer;
flow-tolerance: unset;
```

### Values

This property is specified as a single value from the following list:

- `normal`
  - : Resolves to `1em` in grid lanes layout, and to `0` in other layout modes. This is the default value.
- {{cssxref("length-percentage")}}
  - : Sets the tolerance as a non-negative distance. Percentages are relative to the size of the grid lanes container's content box in the grid axis. Negative values are invalid.
- `infinite`
  - : Sets an infinite tolerance. Every track is treated as equally filled, so items are placed strictly in order across the tracks, without considering how filled each track is.

## Description

In [grid lanes layout](/en-US/docs/Web/CSS/Guides/Grid_layout/Grid_lanes), each auto-placed item goes into the track that is currently the least filled, which produces a tightly packed layout. However, when two tracks differ by only a few pixels, that difference isn't visible, and placing the next item in the slightly shorter track can look like the items are out of order.

The `flow-tolerance` property sets the distance within which tracks are considered tied with the least-filled track. When several tracks are tied, the next item goes into the first tied track after the track that received the previous item, wrapping back to the first track when needed. This keeps items flowing in order across tracks that are close enough in length to look the same.

A value of `0` means only the least-filled track is a candidate, so every item goes to the shortest track. Larger values let items follow source order more closely, at the expense of a less tightly packed layout. The `infinite` value ignores track lengths entirely, so items are placed in order across the tracks, one track after another.

> [!NOTE]
> With `infinite`, consecutive items can end up at very different positions in the stacking axis, which can make the content confusing to read. If the default tolerance is too small, try a larger value such as `10em` or `50vh` instead.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Comparing tolerance values

This example shows how the same items are placed in three grid lanes containers that use different `flow-tolerance` values.

#### HTML

Each container has eight numbered items.

```html
<div class="wrapper">
  <section>
    <h2><code>flow-tolerance: 0</code></h2>
    <div class="grid zero">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>7</div>
      <div>8</div>
    </div>
  </section>
  <section>
    <h2><code>flow-tolerance: normal</code></h2>
    <div class="grid">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>7</div>
      <div>8</div>
    </div>
  </section>
  <section>
    <h2><code>flow-tolerance: infinite</code></h2>
    <div class="grid infinite">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>7</div>
      <div>8</div>
    </div>
  </section>
</div>
```

#### CSS

Each `.grid` container is a four-column grid lanes container. The items are given different heights, so that the fourth column is the least filled after the first four items are placed, while the first column is only `0.5em` longer.

```css
.grid {
  display: grid-lanes;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5em;
}

.grid > :nth-child(1) {
  block-size: 4em;
}

.grid > :nth-child(2),
.grid > :nth-child(3) {
  block-size: 6em;
}

.grid > :nth-child(4) {
  block-size: 3.5em;
}

.grid > :nth-child(5),
.grid > :nth-child(6) {
  block-size: 5em;
}

.grid > :nth-child(7),
.grid > :nth-child(8) {
  block-size: 3em;
}
```

The first and third containers set a `flow-tolerance` value, while the second container uses the default value of `normal`.

```css
.zero {
  flow-tolerance: 0;
}

.infinite {
  flow-tolerance: infinite;
}
```

```css hidden
body {
  font-family: sans-serif;
}

.wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5em;
}

section {
  flex: 1 1 12em;
}

h2 {
  font-size: 0.9em;
}

.grid > div {
  box-sizing: border-box;
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  color: #d9480f;
  text-align: center;
}

@layer no-support {
  @supports not (flow-tolerance: 0) {
    body::before {
      content: "Your browser doesn't support the flow-tolerance property.";
      background-color: wheat;
      display: block;
      text-align: center;
      padding: 1rem 0;
    }
  }
}
```

#### Result

{{EmbedLiveSample("Comparing tolerance values", "", "300")}}

With `flow-tolerance: 0`, item 5 goes into the fourth column, because it's the least filled, even though the first column is only `0.5em` longer. Items 6, 7, and 8 then each go into whichever column is shortest.

With the default `normal` value, which resolves to `1em`, the first and fourth columns are tied when item 5 is placed. Because the previous item was placed in the last column, placement wraps around and item 5 goes into the first column.

With `flow-tolerance: infinite`, all the columns are always tied, so the items are placed in order: items 1 to 4 fill the four columns, then items 5 to 8 fill them again in the same order.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("display")}}
- {{cssxref("grid-template-columns")}}
- {{cssxref("grid-template-rows")}}
- [Grid lanes layout](/en-US/docs/Web/CSS/Guides/Grid_layout/Grid_lanes) guide
- [CSS grid layout](/en-US/docs/Web/CSS/Guides/Grid_layout) module
