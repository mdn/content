---
title: min()
slug: Web/CSS/min
tags:
  - CSS
  - CSS Function
  - Calculate
  - Compute
  - Function
  - Layout
  - Reference
  - min
browser-compat: css.types.min
---
{{CSSRef}}

The **`min()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/CSS_Functions) lets you set the smallest (most negative) value from a list of comma-separated expressions as the value of a CSS property value. The `min()` function can be used anywhere a {{CSSxRef("&lt;length&gt;")}}, {{CSSxRef("&lt;frequency&gt;")}}, {{CSSxRef("&lt;angle&gt;")}}, {{CSSxRef("&lt;time&gt;")}}, {{CSSxRef("&lt;percentage&gt;")}}, {{CSSxRef("&lt;number&gt;")}}, or {{CSSxRef("&lt;integer&gt;")}} is allowed.

{{EmbedInteractiveExample("pages/css/function-min.html")}}

In the first above example, the width will be at most 200px, but will be smaller if the viewport is less than 400px wide (in which case 1vw would be 4px, so 50vw would be 200px). In other words, the maximum width is 200px. Think of the `min()` value as providing the _maximum_ value a property can have.

## Syntax

The `min()` function takes one or more comma-separated expressions as its parameter, with the smallest (most negative) expression value result used as the value.

The expressions can be math expressions (using arithmetic operators), literal values, or other expressions, such as {{CSSxRef("attr", "attr()")}}, that evaluate to a valid argument type (like {{CSSxRef("&lt;length&gt;")}}).

You can use different units for each value in your expression, if you wish. You may also use parentheses to establish computation order when needed.

### Notes

- Math expressions involving percentages for widths and heights on table columns, table column groups, table rows, table row groups, and table cells in both auto and fixed layout tables _may_ be treated as if `auto` had been specified.
- It is permitted to nest `max()` and other `min()` functions as expression values. The expressions are full math expressions, so you can use direct addition, subtraction, multiplication and division without using the `calc()` function itself.
- The expression can be values combining the addition ( + ), subtraction ( - ), multiplication ( \* ) and division ( / ) operators, using standard operator precedence rules. Make sure to put a space on each side of the + and - operands. The operands in the expression may be any `<length>` syntax value.
- You can (and often need to) combine `min()` and `max()` values, or use `min()` within a `clamp()` or `calc()` function.
- You can provide more than two arguments, if you have multiple constraints to apply.

### Formal syntax

{{CSSSyntax}}

## Accessibility concerns

When using `min()` to set a maximum font size, ensure that the font can still be scaled at least 200% for readability (without assistive technology like a zoom function).

- [MDN Understanding WCAG, Guideline 1.4 explanations](/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.4 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## Examples

### Setting a maximum size for a label and input

Another use case for CSS functions is to set a maximum size on responsive form controls: enabling the width of labels and inputs to shrink as the width of the form shrinks.

Let's look at some CSS:

```css
input, label {
  padding: 2px;
  box-sizing: border-box;
  display: inline-block;
  width: min(40%, 400px);
  background-color: pink;
}

form {
  margin: 4px;
  border: 1px solid black;
  padding: 4px;
}
```

Here, the form itself, along with the margin, border, and padding, will be 100% of its parent's width. We declare the input and label to be the lesser of 40% of the form width up to the padding or 400px wide, whichever is smaller. In other words, the widest that the label and input can be is 400px. The narrowest they will be is 40% of the form's width, which on a smartwatch's screen is very small.

```html
<form>
  <label for="misc">Type something:</label>
  <input type="text" id="misc" name="misc">
</form>
```

{{EmbedLiveSample("Setting_a_maximum_size_for_a_label_and_input", "100%", "110")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{CSSxRef("calc", "calc()")}}
- {{CSSxRef("clamp", "clamp()")}}
- {{CSSxRef("max", "max()")}}
- [CSS Values](/en-US/docs/Learn/CSS/Building_blocks/Values_and_units)
