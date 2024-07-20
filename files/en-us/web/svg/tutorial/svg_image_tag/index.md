---
title: SVG image element
slug: Web/SVG/Tutorial/SVG_Image_Tag
page-type: guide
---

{{SVGRef}}

{{ PreviousNext("Web/SVG/Tutorial/SVG_Fonts", "Web/SVG/Tutorial/Tools_for_SVG") }}

The SVG {{ SVGElement("image") }} element allows for raster images to be rendered within an SVG object.

In this basic example, a .jpg image referenced by an {{ SVGAttr("href") }} attribute will be rendered inside an SVG object:

```xml
<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
  "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg width="5cm" height="4cm" version="1.1"
     xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <image href="firefox.jpg" x="0" y="0" height="50px" width="50px"/>
</svg>
```

There are some important things to take note of (referenced from the [W3 specs](https://www.w3.org/TR/SVG/struct.html#ImageElement)):

- If you do not set the `x` or `y` attributes, they will be set to `0`.
- If you do not set the `height` or `width` attributes, they will be set to `0`.
- Having a `height` or `width` attribute of `0` will disable rendering of the image.

{{ PreviousNext("Web/SVG/Tutorial/SVG_Fonts", "Web/SVG/Tutorial/Tools_for_SVG") }}
