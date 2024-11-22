---
title: Using z-index
slug: Web/CSS/CSS_positioned_layout/Understanding_z-index/Using_z-index
page-type: guide
---

{{CSSRef}}

The first article of this guide, [Stacking without the `z-index` property](/en-US/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_without_z-index), explains how stacking is arranged by default. If you want to create a custom stacking order, you can use the {{cssxref("z-index")}} property on a [positioned](/en-US/docs/Web/CSS/position#types_of_positioning) element.

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
> - If several elements share the same `z-index` value (i.e., they are placed on the same layer), stacking rules explained in the section [Stacking without the `z-index` property](/en-US/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_without_z-index) apply.

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

## See also

- [Stacking without the `z-index` property](/en-US/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_without_z-index): The stacking rules that apply when `z-index` is not used.
- [Stacking floating elements](/en-US/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_floating_elements): How floating elements are handled with stacking.
- [Stacking context](/en-US/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context): Notes on the stacking context.
- [Stacking context example 1](/en-US/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context_example_1): 2-level HTML hierarchy, z-index on the last level
- [Stacking context example 2](/en-US/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context_example_2): 2-level HTML hierarchy, z-index on all levels
- [Stacking context example 3](/en-US/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context_example_3): 3-level HTML hierarchy, z-index on the second level
