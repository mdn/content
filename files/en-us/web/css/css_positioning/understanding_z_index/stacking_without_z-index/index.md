---
title: Stacking without the z-index property
slug: Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_without_z-index
tags:
  - Advanced
  - CSS
  - Guide
  - Reference
  - Understanding_CSS_z-index
  - z-index
---
{{CSSRef}}

When the {{cssxref("z-index")}} property is not specified on any element, elements are stacked in the following order (from bottom to top):

1. The background and borders of the root element
2. Descendant non-positioned blocks, in order of appearance in the HTML
3. Descendant positioned elements, in order of appearance in the HTML

See [types of positioning](/en-US/docs/Web/CSS/position#types_of_positioning) for an explanation of positioned and non-positioned elements.

Keep in mind, when the {{cssxref("order")}} property alters rendering from the "order of appearance in the HTML" within {{cssxref("flex")}} containers, it similarly affects the order for stacking context.

In the example below, elements #1 through #4 are positioned elements. Element #5 is static, and so is drawn below the other four elements, even though it comes later in the HTML markup.

{{EmbedLiveSample("Source_code_for_the_example", 600, 400)}}

## Source code for the example

### HTML

```html
<div id="abs1" class="absolute">
  <strong>DIV #1</strong><br />position: absolute;</div>
<div id="rel1" class="relative">
  <strong>DIV #2</strong><br />position: relative;</div>
<div id="rel2" class="relative">
  <strong>DIV #3</strong><br />position: relative;</div>
<div id="abs2" class="absolute">
  <strong>DIV #4</strong><br />position: absolute;</div>
<div id="sta1" class="static">
  <strong>DIV #5</strong><br />position: static;</div>
```

### CSS

```css
strong {
  font-family: sans-serif;
}

div {
  padding: 10px;
  border: 1px dashed;
  text-align: center;
}

.static {
  position: static;
  height: 80px;
  background-color: #ffc;
  border-color: #996;
}

.absolute {
  position: absolute;
  width: 150px;
  height: 350px;
  background-color: #fdd;
  border-color: #900;
  opacity: 0.7;
}

.relative {
  position: relative;
  height: 80px;
  background-color: #cfc;
  border-color: #696;
  opacity: 0.7;
}

#abs1 {
  top: 10px;
  left: 10px;
}

#rel1 {
  top: 30px;
  margin: 0px 50px 0px 50px;
}

#rel2 {
  top: 15px;
  left: 20px;
  margin: 0px 50px 0px 50px;
}

#abs2 {
  top: 10px;
  right: 10px;
}

#sta1 {
  background-color: #ffc;
  margin: 0px 50px 0px 50px;
}
```

## See also

- [Stacking with floated blocks](/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_and_float): How floating elements are handled with stacking.
- [Using z-index](/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Adding_z-index): How to use `z-index` to change default stacking.
- [The stacking context](/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context): Notes on the stacking context.
- [Stacking context example 1](/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_context_example_1): 2-level HTML hierarchy, z-index on the last level
- [Stacking context example 2](/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_context_example_2): 2-level HTML hierarchy, z-index on all levels
- [Stacking context example 3](/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_context_example_3): 3-level HTML hierarchy, z-index on the second level
