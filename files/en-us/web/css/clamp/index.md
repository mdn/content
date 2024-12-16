---
title: clamp()
slug: Web/CSS/clamp
page-type: css-function
browser-compat: css.types.clamp
---

{{CSSRef}}

The **`clamp()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/CSS_Functions) clamps a middle value within a range of values between a defined minimum bound and a maximum bound. The function takes three parameters: a minimum value, a preferred value, and a maximum allowed value.

{{EmbedInteractiveExample("pages/css/function-clamp.html")}}

Note that using `clamp()` for font sizes, as in these examples, allows you to set a font-size that grows with the size of the viewport, but doesn't go below a minimum font-size or above a maximum font-size. It has the same effect as the code in [Fluid Typography](https://css-tricks.com/snippets/css/fluid-typography/) but in one line, and without the use of media queries.

## Syntax

```css
/* Static values */
width: clamp(200px, 40%, 400px);
width: clamp(20rem, 30vw, 70rem);
width: clamp(10vw, 20em, 100vw);

/* Calculated values */
width: clamp(min(10vw, 20rem), 300px, max(90vw, 55rem));
width: clamp(100px, calc(30% / 2rem + 10px), 900px);
```

### Parameters

The `clamp(min, val, max)` function accepts three comma-separated expressions as its parameters.

- `min`

  - : The minimum value is the smallest (most negative) value. This is the lower bound in the range of allowed values. If the preferred value is less than this value, the minimum value will be used.

- `val`

  - : The preferred value is the expression whose value will be used as long as the result is between the minimum and maximum values.

- `max`
  - : The maximum value is the largest (most positive) expression value to which the value of the property will be assigned if the preferred value is greater than this upper bound.

The expressions can be math functions (see {{CSSxRef("calc", "calc()")}} for more information), literal values, other expressions that evaluate to a valid argument type (like {{CSSxRef("&lt;length&gt;")}}), or nested {{CSSxRef("min", "min()")}} and {{CSSxRef("max", "max()")}} functions. For math expressions, you can use addition, subtraction, multiplication, and division without using the `calc()` function itself. You may also use parentheses to establish computation order when needed.

You can use different units for each value in your expressions and different units in any math function making up any of the arguments.

Keep the following aspects in mind while working with the function:

- Math expressions involving percentages for widths and heights on table columns, table column groups, table rows, table row groups, and table cells in both auto and fixed layout tables _may_ be treated as if `auto` had been specified.
- It is permitted to nest `max()` and `min()` functions as expression values, in which case the inner ones are treated as simple parentheses. The expressions are full math expressions, so you can use direct addition, subtraction, multiplication and division without using the calc() function itself.
- The expression can be values combining the addition ( `+` ), subtraction ( `-` ), multiplication ( `*` ) and division ( `/` ) operators, using standard operator precedence rules. Make sure to put a space on each side of the `+` and `-` operands. The operands in the expression may be any {{CSSxRef("&lt;length&gt;")}} syntax value. You can use different units for each value in your expression. You may also use parentheses to establish computation order when needed.
- Oftentimes you will want to use {{CSSxRef("min", "min()")}} and {{CSSxRef("max", "max()")}} within a `clamp()` function.

### Return value

`clamp(MIN, VAL, MAX)` is resolved as `{{CSSxRef("max", "max")}}(MIN, {{CSSxRef("min", "min")}}(VAL, MAX))`.

Based on the provided parameters, the function returns {{CSSxRef("&lt;length&gt;")}}, {{CSSxRef("&lt;frequency&gt;")}}, {{CSSxRef("&lt;angle&gt;")}}, {{CSSxRef("&lt;time&gt;")}}, {{CSSxRef("&lt;percentage&gt;")}}, {{CSSxRef("&lt;number&gt;")}}, or {{CSSxRef("&lt;integer&gt;")}}.

## Formal syntax

{{CSSSyntax}}

## Examples

### min(), max(), and clamp() comparison

In this example we have a web page that uses {{CSSxRef("min", "min()")}}, {{CSSxRef("max", "max()")}}, and `clamp()` to set sizes responsively.

The example adjusts the sizes of page elements in three ways:

- the lengths of the lines of text
- the font size of paragraph text
- the font size of heading text

In all three cases, the page uses a combination of a viewport-relative units ([`vw`](/en-US/docs/Web/CSS/length#vw) and {{cssxref("percentage")}}), to set a size that varies with the viewport width, and a value that is not viewport relative ([`rem`](/en-US/docs/Web/CSS/length#rem) and [`px`](/en-US/docs/Web/CSS/length#px)) to implement minimum and/or maximum sizes.

The example is at <https://mdn.github.io/css-examples/min-max-clamp/>. Open it in a new window and try adjusting the window width.

The **line length** (controlled by the [`width`](/en-US/docs/Web/CSS/width) of the [`<body>`](/en-US/docs/Web/HTML/Element/body) element) will increase as the window width increases, but only up to a certain point (`1000px`), and beyond that point, it won't increase anymore. We're using `min()` to set a **maximum line length**: it can go under `1000px`, but won't go over. This is helpful because long lines are harder to read, so we often want to limit how long a line can be. To achieve this we use `min(1000px, calc(70% + 100px))`: when the result of the percentage-based calculation goes above `1000px`, we switch to the fixed `1000px` value.

The **size of the paragraph text**, controlled by the [`font-size`](/en-US/docs/Web/CSS/font-size) of the [`<p>`](/en-US/docs/Web/HTML/Element/p) element, decreases as the window gets narrower, but only up to a certain point, and beyond that point (the point where `1.2vw` is less than `1.2rem`) it doesn't get any smaller: it stays at `1.2rem`. We're using `max()` to set a **minimum font size**: the font can grow above `1.2rem` but will never go below it. This is helpful because really small text is hard to read. To achieve this we use `max(1.2rem, 1.2vw)`. This means that the `font-size` will be set at `1.2rem`, unless the computed value of `1.2vw` is greater than that of `1.2rem`, in which case it will be set to `1.2vw` instead.

The **size of the heading text**, controlled by the [`font-size`](/en-US/docs/Web/CSS/font-size) of the [`<h1>`](/en-US/docs/Web/HTML/Element/Heading_Elements) element, has a viewport-relative value with both a maximum and a minimum threshold. To achieve this we use `clamp(1.8rem, 2.5vw, 2.8rem)`. The viewport-relative value is `2.5vw` but it is clamped between `1.8rem` and `2.8rem`, so:

- if the calculated value of `2.5vw` is less than `1.8rem`, then `1.8rem` will be used
- if the calculated value of `2.5vw` is greater than `2.8rem`, then `2.8rem` will be used.

This prevents the heading text from getting too small in a very narrow window, or too big in a very wide window.

#### HTML

```html
<h1>Simple responsive test</h1>
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In orci orci,
  eleifend id risus nec, mattis rutrum velit. Suspendisse fringilla egestas erat
  eu convallis. Phasellus eu velit ut magna dapibus elementum cursus at ligula.
  Ut tempus varius nibh, nec auctor sapien iaculis sit amet. Fusce iaculis,
  libero quis elementum viverra, nulla ante accumsan lectus, sit amet convallis
  lacus ipsum vel est. Curabitur et urna non est consectetur pulvinar vel id
  risus. Ut vestibulum, sem in semper aliquet, felis arcu euismod sapien, ac
  imperdiet massa nisl quis sem. Vestibulum ac elementum felis, in tempor velit.
  Pellentesque purus ex, mattis at ornare quis, porta condimentum mi. Donec
  vestibulum ligula vel nulla blandit, quis euismod nulla vestibulum.
  Suspendisse potenti. Nunc neque mauris, tempor sed facilisis at, ultrices eget
  nulla. Pellentesque convallis ante nec augue porttitor, id tempus ante luctus.
</p>

<p>
  Integer rutrum sollicitudin tellus, quis cursus nulla scelerisque nec. Nunc eu
  facilisis lorem. Maecenas faucibus sapien eleifend, semper tellus at, pharetra
  quam. Cras feugiat vulputate tortor at rhoncus. Class aptent taciti sociosqu
  ad litora torquent per conubia nostra, per inceptos himenaeos. Nam non felis
  quis sem lobortis sodales vel id libero. Phasellus sit amet placerat lorem.
</p>
```

#### CSS

```css
html {
  font-family: sans-serif;
}

body {
  margin: 0 auto;
  width: min(1000px, calc(70% + 100px));
}

h1 {
  letter-spacing: 2px;
  font-size: clamp(1.8rem, 2.5vw, 2.8rem);
}

p {
  line-height: 1.5;
  font-size: max(1.2rem, 1.2vw);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{CSSxRef("calc", "calc()")}}
- {{CSSxRef("max", "max()")}}
- {{CSSxRef("min", "min()")}}
- [Learn: CSS Values and units](/en-US/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
