---
title: Understanding z-index
slug: Web/CSS/CSS_positioned_layout/Understanding_z-index
page-type: guide
---

{{CSSRef}}

In the most basic cases, when text, images, and other elements are arranged on the page without overlapping, [HTML](/en-US/docs/Web/HTML) pages can be considered two-dimensional. In this case, there is a single rendering flow, and all elements are aware of the space taken by others. CSS isn't that simple. CSS positioning, transformation, containment, and other features can cause elements to overlap. In this guide, we introduce the {{cssxref("z-index")}} property, which lets you place elements in front or behind other elements in the same [stacking context](/en-US/docs/Web/CSS/CSS_positioned_layout/Stacking_context).

## Layers on the z-axis

The elements rendered on a page are comprised of a series of boxes. Each box has a position in three dimensions. In addition to their inline and block positions, boxes lie along the third dimension known as the _z-axis_. Controlling an element's z-axis position becomes especially relevant when element boxes overlap visually. Several property values can cause elements to overlap. The {{cssxref("z-index")}} property enables controlling how they overlap!

The `z-index` property allows you to position boxes on layers in addition to the default rendering layer (layer 0). The position on the imaginary z-axis of each layer is expressed as an integer representing the stacking order for rendering. Greater numbers mean closer to the observer.

The `z-index` property is specified with an integer value. The value, which represents the position of the element along an imaginary z-axis, can be positive or negative. If you are not familiar with the term 'z-axis', imagine the page as a stack of layers, each one having a number. Layers are rendered in numerical order, with larger numbers above smaller numbers (_X_ represents an arbitrary positive integer):

| Layer        | Description                           |
| ------------ | ------------------------------------- |
| Bottom layer | Farthest from the observer            |
| Layer -X     | Layers with negative `z-index` values |
| Layer 0      | Default rendering layer               |
| Layer X      | Layers with positive `z-index` values |
| Top layer    | Closest to the observer               |

### Normal flow

By default, when no `z-index` property is specified, elements are rendered on the default rendering layer (Layer 0).

Given three elements:

```html live-sample___example1 live-sample___example2 live-sample___example3
<div id="div1">#1</div>
<div id="div2">#2</div>
<div id="div3">#3</div>
```

Without any positioning, they flow normally, one after another

```css live-sample___example1 live-sample___example2 live-sample___example3 live-sample___example4
div {
  height: 100px;
  width: 100px;
  outline: 1px dotted;
  line-height: 100px;
  font-size: 40px;
  text-align: center;
  font-family: arial, helvetica, sans-serif;
}

#div1 {
  background-color: lightpink;
}

#div2 {
  background-color: lightyellow;
}

#div3 {
  background-color: lightgreen;
}
```

{{EmbedLiveSample("Example1", 600, 340)}}

## Default layering

To stack the items, we can [position](/en-US/docs/Web/CSS/position#types_of_positioning) them.
If we use absolute positioning to place them in (almost) the same spot, by default, the first element in the source order will be on the bottom and the last will be on the top.

```css live-sample___example2 live-sample___example3 live-sample___example4
div {
  position: absolute;
}

#div1 {
  top: 0;
  left: 0;
}

#div2 {
  top: 10px;
  left: 10px;
}

#div3 {
  top: 20px;
  left: 20px;
}
```

{{EmbedLiveSample("Example2", 600, 130)}}

### Rearranging layers

We can use the CSS `z-index` property to position each element along the z-axis, effectively rearranging the stacking order.

By adding `z-index` values, we change the layer order:

```css live-sample___example3 live-sample___example4
#div1 {
  z-index: 5;
}

#div2 {
  z-index: -9;
}

#div3 {
  z-index: 0;
}
```

{{EmbedLiveSample("Example3", 600, 130)}}

The bottom layer is the element with the lowest `z-index` value. The top layer is the element with the highest value. In this case, `-9` is the lowest value, so `#div2` is behind all the others. The first in the source order, `#div1`, has the greatest value, so is on top of all the others.

### Stacking context

Using `z-index` may appear fairly straightforward at first: a single property assigned a single integer number with a seemingly understandable behavior. When `z-index` is applied to complex hierarchies of HTML elements, many find the resulting behavior hard to understand or predict.

If the elements are not siblings, things can get more complicated.

```html live-sample___example4
<section>
  <div id="div1">#1</div>
  <div id="div2">#2</div>
</section>
<div id="div3">#3</div>
```

```css live-sample___example4
section {
  position: absolute;
  z-index: 2;
}
```

{{EmbedLiveSample("Example4", 600, 130)}}

This effect happens because #1 and #2 are nested in a separate [stacking context](/en-US/docs/Web/CSS/CSS_positioned_layout/Stacking_context) from #3.

## Conclusion

This guide is an introduction to `z-index`. You learned how the integer values of the `z-index` property can be used to alter stacking order. However, as demonstrated in the last example, stacking orders can be complicated. Stacking orders follow a series of complex stacking rules to ensure that all browsers stack the same content in the same manner providing consistency and predictability.

Understanding the [features that create stacking contexts](/en-US/docs/Web/CSS/CSS_positioned_layout/Stacking_context#features_creating_stacking_contexts) and how [nested stacking context](/en-US/docs/Web/CSS/CSS_positioned_layout/Stacking_context#nested_stacking_contexts) effect layer order.

## See also
