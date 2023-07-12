---
title: word-break
slug: Web/CSS/word-break
page-type: css-property
browser-compat: css.properties.word-break
---

{{CSSRef}}

The **`word-break`** [CSS](/en-US/docs/Web/CSS) property sets whether line breaks appear wherever the text would otherwise overflow its content box.

{{EmbedInteractiveExample("pages/css/word-break.html")}}

## Syntax

```css
/* Keyword values */
word-break: normal;
word-break: break-all;
word-break: keep-all;
word-break: break-word; /* deprecated */

/* Global values */
word-break: inherit;
word-break: initial;
word-break: revert;
word-break: revert-layer;
word-break: unset;
```

The `word-break` property is specified as a single keyword chosen from the list of values below.

### Values

- `normal`
  - : Use the default line break rule.
- `break-all`
  - : To prevent overflow, word breaks should be inserted between any two characters (excluding Chinese/Japanese/Korean text).
- `keep-all`
  - : Word breaks should not be used for Chinese/Japanese/Korean (CJK) text. Non-CJK text behavior is the same as for `normal`.
- `break-word` {{Deprecated_Inline}}
  - : Has the same effect as `overflow-wrap: anywhere` combined with `word-break: normal`, regardless of the actual value of the {{cssxref("overflow-wrap")}} property.

> **Note:** In contrast to `word-break: break-word` and `overflow-wrap: break-word` (see {{cssxref("overflow-wrap")}}), `word-break: break-all` will create a break at the exact place where text would otherwise overflow its container (even if putting an entire word on its own line would negate the need for a break).

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### HTML

```html
<p>1. <code>word-break: normal</code></p>
<p class="normal narrow">
  This is a long and Honorificabilitudinitatibus califragilisticexpialidocious
  Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu
  グレートブリテンおよび北アイルランド連合王国という言葉は本当に長い言葉
</p>

<p>2. <code>word-break: break-all</code></p>
<p class="breakAll narrow">
  This is a long and Honorificabilitudinitatibus califragilisticexpialidocious
  Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu
  グレートブリテンおよび北アイルランド連合王国という言葉は本当に長い言葉
</p>

<p>3. <code>word-break: keep-all</code></p>
<p class="keepAll narrow">
  This is a long and Honorificabilitudinitatibus califragilisticexpialidocious
  Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu
  グレートブリテンおよび北アイルランド連合王国という言葉は本当に長い言葉
</p>

<p>4. <code>word-break: break-word</code></p>
<p class="breakWord narrow">
  This is a long and Honorificabilitudinitatibus califragilisticexpialidocious
  Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu
  グレートブリテンおよび北アイルランド連合王国という言葉は本当に長い言葉
</p>
```

### CSS

```css
.narrow {
  padding: 10px;
  border: 1px solid;
  width: 500px;
  margin: 0 auto;
  font-size: 20px;
  line-height: 1.5;
  letter-spacing: 1px;
}

.normal {
  word-break: normal;
}

.breakAll {
  word-break: break-all;
}

.keepAll {
  word-break: keep-all;
}

.breakWord {
  word-break: break-word;
}
```

{{EmbedLiveSample('Examples', '100%', 600)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("overflow-wrap")}}
- {{cssxref("hyphens")}}
- {{cssxref("line-break")}}
- [Guide to wrapping and breaking text](/en-US/docs/Web/CSS/CSS_Text/Wrapping_Text)
