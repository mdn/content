---
title: masonry-auto-flow
slug: Web/CSS/masonry-auto-flow
page-type: css-property
status:
  - experimental
browser-compat: css.properties.masonry-auto-flow
---

{{CSSRef}}{{SeeCompatTable}}

The **`masonry-auto-flow`** [CSS](/en-US/docs/Web/CSS) property modifies how items are placed when using [masonry](/en-US/docs/Web/CSS/CSS_grid_layout/Masonry_layout) in [CSS grid layout](/en-US/docs/Web/CSS/CSS_grid_layout).

## Syntax

```css
/* Keyword values */
masonry-auto-flow: pack;
masonry-auto-flow: next;
masonry-auto-flow: ordered;
masonry-auto-flow: definite-first;
masonry-auto-flow: next ordered;

/* Global values */
masonry-auto-flow: inherit;
masonry-auto-flow: initial;
masonry-auto-flow: revert;
masonry-auto-flow: revert-layer;
masonry-auto-flow: unset;
```

This property may take one of two forms:

- A single keyword: one of `pack`, `next`, `definite-first`, or `ordered`
- Two keywords, for example `next ordered`.

### Values

- `pack`
  - : As per the default masonry algorithm, items will be placed into the track with the most room.
- `next`
  - : Items will be placed one after the other in the grid axis.
- `definite-first`
  - : Display as in the default masonry algorithm, placing items with a definite place first before placing other masonry items.
- `ordered`
  - : Ignore any items with a definite placement, and place everything according to order-modified document order.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Using the next keyword

#### HTML

```html
<div id="grid">
  <div id="item1"></div>
  <div id="item2"></div>
  <div id="item3"></div>
  <div id="item4"></div>
  <div id="item5"></div>
</div>
<select id="flow">
  <option value="pack">pack</option>
  <option value="next">next</option>
</select>
```

#### CSS

```css
#grid {
  height: 200px;
  width: 200px;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: masonry;
  masonry-auto-flow: pack;
}

#item1 {
  background-color: lime;
  height: 2em;
}

#item2 {
  background-color: yellow;
}

#item3 {
  background-color: blue;
  height: 3em;
}

#item4 {
  background-color: red;
  height: 2.5em;
}

#item5 {
  background-color: aqua;
  height: 4em;
}
```

```js
const selectElem = document.querySelector("select");

function changeMasonryFlow() {
  const grid = document.getElementById("grid");
  const direction = document.getElementById("flow");
  const masonryAutoFlow = direction.value === "pack" ? "pack" : "next";

  grid.style.masonryAutoFlow = masonryAutoFlow;
}

selectElem.addEventListener("change", changeMasonryFlow);
```

#### Result

{{EmbedLiveSample("Using_the_next_keyword", "200px", "230px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
