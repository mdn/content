---
title: round()
slug: Web/CSS/round
page-type: css-function
browser-compat: css.types.round
---

{{CSSRef}}

The **`round()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/CSS_Functions) returns a rounded number based on a selected rounding strategy.

Authors should use a [custom CSS property](/en-US/docs/Web/CSS/--*) (e.g., `--my-property`) for the rounding value, interval, or both; using the `round()` function is redundant if these have known values.

## Syntax

```css
width: round(var(--width), 50px);
width: round(up, 101px, var(--interval));
width: round(down, var(--height), var(--interval));
margin: round(to-zero, -105px, 10px);
```

### Parameters

The `round(<rounding-strategy>, valueToRound, roundingInterval)` function specifies an optional rounding strategy, a value (or mathematical expression) to be rounded and a rounding interval (or mathematical expression).
The `valueToRound` is rounded according to the rounding strategy, to the nearest integer multiple of `roundingInterval`.

- `<rounding-strategy>`

  - : The rounding strategy.
    This may be one of the following values:

    - `up`
      - : Round `valueToRound` up to the nearest integer multiple of `roundingInterval` (if the value is negative, it will become "more positive"). This is equivalent to the JavaScript [`Math.ceil()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil) method.
    - `down`
      - : Round `valueToRound` down to the nearest integer multiple of `roundingInterval` (if the value is negative, it will become "more negative"). This is equivalent to the JavaScript [`Math.floor()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) method.
    - `nearest` (default)
      - : Round `valueToRound` to the nearest integer multiple of `roundingInterval`, which may be either above or below the value.
        If the `valueToRound` is half way between the rounding targets above and below (neither is "nearest"), it will be rounded up.
        Equivalent to JavaScript [`Math.round()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round).
    - `to-zero`
      - : Round `valueToRound` to the nearest integer multiple of `roundingInterval` closer to/towards zero (a positive number will decrease, while a negative value will become "less negative"). This is equivalent to the JavaScript [`Math.trunc()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc) method.

- `valueToRound`

  - : The value to be rounded.
    This must be a {{CSSxREF("&lt;number&gt;")}}, {{CSSxREF("&lt;dimension&gt;")}}, or {{CSSxREF("&lt;percentage&gt;")}}, or a mathematical expression that resolves to one of those values.

- `roundingInterval`
  - : The rounding interval.
    This is a {{CSSxREF("&lt;number&gt;")}}, {{CSSxREF("&lt;dimension&gt;")}}, or {{CSSxREF("&lt;percentage&gt;")}}, or a mathematical expression that resolves to one of those values.

### Return value

The value of `valueToRound`, rounded to the nearest lower or higher integer multiple of `roundingInterval`, depending on the `rounding strategy`.

- If `roundingInterval` is 0, the result is `NaN`.
- If `valueToRound` and `roundingInterval` are both `infinite`, the result is `NaN`.
- If `valueToRound` is infinite but `roundingInterval` is finite, the result is the same `infinity`.
- If `valueToRound` is finite but `roundingInterval` is infinite, the result depends on the rounding strategy and the sign of `A`:

  - `up` - If `valueToRound` is positive (not zero), return `+∞`. If `valueToRound` is `0⁺`, return `0⁺`. Otherwise, return `0⁻`.
  - `down` - If `valueToRound` is negative (not zero), return `−∞`. If `valueToRound` is `0⁻`, return `0⁻`. Otherwise, return `0⁺`.
  - `nearest`, `to-zero` - If `valueToRound` is positive or `0⁺`, return `0⁺`. Otherwise, return `0⁻`.

- The argument calculations can resolve to {{CSSxREF("&lt;number&gt;")}}, {{CSSxREF("&lt;dimension&gt;")}}, or {{CSSxREF("&lt;percentage&gt;")}}, but must have the same type, or else the function is invalid; the result will have the same type as the arguments.
- If `valueToRound` is exactly equal to an integer multiple of `roundingInterval`, `round()` resolves to `valueToRound` exactly (preserving whether `valueToRound` is `0⁻` or `0⁺`, if relevant). Otherwise, there are two integer multiples of `roundingInterval` that are potentially "closest" to `valueToRound`, lower `roundingInterval` which is closer to `−∞` and upper `roundingInterval` which is closer to `+∞`.

### Formal syntax

{{CSSSyntax}}

## Examples

### Round positive values

This example demonstrates how the `round()` function's rounding strategies work for positive values.

Of the five boxes below, the `round()` function is used to set the height of the last four.
The value to be rounded is between 100 px and 125 px in each case, and the rounding value is 25px in all cases.
The height of the boxes is therefore either rounded up to 125 px or down to 100 px.

#### HTML

The HTML defines 5 `div` elements that will be rendered as boxes by the CSS.
The elements contain text indicating the rounding strategy, initial value, and expected final height of the box (in parentheses).

```html
<div class="box box-1">height: 100px</div>
<div class="box box-2">up 101px (125px)</div>
<div class="box box-3">down 122px (100px)</div>
<div class="box box-4">to-zero 120px (100px)</div>
<div class="box box-5">nearest 117px (125px)</div>
```

#### CSS

```css hidden
body {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
}
```

The CSS that is applied to all boxes is shown below.
Note that we apply a [custom CSS property](/en-US/docs/Web/CSS/--*) named `--rounding-interval`, that we will use for the rounding interval.

```css
div.box {
  width: 100px;
  height: 100px;
  background: lightblue;
  padding: 5px;
  --rounding-interval: 25px;
}
```

The first `div` from the left isn't targeted with specific CSS rules, so it will have a default height of 100px.
The CSS for `div` two, three, and four is shown below, which round, up, down, and to-zero, respectively.

```css
div.box-2 {
  height: round(up, 101px, var(--rounding-interval));
}
div.box-3 {
  height: round(down, 122px, var(--rounding-interval));
}
div.box-4 {
  height: round(to-zero, 120px, var(--rounding-interval));
}
```

Notice how above we indicate the rounding interval using `var()` and the custom CSS property `--rounding-interval`.

The last box is set without specifying a rounding strategy, and hence defaults to `nearest`.
In this case, the nearest interval to 117 px is 125px, so it will round up.
Just for contrast, here we specified hard coded values for both the rounding value and interval.
While this is allowed, you wouldn't do this normally because there is no point rounding a number when you already know what the result must be.

```css
div.box-5 {
  height: round(117px, 25px);
}
```

#### Result

If the browser supports the CSS `round()` function, you should see five columns with heights that are rounded as indicated by their contained text.

{{EmbedLiveSample('Round positive values', '100%', '200px')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{CSSxRef("mod")}}
- {{CSSxRef("rem")}}
