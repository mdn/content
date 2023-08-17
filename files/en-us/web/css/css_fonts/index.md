---
title: CSS fonts
slug: Web/CSS/CSS_fonts
page-type: css-module
spec-urls: https://drafts.csswg.org/css-fonts/
---

{{CSSRef}}

The **CSS fonts** module defines font-related properties and how font resources are loaded. It lets you define the style of a font, such as its family, size and weight, line height, and the glyph variants to use when multiple are available for a single character.

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

{{cssxref("@font-face")}}

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
- {{cssxref("@font-face/src", "src")}}
- {{cssxref("@font-face/unicode-range", "unicode-range")}}

{{cssxref("@font-feature-values")}}

- {{cssxref("@font-feature-values/font-display", "font-display")}}

{{cssxref("@font-palette-values")}}

- {{cssxref("@font-palette-values/base-palette", "base-palette")}}
- {{cssxref("@font-palette-values/font-family", "font-family")}}
- {{cssxref("@font-palette-values/override-colors", "override-colors")}}

### Data types

- {{cssxref("absolute-size")}}
- {{cssxref("generic-family")}}
- {{cssxref("relative-size")}}
- [`<color-font-tech>`](/en-US/docs/Web/CSS/@supports#font-tech)
- [`<common-lig-values>`](/en-US/docs/Web/CSS/font-variant-ligatures#values)
- [`<contextual-alt-values>`](/en-US/docs/Web/CSS/font-variant-ligatures#values)
- [`<discretionary-lig-values>`](/en-US/docs/Web/CSS/font-variant-ligatures#values)
- [`<east-asian-variant-values>`](/en-US/docs/Web/CSS/font-variant#values)
- [`<east-asian-width-values>`](/en-US/docs/Web/CSS/font-variant#values)
- [`<font-features-tech>`](/en-US/docs/Web/CSS/@supports#font-tech)
- [`<font-format>`](/en-US/docs/Web/CSS/@supports#font-format)
- [`<font-tech>`](/en-US/docs/Web/CSS/@supports#font-tech)
- [`<historical-lig-values>`](/en-US/docs/Web/CSS/font-variant-ligatures#values)

```html
- {{cssxref("")}}

<family-name>
  <feature-tag-value>
    <feature-value-name>
      <font-stretch-css3>
        <font-variant-css2>
          <font-weight-absolute>
            <numeric-figure-values>
              <numeric-fraction-values>
                <numeric-spacing-values>
                  <palette-identifier></palette-identifier></numeric-spacing-values></numeric-fraction-values></numeric-figure-values></font-weight-absolute></font-variant-css2></font-stretch-css3></feature-value-name></feature-tag-value
></family-name>
```

### Interfaces

- {{domxref("CSSFontFaceRule")}}
- {{domxref("CSSFontFeatureValuesMap")}}
- {{domxref("CSSFontFeatureValuesRule")}}
- {{domxref("CSSFontPaletteValuesRule")}}

## Guides

- [Fundamental text and font styling](/en-US/docs/Learn/CSS/Styling_text/Fundamentals)

  - : In this beginner's learning article we go through all the basic fundamentals of text/font styling in detail, including setting font weight, family and style, font shorthand, text alignment and other effects, and line and letter spacing.

- [OpenType font features guide](/en-US/docs/Web/CSS/CSS_fonts/OpenType_fonts_guide)

  - : Font features or variants refer to different glyphs or character styles contained within an OpenType font. These include things like ligatures (special glyphs that combine characters like 'fi' or 'ffl'), kerning (adjustments to the spacing between specific letterform pairings), fractions, numeral styles, and a number of others. These are all referred to as OpenType Features, and are made available to use on the web via specific properties and a low-level control property — {{cssxref("font-feature-settings")}}. This article provides you with all you need to know about using OpenType font features in CSS.

- [Variable fonts guide](/en-US/docs/Web/CSS/CSS_fonts/Variable_fonts_guide)

  - : **Variable fonts** are an evolution of the OpenType font specification that enables many different variations of a typeface to be incorporated into a single file, rather than having a separate font file for every width, weight, or style. This article will give you all you need to know to get you started using variable fonts.

- [Improving font perfomance](/en-US/docs/Learn/Performance/CSS#improving_font_performance)

  - : Part of the CSS perfomance guide discussing font loading, loading only needed glyphs, and defining font display behavior with the `font-display`` descriptor.

## Related concepts

- CSS {{cssxref("line-height")}} property

## Specifications

{{Specifications}}

## See also

- [CSS font loading](/en-US/docs/Web/CSS/CSS_font_loading) module
- [CSS font loading API](/en-US/docs/Web/API/CSS_Font_Loading_API)
