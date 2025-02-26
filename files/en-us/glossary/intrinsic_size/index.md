---
title: Intrinsic size
slug: Glossary/Intrinsic_Size
page-type: glossary-definition
---

{{GlossarySidebar}}

In CSS, the _intrinsic size_ of an element is the size it would be based purely on its content without taking into account the effects of the context it appears in. For example, the sizing applied by CSS [box model](/en-US/docs/Learn_web_development/Core/Styling_basics/Box_model) properties. An element's intrinsic sizes are represented by its {{cssxref("min-content")}} and {{cssxref("max-content")}} sizes.

Inline elements are sized intrinsically: [sizing](/en-US/docs/Web/CSS/CSS_box_sizing) and [box](/en-US/docs/Web/CSS/CSS_box_model) properties including {{cssxref("height")}}, {{cssxref("width")}}, {{cssxref("block-size")}}, {{cssxref("inline-size")}}, and {{cssxref("padding-block")}} and {{cssxref("margin-block")}} have no impact on them ( though {{cssxref("margin-inline")}} and {{cssxref("padding-inline")}} do).

For example, the minimum intrinsic size of the inline {{htmlelement("span")}} element is the minimum size it would have if it was floated (with no other CSS box properties applied), inside a container with an inline-size of `0px`. The maximum intrinsic size is the opposite. It is the size the same `<span>` would have if its container's inline size were infinite.

Intrinsic size has the same meaning for images as for text — the size at which the images are displayed if no CSS is applied to change the rendering.

Pixel density and resolution affect intrinsic size. By default, images are assumed to have a "1x" pixel density (1 device pixel = 1 CSS pixel), in which case the intrinsic size is simply the pixel height and width. An image's intrinsic size and resolution can be explicitly specified in its {{Glossary("EXIF")}} data. Image pixel density may also be set for images using the [`srcset`](/en-US/docs/Web/HTML/Element/img#srcset) attribute. Note that, if both mechanisms are used, the `srcset` value is applied "over" the EXIF value.

Intrinsic sizes and how they are calculated are defined in the [CSS sizing module](/en-US/docs/Web/CSS/CSS_box_sizing).

#### minimum intrinsic size

To set an element according to its minimum intrinsic size, set the {{cssxref("inline-size")}} (or {{cssxref("width")}} in horizontal writing modes, like English and Hebrew) to {{cssxref("min-content")}}. This sets the element to the size it would be if the text was wrapped as small as possible in the inline direction without causing an overflow, with as much soft-wrapping as possible. For a box containing a string of text, the minimum intrinsic size would be defined by the longest word.

```html hidden
<p>Text wraps, making the element only as wide as its longest word.</p>
```

```css
p {
  inline-size: min-content;
  background-color: palegoldenrod;
}
```

{{ EmbedLiveSample('minimum intrinsic size', '100%', '220') }}

#### maximum intrinsic size

The maximum intrinsic size is the opposite. It is the element's size if the container's inline size were infinite. Text content would display as wide as possible, with no soft-wrapping, even if it overflowed its container. The keyword value {{cssxref("max-content")}} sets this behavior.

```html hidden
<p>Element grows as text doesn't wrap.</p>
<p>
  This paragraph may be wider than the width of the entire page and yet it won't
  wrap because <code>width: max-content</code> is set. It therefore may overflow
  its container.
</p>
```

```css
p {
  width: max-content;
  background-color: palegoldenrod;
}
```

{{ EmbedLiveSample('maximum intrinsic size', '100%', '200') }}

## Extrinsic sizing

The opposite of _intrinsic size_ is **_extrinsic size_**, which is based on the context of an element, without regard for its contents. Extrinsic sizing is determined by box model property values. With extrinsic sizing, percentages specify the size of a box with respect to the box's containing block.

## See also

- CSS {{cssxref("min-content")}}, {{cssxref("max-content")}}, and {{cssxref("fit-content")}} property values.
- {{cssxref("interpolate-size")}}
- {{cssxref("aspect-ratio")}}
- {{cssxref("calc-size()")}}
- [CSS box sizing](/en-US/docs/Web/CSS/CSS_box_sizing) module
- [CSS sizing specification: intrinsic sizes](https://www.w3.org/TR/css-sizing-3/#intrinsic-sizes)
