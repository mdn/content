---
title: sin()
slug: Web/CSS/Reference/Values/sin
page-type: css-function
browser-compat: css.types.sin
sidebar: cssref
---

The **`sin()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/Reference/Values/Functions) is a trigonometric function that returns the sine of a number, which is a value between `-1` and `1`. The function contains a single calculation that must resolve to either a {{cssxref("&lt;number&gt;")}} or an {{cssxref("&lt;angle&gt;")}} by interpreting the result of the argument as radians. That is, `sin(45deg)`, `sin(0.125turn)`, and `sin(3.14159 / 4)` all represent the same value, approximately `0.707`.

{{InteractiveExample("CSS Demo: sin()")}}

```css interactive-example-choice
transform: translateX(calc(cos(0deg) * 140px))
  translateY(calc(sin(0deg) * -140px));
```

```css interactive-example-choice
transform: translateX(calc(cos(90deg) * 140px))
  translateY(calc(sin(90deg) * -140px));
```

```css interactive-example-choice
transform: translateX(calc(cos(135deg) * 140px))
  translateY(calc(sin(135deg) * -140px));
```

```css interactive-example-choice
transform: translateX(calc(cos(180deg) * 140px))
  translateY(calc(sin(180deg) * -140px));
```

```css interactive-example-choice
transform: translateX(calc(cos(-45deg) * 140px))
  translateY(calc(sin(-45deg) * -140px));
```

```html interactive-example
<div class="circle">
  <span class="dot" id="example-element"></span>
</div>
```

```css interactive-example
:root {
  --radius: 140px;
  --dot-size: 10px;
}
.circle {
  display: grid;
  place-content: center;
  margin: 0 auto;
  width: calc(var(--radius) * 2);
  aspect-ratio: 1;
  border-radius: 50%;
  border: 2px solid #666666;
  background-image:
    radial-gradient(black var(--dot-size), transparent var(--dot-size)),
    linear-gradient(135deg, blue, deepskyblue, lightgreen, lavender, honeydew);
}
.dot {
  display: block;
  width: var(--dot-size);
  aspect-ratio: 1;
  border-radius: 50%;
  border: 2px solid #666666;
  background-color: #ff6666;
  transform: translateX(calc(cos(0deg) * var(--radius)))
    translateY(calc(sin(0deg) * var(--radius) * -1));
}
```

## Syntax

```css
/* Single <angle> values */
width: calc(100px * sin(45deg));
width: calc(100px * sin(0.25turn));
width: calc(100px * sin(1.0471967rad));

/* Single <number> values */
width: calc(100px * sin(63.673));
width: calc(100px * sin(2 * 0.125));

/* Other values */
width: calc(100px * sin(pi / 2));
width: calc(100px * sin(e / 4));
```

### Parameters

The `sin(angle)` function accepts only one value as its parameter.

- `angle`
  - : A calculation which resolves to a {{cssxref("&lt;number&gt;")}} or an {{cssxref("&lt;angle&gt;")}}. When specifying unitless numbers they are interpreted as a number of radians, representing an {{cssxref("&lt;angle&gt;")}}

### Return value

The sine of an `angle` will always return a number between `−1` and `1`.

- If `angle` is `infinity`, `-infinity`, or `NaN`, the result is `NaN`.
- If `angle` is `0⁻`, the result is `0⁻`.

## Formal syntax

{{CSSSyntax}}

## Examples

### Changing box sizes

In this example, `sin(30deg)` will return `0.5`, making the box have a `50px` width and a `50px` height.

```css
div {
  background-color: red;
  width: calc(sin(30deg) * 100px);
  height: calc(sin(30deg) * 100px);
}
```

### Controlling animation duration

Another use case is to control the {{cssxref("animation-duration")}}, reducing the duration based on the sine value. In this case, the animation duration will be `1s`.

```css
div {
  animation-name: myAnimation;
  animation-duration: calc(sin(0.25turn) * 1s);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{CSSxRef("cos")}}
- {{CSSxRef("tan")}}
- {{CSSxRef("asin")}}
- {{CSSxRef("acos")}}
- {{CSSxRef("atan")}}
- {{CSSxRef("atan2")}}
