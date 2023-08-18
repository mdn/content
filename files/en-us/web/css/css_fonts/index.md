---
title: CSS fonts
slug: Web/CSS/CSS_fonts
page-type: css-module
spec-urls: https://drafts.csswg.org/css-fonts/
---

{{CSSRef}}

The **CSS fonts** module defines font-related properties and how font resources are loaded. It lets you define the style of a font, such as its family, size and weight, and the glyph variants to use when multiple are available for a single character.

A font is a resource file containing the visual representation of characters, mapping character codes to glyphs that represent letters, numbers, punctuation and even emojis of a typeface. A font family is a group of fonts that share common design styles and font properties, with each member of the group providing different ways of displaying the glyphs, varying by stroke weight, slant, or relative width, among other attributes. A font typically represents a single style of a typeface, such as Helvetica that is Bold and Italic. A font family is the complete set of styles. Including such a font in a document or design is done by defining a separate `@font-face` declaration for each font resource.

The properties, at-rules, and descriptors of the CSS fonts module enable the downloading of multiple variations of a font. They also define the font file to use for a particular font characteristic, along with fallback instructions in case a resource fails to load. The CSS font selection mechanism describes the process of matching a given set of CSS font properties to a single font face.

The CSS fonts module also supports variable fonts. Unlike regular fonts, where each style is implemented as a separate font file, variable fonts can contain all styles within a single file. By using a single `@font-face` declaration, you can import a variable font that includes all the styles. Depending on the font, this can include a multitude of font variants. Variable fonts are a part of the OpenType font specification.

## Reference

### Properties

- {{cssxref("font")}} shorthand
- {{cssxref("font-family")}}
- {{cssxref("font-feature-settings")}}
- {{cssxref("font-kerning")}}
- {{cssxref("font-language-override")}}
- {{cssxref("font-optical-sizing")}}
- {{cssxref("font-palette")}}
- {{cssxref("font-size")}}
- {{cssxref("font-size-adjust")}}
- {{cssxref("font-stretch")}}
- {{cssxref("font-style")}}
- {{cssxref("font-weight")}}

- {{cssxref("font-synthesis")}} shorthand
- {{cssxref("font-synthesis-small-caps")}}
- {{cssxref("font-synthesis-style")}}
- {{cssxref("font-synthesis-weight")}}

- {{cssxref("font-variant")}} shorthand
- {{cssxref("font-variant-alternates")}}
- {{cssxref("font-variant-caps")}}
- {{cssxref("font-variant-east-asian")}}
- {{cssxref("font-variant-emoji")}}
- {{cssxref("font-variant-ligatures")}}
- {{cssxref("font-variant-numeric")}}
- {{cssxref("font-variant-position")}}
- {{cssxref("font-variation-settings")}}

### At-rules and descriptors

- At-rule: {{cssxref("@font-face")}}

  - : Descriptors:
    - {{cssxref("@font-face/ascent-override", "ascent-override")}}
    - {{cssxref("@font-face/descent-override", "descent-override")}}
    - {{cssxref("@font-face/font-display", "font-display")}}
    - {{cssxref("@font-face/font-family", "font-family")}}
    - {{cssxref("@font-face/font-feature-settings", "font-feature-settings")}}
    - {{cssxref("@font-face/font-language-override", "font-language-override")}}
    - {{cssxref("@font-face/font-named-instance", "font-named-instance")}}
    - {{cssxref("@font-face/font-stretch", "font-stretch")}}
    - {{cssxref("@font-face/font-style", "font-style")}}
    - {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}
    - {{cssxref("@font-face/font-weight", "font-weight")}}
    - {{cssxref("@font-face/line-gap-override", "line-gap-override")}}
    - {{cssxref("@font-face/size-adjust", "size-adjust")}}
    - {{cssxref("@font-face/src", "src")}}
    - {{cssxref("@font-face/unicode-range", "unicode-range")}}

- At-rule: {{cssxref("@font-feature-values")}}

  - : Descriptor:
    - {{cssxref("@font-feature-values/font-display", "font-display")}}

- At-rule: {{cssxref("@font-palette-values")}}
  - : Descriptors:
    - {{cssxref("@font-palette-values/base-palette", "base-palette")}}
    - {{cssxref("@font-palette-values/font-family", "font-family")}}
    - {{cssxref("@font-palette-values/override-colors", "override-colors")}}

### Data types

`font-size` types:

- {{cssxref("absolute-size")}}
- {{cssxref("relative-size")}}

`font-family` type:

- {{cssxref("generic-family")}}

`font-feature-settings` type:

- [`<feature-tag-value>`](/en-US/docs/Web/CSS/font-feature-settings#values)

`font-format` type:

- [`<font-format>`](/en-US/docs/Web/CSS/@supports#font-format)

`font-stretch` type:

- [`<font-stretch-css3>`](/en-US/docs/Web/CSS/font-stretch#values)

`font-tech` types:

- [`<color-font-tech>`](/en-US/docs/Web/CSS/@supports#font-tech)
- [`<font-features-tech>`](/en-US/docs/Web/CSS/@supports#font-tech)
- [`<font-tech>`](/en-US/docs/Web/CSS/@supports#font-tech)

`font-variant` types:

- [`<font-variant-css2>`](/en-US/docs/Web/CSS/font-variant)
- [`<east-asian-variant-values>`](/en-US/docs/Web/CSS/font-variant#values)
- [`<east-asian-width-values>`](/en-US/docs/Web/CSS/font-variant#values)

`font-variant-ligatures` types:

- [`<common-lig-values>`](/en-US/docs/Web/CSS/font-variant-ligatures#values)
- [`<contextual-alt-values>`](/en-US/docs/Web/CSS/font-variant-ligatures#values)
- [`<discretionary-lig-values>`](/en-US/docs/Web/CSS/font-variant-ligatures#values)
- [`<historical-lig-values>`](/en-US/docs/Web/CSS/font-variant-ligatures#values)

`font-variant-numeric` types:

- [`<numeric-figure-values>`](/en-US/docs/Web/CSS/font-variant-numeric#values)
- [`<numeric-fraction-values>`](/en-US/docs/Web/CSS/font-variant-numeric#values)
- [`<numeric-spacing-values>`](/en-US/docs/Web/CSS/font-variant-numeric#values)

`font-weight` type:

- [`<font-weight-absolute>`](/en-US/docs/Web/CSS/font-weight#values)

### Interfaces

- {{domxref("CSSFontFaceRule")}}
- {{domxref("CSSFontFeatureValuesRule")}}
- {{domxref("CSSFontPaletteValuesRule")}}

## Guides

- [Learn: Fundamental text and font styling](/en-US/docs/Learn/CSS/Styling_text/Fundamentals)

  - : This beginner's learning article covers the basic fundamentals of text and font styling. It covers how to set the font weight, family, and style by using the {{cssxref("font")}} shorthand and how to align text and manage line and letter spacing.

- [Learn: Web fonts](/en-US/docs/Learn/CSS/Styling_text/Web_fonts)

  - : This beginner's learning article explains how to use custom fonts on your web page to allow for more varied and custom text styling.

- [OpenType font features guide](/en-US/docs/Web/CSS/CSS_fonts/OpenType_fonts_guide)

  - : Font features or variants refer to different glyphs or character styles contained within an OpenType font. These include things like ligatures (special glyphs that combine characters like 'fi' or 'ffl'), kerning (adjustments to the spacing between specific letterform pairings), fractions, numeral styles, and a number of others. These are all referred to as OpenType Features, and are made available to use on the web via specific properties and a low-level control property — {{cssxref("font-feature-settings")}}. This article provides you with all you need to know about using OpenType font features in CSS.

- [Variable fonts guide](/en-US/docs/Web/CSS/CSS_fonts/Variable_fonts_guide)

  - : This article will help you get started with using variable fonts.

- [Improving font perfomance](/en-US/docs/Learn/Performance/CSS#improving_font_performance)

  - : This article, part of the CSS performance guide, discusses font loading, loading only the required glyphs, and defining font display behavior with the `font-display` descriptor.

## Related concepts

- {{cssxref("letter-spacing")}} CSS property
- {{cssxref("line-height")}} CSS property
- {{cssxref("text-transform")}} CSS property

## Specifications

{{Specifications}}

## See also

- [CSS font loading](/en-US/docs/Web/CSS/CSS_font_loading) module
- [CSS font loading API](/en-US/docs/Web/API/CSS_Font_Loading_API)
- [CSS text](/en-US/docs/Web/CSS/CSS_text) module
- [CSS writing modes](/en-US/docs/Web/CSS/CSS_writing_modes) module
