---
title: descent-override
slug: Web/CSS/@font-face/descent-override
tags:
  - '@font-face'
  - At-rule descriptor
  - CSS
  - Reference
  - descriptor
  - descent-override
browser-compat: css.at-rules.font-face.descent-override
---
{{CSSRef}}

The **`descent-override`** CSS descriptor defines the descent metric for the font. The descent metric is the height below the baseline that CSS uses to lay out line boxes in an inline formatting context.

## Syntax

```css
descent-override: normal;
descent-override: 90%;
```

### Values

- `normal`
  - : The default value. When used the metric value is obtained from the font file.
- `<percentage>`
  - : A {{cssxref("&lt;percentage&gt;")}} value.

## Formal definition

{{cssinfo}}

## Formal syntax

```
normal | <percentage>
```

## Examples

### Overriding metrics of a fallback font

The `descent-override` property can help when overriding the metrics of a fallback font to better match those of a primary web font.

```css
@font-face {
  font-family: web-font;
  src: url("https://example.com/font.woff");
}

@font-face {
  font-family: local-font;
  src: local(Local Font);
  descent-override: 125%;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("@font-face/ascent-override", "ascent-override")}}
- {{cssxref("@font-face/font-display", "font-display")}}
- {{cssxref("@font-face/font-family", "font-family")}}
- {{cssxref("@font-face/font-weight", "font-weight")}}
- {{cssxref("@font-face/font-style", "font-style")}}
- {{cssxref("@font-face/font-stretch", "font-stretch")}}
- {{cssxref("@font-face/font-variant", "font-variant")}}
- {{cssxref("font-feature-settings", "font-feature-settings")}}
- {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}
- {{cssxref("@font-face/line-gap-override", "line-gap-override")}}
- {{cssxref("@font-face/src", "src")}}
- {{cssxref("@font-face/size-adjust", "size-adjust")}}
- {{cssxref("@font-face/unicode-range", "unicode-range descriptor")}}
