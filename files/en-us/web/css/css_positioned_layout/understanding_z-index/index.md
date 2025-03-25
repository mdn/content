---
title: Understanding z-index
slug: Web/CSS/CSS_positioned_layout/Understanding_z-index
page-type: guide
---

{{CSSRef}}

In the most basic cases, when text, images, and other elements are arranged on the page without overlapping, [HTML](/en-US/docs/Web/HTML) pages can be considered two-dimensional. In such cases, there is a single rendering flow, and all elements are aware of the space taken by others. CSS isn't that simple — CSS positioning, transformation, containment, and other features can cause elements to overlap. In this guide, we introduce the {{cssxref("z-index")}} property, which lets you place elements in front or behind other elements in the same [stacking context](/en-US/docs/Web/CSS/CSS_positioned_layout/Stacking_context).

## Layers on the z-axis

The elements rendered on a page are comprised of a series of boxes. Each box has a position in three dimensions. In addition to their inline and block positions, boxes lie along a third dimension known as the _z-axis_. Controlling an element's z-axis position becomes especially relevant when element boxes overlap visually. Several property values can cause elements to overlap. The {{cssxref("z-index")}} property provides you a way to control how they overlap!

By default, element boxes are rendered on Layer 0. The `z-index` property allows you to position elements on different layers along the z-axis, in addition to the default rendering layer. Each element's position along the imaginary z-axis (z-index value) is expressed as an integer (positive, negative, or zero) and controls the stacking order during rendering. Greater numbers mean elements are closer to the observer.

If you are not familiar with the term 'z-axis', imagine the page as a stack of layers, each with an assigned number. Layers are rendered in numerical order, with larger numbers appearing on top of smaller numbers (_X_ in the table below represents an arbitrary positive integer):

| Layer        | Description                           |
| ------------ | ------------------------------------- |
| Bottom layer | Farthest from the observer            |
| Layer -X     | Layers with negative `z-index` values |
| Layer 0      | Default rendering layer               |
| Layer X      | Layers with positive `z-index` values |
| Top layer    | Closest to the observer               |

## Elements in normal flow

By default, when no `z-index` property is specified, elements are rendered on the default rendering layer (Layer 0).

Consider the following three elements:

```html live-sample___example1 live-sample___example2 live-sample___example3
<div id="div1">#1</div>
<div id="div2">#2</div>
<div id="div3">#3</div>
```

Without any positioning properties applied, these elements flow normally in document order, one after another, without overlapping.

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

## Default layering behavior

To stack the elements, we can [position](/en-US/docs/Web/CSS/position#types_of_positioning) them.
If we use absolute positioning to place them in (almost) the same spot, the default stacking order follows the source order: the first element in the HTML appears at the bottom layer and the last element appears at the top layer.

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

## Rearranging layers

We can use the CSS {{cssxref("z-index")}} property to position each element along the z-axis, effectively rearranging the stacking order.

By adding `z-index` values, we change the default layer order:

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

The element with the lowest `z-index` value appears on the bottom layer. The element with the highest `z-index` value appears on the top layer. In this example, `-9` is the lowest value, so `#div2` is behind all the others. The first element in the source order, `#div1`, has the greatest value, so it appears on top of all the others.

## Impact of stacking contexts

Using `z-index` may appear fairly straightforward at first: a single property assigned a single integer number with a seemingly understandable behavior. When `z-index` is applied to complex hierarchies of HTML elements, many find the resulting behavior hard to understand or predict.

If the elements are not siblings, the stacking behavior can become more complicated because each element may belong to a different [stacking context](/en-US/docs/Web/CSS/CSS_positioned_layout/Stacking_context). This is shown in the example below.

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

Even though the `z-index` value of `#div3` (`0`) is greater than that of `#div2` (`-9`), `#div2` appears above `#div3` because `#div1` and `#div2` are nested in a separate stacking context created by `<section>`. The `<section>` element and `#div3` are siblings, and since the `<section>` element's z-index is greater than that of `#div3` (`2` versus `0`), `#div3` is placed behind `<section>` and all of `<section>`'s contents. For more in-depth details about the topic, see our [Stacking context](/en-US/docs/Web/CSS/CSS_positioned_layout/Stacking_context) guide.

## Conclusion

As we've seen in this guide, `z-index` provides a way to control how elements stack along z-axis. You learned how the integer values of the `z-index` property can be used to alter the stacking order. However, as demonstrated in the last example, stacking orders can be complicated. Stacking orders follow a series of complex stacking rules to ensure that all browsers stack the same content in the same manner providing consistency and predictability. It's important to understand the [features that create stacking contexts](/en-US/docs/Web/CSS/CSS_positioned_layout/Stacking_context#features_creating_stacking_contexts) and how [nested stacking contexts](/en-US/docs/Web/CSS/CSS_positioned_layout/Stacking_context#nested_stacking_contexts) affect layer order.

## See also

- [Stacking without the `z-index` property](/en-US/docs/Web/CSS/CSS_positioned_layout/Stacking_without_z-index)
- [Stacking floating elements](/en-US/docs/Web/CSS/CSS_positioned_layout/Stacking_floating_elements)
- [Using `z-index`](/en-US/docs/Web/CSS/CSS_positioned_layout/Using_z-index)
- [Stacking context](/en-US/docs/Web/CSS/CSS_positioned_layout/Stacking_context)
- [CSS positioned layout](/en-US/docs/Web/CSS/CSS_positioned_layout) module
