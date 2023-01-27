---
title: Compositing and Blending
slug: Web/CSS/Compositing_and_Blending
page-type: css-module
tags:
  - CSS
  - Compositing and Blending
  - Guide
  - Overview
  - Reference
spec-urls: 
  - https://drafts.fxtf.org/compositing/
  - https://www.w3.org/TR/compositing-1/
---

{{CSSRef}}

The **Compositing and Blending** CSS module defines how an element's background layers can be blended together, how an element can be blended with its container, and whether the element must create a new [stacking context](/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context).

Similar to blending effects available in many image editing applications, this module enables blending an element's background layers together and blending an element's content with that of its container. CSS can be used to define which blending mode should be used, if any, to blend an element's background images and colors into a single background image. It is also possible to define how an element's borders, background, and content, including text, emojis, and images, should be blended with the background of its container.

This module provides for 16 different blending modes.

### Example

In this example, a border and two striped background images with a background color are provided for each box, with a background of a solid color with circles cut out set on the entire example.

```html hidden
<section>
  <div><span>Normal, with no blending</span></div>
  <div><span>Multiplies colors</span></div>
  <div><span>Multiplies based on background color</span></div>
  <div>Normal, with no blending</div>
  <div>Multiplies colors</div>
  <div>Multiplies based on background color</div>
</section>
```

```css hidden
div {
  width: 200px;
  height: 200px;
  background-image: repeating-linear-gradient(45deg, red 0 15px, pink 15px 30px), repeating-linear-gradient(-45deg, blue 0 15px, lightblue 15px 30px);
  background-size: 150px 150px;
  background-repeat: no-repeat;
  background-position: top left, bottom right;
  background-color: palegoldenrod;
  text-align: center;
  padding-top: 150px;
  font-family: sans-serif;
  box-sizing: border-box;
  border: 5px solid black;
}
div:nth-of-type(3n+1){
  background-blend-mode: normal;
}
div:nth-of-type(3n+2){
  background-blend-mode: multiply;
}
div:nth-of-type(3n+3){
  background-blend-mode: overlay;
}
div:nth-of-type(n + 4) {
  mix-blend-mode: difference;
}
section {
  padding: 0.75em;
  background: radial-gradient(circle, transparent 0 20px, rgb(255, 200, 200) 20px); background-size: 60px 60px; background-position: center;
  display: inline-grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1em;
}
span {
  background-color: #ffffff99;
}
```

{{ EmbedLiveSample('Example', "630", "300") }}

 The last three boxes are set to blend with the background of the container. Note how the background, border, and the content are all impacted.

## Reference

### Properties

- {{cssxref("background-blend-mode")}}
- {{cssxref("isolation")}}
- {{cssxref("mix-blend-mode")}}

### Data types

- {{cssxref("&lt;blend-mode&gt;")}}

## Associated content

### Associated properties

- {{cssxref("background-image")}}
- {{cssxref("background-color")}}

### Associated concepts

- SVG's {{ SVGElement("feBlend") }} filter primitive

### Glossary terms

- Glossary: {{glossary("stacking context")}}

## Specifications

{{Specifications}}

## See also

- [Compositing And Blending In CSS](https://www.sarasoueidan.com/blog/compositing-and-blending-in-css/) (2015)
- [Editing Images in CSS: Blend Modes](https://code.tutsplus.com/tutorials/editing-images-in-css-blend-modes--cms-26058) (2022)
- [web.dev: blend modes](https://web.dev/learn/css/blend-modes/) (2021)
