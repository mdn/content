---
title: line-gap-override
slug: Web/CSS/@font-face/line-gap-override
page-type: css-at-rule-descriptor
browser-compat: css.at-rules.font-face.line-gap-override
---

{{CSSRef}}

The **`line-gap-override`** CSS descriptor for the {{cssxref("@font-face")}} at-rule defines the line-gap metric for the font. The line-gap metric is the font recommended line-gap or external leading.

## Syntax

```css
line-gap-override: normal;
line-gap-override: 90%;
```

### Values

- `normal`
  - : The default value. When used the metric value is obtained from the font file.
- `<percentage>`
  - : A {{cssxref("&lt;percentage&gt;")}} value.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Overriding metrics of a fallback font

The `line-gap-override` property can help when overriding the metrics of a fallback font to better match those of a primary web font.

```css
@font-face {
  font-family: web-font;
  src: url("https://example.com/font.woff");
}

@font-face {
  font-family: local-font;
  src: local(Local Font);
  line-gap-override: 125%;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("@font-face/descent-override", "descent-override")}}
- {{cssxref("@font-face/font-display", "font-display")}}
- {{cssxref("@font-face/font-family", "font-family")}}
- {{cssxref("@font-face/font-weight", "font-weight")}}
- {{cssxref("@font-face/font-style", "font-style")}}
- {{cssxref("@font-face/font-stretch", "font-stretch")}}
- {{cssxref("font-feature-settings", "font-feature-settings")}}
- {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}
- {{cssxref("@font-face/line-gap-override", "line-gap-override")}}
- {{cssxref("@font-face/src", "src")}}
- {{cssxref("@font-face/size-adjust", "size-adjust")}}
- {{cssxref("@font-face/unicode-range", "unicode-range descriptor")}}
