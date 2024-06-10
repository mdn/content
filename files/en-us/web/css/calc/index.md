---
title: calc()
slug: Web/CSS/calc
page-type: css-function
browser-compat: css.types.calc
---

{{CSSRef}}

The **`calc()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/CSS_Functions) lets you perform calculations when specifying CSS property values. It can be used with {{cssxref("&lt;length&gt;")}}, {{cssxref("&lt;frequency&gt;")}}, {{cssxref("&lt;angle&gt;")}}, {{cssxref("&lt;time&gt;")}}, {{cssxref("&lt;percentage&gt;")}}, {{cssxref("&lt;number&gt;")}}, or {{cssxref("&lt;integer&gt;")}} values.

{{EmbedInteractiveExample("pages/css/function-calc.html")}}

## Syntax

```css
/* calc(expression) */
calc(100% - 80px)

/* Expression with color channel */
calc(l * 0.8)
calc(h + 180)
calc(b / 2)
calc(r * .3 + g * .59 + b * .11)
```

The `calc()` function takes a single expression as its parameter, and the expression's result is used as the value for a CSS property. In this expression, the {{Glossary("operand", "operands")}} can be combined using the {{Glossary("operator", "operators")}} listed below. When the expression contains multiple operands,`calc()` uses the standard [operator precedence rules](/en-US/docs/Learn/JavaScript/First_steps/Math#operator_precedence):

- `+`
  - : Adds the specified operands.
- `-`
  - : Subtracts the second operand from the first operand.
- `*`
  - : Multiplies the specified operands.
- `/`
  - : Divides the left-side operand (dividend) by the right-side operand (divisor).

All operands, except those of type {{cssxref("&lt;number&gt;")}}, must be suffixed with an appropriate unit string, such as `px`, `em`, or `%`. You can use a different unit with each operand in your expression. You may also use parentheses to establish computation order when needed.

## Description

Serializing the arguments inside `calc()` follows the IEEE-754 standard for floating point math, which means there's a few cases to be aware of regarding the `infinity` and `NaN` constants.
For more details on how constants are serialized, see the [`calc-constant`](/en-US/docs/Web/CSS/calc-constant) page.

Keep the following points in mind while using `calc()`:

- The `+` and `-` operators **must be surrounded by {{Glossary("whitespace")}}**. For instance, `calc(50% -8px)` will be parsed as "a percentage followed by a negative length" — which is an invalid expression — while `calc(50% - 8px)` is "a percentage followed by a subtraction operator and a length". Likewise, `calc(8px + -50%)` is treated as "a length followed by an addition operator and a negative percentage".
- The `*` and `/` operators do not require whitespace, but adding it for consistency is recommended.
- Math expressions involving percentages for widths and heights on table columns, table column groups, table rows, table row groups, and table cells in both auto and fixed layout tables _may_ be treated as if `auto` had been specified.
- It is permitted to nest `calc()` functions, in which case the inner ones are treated as simple parentheses.
- For lengths, you can't use `0` to mean `0px` (or another length unit); instead, you must use the version with the unit: `margin-top: calc(0px + 20px);` is valid, while `margin-top: calc(0 + 20px);` is invalid.
- The `calc()` function cannot directly substitute the numeric value for percentage types; for instance `calc(100 / 4)%` is invalid, while `calc(100% / 4)` is valid.
- Current implementations require that for the `*` and `/` operators, one of the operands has to be unitless. For `/`, the right operand must be unitless. For example `font-size: calc(1.25rem / 1.25)` is valid but `font-size: calc(1.25rem / 125%)` is invalid.
- When `calc()` is used where an {{cssxref("&lt;integer&gt;")}} is expected, the value will be rounded to the nearest integer. For example, `z-index: calc(3 / 2);` will result in a `z-index` value of `2`.

## Formal syntax

{{csssyntax}}

## Accessibility concerns

When `calc()` is used for controlling text size, be sure that one of the values includes a [relative length unit](/en-US/docs/Web/CSS/length#relative_length_units), for example:

```css
h1 {
  font-size: calc(1.5rem + 3vw);
}
```

This ensures that text size will scale if the page is zoomed.

- [MDN Understanding WCAG, Guideline 1.4 explanations](/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.4 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## Examples

### Positioning an object on screen with a margin

`calc()` makes it easy to position an object with a set margin. In this example, the CSS creates a banner that stretches across the window, with a 40-pixel gap between both sides of the banner and the edges of the window:

```css
.banner {
  position: absolute;
  left: 40px;
  width: calc(100% - 80px);
  border: solid black 1px;
  box-shadow: 1px 2px;
  background-color: yellow;
  padding: 6px;
  text-align: center;
  box-sizing: border-box;
}
```

```html
<div class="banner">This is a banner!</div>
```

{{EmbedLiveSample('Positioning_an_object_on_screen_with_a_margin', 'auto', '60')}}

### Automatically sizing form fields to fit their container

Another use case for `calc()` is to help ensure that form fields fit in the available space, without extruding past the edge of their container, while maintaining an appropriate margin.

Let's look at some CSS:

```css
input {
  padding: 2px;
  display: block;
  width: calc(100% - 1em);
}

#form-box {
  width: calc(100% / 6);
  border: 1px solid black;
  padding: 4px;
}
```

Here, the form itself is established to use 1/6 of the available window width. Then, to ensure that input fields retain an appropriate size, we use `calc()` again to establish that they should be the width of their container minus 1em. Then, the following HTML makes use of this CSS:

```html
<form>
  <div id="form-box">
    <label for="misc">Type something:</label>
    <input type="text" id="misc" name="misc" />
  </div>
</form>
```

{{EmbedLiveSample('Automatically_sizing_form_fields_to_fit_their_container', '700', '80')}}

### Nesting with CSS variables

You can use `calc()` with [CSS variables](/en-US/docs/Web/CSS/CSS_cascading_variables). Consider the following code:

```css
.foo {
  --widthA: 100px;
  --widthB: calc(var(--widthA) / 2);
  --widthC: calc(var(--widthB) / 2);
  width: var(--widthC);
}
```

After all variables are expanded, `widthC`'s value will be `calc(calc(100px / 2) / 2)`. When it's assigned to `.foo`'s width property, all inner `calc()` functions (no matter how deeply nested) will be flattened to just parentheses. Therefore, the `width` property's value will eventually be `calc((100px / 2) / 2)`, which equals `25px`. In short, a `calc()` inside of a `calc()` is identical to using parentheses.

### Adjusting colors dynamically

The `calc()` function can be used with colors to dynamically adjust individual color channels. In the example below, CSS variables are defined for the `red`, `green`, and `blue` color channels. The `calc()` function is used to dynamically decrease the `red` channel by `50` units.

```html hidden
<p class="original">This text color is the original color.</p>
<p class="plus">
  This text color is adjusted to increase the blue channel by 100.
</p>
<p class="minus">
  This text color is adjusted to decrease the red channel by 200.
</p>
<p class="double">This text color is adjusted to double the green channel.</p>
<p class="half">
  This text color is dynamically adjusted to halve the alpha channel.
</p>
```

```css
:root {
  --r: 255;
  --g: 100;
  --b: 100;
  --a: 1;
}

.original {
  color: rgb(var(--r) var(--g) var(--b));
}

.plus {
  color: rgb(var(--r) var(--g) calc(var(--b) + 100));
}

.minus {
  color: rgb(calc(var(--r) - 200) var(--g) var(--b));
}

.double {
  color: rgb(var(--r) calc(var(--g) * 2) var(--b));
}

.half {
  color: rgb(var(--r) var(--g) var(--b) / calc(var(--a) / 2));
}
```

{{EmbedLiveSample('Adjusting_colors_dynamically', '700', '200')}}

Refer to the [Using math functions](/en-US/docs/Web/CSS/CSS_colors/Relative_colors#using_math_functions) section to see how the `calc()` function is used with relative colors.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{CSSxRef("&lt;calc-constant&gt;")}}
- [CSS functions](/en-US/docs/Web/CSS/CSS_Functions)
- [A Complete Guide to calc() in CSS](https://css-tricks.com/a-complete-guide-to-calc-in-css/) (CSS-Tricks)
