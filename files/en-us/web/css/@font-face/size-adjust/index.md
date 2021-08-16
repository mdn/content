---
title: size-adjust
slug: Web/CSS/@font-face/size-adjust
tags:
  - '@font-face'
  - At-rule descriptor
  - CSS
  - Reference
  - descriptor
  - size-adjust
browser-compat: css.at-rules.font-face.size-adjust
---
{{CSSRef}}

The **`size-adjust`** CSS descriptor defines a multiplier for glyph outlines and metrics associated with this font. This makes it easier to harmonize the designs of various fonts when rendered at the same font size.

The `size-adjust` descriptor behaves in a similar fashion to the {{cssxref("font-size-adjust")}} property. It calculates an adjustment per font by matching ex heights.

## Syntax

```css
size-adjust: 90%;
```

### Values

- `<percentage>`
  - : A {{cssxref("&lt;percentage&gt;")}} value with an initial value of 100%.

All metrics associated with this font are scaled by the given percentage. This includes glyph advances, baseline tables, and overrides provided by {{cssxref("@font-face")}} descriptors.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Overriding metrics of a fallback font

The `size-adjust` property can help when overriding the metrics of a fallback font to better match those of a primary web font.

```css
@font-face {
  font-family: web-font;
  src: url("https://example.com/font.woff");
}

@font-face {
  font-family: local-font;
  src: local(Local Font);
  size-adjust: 90%;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("@font-face/font-display", "font-display")}}
- {{cssxref("@font-face/font-family", "font-family")}}
- {{cssxref("@font-face/font-weight", "font-weight")}}
- {{cssxref("@font-face/font-style", "font-style")}}
- {{cssxref("@font-face/font-stretch", "font-stretch")}}
- {{cssxref("@font-face/font-variant", "font-variant")}}
- {{cssxref("font-feature-settings", "font-feature-settings")}}
- {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}
- {{cssxref("@font-face/src", "src")}}
- {{cssxref("@font-face/unicode-range", "unicode-range descriptor")}}
