---
title: Understanding z-index
slug: Web/CSS/CSS_positioned_layout/Understanding_z-index
page-type: guide
---

{{CSSRef}}

In the most basic cases, [HTML](/en-US/docs/Web/HTML) pages can be considered two-dimensional, when text, images, and other elements are arranged on the page without overlapping. In this case, there is a single rendering flow, and all elements are aware of the space taken by others. But CSS isn't that simple. CSS positioning, transformation, containment, and other features can cause elements to overlap or otherwise create their own [stacking contexts](/en-US/docs/Web/CSS/CSS_positioned_layout/Stacking_context). In this guide, we look at the {{cssxref("z-index")}} attribute and how this property lets you adjust the placement of content in a third dimension.

## Elements exist in three dimensions

The elements rendered on a page are comprised of a series of boxes. Each box has a position in three dimensions. In addition to their inline and block positions, boxes lie along the third dimension known as the _z-axis_.

three dorder of the layering of objects when rendering content.

Controlling an element's z-axis position becomes especially relevant when element boxes overlap visually. Several property values can cause elements to overlap. The {{cssxref("z-index")}} property enables controlling how they overlap!

Using `z-index` may appear simple at first: a single property assigned a single integer number with a seemingly understandable behavior. When `z-index` is applied to complex hierarchies of HTML elements, many find the resulting behavior hard to understand or predict. The stacking order follows a series of complex stacking rules. These rules may not seem intuitive at first, or ever, but they do ensure that all browsers stack the same content in the same manner providing consistency and predictability.

## Layers on the z-axis

CSS style rules allow you to position boxes on layers in addition to the default rendering layer (layer 0). The position on an imaginary z-axis of each layer is expressed as an integer representing the stacking order for rendering. Greater numbers mean closer to the observer. Control the position on this z-axis with the CSS `z-index` property.
If you want to create a custom stacking order, you can use the {{cssxref("z-index")}} property on a [positioned](/en-US/docs/Web/CSS/position#types_of_positioning) element.

The `z-index` property can be specified with an integer value (positive, zero, or negative), which represents the position of the element along an imaginary z-axis. If you are not familiar with the term 'z-axis', imagine the page as a stack of layers, each one having a number. Layers are rendered in numerical order, with larger numbers above smaller numbers (_X_ represents an arbitrary positive integer):

| Layer        | Description                           |
| ------------ | ------------------------------------- |
| Bottom layer | Farthest from the observer            |
| Layer -X     | Layers with negative `z-index` values |
| Layer 0      | Default rendering layer               |
| Layer X      | Layers with positive `z-index` values |
| Top layer    | Closest to the observer               |

> [!NOTE]
>
> - When no `z-index` property is specified, elements are rendered on the default rendering layer (Layer 0).
> - If several elements share the same `z-index` value (i.e., they are placed on the same layer), stacking rules explained in the section [Stacking without the `z-index` property](/en-US/docs/Web/CSS/CSS_positioned_layout/Stacking_without_z-index) apply.

## Example

In this example, the layers' stacking order is rearranged using `z-index`. The `z-index` of DIV #5 has no effect since it is not a positioned element.

### HTML

```html
<div id="abs1">
  <strong>DIV #1</strong>
  <br />position: absolute; <br />z-index: 5;
</div>

<div id="rel1">
  <strong>DIV #2</strong>
  <br />position: relative; <br />z-index: 3;
</div>

<div id="rel2">
  <strong>DIV #3</strong>
  <br />position: relative; <br />z-index: 2;
</div>

<div id="abs2">
  <strong>DIV #4</strong>
  <br />position: absolute; <br />z-index: 1;
</div>

<div id="sta1">
  <strong>DIV #5</strong>
  <br />no positioning <br />z-index: 8;
</div>
```

### CSS

```css
div {
  padding: 10px;
  opacity: 0.7;
  text-align: center;
}

strong {
  font-family: sans-serif;
}

#abs1 {
  z-index: 5;
  position: absolute;
  width: 150px;
  height: 350px;
  top: 10px;
  left: 10px;
  border: 1px dashed #900;
  background-color: #fdd;
}

#rel1 {
  z-index: 3;
  height: 100px;
  position: relative;
  top: 30px;
  border: 1px dashed #696;
  background-color: #cfc;
  margin: 0px 50px 0px 50px;
}

#rel2 {
  z-index: 2;
  height: 100px;
  position: relative;
  top: 15px;
  left: 20px;
  border: 1px dashed #696;
  background-color: #cfc;
  margin: 0px 50px 0px 50px;
}

#abs2 {
  z-index: 1;
  position: absolute;
  width: 150px;
  height: 350px;
  top: 10px;
  right: 10px;
  border: 1px dashed #900;
  background-color: #fdd;
}

#sta1 {
  z-index: 8;
  height: 70px;
  border: 1px dashed #996;
  background-color: #ffc;
  margin: 0px 50px 0px 50px;
}
```

## Result

{{EmbedLiveSample("Example", 600, 400)}}
