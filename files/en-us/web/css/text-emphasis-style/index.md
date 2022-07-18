---
title: text-emphasis-style
slug: Web/CSS/text-emphasis-style
tags:
  - CSS
  - CSS Property
  - CSS Text Decoration
  - Reference
  - recipe:css-property
browser-compat: css.properties.text-emphasis-style
---
{{CSSRef}}

The **`text-emphasis-style`** [CSS](/en-US/docs/Web/CSS) property sets the appearance of emphasis marks. It can also be set, and reset, using the {{cssxref("text-emphasis")}} shorthand.

{{EmbedInteractiveExample("pages/css/text-emphasis-style.html")}}

## Syntax

```css
/* Initial value */
text-emphasis-style: none; /* No emphasis marks */

/* <string> values */
text-emphasis-style: 'x';
text-emphasis-style: '点';
text-emphasis-style: '\25B2';
text-emphasis-style: '*';
text-emphasis-style: 'foo'; /* Should NOT be used. It may be computed to or rendered as 'f' only */

/* Keyword values */
text-emphasis-style: filled;
text-emphasis-style: open;
text-emphasis-style: dot;
text-emphasis-style: circle;
text-emphasis-style: double-circle;
text-emphasis-style: triangle;
text-emphasis-style: filled sesame;
text-emphasis-style: open sesame;

/* Global values */
text-emphasis-style: inherit;
text-emphasis-style: initial;
text-emphasis-style: revert;
text-emphasis-style: revert-layer;
text-emphasis-style: unset;
```

### Values

- `none`
  - : No emphasis marks.
- `filled`
  - : The shape is filled with solid color. If neither `filled` nor `open` is present, this is the default.
- `open`
  - : The shape is hollow.
- `dot`
  - : Display small circles as marks. The filled dot is `'•'` (`U+2022`), and the open dot is `'◦'` (`U+25E6`).
- `circle`
  - : Display large circles as marks. The filled circle is `'●'` (`U+25CF`), and the open circle is `'○'` (`U+25CB`).
- `double-circle`
  - : Display double circles as marks. The filled double-circle is `'◉'` (`U+25C9`), and the open double-circle is `'◎'` (`U+25CE`).
- `triangle`
  - : Display triangles as marks. The filled triangle is `'▲'` (`U+25B2`), and the open triangle is `'△'` (`U+25B3`).
- `sesame`
  - : Display sesames as marks. The filled sesame is `'﹅'` (`U+FE45`), and the open sesame is `'﹆'` (`U+FE46`).
- `<string>`
  - : Display the given string as marks. Authors should not specify more than one _character_ in `<string>`. The UA may truncate or ignore strings consisting of more than one grapheme cluster.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Basic example

```css
h2 {
  -webkit-text-emphasis-style: sesame;
  text-emphasis-style: sesame;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The related properties {{cssxref('text-emphasis-color')}}, {{cssxref('text-emphasis')}}.
- The {{cssxref('text-emphasis-position')}} property allowing to define the position of the emphasis marks.
