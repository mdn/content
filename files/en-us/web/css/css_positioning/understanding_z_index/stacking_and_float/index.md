---
title: Stacking with floated blocks
slug: Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_and_float
tags:
  - Advanced
  - CSS
  - Guide
  - Reference
  - Understanding_CSS_z-index
  - z-index
---
{{CSSRef}}

For floated blocks, the stacking order is a bit different. Floating blocks are placed between non-positioned blocks and positioned blocks:

1. The background and borders of the root element
2. Descendant non-positioned blocks, in order of appearance in the HTML
3. _Floating blocks_
4. Descendant positioned elements, in order of appearance in the HTML

See [types of positioning](/en-US/docs/Web/CSS/position#types_of_positioning) for an explanation of positioned and non-positioned elements.

Actually, as you can see in the example below, the background and border of the non-positioned block (DIV #4) is completely unaffected by floating blocks, but the content is affected. This happens according to standard float behavior. This behavior can be shown with an added rule to the above list:

1. The background and borders of the root element
2. Descendant non-positioned blocks, in order of appearance in the HTML
3. Floating blocks
4. _Descendant non-positioned inline elements_
5. Descendant positioned elements, in order of appearance in the HTML

{{EmbedLiveSample("Source_code_for_the_example", 600, 250)}}

> **Note:** If an `opacity` value is applied to the non-positioned block (DIV #4), then something strange happens: the background and border of that block pops up above the floating blocks and the positioned blocks. This is due to a peculiar part of the specification: applying a `opacity` value creates a new stacking context (see [What No One Told You About Z-Index](https://philipwalton.com/articles/what-no-one-told-you-about-z-index/)).

## Source code for the example

### HTML

```html
<div id="abs1">
  <strong>DIV #1</strong><br />position: absolute;</div>

<div id="flo1">
  <strong>DIV #2</strong><br />float: left;</div>

<div id="flo2">
  <strong>DIV #3</strong><br />float: right;</div>

<br />

<div id="sta1">
  <strong>DIV #4</strong><br />no positioning</div>

<div id="abs2">
  <strong>DIV #5</strong><br />position: absolute;</div>

<div id="rel1">
  <strong>DIV #6</strong><br />position: relative;</div>
```

### CSS

```css
div {
  padding: 10px;
  text-align: center;
}

strong {
  font-family: sans-serif;
}

#abs1 {
  position: absolute;
  width: 150px;
  height: 200px;
  top: 10px;
  right: 140px;
  border: 1px dashed #900;
  background-color: #fdd;
}

#sta1 {
  height: 100px;
  border: 1px dashed #996;
  background-color: #ffc;
  margin: 0px 10px 0px 10px;
  text-align: left;
}

#flo1 {
  margin: 0px 10px 0px 20px;
  float: left;
  width: 150px;
  height: 200px;
  border: 1px dashed #090;
  background-color: #cfc;
}

#flo2 {
  margin: 0px 20px 0px 10px;
  float: right;
  width: 150px;
  height: 200px;
  border: 1px dashed #090;
  background-color: #cfc;
}

#abs2 {
  position: absolute;
  width: 150px;
  height: 100px;
  top: 80px;
  left: 100px;
  border: 1px dashed #990;
  background-color: #fdd;
}

#rel1 {
  position: relative;
  border: 1px dashed #996;
  background-color: #cff;
  margin: 0px 10px 0px 10px;
  text-align: left;
}
```

## See also

- [Stacking without the z-index property](/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_without_z-index): The stacking rules that apply when `z-index` is not used.
- [Using z-index](/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Adding_z-index): How to use `z-index` to change default stacking.
- [The stacking context](/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context): Notes on the stacking context.
- [Stacking context example 1](/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_context_example_1): 2-level HTML hierarchy, z-index on the last level
- [Stacking context example 2](/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_context_example_2): 2-level HTML hierarchy, z-index on all levels
- [Stacking context example 3](/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_context_example_3): 3-level HTML hierarchy, z-index on the second level
