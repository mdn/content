---
title: CSS compositing and blending
slug: Web/CSS/CSS_compositing_and_blending
page-type: css-module
spec-urls:
  - https://drafts.fxtf.org/compositing/
  - https://www.w3.org/TR/compositing-1/
---

{{CSSRef}}

The **CSS compositing and blending** module defines how an element's background layers can be blended together, how an element can be blended with its container, and whether the element must create a new [stacking context](/en-US/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context).

The properties in this CSS module can be used to define the blending mode that should be used, if any, to blend an element's background images and colors into a single background image. This module provides 16 blending modes. You can also define how an element's borders, background, and content, including text, emojis, and images, should be blended with the background of its container.

### Compositing and blending in action

In this example, each box has a border, two striped background images, and a solid color background. The common background for all the boxes contains a pattern of circles. The three boxes in the second row are set to blend with the background of the container.

```html hidden live-sample___compositing
<section>
  <div><span>Normal, with no blending</span></div>
  <div><span>Multiplies colors</span></div>
  <div><span>Multiplies based on background color</span></div>
  <div>Normal, with no blending</div>
  <div>Multiplies colors</div>
  <div>Multiplies based on background color</div>
</section>
```

```css hidden live-sample___compositing
/* Creates a div with two offset striped background images and a background color. */
div {
  width: 200px;
  height: 200px;
  background-image:
    repeating-linear-gradient(45deg, red 0 15px, pink 15px 30px),
    repeating-linear-gradient(-45deg, blue 0 15px, lightblue 15px 30px);
  background-size: 150px 150px;
  background-repeat: no-repeat;
  background-position:
    top left,
    bottom right;
  background-color: palegoldenrod;
  text-align: center;
  padding-top: 150px;
  font-family: sans-serif;
  box-sizing: border-box;
  border: 5px solid black;
}
div:nth-of-type(3n + 1) {
  background-blend-mode: normal;
}
div:nth-of-type(3n + 2) {
  background-blend-mode: multiply;
}
div:nth-of-type(3n + 3) {
  background-blend-mode: overlay;
}
div:nth-of-type(n + 4) {
  mix-blend-mode: difference;
}
/* Put a pink background with transparent round holes that covers the 
  entire element, and lay the examples in two rows with three columns each */
section {
  padding: 0.75em;
  background: radial-gradient(
    circle,
    transparent 0 20px,
    rgb(255 200 200) 20px
  );
  background-size: 60px 60px;
  background-position: center;
  display: inline-grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1em;
}
/* Make some of the text more legible */
span {
  background-color: #ffffff99;
}
```

{{EmbedLiveSample("compositing", "", "450px")}}

Notice how the background, border, and the content are all impacted as a result of the blending.
Click "Play" in the example above to see or edit the code for the animation in the MDN Playground.

## Reference

### Properties

- {{cssxref("background-blend-mode")}}
- {{cssxref("isolation")}}
- {{cssxref("mix-blend-mode")}}

## Related concepts

- {{cssxref("blend-mode")}} data type
- {{cssxref("backdrop-filter")}} CSS property
- {{cssxref("filter")}} CSS property
- {{cssxref("mask-composite")}} CSS property
- {{cssxref("background-color")}} CSS property
- {{cssxref("background-image")}} CSS property
- {{glossary("stacking context")}} glossary term
- {{ SVGElement("feBlend")}} SVG filter primitive
- {{ SVGElement("feComposite")}} SVG filter primitive

## Specifications

{{Specifications}}

## See also

- Properties in the [CSS filter effects](/en-US/docs/Web/CSS/CSS_filter_effects) module enable applying filters effects, such as blurring and changing color intensity, to images, backgrounds, and borders.
- [Compositing And Blending In CSS](https://www.sarasoueidan.com/blog/compositing-and-blending-in-css/) (2015)
- [Editing Images in CSS: Blend Modes](https://webdesign.tutsplus.com/editing-images-in-css-blend-modes--cms-26058t) (2022)
- [web.dev: blend modes](https://web.dev/learn/css/blend-modes) (2021)
