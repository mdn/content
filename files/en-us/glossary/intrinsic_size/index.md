---
title: Intrinsic size
slug: Glossary/Intrinsic_Size
tags:
  - CSS
  - Glossary
  - Intrinsic size
---
In CSS, the _intrinsic size_ of an element is the size it would be based on its content, if no external factors were applied to it. For example, inline elements are sized intrinsically: `width`, `height`, and vertical margin and padding have no impact, though horizontal margin and padding do.

How intrinsic sizes are calculated is defined in the [CSS Intrinsic and Extrinsic Sizing Specification](https://www.w3.org/TR/css-sizing-3/#intrinsic-sizes).

Intrinsic sizing takes into account the `min-content` and `max-content` size of an element. For text the `min-content` size would be if the text wrapped as small as it can in the inline direction without causing an overflow, doing as much soft-wrapping as possible. For a box containing a string of text, the `min-content` size would be defined by the longest word. The keyword value of `min-content` for the {{cssxref("width")}} property will size an element according to the `min-content` size.

The `max-content` size is the opposite — in the case of text, this would have the text display as wide as possible, doing no soft-wrapping, even if an overflow was caused. The keyword value `max-content` exposes this behavior.

For images the intrinsic size has the same meaning — it is the size that an image would be displayed if no CSS was applied to change the rendering. By default images are assumed to have a "1x" pixel density (1 device pixel = 1 CSS pixel) and so the intrinsic size is simply the pixel height and width. The intrinsic image size and resolution can be explicitly specified in the {{Glossary("EXIF")}} data. The intrinsic pixel density may also be set for images using the {{htmlattrxref("srcset", "img")}} attribute (note that if both mechanisms are used, the `srcset` value is applied "over" the EXIF value).
