---
title: initial-letter
slug: Web/CSS/initial-letter
page-type: css-property
browser-compat: css.properties.initial-letter
---

{{CSSRef}}

The `initial-letter` CSS property sets the size and sink for dropped, raised, and sunken initial letters. This property applies to {{cssxref("::first-letter")}} pseudo-elements and inline-level first children of block containers.

## Syntax

```css
/* Keyword values */
initial-letter: normal;

/* One value */
initial-letter: 3; /* 3 lines tall, baseline at line 3 */
initial-letter: 1.5; /* 1.5 lines tall, baseline at line 2 */

/* Two values */
initial-letter: 3 2; /* 3 lines tall, baseline at line 2 (raised 1 line) */
initial-letter: 3 1; /* 3 lines tall, baseline unchanged (raised 2 lines) */

/* Global values */
initial-letter: inherit;
initial-letter: initial;
initial-letter: revert;
initial-letter: revert-layer;
initial-letter: unset;
```

### Values

The keyword value `normal`, or a `<number>` optionally followed by an `<integer>`.

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

p {
  outline: 1px dashed red;
}
```

#### Result

{{EmbedLiveSample('Setting_initial_letter_size', 250, 180)}}

### Setting the sink value

In this example, all the initial letters are the same size, but with different sink values.

#### HTML

```html
<p class="four">Initial letter: Sink value = 4</p>
<p class="same">Initial letter: Sink value not declared (same as size)</p>
<p class="two">Initial letter: Sink value = 2</p>
<p class="one">Initial letter: Sink value = 1</p>
```

#### CSS

```css
.four::first-letter {
  -webkit-initial-letter: 3 4;
  initial-letter: 3 4;
}

.same::first-letter {
  -webkit-initial-letter: 3;
  initial-letter: 3;
}

.two::first-letter {
  -webkit-initial-letter: 3 2;
  initial-letter: 3 2;
}

.one::first-letter {
  -webkit-initial-letter: 3 1;
  initial-letter: 3 1;
}

p {
  outline: 1px dashed red;
}
```

#### Result

{{EmbedLiveSample('Setting_the_sink_value', 250, 240)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("::first-letter")}}
- {{cssxref(":first-child")}}
- [Drop caps in CSS](https://www.oddbird.net/2017/01/03/initial-letter/) via Oddbird (2017)
