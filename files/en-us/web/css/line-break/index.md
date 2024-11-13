---
title: line-break
slug: Web/CSS/line-break
page-type: css-property
browser-compat: css.properties.line-break
---

{{CSSRef}}

The **`line-break`** [CSS](/en-US/docs/Web/CSS) property sets how to break lines of Chinese, Japanese, or Korean (CJK) text when working with punctuation and symbols.

{{EmbedInteractiveExample("pages/css/line-break.html")}}

## Syntax

```css
/* Keyword values */
line-break: auto;
line-break: loose;
line-break: normal;
line-break: strict;
line-break: anywhere;

/* Global values */
line-break: inherit;
line-break: initial;
line-break: revert;
line-break: revert-layer;
line-break: unset;
```

### Values

- `auto`
  - : Break text using the default line break rule.
- `loose`
  - : Break text using the least restrictive line break rule. Typically used for short lines, such as in newspapers.
- `normal`
  - : Break text using the most common line break rule.
- `strict`
  - : Break text using the most stringent line break rule.
- `anywhere`
  - : There is a soft wrap opportunity around every typographic character unit, including around any punctuation character or preserved white spaces, or in the middle of words, disregarding any prohibition against line breaks, even those introduced by characters with the GL, WJ, or ZWJ character class or mandated by the {{cssxref("word-break")}} property. The different wrapping opportunities must not be prioritized. Hyphenation is not applied.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting text wrapping

See whether the text is wrapped before "々", "ぁ" and "。".

#### HTML

```html
<div lang="ja">
  <p class="wrap-box auto">
    auto:<br />そこは湖のほとりで木々が輝いていた。<br />その景色に、美しいなぁと思わずつぶやいた。
  </p>
  <p class="wrap-box loose">
    loose:<br />そこは湖のほとりで木々が輝いていた。<br />その景色に、美しいなぁと思わずつぶやいた。
  </p>
  <p class="wrap-box normal">
    normal:<br />そこは湖のほとりで木々が輝いていた。<br />その景色に、美しいなぁと思わずつぶやいた。
  </p>
  <p class="wrap-box strict">
    strict:<br />そこは湖のほとりで木々が輝いていた。<br />その景色に、美しいなぁと思わずつぶやいた。
  </p>
  <p class="wrap-box anywhere">
    anywhere:<br />そこは湖のほとりで木々が輝いていた。<br />その景色に、美しいなぁと思わずつぶやいた。
  </p>
</div>
```

#### CSS

```css
.wrap-box {
  width: 10em;
  margin: 0.5em;
  white-space: normal;
  vertical-align: top;
  display: inline-block;
}
.auto {
  line-break: auto;
}
.loose {
  line-break: loose;
}
.normal {
  line-break: normal;
}
.strict {
  line-break: strict;
}
.anywhere {
  line-break: anywhere;
}
```

#### Result

{{ EmbedLiveSample('Setting_text_wrapping', 200, 400) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS and international text](https://www.w3.org/International/articles/css3-text/) on W3C
