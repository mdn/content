---
title: CSS compositing and blending
slug: Web/CSS/CSS_compositing_and_blending
page-type: css-module
spec-urls:
  - https://drafts.fxtf.org/compositing/
  - https://www.w3.org/TR/compositing-1/
---

{{CSSRef}}

The **CSS compositing and blending** module defines how an element's background layers can be blended together, how an element can be blended with its container, and whether the element must create a new [stacking context](/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context).

The properties in this CSS module can be used to define the blending mode that should be used, if any, to blend an element's background images and colors into a single background image. This module provides 16 blending modes. You can also define how an element's borders, background, and content, including text, emojis, and images, should be blended with the background of its container.

### Compositing and blending in action

In this example, each box has a border, two striped background images, and a solid color background. The common background for all the boxes contains a pattern of circles. The three boxes in the second row are set to blend with the background of the container.

{{EmbedGHLiveSample("css-examples/modules/compositing.html", '100%', 460)}}

Notice how the background, border, and the content are all impacted as a result of the blending. To see the code for this sample, [view the source on GitHub](https://github.com/mdn/css-examples/blob/main/modules/compositing.html).

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

- Properties in the [CSS filter effects](/en-US/docs/Web/CSS/Filter_Effects) module enable applying filters effects, such as blurring and changing color intensity, to images, backgrounds, and borders.
- [Compositing And Blending In CSS](https://www.sarasoueidan.com/blog/compositing-and-blending-in-css/) (2015)
- [Editing Images in CSS: Blend Modes](https://code.tutsplus.com/tutorials/editing-images-in-css-blend-modes--cms-26058) (2022)
- [web.dev: blend modes](https://web.dev/learn/css/blend-modes/) (2021)
