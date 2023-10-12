---
title: Center an element
slug: Web/CSS/Layout_cookbook/Center_an_element
page-type: guide
browser-compat:
  - css.properties.align-items
  - css.properties.justify-content
---

{{CSSRef}}

In this recipe you will see how to center one box inside another. Despite all the memes, centering both horizontally and vertically is straightforward.

![an element centered inside a larger box](cookbook-center.png)

## Requirements

To place an item into the center of another box horizontally and vertically.

## Recipe

{{EmbedGHLiveSample("css-examples/css-cookbook/center.html", '100%', 720)}}

> **Callout:**
>
> [Download this example](https://github.com/mdn/css-examples/blob/main/css-cookbook/center--download.html)

## Using flexbox

To center one box inside another we make the containing box a flex container. Then set {{cssxref("align-items")}} to center to perform centering on the block axis, and {{cssxref("justify-content")}} to center to perform centering on the inline axis. That's it!

### HTML

```html
<div class="container">
  <div class="item">I am centered!</div>
</div>
```

### CSS

```css
div {
  border: solid 3px;
  padding: 1em;
  max-width: 75%;
}
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 8em;
}
```

We included a height on the container to demonstrate that the item is indeed vertically centered.

### Result

{{ EmbedLiveSample('Using_flexbox', 400, 200) }}

## Using grid layout

To center one box inside another we make the containing box a grid container. Then set {{cssxref("place-items")}} on the containter to center its items on both the block axis and inline axis.

### HTML

```html
<div class="container">
  <div class="item">I am centered!</div>
</div>
```

### CSS

```css
div {
  border: solid 3px;
  padding: 1em;
  max-width: 75%;
}
.container {
  display: grid;
  place-items: center;
  height: 8em;
}
```

### Result

{{ EmbedLiveSample('Using_grid_layout', 400, 200) }}

Alternatively, we could have set {{cssxref("place-content", "place-content: center;")}} on the container instead or set either {{cssxref("place-self", "place-self: center")}} or {{cssxref("margin", "margin: auto;")}} on the item itself.

## Browser compatibility

{{Compat}}

## Resources on MDN

- [Box Alignment in Flexbox](/en-US/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox)
- [CSS Box alignment guide](/en-US/docs/Web/CSS/CSS_box_alignment)
