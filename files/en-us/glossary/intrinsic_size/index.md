---
title: Intrinsic size
slug: Glossary/Intrinsic_Size
page-type: glossary-definition
---

{{GlossarySidebar}}

In CSS, the _intrinsic size_ of an element is the size it would be based purely on its content without taking into account the effects of the context it appears in, for example, the sizing applied by CSS [box model](/en-US/docs/Learn/CSS/Building_blocks/The_box_model) properties. An element's intrinsic sizes are the element's {{cssxref("min-content")}} and {{cssxref("max-content")}} sizes.

Inline elements are sized intrinsically: [sizing](/en-US/docs/Web/CSS/CSS_box_sizing) and [box](/en-US/docs/Web/CSS/CSS_box_model) properties including {{cssxref("height")}}, {{cssxref("width")}}, {{cssxref("block-size")}}, {{cssxref("inline-size")}}, and {{cssxref("padding-block")}} and {{cssxref("margin-block")}} have no impact on them ( though {{cssxref("margin-inline")}} and {{cssxref("padding-inline")}} do).

For example, the minimum intrinsic, or {{cssxref("min-content")}} size of a {{htmlelement("span")}} element is the minimum size it would have if it was floated with no other CSS box properties applied inside a container with a inline-size of `0px`. For text, the `min-content` size would be if the text was wrapped as small as possible in the inline direction without causing an overflow, with as much soft-wrapping as possible. For a box containing a string of text, the `min-content` size would be defined by the longest word. The keyword value of `min-content` for the {{cssxref("width")}} and {{cssxref("inline-size")}} properties will size an element according to the `min-content` size.

The maximum intrinsic size, or {{cssxref("max-content")}} size is the opposite. It is the size the element would be if the inline-size of the container were infinite. In the case of text, this would cause the text to display as wide as possible, doing no soft-wrapping, even if it overflowed the container. The keyword value `max-content` sets this behavior.

Intrinsic sizes and how they are calculated are defined in the [CSS sizing module](/en-US/docs/Web/CSS/CSS_box_sizing).

For images the intrinsic size has the same meaning — it is the size at which they are displayed if no CSS is applied to change the rendering. By default, images are assumed to have a "1x" pixel density (1 device pixel = 1 CSS pixel) and so the intrinsic size is simply the pixel height and width. The intrinsic image size and resolution can be explicitly specified in the {{Glossary("EXIF")}} data. The intrinsic pixel density may also be set for images using the [`srcset`](/en-US/docs/Web/HTML/Element/img#srcset) attribute (note that if both mechanisms are used, the `srcset` value is applied "over" the EXIF value).

## Extrinsic sizing

The opposite of _intrinsic size_ is **_extrinsic size_**, which is based on the context of an element, without regard for its contents. Extrinsic sizing is determined by box model property values. With extrinsic sizing, percentages specify the size of a box with respect to the box's containing block.

## See also

- CSS {{cssxref("min-content")}}, {{cssxref("max-content")}}, and {{cssxref("fit-content")}} property values.
- CSS {{cssxref("aspect-ratio")}} property
- [CSS box sizing](/en-US/docs/Web/CSS/CSS_box_sizing) module
- [CSS sizing specification: intrinsic sizes](https://www.w3.org/TR/css-sizing-3/#intrinsic-sizes)
