---
title: "@color-profile"
slug: Web/CSS/@color-profile
page-type: css-at-rule
browser-compat: css.at-rules.color-profile
---

{{CSSRef}}

The **`@color-profile`** [CSS](/en-US/docs/Web/CSS) [at-rule](/en-US/docs/Web/CSS/At-rule) defines and names a color profile which can later be used in the {{cssxref("color_value/color", "color()")}} function to specify a color.

## Syntax

```css
@color-profile --swop5c {
  src: url("https://example.org/SWOP2006_Coated5v2.icc");
}
```

### Descriptors

- `src`
  - : Specifies the URL to retrieve the color-profile information from.
- `rendering-intent`

  - : If the color profile contains more than one rendering intent, this descriptor allows one to be selected as the one to use to define how to map the color to smaller {{glossary("gamut")}}s than this profile is defined over.

    If used, it must be one of the following keywords:

    - `relative-colorimetric`
      - : Media-relative colorimetric is required to leave source colors that fall inside the destination medium {{glossary("gamut")}} unchanged relative to the respective media white points. Source colors that are out of the destination medium gamut are mapped to colors on the gamut boundary using a variety of different methods.
    - `absolute-colorimetric`
      - : ICC-absolute colorimetric is required to leave source colors that fall inside the destination medium {{glossary("gamut")}} unchanged relative to the adopted white (a perfect reflecting diffuser). Source colors that are out of the destination medium gamut are mapped to colors on the gamut boundary using a variety of different methods.
    - `perceptual`
      - : This method is often the preferred choice for images, especially when there are substantial differences between the source and destination (such as a screen display image reproduced on a reflection print). It takes the colors of the source image and re-optimizes the appearance for the destination medium using proprietary methods.
    - `saturation`
      - : This option was created to preserve the relative saturation (chroma) of the original, and to keep solid colors pure. However, it experienced interoperability problems like the perceptual intent.

## Examples

This example is from the specification and demonstrates using offset printing to ISO 12647-2:2004 using the CGATS/SWOP TR005 2007 characterization data on grade 5 paper with an ink limit of 300% Total Area Coverage, and medium gray component replacement (GCR).

The `src` descriptor specifies the URL to retrieve the color-profile information from.

```css
@color-profile --swop5c {
  src: url("https://example.org/SWOP2006_Coated5v2.icc");
}
.header {
  background-color: color(--swop5c 0% 70% 20% 0%);
}
```

## Formal syntax

{{csssyntax}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
