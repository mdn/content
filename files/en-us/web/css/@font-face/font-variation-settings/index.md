---
title: font-variation-settings
slug: Web/CSS/@font-face/font-variation-settings
page-type: css-at-rule-descriptor
browser-compat: css.at-rules.font-face.font-variation-settings
---

{{CSSRef}}

The **`font-variation-settings`** CSS descriptor allows authors to specify low-level OpenType or TrueType font variations in the {{cssxref("@font-face")}} at-rule. The values for this descriptor are the same as the {{cssxref("font-variation-settings")}} property, except for the global keyword values.

Since this descriptor sets variation values on the font object in the `@font-face` at-rule and not on an entire element, only some glyphs in an element may be rendered using this descriptor.

## Syntax

```css
/* Use the default settings */
font-variation-settings: normal;

/* Set values for OpenType axis names */
font-variation-settings: "xhgt" 0.7;
```

### Values

- `normal`
  - : Text is laid out using default settings.
- `<string> <number>`
  - : When rendering text, the list of OpenType axis names is passed to the text layout engine to enable or disable font features. Each setting is always a {{cssxref("&lt;string&gt;")}} of 4 ASCII characters, followed by a {{cssxref("number")}} indicating the axis value. If the `<string>` has more or fewer characters or contains characters outside the U+20 - U+7E code point range, the whole property is invalid. The `<number>` can be fractional or negative.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting font weight and stretch in a @font-face rule

```css
@font-face {
  font-family: "OpenTypeFont";
  src: url("open_type_font.woff2") format("woff2");
  font-weight: normal;
  font-style: normal;
  font-variation-settings:
    "wght" 400,
    "wdth" 300;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Other `@font-face` descriptors: {{cssxref("@font-face/font-display", "font-display")}}, {{cssxref("@font-face/font-family", "font-family")}}, {{cssxref("font-feature-settings", "font-feature-settings")}}, {{cssxref("@font-face/font-stretch", "font-stretch")}}, {{cssxref("@font-face/font-style", "font-style")}}, {{cssxref("@font-face/font-weight", "font-weight")}}, {{cssxref("@font-face/src", "src")}}, {{cssxref("@font-face/unicode-range", "unicode-range")}}
- Related font properties: {{cssxref("font-feature-settings")}}, {{cssxref("font-variation-settings")}}
