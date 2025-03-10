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

The code below shows how you might style the given `<text>` element with a particular font using CSS: in this case the system font "Courier New".
Note that the CSS here is nested within an SVG {{SVGElement("style")}} element, but could also be applied in the including HTML.

```html
<svg>
  <style>
    text {
      /* Specify the system or custom font to use */
      font-family: "Courier New", sans-serif;

      /* Add other styling */
      font-size: 24px;
      font-weight: bold;
      font-style: italic;
    }
  </style>
  <text x="10" y="20">Some text</text>
</svg>
```

This renders as shown below:

{{EmbedLiveSample("How to apply a font", "100", "30px")}}

## Using web fonts with `@font-face`

The previous section uses CSS to apply a system font, but you can apply a web font specified using the {{cssxref("@font-face")}} at-rule in exactly same way.

The example demonstrates how, first defining and then using a font family named "FiraSans":

```html
<svg
  viewBox="0 0 400 50"
  width="350"
  height="50"
  xmlns="http://www.w3.org/2000/svg">
  <style>
    /* Define the font family using web fonts */
    @font-face {
      font-family: "FiraSans";
      src:
        url("https://mdn.github.io/shared-assets/fonts/FiraSans-Italic.woff2")
          format("woff2"),
        url("https://mdn.github.io/shared-assets/fonts/FiraSans-Bold.woff2")
          format("woff2");
    }

    /* Style the text */
    text {
      /* Specify the system or custom font to use */
      font-family: "FiraSans", sans-serif;

      /* Add other styling */
      font-size: 24px;
      font-weight: bold;
      font-style: italic;
    }
  </style>
  <text x="10" y="20">Text styled with custom font</text>
</svg>
```

{{EmbedLiveSample("Using web fonts with @font-face", "100", "70px")}}

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
