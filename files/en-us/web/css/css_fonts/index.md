---
title: CSS Fonts
slug: Web/CSS/CSS_Fonts
tags:
  - CSS
  - CSS Fonts
  - Guide
  - Overview
  - Reference
---
{{CSSRef}}

**CSS Fonts** is a module of CSS that defines font-related properties and how font resources are loaded. It lets you define the style of a font, such as its family, size and weight, line height, and the glyph variants to use when multiple are available for a single character.

## Basic example

The following example shows a simple use of basic font properties to style a paragraph of text.

```css
p {
  width: 600px;
  margin: 0 auto;
  font-family: "Helvetica Neue", "Arial", sans-serif;
  font-style: italic;
  font-weight: 100;
  font-variant-ligatures: normal;
  font-size: 2rem;
  letter-spacing: 1px;
}
```

```html
<p>Three hundred years ago<br>
  I thought I might get some sleep<br>
  I stretched myself out onna antique bed<br>
  An' my spirit did a midnite creep</p>
```

The result is as follows:

{{EmbedLiveSample('Basic_example', '100%', '200')}}

## Variable fonts examples

You can find a number of variable fonts examples at [v-fonts.com](https://v-fonts.com/) and [axis-praxis.org](https://www.axis-praxis.org/); see also our [Variable fonts guide](/en-US/docs/Web/CSS/CSS_Fonts/Variable_Fonts_Guide) for more information and usage information.

## Reference

### Properties

- {{cssxref("font")}}
- {{cssxref("font-family")}}
- {{cssxref("font-feature-settings")}}
- {{cssxref("font-kerning")}}
- {{cssxref("font-language-override")}}
- {{cssxref("font-optical-sizing")}}
- {{cssxref("font-size")}}
- {{cssxref("font-size-adjust")}}
- {{cssxref("font-stretch")}}
- {{cssxref("font-style")}}
- {{cssxref("font-synthesis")}}
- {{cssxref("font-variant")}}
- {{cssxref("font-variant-alternates")}}
- {{cssxref("font-variant-caps")}}
- {{cssxref("font-variant-east-asian")}}
- {{cssxref("font-variant-ligatures")}}
- {{cssxref("font-variant-numeric")}}
- {{cssxref("font-variant-position")}}
- {{cssxref("font-variation-settings")}}
- {{cssxref("font-weight")}}
- {{cssxref("line-height")}}

### At-rules

- {{cssxref("@font-face")}}
- {{cssxref("@font-feature-values")}}

## Guides

- [Fundamental text and font styling](/en-US/docs/Learn/CSS/Styling_text/Fundamentals)
  - : In this beginner's learning article we go through all the basic fundamentals of text/font styling in detail, including setting font weight, family and style, font shorthand, text alignment and other effects, and line and letter spacing.
- [OpenType font features guide](/en-US/docs/Web/CSS/CSS_Fonts/OpenType_fonts_guide)
  - : Font features or variants refer to different glyphs or character styles contained within an OpenType font. These include things like ligatures (special glyphs that combine characters like 'fi' or 'ffl'), kerning (adjustments to the spacing between specific letterform pairings), fractions, numeral styles, and a number of others. These are all referred to as OpenType Features, and are made available to use on the web via specific properties and a low-level control property — {{cssxref("font-feature-settings")}}. This article provides you with all you need to know about using OpenType font features in CSS.
- [Variable fonts guide](/en-US/docs/Web/CSS/CSS_Fonts/Variable_Fonts_Guide)
  - : **Variable fonts** are an evolution of the OpenType font specification that enables many different variations of a typeface to be incorporated into a single file, rather than having a separate font file for every width, weight, or style. This article will give you all you need to know to get you started using variable fonts.

## Specifications

| Specification                                                            | Status                           | Comment                                                                                         |
| ------------------------------------------------------------------------ | -------------------------------- | ----------------------------------------------------------------------------------------------- |
| {{SpecName('CSS4 Fonts')}}                                     | {{Spec2('CSS4 Fonts')}} | Adds `font-variation-settings` (and related higher-level properties) and `font-optical-sizing`. |
| {{SpecName('CSS3 Fonts')}}                                     | {{Spec2('CSS3 Fonts')}} | Adds `font-feature-settings` (and related higher-level properties)                              |
| {{SpecName('CSS2.1', 'fonts.html#font-shorthand', '')}} | {{Spec2('CSS2.1')}}         |                                                                                                 |
| {{SpecName('CSS1', '#font', '')}}                             | {{Spec2('CSS1')}}         | Initial definition                                                                              |
