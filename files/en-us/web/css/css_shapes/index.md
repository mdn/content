---
title: CSS shapes
slug: Web/CSS/CSS_shapes
page-type: css-module
spec-urls:
  - https://drafts.csswg.org/css-shapes-1/
  - https://drafts.csswg.org/css-shapes-2/
---

{{CSSRef}}

The **CSS shapes** module describes geometric shapes. It also defines CSS properties that can use the shapes to control the geometry of an element's float area; this area can then be applied to exclusions, or specify an element's content area.

The specification defines several ways to create shapes. Content can be wrapped around or within a shape rather than following the default rectangle shape of the element's box.

Shapes define geometries that can be used as CSS values. This module provides functions for creating ellipses, polygons, and arbitrary geometries. Other CSS modules can make use of shapes defined in this specification, including [CSS motion path](/en-US/docs/Web/CSS/CSS_motion_path) and [CSS masking](/en-US/docs/Web/CSS/CSS_masking).

## CSS shapes in action

The example below shows an image that has been floated left, and the `shape-outside` property applied with a value of `circle(50%)`. This creates a circle shape, and the content wrapping the float now wraps around that shape. This changes the length of the wrapping text's line boxes.

```html live-sample___circle
<div class="box">
  <img
    alt="A hot air balloon"
    src="https://mdn.github.io/shared-assets/images/examples/round-balloon.png" />
  <p>
    One November night in the year 1782, so the story runs, two brothers sat
    over their winter fire in the little French town of Annonay, watching the
    grey smoke-wreaths from the hearth curl up the wide chimney. Their names
    were Stephen and Joseph Montgolfier, they were papermakers by trade, and
    were noted as possessing thoughtful minds and a deep interest in all
    scientific knowledge and new discovery. Before that night—a memorable night,
    as it was to prove—hundreds of millions of people had watched the rising
    smoke-wreaths of their fires without drawing any special inspiration from
    the fact.
  </p>
</div>
```

```css live-sample___circle
body {
  font: 1.2em / 1.5 sans-serif;
}
img {
  float: left;
  shape-outside: circle(50%);
}
```

{{EmbedLiveSample("circle", "", "300px")}}

## Reference

### Properties

- {{cssxref("shape-image-threshold")}}
- {{cssxref("shape-margin")}}
- {{cssxref("shape-outside")}}

> [!NOTE]
> The CSS shapes module introduces the `shape-inside` and `shape-padding` properties that have not yet been implemented.

### Data types

- {{cssxref("&lt;basic-shape&gt;")}}

### Functions

- {{cssxref("basic-shape/circle","circle()")}}
- {{cssxref("basic-shape/ellipse","ellipse()")}}
- {{cssxref("basic-shape/inset","inset()")}}
- {{cssxref("basic-shape/path","path()")}}
- {{cssxref("basic-shape/polygon","polygon()")}}
- {{cssxref("basic-shape/rect","rect()")}}
- {{cssxref("basic-shape/shape","shape()")}}
- {{cssxref("basic-shape/xywh","xywh()")}}

### Terms

- [Reference box](/en-US/docs/Web/CSS/CSS_shapes/Basic_shapes#the_reference_box)

## Guides

- [Overview of shapes](/en-US/docs/Web/CSS/CSS_shapes/Overview_of_shapes)

  - : Defining basic shapes with the `shape-margin` and `clip-path` properties, and debugging basic shapes with
    Developer Tools.

- [Shapes from box values](/en-US/docs/Web/CSS/CSS_shapes/From_box_values)

  - : Using `border-radius` curvatures and CSS box model values to create shapes.

- [Basic shapes with `shape-outside`](/en-US/docs/Web/CSS/CSS_shapes/Basic_shapes)

  - : Creating rectangles, circles, ellipses, and polygons with CSS shapes, the reference box, and the `shape-outside` property.

- [Shapes from images](/en-US/docs/Web/CSS/CSS_shapes/Shapes_from_images)

  - : Creating shapes from semi-transparent image files and CSS Gradients.

## Related concepts

[CSS motion path](/en-US/docs/Web/CSS/CSS_motion_path) module

- {{cssxref("offset")}}
- {{cssxref("offset-anchor")}}
- {{cssxref("offset-distance")}}
- {{cssxref("offset-path")}}
- {{cssxref("offset-position")}}
- {{cssxref("offset-rotate")}}
- {{cssxref("ray")}} function

[CSS masking](/en-US/docs/Web/CSS/CSS_masking) module

- {{cssxref("clip")}}
- {{cssxref("clip-path")}}
- {{SVGAttr("clip-rule")}}
- {{cssxref("mask")}}
- {{cssxref("mask-origin")}}
- {{cssxref("mask-position")}}

[CSS backgrounds and borders](/en-US/docs/Web/CSS/CSS_backgrounds_and_borders) module

- {{cssxref("border-radius")}} shorthand

[CSS box model](/en-US/docs/Web/CSS/CSS_box_model) module

- {{cssxref("box-edge")}} data type

## Specifications

{{Specifications}}

## See also

- [CSS Shapes resources](https://codepen.io/KristopherVanSant/post/css-shapes-resources)
- [CSS Shapes 101](https://alistapart.com/article/css-shapes-101/) via alistapart.com (2014)
- [Creating non-rectangular layouts with CSS Shapes](https://www.sarasoueidan.com/blog/css-shapes/) via sarasoueidan.com (2013)
- [How to use CSS Shapes in your web design](https://webdesign.tutsplus.com/how-to-use-css-shapes-in-your-web-design--cms-27498t) via tutsplus.com (2016)
- [How to get started with CSS Shapes](https://www.webdesignerdepot.com/2015/03/how-to-get-started-with-css-shapes/) via webdesignerdepot.com (2015)
- [Edit CSS shapes with the shape path editor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_shapes/index.html) via mozilla.org (2018) ([Video](https://www.youtube.com/watch?v=u9bDe3Bw0sA))
