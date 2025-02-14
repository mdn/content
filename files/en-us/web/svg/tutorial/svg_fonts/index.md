---
title: Using fonts in SVG
slug: Web/SVG/Tutorial/SVG_fonts
page-type: guide
---

{{SVGRef}}

{{ PreviousNext("Web/SVG/Tutorial/Filter_effects", "Web/SVG/Tutorial/SVG_Image_Tag") }}

SVG supports multiple ways to specify fonts for {{SVGElement("text")}} elements.
The recommended modern approach is to use CSS, in much the same way as you would style fonts in HTML.

## Apply and style a font using CSS

Fonts can be applied using CSS in exactly the same way as in HTML.

The code below shows how you might style the given `<text>` element with a particular font, in this case the system font "Courier New".
Note that the CSS can be external to the SVG as shown, or nested within an SVG {{SVGElement("style")}} element.

```css
text {
  /* Specify the system or custom font to use */
  font-family: "Courier New", sans-serif;
  /* Add other styling */
  font-size: 24px;
  font-weight: bold;
  font-style: italic;
}
```

```html
<svg>
  <text x="10" y="20">Some text</text>
</svg>
```

This renders as shown below:

{{EmbedLiveSample("How to apply a font", "100", "50px")}}

## Using web fonts with `@font-face`

The previous section uses CSS to apply a system font, but you can apply a web font specified using the {{cssxref("@font-face")}} at-rule in the same way.

This shows how we might use the rule to create the a font named "My Font":

```css
@font-face {
  font-family: "My Font";
  src:
    url("path/to/MyFont.woff2") format("woff2"),
    url("path/to/MyFont.woff") format("woff");
}
```

We can then use web font in exactly the same way as we previously used the system font:

```css
text {
  /* Specify the system or custom font to use */
  font-family: "My Font", sans-serif;
  /* Add other styling */
  font-size: 24px;
  font-weight: bold;
  font-style: italic;
}
```

```html
<svg>
  <text x="10" y="20">Some text</text>
</svg>
```

## Referencing a style in the text element

You can also directly reference a style within a {{SVGElement("text")}} element using the {{SVGAttr("font-family")}} attribute.
This code shows how we might apply the custom "My Font" to the `<text>` element.

```svg
<svg>
  <text font-family="My Font" x="10" y="20">Text using "My Font" font</text>
</svg>
```

Note that this is similar to applying style to an HTML element.
While there are cases where it can be useful, generally it is better to use CSS and CSS selectors.

> [!NOTE]
> The older SVG font format using {{ SVGElement("font") }} and {{ SVGElement("font-face") }} elements is deprecated and should not be used.
> Using CSS provides better performance and compatibility.

{{ PreviousNext("Web/SVG/Tutorial/Filter_effects", "Web/SVG/Tutorial/SVG_Image_Tag") }}
