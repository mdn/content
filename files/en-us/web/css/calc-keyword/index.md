---
title: <calc-keyword>
slug: Web/CSS/calc-keyword
page-type: css-type
browser-compat: css.types.calc-keyword
---

{{CSSRef}}

The **`<calc-keyword>`** [CSS](/en-US/docs/Web/CSS) [data type](/en-US/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) represents well-defined constants such as `e` and `pi`. Rather than require authors to manually type out several digits of these mathematical constants or calculate them, a few of them are provided directly by CSS for convenience.

## Syntax

The `<calc-keyword>` type defines numeric constants that can be used in [CSS math functions](/en-US/docs/Web/CSS/CSS_Functions#math_functions).

### Values

- `e`

  - : The base of the natural logarithm, approximately equal to `2.7182818284590452354`.

- `pi`

  - : The ratio of a circle's circumference to its diameter, approximately equal to `3.1415926535897932`.

- `infinity` & `-infinity`

  - : An infinite value, used to indicate the largest/smallest possible value.

- `NaN`

  - : A value representing "Not a Number" canonical casing.

### Notes

Serializing the arguments inside [`calc()`](/en-US/docs/Web/CSS/calc) follows the IEEE-754 standard for floating point math which means there's a few cases to be aware of regarding constants like `infinity` and `NaN`:

- Dividing by zero will return positive or negative `infinity` depending on the sign of the numerator.
- Adding, subtracting or multiplying `infinity` to anything will return `infinity` unless it produces `NaN` (see below).
- Any operation with at least one `NaN` argument will return `NaN`.
  This means `0 / 0`, `infinity / infinity`, `0 * infinity`, `infinity + (-infinity)`, and `infinity - infinity` will all return `NaN`.

- Positive and negative zero are possible values (`0⁺` and `0⁻`).
  This has the following effects:
  - Multiplication or division that produces zero with exactly one negative argument (`-5 * 0` or `1 / (-infinity)`) or negative result from combinations in the other math functions will return `0⁻`.
  - `0⁻ + 0⁻` or `0⁻ - 0` will return `0⁻`.
    All other additions or subtractions that would produce a zero will return `0⁺`.
  - Multiplying or dividing `0⁻` with a positive number (including `0⁺`) will return a negative result (either `0⁻` or `-infinity`), while multiplying or dividing `0⁻` with a negative number will return a positive result.

Examples of how these rules apply are shown in the [Infinity, NaN, and division by zero](#infinity_nan_and_division_by_zero) section.

> [!NOTE]
> It's rare to need to use `infinity` as an argument in `calc()`, but it can be used to avoid hardcoded "magic numbers" or making sure a certain value is always larger than another value.
> It may be useful if you need to make it obvious that a property has "the largest possible value" for that data type.

### Formal syntax

{{CSSSyntax}}

## Description

Mathematical constants can only be used inside [CSS math functions](/en-US/docs/Web/CSS/CSS_Functions#math_functions) for calculations. Math constants are not CSS keywords, but if they are used outside of a calculation, they're treated like any other keyword.
For example:

- `animation-name: pi;` refers to an animation named "pi", not the `pi` numeric constant.
- `line-height: e;` is invalid, but `line-height: calc(e);` is valid.
- `rotate(1rad * pi);` won't work because {{CSSxRef("transform-function/rotate", "rotate()")}} is not a math function. Use `rotate(calc(1rad * pi));`

In math functions, `<calc-keyword>` values are evaluated as {{CSSxRef("number")}} values, therefore `e` and `pi` act as numeric constants.

Both `infinity` and `NaN` are slightly different, they are considered as degenerate numeric constants.
While not technically numbers, they act as {{CSSxRef("number")}} values, so to get an infinite {{CSSxRef("length")}}, for example, requires an expression like `calc(infinity * 1px)`.

The `infinity` and `NaN` values are included mostly to make serialization simpler and more obvious, but can be used to indicate a "largest possible value", since an infinite value is clamped to the allowed range.
It's rare for this to be reasonable, but when using infinity its much simpler than just putting an enormous number in a stylesheet or hardcoding magic numbers.

All constants are case-insensitive except for `NaN`, which makes `calc(Pi)`, `calc(E)` and `calc(InFiNiTy)` valid:

```plain example-good
e
-e
E
pi
-pi
Pi
infinity
-infinity
InFiNiTy
NaN
```

The following are all invalid:

```plain example-bad
nan
Nan
NAN
```

## Examples

### Using e and pi in `calc()`

The following example shows how to use `e` inside `calc()` to rotate an element with an exponentially-increasing angle.
The second box shows how to use `pi` inside a [`sin()`](/en-US/docs/Web/CSS/sin) function.

```css hidden
#wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 200px;
}
.container > div {
  width: 100px;
  height: 100px;
  margin: 10px;
}

span {
  font-family: monospace;
  font-size: 0.8em;
}

#e {
  background-color: blue;
}

#pi {
  background-color: blue;
}
```

```html
<div id="wrapper">
  <div class="container">
    <div id="e"></div>
    <input type="range" min="0" max="7" step="0.01" value="0" id="e-slider" />
    <label for="e-slider">e:</label>
    <span id="e-value"></span>
  </div>
  <div class="container">
    <div id="pi"></div>
    <input type="range" min="0" max="1" step="0.01" value="0" id="pi-slider" />
    <label for="pi-slider">pi:</label>
    <span id="pi-value"></span>
  </div>
</div>
```

```js
// sliders
const eInput = document.querySelector("#e-slider");
const piInput = document.querySelector("#pi-slider");
// spans for displaying values
const eValue = document.querySelector("#e-value");
const piValue = document.querySelector("#pi-value");

eInput.addEventListener("input", function () {
  e.style.transform = "rotate(calc(1deg * pow(" + this.value + ", e)))";
  eValue.textContent = e.style.transform;
});

piInput.addEventListener("input", function () {
  pi.style.rotate = "calc(sin(" + this.value + " * pi) * 100deg)";
  piValue.textContent = pi.style.rotate;
});
```

{{EmbedLiveSample('Using_e_and_pi_in_calc', 'auto', '200')}}

### Infinity, NaN, and division by zero

The following example shows the computed value of the `width` property when dividing by zero, followed by how serialization with different `calc()` constants look when viewed in the console:

```html
<div></div>
```

```css
div {
  height: 50px;
  background-color: red;
  width: calc(1px / 0);
}
```

```js
const div = document.querySelector("div");
console.log(div.offsetWidth); // 17895698 (infinity clamped to largest value for width)

function logSerializedWidth(value) {
  div.style.width = value;
  console.log(div.style.width);
}

logSerializedWidth("calc(1px / 0)"); // calc(infinity * 1px)
logSerializedWidth("calc(1px / -0)"); // calc(-infinity * 1px)

logSerializedWidth("calc(1px * -infinity * -infinity)"); // calc(infinity * 1px)
logSerializedWidth("calc(1px * -infinity * infinity)"); // calc(-infinity * 1px)

logSerializedWidth("calc(1px * (NaN + 1))"); // calc(NaN * 1px)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{CSSxRef("&lt;calc-sum&gt;")}}
- {{CSSxRef("&lt;calc-product&gt;")}}
- {{CSSxRef("&lt;calc-value&gt;")}}
