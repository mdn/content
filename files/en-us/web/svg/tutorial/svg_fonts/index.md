---
title: Using fonts in SVG
slug: Web/SVG/Tutorial/SVG_fonts
page-type: guide
---

{{SVGRef}}

{{ PreviousNext("Web/SVG/Tutorial/Filter_effects", "Web/SVG/Tutorial/SVG_Image_Tag") }}

SVG supports multiple ways to specify fonts for text elements. The recommended modern approach is to use CSS, similar to how you would style fonts in HTML.

## Using web fonts with `@font-face`

The most common way to use custom fonts in SVG is through CSS {{cssxref("@font-face")}}:

```css
@font-face {
  font-family: "Open Sans";
  src:
    url("path/to/OpenSans.woff2") format("woff2"),
    url("path/to/OpenSans.woff") format("woff");
}
```

You can then apply this font to SVG text elements using the {{SVGAttr("font-family")}} property:

```html
<svg>
  <text font-family="Open Sans" x="10" y="20">Text using Open Sans font</text>
</svg>
```

Or using CSS:

```css
text {
  font-family: "Open Sans", sans-serif;
}
```

## Using system fonts

You can also use system fonts directly:

```html
<svg>
  <text font-family="Arial, Helvetica, sans-serif" x="10" y="20">
    Text using system fonts
  </text>
</svg>
```

## Font styling

Other font-related CSS properties work the same way as in HTML:

```css
text {
  font-family: "Open Sans", sans-serif;
  font-size: 24px;
  font-weight: bold;
  font-style: italic;
}
```

> [!NOTE]
> The older SVG font format using {{ SVGElement("font") }} and {{ SVGElement("font-face") }} elements is deprecated and should not be used. Modern browsers support web fonts through CSS {{cssxref("@font-face")}}, which provides better performance and compatibility.

{{ PreviousNext("Web/SVG/Tutorial/Filter_effects", "Web/SVG/Tutorial/SVG_Image_Tag") }}
