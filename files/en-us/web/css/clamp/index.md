---
title: clamp()
slug: Web/CSS/clamp
tags:
  - CSS
  - CSS Function
  - Calculate
  - Compute
  - Function
  - Layout
  - Reference
  - Web
  - clamp
browser-compat: css.types.clamp
---
{{CSSRef}}

The **`clamp()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/CSS_Functions) clamps a value between an upper and lower bound. `clamp()` enables selecting a middle value within a range of values between a defined minimum and maximum. It takes three parameters: a minimum value, a preferred value, and a maximum allowed value. The `clamp()` function can be used anywhere a {{CSSxRef("&lt;length&gt;")}}, {{CSSxRef("&lt;frequency&gt;")}}, {{CSSxRef("&lt;angle&gt;")}}, {{CSSxRef("&lt;time&gt;")}}, {{CSSxRef("&lt;percentage&gt;")}}, {{CSSxRef("&lt;number&gt;")}}, or {{CSSxRef("&lt;integer&gt;")}} is allowed.

`clamp(MIN, VAL, MAX)` is resolved as `{{CSSxRef("max", "max()")}}(MIN, {{CSSxRef("min", "min()")}}(VAL, MAX))`.

{{EmbedInteractiveExample("pages/css/function-clamp.html")}}

Note that using `clamp()` for font sizes, as in these examples, allows you to set a font-size that grows with the size of the viewport, but doesn't go below a minimum font-size or above a maximum font-size. It has the same effect as the code in [Fluid Typography](https://css-tricks.com/snippets/css/fluid-typography/) but in one line, and without the use of media queries.

## Syntax

The `clamp()` function takes three comma separated expressions as its parameters, in the order of minimum value, preferred value, and maximum value.

The minimum value is the smallest (most negative) value. This is the lower bound in the range of allowed values. If the preferred value is less than this value, the minimum value will be used.

The preferred value is the expression whose value will be used as long as the result is between the minimum and maximum values.

The maximum value is the largest (most positive) expression value to which the value of the property will be assigned if the preferred value is greater than this upper bound.

The expressions can be math functions (see {{CSSxRef("calc", "calc()")}} for more information), literal values, other expressions that evaluate to a valid argument type (like {{CSSxRef("&lt;length&gt;")}}), or nested {{CSSxRef("min", "min()")}} and {{CSSxRef("max", "max()")}} functions. For math expressions, you can use addition, subtraction, multiplication, and division without using the `calc()` function itself. You may also use parentheses to establish computation order when needed.

You can use different units for each value in your expressions and different units in any math function making up any of the arguments.

### Notes

- Math expressions involving percentages for widths and heights on table columns, table column groups, table rows, table row groups, and table cells in both auto and fixed layout tables _may_ be treated as if `auto` had been specified.
- It is permitted to nest `max()` and `min()` functions as expression values, in which case the inner ones are treated as simple parentheses. The expressions are full math expressions, so you can use direct addition, subtraction, multiplication and division without using the calc() function itself.
- The expression can be values combining the addition ( + ), subtraction ( - ), multiplication ( \* ) and division ( / ) operators, using standard operator precedence rules. Make sure to put a space on each side of the + and - operands. The operands in the expression may be any {{CSSxRef("&lt;length&gt;")}} syntax value. You can use different units for each value in your expression. You may also use parentheses to establish computation order when needed.
- Oftentimes you will want to use {{CSSxRef("min", "min()")}} and {{CSSxRef("max", "max()")}} within a `clamp()` function.

### Formal syntax

{{CSSSyntax}}

## Examples

### min, max, and clamp comparison

In this example we have a simple responsive example that makes use of {{CSSxRef("min", "min()")}}, {{CSSxRef("max", "max()")}}, and {{CSSxRef("clamp", "clamp()")}} for some of the sizes.

The [`<body>`](/en-US/docs/Web/HTML/Element/body) element's [`width`](/en-US/docs/Web/CSS/width) is set as `min(1000px, calc(70% + 100px))`. This means that the width will be set at `1000px`, unless the result of `calc(70% + 100px)` is less than `1000px`, in which case it will be set to that value instead. `min()` allows you set a maximum value.

The [`<p>`](/en-US/docs/Web/HTML/Element/p) element's [`font-size`](/en-US/docs/Web/CSS/font-size) is set as `max(1.2rem, 1.2vw)`. This means that the `font-size` will be set at `1.2rem`, unless the computed value of `1.2vw` is greater than that of `1.2rem`, in which case it will be set to that value instead. `max()` allows you set a minimum value, which in cases like this is useful for accessibility purposes.

The [`<h1>`](/en-US/docs/Web/HTML/Element/Heading_Elements) element's `font-size` is set as `clamp(1.8rem, 2.5vw, 2.8rem)`. This means that the `font-size` will be set at `1.8rem`, until the computed value of `2.5vw` becomes greater than that of `1.8rem`. At this point, `font-size` will be set at `2.5vw`, until `2.5vw`'s computed value becomes greater than that of `2.8rem`. At this point, the `font-size` will be set at `2.8rem`. `clamp()` allows you to set a minimum and maximum value.

You find this [example live on GitHub](https://mdn.github.io/css-examples/min-max-clamp/), if you want to play around with it.

#### HTML

```html
<h1>Simple responsive test</h1>
<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. In orci orci, eleifend id risus nec, mattis rutrum velit. Suspendisse fringilla egestas erat eu convallis. Phasellus eu velit ut magna dapibus elementum cursus at ligula. Ut tempus varius nibh, nec auctor sapien iaculis sit amet. Fusce iaculis, libero quis elementum viverra, nulla ante accumsan lectus, sit amet convallis lacus ipsum vel est. Curabitur et urna non est consectetur pulvinar vel id risus. Ut vestibulum, sem in semper aliquet, felis arcu euismod sapien, ac imperdiet massa nisl quis sem. Vestibulum ac elementum felis, in tempor velit. Pellentesque purus ex, mattis at ornare quis, porta condimentum mi. Donec vestibulum ligula vel nulla blandit, quis euismod nulla vestibulum. Suspendisse potenti. Nunc neque mauris, tempor sed facilisis at, ultrices eget nulla. Pellentesque convallis ante nec augue porttitor, id tempus ante luctus.</p>

<p>Integer rutrum sollicitudin tellus, quis cursus nulla scelerisque nec. Nunc eu facilisis lorem. Maecenas faucibus sapien eleifend, semper tellus at, pharetra quam. Cras feugiat vulputate tortor at rhoncus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam non felis quis sem lobortis sodales vel id libero. Phasellus sit amet placerat lorem. </p>
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
- [CSS Values](/en-US/docs/Learn/CSS/Building_blocks/Values_and_units)
