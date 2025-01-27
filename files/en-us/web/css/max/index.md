---
title: max()
slug: Web/CSS/max
page-type: css-function
browser-compat: css.types.max
---

{{CSSRef}}

The **`max()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/CSS_Functions) lets you set the largest (most positive) value from a list of comma-separated expressions as the value of a CSS property value. The `max()` function can be used anywhere a {{CSSxRef("&lt;length&gt;")}}, {{CSSxRef("&lt;frequency&gt;")}}, {{CSSxRef("&lt;angle&gt;")}}, {{CSSxRef("&lt;time&gt;")}}, {{CSSxRef("&lt;percentage&gt;")}}, {{CSSxRef("&lt;number&gt;")}}, or {{CSSxRef("&lt;integer&gt;")}} is allowed.

{{EmbedInteractiveExample("pages/css/function-max.html")}}

In the first example shown above, the width will be at least 400px, but will be wider if the viewport is more than 2000px wide (in which case 1vw would be 20px, so 20vw would be 400px). This technique uses an absolute unit to specify a fixed minimum value for the property, and a relative unit to allow the value to grow to suit larger viewports.

## Syntax

The `max()` function takes one or more comma-separated expressions as its parameter, with the largest (most positive) expression value used as the value of the property to which it is assigned.

The expressions can be math expressions (using arithmetic operators), literal values, or other expressions, such as {{CSSxRef("attr", "attr()")}}, that evaluate to a valid argument type (like {{CSSxRef("&lt;length&gt;")}}), or nested {{CSSxRef("min", "min()")}} and `max()` functions.

You can use different units for each value in your expression. You may also use parentheses to establish computation order when needed.

### Notes

- Math expressions involving percentages for widths and heights on table columns, table column groups, table rows, table row groups, and table cells in both auto and fixed layout tables _may_ be treated as if `auto` had been specified.
- It is permitted to nest `min()` and other `max()` functions as expression values. The expressions are full math expressions, so you can use direct addition, subtraction, multiplication and division without using the calc() function itself.
- The expression can be values combining the addition ( + ), subtraction ( - ), multiplication ( \* ) and division ( / ) operators, using standard operator precedence rules. Make sure to put a space on each side of the + and - operands. The operands in the expression may be any \<length> syntax value.
- You can (and often need to) combine `min()` and `max()` values, or use `max()` within a `clamp()` or `calc()` function.

## Formal syntax

{{CSSSyntax}}

## Accessibility

When `max()` is used for controlling text size, make sure the text is always large enough to read. A suggestion is to use the {{CSSxRef("min", "min()")}} function nested within a `max()` that has as its second value a [relative length unit](/en-US/docs/Web/CSS/length#relative_length_units) that is always large enough to read. For example:

```css
small {
  font-size: max(min(0.5vw, 0.5em), 1rem);
}
```

This ensures a minimum size of _1rem_, with a text size that scales if the page is zoomed.

- [MDN Understanding WCAG, Guideline 1.4 explanations](/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.4 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## Examples

### Setting a minimum size for a font

Another use case for `max()` is to allow a font size to grow while ensuring it is at least a minimum size, enabling responsive font sizes while ensuring legibility.

Let's look at some CSS:

```css
h1 {
  font-size: 2rem;
}
h1.responsive {
  font-size: max(4vw, 2em, 2rem);
}
```

The font-size will at minimum be 2rems, or twice the default size of font for the page. This ensures that it is legible and accessible.

```html
<h1>This text is always legible, but doesn't change size</h1>
<h1 class="responsive">
  This text is always legible, and is responsive, to a point
</h1>
```

{{EmbedLiveSample("Setting_a_minimum_size_for_a_font", "100%", "300")}}

Think of the `max()` function as finding the minimum value allowed for a property.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{CSSxRef("calc", "calc()")}}
- {{CSSxRef("clamp", "clamp()")}}
- {{CSSxRef("min", "min()")}}
- [Learn: Values and units](/en-US/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
