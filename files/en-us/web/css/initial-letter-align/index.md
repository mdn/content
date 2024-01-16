---
title: initial-letter-align
slug: Web/CSS/initial-letter-align
page-type: css-property
status:
  - experimental
browser-compat: css.properties.initial-letter-align
---

{{CSSRef}}{{SeeCompatTable}}

The **`initial-letter-align`** CSS property specifies the alignment of initial letters within a paragraph.

## Syntax

```css
/* Keyword values */
initial-letter-align: auto;
initial-letter-align: alphabetic;
initial-letter-align: hanging;
initial-letter-align: ideographic;

/* Global values */
initial-letter-align: inherit;
initial-letter-align: initial;
initial-letter-align: revert;
initial-letter-align: revert-layer;
initial-letter-align: unset;
```

One of the keyword values listed below.

### Values

- `auto`
  - : The user agent selects the value which corresponds to the language of the text. Western languages would default to alphabetic, CJK languages to ideographic, and some Indic languages to hanging.
- `alphabetic`
  - : As described above, the cap height of the initial letter aligns with the cap height of the first line of text. The baseline of the initial letter aligns with the baseline of the Nth text baseline.
- `hanging`
  - : The hanging baseline of the initial letter aligns with the hanging baseline of the first line of text.
- `ideographic`
  - : The initial letter is centered in the N-line area.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Aligning initial letter

#### HTML

```html
<p class="auto ">Initial letter - auto</p>
<p class="alphabetic">Initial letter - alphabetic</p>
<p class="hanging">Initial letter - hanging</p>
<p class="ideographic">Initial letter - ideographic</p>
```

#### CSS

```css
.auto::first-letter {
  -webkit-initial-letter-align: auto;
  initial-letter-align: auto;
}

.alphabetic::first-letter {
  -webkit-initial-letter-align: alphabetic;
  initial-letter-align: alphabetic;
}

.hanging::first-letter {
  -webkit-initial-letter-align: hanging;
  initial-letter-align: hanging;
}

.ideographic::first-letter {
  -webkit-initial-letter-align: ideographic;
  initial-letter-align: ideographic;
}
```

#### Result

{{EmbedLiveSample('Aligning_initial_letter')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("initial-letter")}}
- [Drop caps in CSS](https://www.oddbird.net/2017/01/03/initial-letter/)
