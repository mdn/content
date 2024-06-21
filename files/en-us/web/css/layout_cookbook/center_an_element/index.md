---
title: Center an element
slug: Web/CSS/Layout_cookbook/Center_an_element
page-type: guide
---

{{CSSRef}}

In this recipe, you will see how to center one box inside another by using [flexbox](#using_flexbox) and [grid](#using_grid). Centering both horizontally and vertically is simple and straightforward.

![an element centered inside a larger box](cookbook-center.png)

## Requirements

To place an item into the center of another box horizontally and vertically.

## Recipe

{{EmbedGHLiveSample("css-examples/css-cookbook/center.html", '100%', 720)}}

> **Callout:**
>
> [Download this example](https://github.com/mdn/css-examples/blob/main/css-cookbook/center--download.html)

## Using flexbox

To center a box within another box, first turn the containing box into a [flex container](/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox#the_flex_container) by setting its {{cssxref("display")}} property to `flex`. Then set {{cssxref("align-items")}} to `center` for vertical centering (on the block axis) and {{cssxref("justify-content")}} to `center` for horizontal centering (on the inline axis). And that's all it takes to center one box inside another!

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

We set a height for the container to demonstrate that the inner item is indeed vertically centered within the container.

### Result

{{ EmbedLiveSample('Using_flexbox', 400, 200) }}

Instead of applying `align-items: center;` on the container, you can also vertically center the inner item by setting {{cssxref("align-self")}} to `center` on the inner item itself.

## Using grid

Another method you can use for centering one box inside another is to first make the containing box a [grid container](/en-US/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout#grid_container) and then set its {{cssxref("place-items")}} property to `center` to center align its items on both the block and inline axes.

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

{{ EmbedLiveSample('Using_grid', 400, 200) }}

Instead of applying `place-items: center;` on the container, you can achieve the same centering by setting {{cssxref("place-content", "place-content: center;")}} on the container or by applying either {{cssxref("place-self", "place-self: center")}} or {{cssxref("margin", "margin: auto;")}} on the inner item itself.

## Resources on MDN

- [Box alignment in flexbox](/en-US/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox)
- [CSS box alignment guide](/en-US/docs/Web/CSS/CSS_box_alignment)
