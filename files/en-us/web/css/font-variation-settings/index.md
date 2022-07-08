---
title: font-variation-settings
slug: Web/CSS/font-variation-settings
tags:
  - CSS
  - CSS Fonts
  - CSS Property
  - Reference
  - recipe:css-property
browser-compat: css.properties.font-variation-settings
---
{{CSSRef}}

The **`font-variation-settings`** CSS property provides low-level control over [variable font](/en-US/docs/Web/CSS/CSS_Fonts/Variable_Fonts_Guide) characteristics, by specifying the four letter axis names of the characteristics you want to vary, along with their values.

{{EmbedInteractiveExample("pages/css/font-variation-settings.html")}}

## Syntax

```css
/* Use the default settings */
font-variation-settings: normal;

/* Set values for variable font axis names */
font-variation-settings: "XHGT" 0.7;

/* Global values */
font-variation-settings: inherit;
font-variation-settings: initial;
font-variation-settings: revert;
font-variation-settings: revert-layer;
font-variation-settings: unset;
```

### Values

This property's value can take one of two forms:

- `normal`
  - : Text is laid out using default settings.
- `<string> <number>`
  - : When rendering text, the list of variable font axis names is passed to the text layout engine to enable or disable font features. Each setting is always one or more pairs consisting of a {{cssxref("&lt;string&gt;")}} of 4 ASCII characters followed by a {{cssxref("number")}} indicating the axis value to set. If the `<string>` has more or fewer characters or contains characters outside the U+20 - U+7E codepoint range, the whole property is invalid. The `<number>` can be fractional or negative, depending on the value range available in your font, as defined by the font designer.

## Description

This property is a low-level mechanism designed to set variable font features where no other way to enable or access those features exist. You should only use it when no basic properties exist to set those features (e.g. {{cssxref("font-weight")}}, {{cssxref("font-style")}}).

Font characteristics set using `font-variation-settings` will always override those set using the corresponding basic font properties, e.g. `font-weight`, no matter where they appear in the cascade. In some browsers, this is currently only true when the `@font-face` declaration includes a `font-weight` range.

### Registered and custom axes

Variable font axes come in two types: **registered** and **custom**.

Registered axes are the most commonly encountered — common enough that the authors of the specification felt they were worth standardizing. Note that this doesn't mean that the author has to include all of these in their font.

Here are the registered axes along with their corresponding CSS properties:

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Axis Tag</th>
      <th scope="col">CSS Property</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>"wght"</td>
      <td>{{cssxref("font-weight")}}</td>
    </tr>
    <tr>
      <td>"wdth"</td>
      <td>{{cssxref("font-stretch")}}</td>
    </tr>
    <tr>
      <td>"slnt" (slant)</td>
      <td>{{cssxref("font-style")}}: <code>oblique + angle</code></td>
    </tr>
    <tr>
      <td>"ital"</td>
      <td>{{cssxref("font-style")}}: <code>italic</code></td>
    </tr>
    <tr>
      <td>"opsz"</td>
      <td><p>{{cssxref("font-optical-sizing")}}</p></td>
    </tr>
  </tbody>
</table>

Custom axes can be anything the font designer wants to vary in their font, for example ascender or descender heights, the size of serifs, or anything else they can imagine. Any axis can be used as long as it is given a unique 4-character axis. Some will end up becoming more common, and may even become registered over time.

> **Note:** Registered axis tags are identified using lower-case tags, whereas custom axes should be given upper-case tags. Note that font designers aren't forced to follow this practice in any way, and some won't. The important takeaway here is that axis tags are case-sensitive.

To use variable fonts on your operating system, you need to make sure that it is up to date. For example Linux OSes need the latest Linux Freetype version, and macOS before 10.13 does not support variable fonts. If your operating system is not up to date, you will not be able to use variable fonts in web pages or the Firefox Developer Tools.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

You can find a number of other variable fonts examples at our [Variable fonts guide](/en-US/docs/Web/CSS/CSS_Fonts/Variable_Fonts_Guide), [v-fonts.com](https://v-fonts.com/), and [axis-praxis.org](https://www.axis-praxis.org/).

### Weight (wght)

The following live example's CSS can be edited to allow you to play with font weight values.

{{EmbedGHLiveSample("css-examples/variable-fonts/weight.html", '100%', 520)}}

### Slant (slnt)

The following live example's CSS can be edited to allow you to play with font slant/oblique values.

{{EmbedGHLiveSample("css-examples/variable-fonts/slant.html", '100%', 520)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Variable fonts guide](/en-US/docs/Web/CSS/CSS_Fonts/Variable_Fonts_Guide)
- [OpenType Font Variations Overview](https://docs.microsoft.com/en-us/typography/opentype/spec/otvaroverview)
- [OpenType Design-Variation Axis Tag Registry](https://docs.microsoft.com/en-us/typography/opentype/spec/dvaraxisreg)
