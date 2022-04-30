---
title: text-emphasis
slug: Web/CSS/text-emphasis
tags:
  - CSS
  - CSS Property
  - CSS Text Decoration
  - Reference
  - recipe:css-shorthand-property
browser-compat: css.properties.text-emphasis
---
{{CSSRef}}

The **`text-emphasis`** [CSS](/en-US/docs/Web/CSS) property applies emphasis marks to text (except spaces and control characters). It is a [shorthand](/en-US/docs/Web/CSS/Shorthand_properties) for {{cssxref("text-emphasis-style")}} and {{cssxref("text-emphasis-color")}}.

{{EmbedInteractiveExample("pages/css/text-emphasis.html")}}

The `text-emphasis` property is quite different from {{cssxref("text-decoration")}}. The `text-decoration` property does not inherit, and the decoration specified is applied across the whole element. However, text-emphasis does inherit, which means it is possible to change emphasis marks for descendants.

The size of the emphasis symbol, like ruby symbols, is about 50% of the size of the font, and `text-emphasis` may affect line height when the current leading is not enough for the marks.

> **Note:** `text-emphasis` doesn't reset the value of {{cssxref("text-emphasis-position")}}. This is because if the style and the color of emphasis marks may vary in a text, it is extremely unlikely that their position will. In the very rare cases when this is needed, use the property {{cssxref("text-emphasis-position")}}.

## Constituent properties

This property is a shorthand for the following CSS properties:

- [`text-emphasis-color`](/en-US/docs/Web/CSS/text-emphasis-color)
- [`text-emphasis-style`](/en-US/docs/Web/CSS/text-emphasis-style)

## Syntax

```css
/* Initial value */
text-emphasis: none; /* No emphasis marks */

/* <string> value */
text-emphasis: 'x';
text-emphasis: '点';
text-emphasis: '\25B2';
text-emphasis: '*' #555;
text-emphasis: 'foo'; /* Should NOT use. It may be computed to or rendered as 'f' only */

/* Keywords value */
text-emphasis: filled;
text-emphasis: open;
text-emphasis: filled sesame;
text-emphasis: open sesame;

/* Keywords value combined with a color */
text-emphasis: filled sesame #555;

/* Global values */
text-emphasis: inherit;
text-emphasis: initial;
text-emphasis: revert;
text-emphasis: revert-layer;
text-emphasis: unset;
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
  - : Display large circles as marks. The filled circle is `'●'` (`U+25CF`), and the open circle is `'○'` (`U+25CB`). This is the default shape in horizontal writing modes when no other shape is given.
- `double-circle`
  - : Display double circles as marks. The filled double-circle is `'◉'` (`U+25C9`), and the open double-circle is `'◎'` (`U+25CE`).
- `triangle`
  - : Display triangles as marks. The filled triangle is `'▲'` (`U+25B2`), and the open triangle is `'△'` (`U+25B3`).
- `sesame`
  - : Display sesames as marks. The filled sesame is `'﹅'` (`U+FE45`), and the open sesame is `'﹆'` (`U+FE46`). This is the default shape in vertical writing modes when no other shape is given.
- `<string>`
  - : Display the given string as marks. Authors should not specify more than one _character_ in `<string>`. The UA may truncate or ignore strings consisting of more than one grapheme cluster.
- `<color>`
  - : Defines the color of the mark. If no color is present, it defaults to `currentcolor`.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### A heading with emphasis shape and color

This example draws a heading with triangles used to emphasize each character.

#### CSS

```css
h2 {
  text-emphasis: triangle #D55;
}
```

#### HTML

```html
<h2>This is important!</h2>
```

#### Result

{{EmbedLiveSample("A_heading_with_emphasis_shape_and_color", 500, 90)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The longhand properties {{cssxref('text-emphasis-style')}}, {{cssxref('text-emphasis-color')}}.
- The {{cssxref('text-emphasis-position')}} property allowing to define the position of the emphasis marks.
