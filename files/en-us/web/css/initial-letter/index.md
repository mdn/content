---
title: initial-letter
slug: Web/CSS/initial-letter
page-type: css-property
status:
  - experimental
browser-compat: css.properties.initial-letter
---

{{CSSRef}}{{SeeCompatTable}}

The `initial-letter` CSS property sets styling for dropped, raised, and sunken initial letters.

```css
/* Keyword values */
initial-letter: normal;

/* Numeric values */
initial-letter: 1.5; /* Initial letter occupies 1.5 lines */
initial-letter: 3; /* Initial letter occupies 3 lines */
initial-letter: 3 2; /* Initial letter occupies 3 lines and
                           sinks 2 lines */

/* Global values */
initial-letter: inherit;
initial-letter: initial;
initial-letter: revert;
initial-letter: revert-layer;
initial-letter: unset;
```

## Syntax

The keyword value `normal`, or a `<number>` optionally followed by an `<integer>`.

### Values

- `normal`
  - : No special initial-letter effect. Text behaves as normal.
- `<number>`
  - : Defines the size of the initial letter, in terms of how many lines it occupies. Negative values are not allowed.
- `<integer>`
  - : Defines the number of lines the initial letter should sink when the size of it is given. Values must be greater than zero. If omitted, it duplicates the size value, floored to the nearest positive whole number.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting initial letter size

#### HTML

```html
<p class="normal">Initial letter is normal</p>
<p class="onefive">Initial letter occupies 1.5 lines</p>
<p class="three">Initial letter occupies 3 lines</p>
```

#### CSS

```css
.normal::first-letter {
  -webkit-initial-letter: normal;
  initial-letter: normal;
}

.onefive::first-letter {
  -webkit-initial-letter: 1.5;
  initial-letter: 1.5;
}

.three::first-letter {
  -webkit-initial-letter: 3;
  initial-letter: 3;
}
```

#### Result

{{EmbedLiveSample('Setting_initial_letter_size', 250, 180)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("initial-letter-align")}}
- [Drop caps in CSS](https://www.oddbird.net/2017/01/03/initial-letter/)
