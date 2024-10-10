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

This descriptor is specified as either the keyword `normal` or as a comma-separated list of `<feature-tag-value>` values. When rendering text, the list of OpenType `<feature-tag-value>` values are passed to the text layout engine to enable or disable font features.

- `normal`
  - : Indicates that text is laid out using default font settings. This is the default value.
- `<feature-tag-value>`

  - : Represents a space-separated tuple consisting of a tag name and an optional value.

    The tag name is always a {{cssxref("&lt;string&gt;")}} of four {{Glossary("ASCII")}} characters. If the tag name has more or fewer characters or if it contains characters outside the `U+20` – `U+7E` code point range, the descriptor is invalid.

    The optional value can be a positive integer or the keyword `on` or `off`. The keywords `on` and `off` are synonyms for the values `1` and `0`, respectively. If no value is set, the default is `1`. For non-boolean OpenType features (e.g., [stylistic alternates](https://learn.microsoft.com/en-ca/typography/opentype/spec/features_pt#tag-salt)), the value implies a particular glyph to be selected; for boolean features, the value turns the feature on or off.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Enabling swash glyphs using the @font-face at-rule

In this example, the tag name `swsh` and a boolean value `1` are used as the value for the `font-feature-settings` descriptor in the `@font-face` at-rule.

#### HTML

```html
<p class="swash-off">Swash is off here</p>
<p class="swash-on">Swash is on here</p>
```

#### CSS

```css
@font-face {
  font-family: MonteCarlo;
  src: url("montecarlo-regular.woff2");
}
@font-face {
  font-family: MonteCarlo2;
  src: url("montecarlo-regular.woff2");
  font-feature-settings: "swsh" 1;
}
p {
  font-size: 3rem;
  margin: 0.7rem 3rem;
}
.swash-off {
  font-family: MonteCarlo;
}
.swash-on {
  font-family: MonteCarlo2;
}
```

#### Result

{{EmbedLiveSample("Enabling swash glyphs using the @font-face rule", 0, 230)}}

Line 1 shows the default ornate design of the [MonteCarlo](https://github.com/googlefonts/monte-carlo) font, and line 2 shows the default glyphs being replaced with [swash](https://learn.microsoft.com/en-ca/typography/opentype/spec/features_pt#tag-swsh) glyphs.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Other `@font-face` descriptors: {{cssxref("@font-face/font-family", "font-family")}}, {{cssxref("@font-face/font-style", "font-style")}}, {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}, {{cssxref("@font-face/font-weight", "font-weight")}}, {{cssxref("@font-face/src", "src")}}
- Related font properties: {{cssxref("font-feature-settings")}}, {{cssxref("font-variant-alternates")}}, {{cssxref("font-variation-settings")}}
