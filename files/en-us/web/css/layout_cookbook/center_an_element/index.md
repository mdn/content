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

Click "Play" in the code blocks below to edit the example in the MDN Playground:

```html live-sample___center-example
<div class="container">
  <div class="item">I am centered!</div>
</div>
```

```css live-sample___center-example
.item {
  border: 2px solid rgb(95 97 110);
  border-radius: 0.5em;
  padding: 20px;
  width: 10em;
}

.container {
  border: 2px solid rgb(75 70 74);
  border-radius: 0.5em;
  font: 1.2em sans-serif;

  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

{{EmbedLiveSample("center-example", "", "250px")}}

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

.item {
  border: 2px solid rgb(95 97 110);
  border-radius: 0.5em;
  padding: 20px;
  width: 10em;
}

.container {
  height: 8em;
  border: 2px solid rgb(75 70 74);
  border-radius: 0.5em;
  font: 1.2em sans-serif;

  display: flex;
  align-items: center;
  justify-content: center;
}
```

We set a height for the container to demonstrate that the inner item is indeed vertically centered within the container.

### Result

{{EmbedLiveSample("Using_flexbox", "", "200px")}}

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

.item {
  border: 2px solid rgb(95 97 110);
  border-radius: 0.5em;
  padding: 20px;
  width: 10em;
}

.container {
  height: 8em;
  border: 2px solid rgb(75 70 74);
  border-radius: 0.5em;
  font: 1.2em sans-serif;

  display: grid;
  place-items: center;
}
```

### Result

{{EmbedLiveSample("Using_grid", "", "200px")}}

Instead of applying `place-items: center;` on the container, you can achieve the same centering by setting {{cssxref("place-content", "place-content: center;")}} on the container or by applying either {{cssxref("place-self", "place-self: center")}} or {{cssxref("margin", "margin: auto;")}} on the inner item itself.

## Resources on MDN

- [Box alignment in flexbox](/en-US/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox)
- [CSS box alignment guide](/en-US/docs/Web/CSS/CSS_box_alignment)
