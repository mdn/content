---
title: font-feature-settings
slug: Web/CSS/@font-face/font-feature-settings
page-type: css-at-rule-descriptor
browser-compat: css.at-rules.font-face.font-feature-settings
---

{{CSSRef}}

The **`font-feature-settings`** CSS descriptor allows you to define the initial settings to use for the font defined by the {{cssxref("@font-face")}} at-rule. You can further use this descriptor to control typographic font features such as ligatures, small caps, and swashes, for the font defined by `@font-face`. The values for this descriptor are the same as the {{cssxref("font-feature-settings")}} property, except for the global keyword values.

Since this descriptor sets feature values on the font object in the `@font-face` at-rule and not on an entire element, only some glyphs in an element may be rendered using this descriptor.

## Syntax

```css
/* Use the default settings */
font-feature-settings: normal;

/* Set values for OpenType feature tags */
font-feature-settings: "smcp";
font-feature-settings: "smcp" on;
font-feature-settings: "swsh" 2;
```

### Values

- `normal`
  - : Indicates that text is laid out using default settings.
- `<feature-tag-value>`
  - : Represents a comma separated list of a string and an optional integer or keyword value. When rendering text, the list of OpenType feature-tag and value are passed to the text layout engine to enable or disable font features. The tag is always a {{cssxref("&lt;string&gt;")}} of 4 ASCII characters. If it has more or less characters or if it contains characters outside the `U+20` – `U+7E` code point range, the descriptor is invalid.
    The optional value is a positive integer or the keyword `on` or `off`. The keywords `on` and `off` are synonyms for `1` and `0`, respectively. If no value is set, the default is `1`. For non-Boolean OpenType features (e.g., [stylistic alternates](https://docs.microsoft.com/typography/opentype/spec/features_pt)), the value implies a particular glyph to be selected; for Boolean values, the value is a switch.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting font features in a @font-face rule

```css
@font-face {
  font-family: "MyFont";
  src: url("myfont.woff2") format("woff2");
  font-feature-settings: "liga" off, "dlig" off, "swsh" 2, "smcp";
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Other `@font-face` descriptors: {{cssxref("@font-face/font-family", "font-family")}}, {{cssxref("@font-face/font-style", "font-style")}}, {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}, {{cssxref("@font-face/font-weight", "font-weight")}}, {{cssxref("@font-face/src", "src")}}
- Related font properties: {{cssxref("font-feature-settings")}}, {{cssxref("font-variation-settings")}}
