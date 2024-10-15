---
title: font-feature-settings
slug: Web/CSS/font-feature-settings
page-type: css-property
browser-compat: css.properties.font-feature-settings
---

{{CSSRef}}

The **`font-feature-settings`** [CSS](/en-US/docs/Web/CSS) property controls advanced typographic features in OpenType fonts.

{{EmbedInteractiveExample("pages/css/font-feature-settings.html")}}

## Syntax

```css
/* Use the default settings */
font-feature-settings: normal;

/* Set values for OpenType feature tags */
font-feature-settings: "smcp";
font-feature-settings: "smcp" on;
font-feature-settings: "swsh" 2;
font-feature-settings:
  "smcp",
  "swsh" 2;

/* Global values */
font-feature-settings: inherit;
font-feature-settings: initial;
font-feature-settings: revert;
font-feature-settings: revert-layer;
font-feature-settings: unset;
```

Whenever possible, Web authors should instead use the {{cssxref("font-variant")}} shorthand property or an associated longhand property such as {{cssxref("font-variant-ligatures")}}, {{cssxref("font-variant-caps")}}, {{cssxref("font-variant-east-asian")}}, {{cssxref("font-variant-alternates")}}, {{cssxref("font-variant-numeric")}} or {{cssxref("font-variant-position")}}.

These lead to more effective, predictable, understandable results than `font-feature-settings`, which is a low-level feature designed to handle special cases where no other way exists to enable or access an OpenType font feature. In particular, `font-feature-settings` shouldn't be used to enable small caps.

### Values

This property is specified as either the keyword `normal` or as a comma-separated list of `<feature-tag-value>` values. When rendering text, the list of OpenType `<feature-tag-value>` values are passed to the text layout engine to enable or disable font features.

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

### Enabling various font features

```css
/* use small-cap alternate glyphs */
.small-caps {
  font-feature-settings: "smcp" on;
}

/* convert both upper and lowercase to small caps (affects punctuation also) */
.all-small-caps {
  font-feature-settings: "c2sc", "smcp";
}

/* use zeros with a slash through them to differentiate from "O" */
.nice-zero {
  font-feature-settings: "zero";
}

/* enable historical forms */
.historical {
  font-feature-settings: "hist";
}

/* disable common ligatures, usually on by default */
.no-ligatures {
  font-feature-settings: "liga" 0;
}

/* enable tabular (monospaced) figures */
td.tabular {
  font-feature-settings: "tnum";
}

/* enable automatic fractions */
.fractions {
  font-feature-settings: "frac";
}

/* use the second available swash character */
.swash {
  font-feature-settings: "swsh" 2;
}

/* enable stylistic set 7 */
.fancy-style {
  font-family: Gabriola;
  font-feature-settings: "ss07";
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("@font-face/font-display", "font-display")}}
- {{cssxref("@font-face/font-family", "font-family")}}
- {{cssxref("@font-face/font-stretch", "font-stretch")}}
- {{cssxref("@font-face/font-style", "font-style")}}
- {{cssxref("@font-face/font-weight", "font-weight")}}
- {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}
- {{cssxref("@font-face/src", "src")}}
- {{cssxref("@font-face/unicode-range", "unicode-range")}}
- [OpenType feature tags](https://learn.microsoft.com/en-us/typography/opentype/spec/featurelist) list
- [OpenType features in CSS](https://sparanoid.com/lab/opentype-features/)
