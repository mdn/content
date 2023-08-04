---
title: text-combine-upright
slug: Web/CSS/text-combine-upright
page-type: css-property
browser-compat: css.properties.text-combine-upright
---

{{CSSRef}}

The **`text-combine-upright`** [CSS](/en-US/docs/Web/CSS) property sets the combination of characters into the space of a single character. If the combined text is wider than 1em, the user agent must fit the contents within 1em. The resulting composition is treated as a single upright glyph for layout and decoration. This property only has an effect in vertical writing modes.

This is used to produce an effect that is known as tate-chū-yoko <q lang="ja">縦中横</q> in Japanese, or as <q lang="zh-Hant">橫向文字</q> in Chinese.

{{EmbedInteractiveExample("pages/css/text-combine-upright.html")}}

## Syntax

```css
/* Keyword values */
text-combine-upright: none;
text-combine-upright: all;

/* Digits values */
text-combine-upright: digits; /* fits 2 consecutive digits horizontally inside vertical text */
text-combine-upright: digits 4; /* fits up to 4 consecutive digits horizontally inside vertical text */

/* Global values */
text-combine-upright: inherit;
text-combine-upright: initial;
text-combine-upright: revert;
text-combine-upright: revert-layer;
text-combine-upright: unset;
```

### Values

- `none`
  - : There is no special processing.
- `all`
  - : Attempts to typeset all consecutive characters within the box horizontally, such that they take up the space of a single character within the vertical line of the box.
- `digits <integer>?`
  - : Attempts to display a sequence of consecutive ASCII digits (U+0030–U+0039) that has as many or fewer characters than the specified integer, such that it takes up the space of a single character within the vertical line box. If the integer is omitted, it computes to 2. Integers outside the range of 2-4 are invalid.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Using 'all' with horizontal text

The all value requires markup around every piece of horizontal text, but it is currently supported by more browsers than the digits value.

#### HTML

```html
<p lang="zh-Hant">
  民國<span class="num">105</span>年<span class="num">4</span>月<span
    class="num"
    >29</span
  >日
</p>
```

#### CSS

```css
html {
  writing-mode: vertical-rl;
  font: 24px serif;
}
.num {
  text-combine-upright: all;
}
```

#### Results

{{EmbedLiveSample('Example using "all"', 250, 200)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("writing-mode")}}, {{cssxref("text-orientation")}}
