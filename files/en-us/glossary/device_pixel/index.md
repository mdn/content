---
title: Device pixel
slug: Glossary/Device_pixel
page-type: glossary-definition
---

{{GlossarySidebar}}

A **device pixel** is the smallest physical display unit capable of displaying a full color independent of its neighbor. It is the smallest physical unit of a display (such as a monitor or mobile phone screen), also known as a _hardware pixel_ or _physical pixel_. Each device pixel is an individual dot that composes the output of the display. Device pixels are fixed and do not scale based on the viewport or CSS.

A device pixel is density-dependent, varying based on the display resolution. The _device-pixel-ratio_ is the ratio of the resolution in physical device pixels to the resolution in CSS pixels for the display. It usually differs from a {{glossary("CSS pixel")}}, which is an absolute length defined as being exactly 1/96th of 1 CSS inch. Devices considered Hi-DPI have more than one device pixel per CSS pixel in the same physical area, while low-DPI devices have less than a 1-to-1 ratio.

## See also

- CSS {{cssxref("&lt;resolution&gt;")}} data type
- CSS {{cssxref("@media/resolution", "resolution")}} @media feature
- CSS {{cssxref("image-resolution")}} property
- {{domxref("devicePixelRatio")}} API
