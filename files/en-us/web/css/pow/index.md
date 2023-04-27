---
title: pow()
slug: Web/CSS/pow
page-type: css-function
browser-compat: css.types.pow
---

{{CSSRef}}

The **`pow()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/CSS_Functions) is an exponential function that returns the value of a base raised to the power of a number.

The {{CSSxRef("exp")}} function is a special case of `pow()` where the value of the base is the mathematical constant [e](<https://en.wikipedia.org/wiki/E_(mathematical_constant)>).

## Syntax

```css
/* A <number> value */
width: calc(10px * pow(5, 2)); /* 10px * 25 = 250px */
width: calc(10px * pow(5, 3)); /* 10px * 125 = 1250px */
width: calc(10px * pow(2, 10)); /* 10px * 1024 = 10240px */
```

### Parameters

The `pow(base, number)` function accepts two comma-separated values as its parameters.

- `base`
  - : A calculation that resolves to a {{CSSxRef("&lt;number&gt;")}}, representing the base.
- `number`
  - : A calculation that resolves to a {{CSSxRef("&lt;number&gt;")}}, representing the exponent.

### Return value

Returns a {{CSSxRef("&lt;number&gt;")}} representing base<sup>number</sup>, that is, `base` raised to the power of `number`.

## Formal syntax

{{CSSSyntax}}

## Examples

### Scale headings by fixed ratio

The `pow()` function can be useful for strategies like CSS Modular Scale, which relates all the font-sizes on a page to each other by a fixed ratio.

#### HTML

```html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
```

#### CSS

```css
h1 {
  font-size: calc(1rem * pow(1.5, 4));
}
h2 {
  font-size: calc(1rem * pow(1.5, 3));
}
h3 {
  font-size: calc(1rem * pow(1.5, 2));
}
h4 {
  font-size: calc(1rem * pow(1.5, 1));
}
h5 {
  font-size: calc(1rem * pow(1.5, 0));
}
h6 {
  font-size: calc(1rem * pow(1.5, -1));
}
```

#### Result

{{EmbedLiveSample('Scale headings by fixed ratio', '100%', '300px')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{CSSxRef("sqrt")}}
- {{CSSxRef("hypot")}}
- {{CSSxRef("exp")}}
- {{CSSxRef("log")}}
