---
title: Intrinsic size
slug: Glossary/Intrinsic_Size
page-type: glossary-definition
sidebar: glossarysidebar
---

In CSS, the **intrinsic size** of an element is the size it would have based purely on its content, without taking into account the effects of the layout context it appears in. This is the opposite of an element's {{glossary("extrinsic size")}}, which is determined by external constraints such as container size. An element's intrinsic sizes are represented by its {{cssxref("min-content")}} and {{cssxref("max-content")}} sizes.

Inline elements are sized intrinsically. CSS [box model](/en-US/docs/Learn_web_development/Core/Styling_basics/Box_model) properties such as {{cssxref("height")}}, {{cssxref("width")}}, {{cssxref("block-size")}}, {{cssxref("inline-size")}}, {{cssxref("padding-block")}}, and {{cssxref("margin-block")}} have no impact on their layout (though {{cssxref("margin-inline")}} and {{cssxref("padding-inline")}} do affect spacing within a line).

For example, the minimum intrinsic size of the inline {{htmlelement("span")}} element is the smallest size it would have if it were floated (with no other CSS box properties applied) in a container with `inline-size: 0`. The maximum intrinsic size is the opposite; it's the size the same `<span>` would have when placed in a container with an infinite `inline-size`.

Intrinsic size has the same meaning for images as for text — the size at which the images are displayed if no CSS is applied to change the rendering.

Pixel density and resolution affect intrinsic size. By default, images are assumed to have a "1x" pixel density (1 device pixel = 1 CSS pixel), in which case the intrinsic size is simply the pixel height and width. An image's intrinsic size and resolution can be explicitly specified in its {{Glossary("EXIF")}} data. Image pixel density may also be set for images using the [`srcset`](/en-US/docs/Web/HTML/Reference/Elements/img#srcset) attribute. Note that if both mechanisms are used, the `srcset` value is applied "over" the EXIF value.

Intrinsic sizes and how they are calculated are defined in the [CSS box sizing](/en-US/docs/Web/CSS/CSS_box_sizing) module.

## Minimum intrinsic size

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

{{EmbedLiveSample('minimum intrinsic size', '100%', '220')}}

## Maximum intrinsic size

The maximum intrinsic size is the opposite. It is the element's size if the container's inline size were infinite. Text content would display as wide as possible, with no soft-wrapping, even if it overflows its container. The keyword value {{cssxref("max-content")}} sets this behavior.

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

{{EmbedLiveSample('maximum intrinsic size', '100%', '200')}}

## See also

- Related glossary terms:
  - {{glossary("Extrinsic size")}}
- CSS {{cssxref("min-content")}}, {{cssxref("max-content")}}, and {{cssxref("fit-content")}} sizing keywords
- {{cssxref("interpolate-size")}}
- {{cssxref("aspect-ratio")}}
- {{cssxref("calc-size()")}}
- [CSS box sizing](/en-US/docs/Web/CSS/CSS_box_sizing) module
- [CSS Box Sizing Module Level 3](https://drafts.csswg.org/css-sizing-3/#intrinsic-sizes) specification
