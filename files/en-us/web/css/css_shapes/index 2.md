---
title: CSS Shapes
slug: Web/CSS/CSS_Shapes
tags:
  - Boundaries
  - CSS
  - CSS Shapes
  - Guide
  - Overview
  - Reference
  - Shape
  - wrapping
---
{{CSSRef}}

**CSS Shapes** describe geometric shapes for use in CSS. For the [Level 1 specification](https://drafts.csswg.org/css-shapes/), CSS Shapes can be applied to floating elements. The specification defines a number of different ways to define a shape on a floated element, causing wrapping lines to wrap round the shape rather than following the rectangle of the element's box.

## Basic example

The example below shows an image that has been floated left, and the `shape-outside` property applied with a value of `circle(50%)`. This creates a circle shape, and the content wrapping the float now wraps around that shape. This changes the length of the wrapping text's line boxes.

{{EmbedGHLiveSample("css-examples/shapes/overview/circle.html", '100%', 720)}}

## Reference

### Properties

- {{cssxref("shape-image-threshold")}}
- {{cssxref("shape-margin")}}
- {{cssxref("shape-outside")}}

### Data types

- {{cssxref("&lt;basic-shape&gt;")}}

## Guides

- [Overview of CSS Shapes](/en-US/docs/Web/CSS/CSS_Shapes/Overview_of_CSS_Shapes)
- [Shapes from Box Values](/en-US/docs/Web/CSS/CSS_Shapes/Shapes_From_Box_Values)
- [Basic Shapes](/en-US/docs/Web/CSS/CSS_Shapes/Basic_Shapes)
- [Shapes from Images](/en-US/docs/Web/CSS/CSS_Shapes/Shapes_From_Images)
- [Edit Shape Paths in CSS — Firefox Developer Tools](/en-US/docs/Tools/Page_Inspector/How_to/Edit_CSS_shapes)

## External Resources

- [A list of CSS Shapes resources](https://codepen.io/KristopherVanSant/post/css-shapes-resources)
- [CSS Shapes 101](https://alistapart.com/article/css-shapes-101)
- [Creating non-rectangular layouts with CSS Shapes](https://www.sarasoueidan.com/blog/css-shapes/)
- [How To Use CSS Shapes In Your Web Design](https://webdesign.tutsplus.com/tutorials/how-to-use-css-shapes-in-your-web-design--cms-27498)
- [How To Get Started With CSS Shapes](https://www.webdesignerdepot.com/2015/03/how-to-get-started-with-css-shapes/)
- [What I Learned In One Weekend With CSS Shapes](https://medium.com/@MHarreither/what-i-learned-in-one-weekend-with-css-shapes-66ae9be69cc5)
- [CSS vs. SVG: Shapes and Arbitrarily-Shaped UI Components](https://theblog.adobe.com/css-vs-svg-shapes-and-arbitrarily-shaped-ui-components/)

## Specifications

| Specification                        | Status                           | Comment            |
| ------------------------------------ | -------------------------------- | ------------------ |
| {{SpecName("CSS Shapes")}} | {{Spec2("CSS Shapes")}} | Initial definition |
