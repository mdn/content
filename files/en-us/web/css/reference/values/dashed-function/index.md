---
title: "<dashed-function>: CSS custom functions"
slug: Web/CSS/Reference/Values/dashed-function
page-type: css-type
status:
  - experimental
browser-compat: css.types.dashed-function
sidebar: cssref
---

{{SeeCompatTable}}

The **`<dashed-function>`** [CSS](/en-US/docs/Web/CSS) [data type](/en-US/docs/Web/CSS/Reference/Values/Data_types) represents the syntax used to call [CSS custom functions](/en-US/docs/Web/CSS/Guides/Custom_functions_and_mixins/Using_custom_functions), which are defined using the {{cssxref("@function")}} at-rule.

## Syntax

A `<dashed-function>` value consists of the [`--function-name`](/en-US/docs/Web/CSS/Reference/At-rules/@function#--function-name), followed by parentheses containing the function's arguments (for example, `--my-function(30px, 3)`).

You can include `<dashed-function>` values in place of regular CSS property values or property value components, in cases where you want to dynamically calculate the values based on function logic rather than providing static values.

In cases where you want to [pass comma-containing values as arguments](/en-US/docs/Web/CSS/Reference/At-rules/@function#passing_comma-containing_values_as_arguments), you can do so by wrapping them in curly braces (`{ }`).

## Examples

For more examples, see our [Using CSS custom functions](/en-US/docs/Web/CSS/Guides/Custom_functions_and_mixins/Using_custom_functions) guide.

### Basic `<dashed-function>` usage

This example shows a basic function that returns a semi-transparent version of the color passed to it.

#### HTML

The markup features a {{htmlelement("p")}} containing some text content:

```html live-sample___basic-example
<p>Some content</p>
```

#### CSS

In our styles, we first define the CSS custom function. The function is called `--transparent` and accepts two parameters: a color and a numeric alpha channel value. Inside the function body, we use [relative color syntax](/en-US/docs/Web/CSS/Guides/Colors/Using_relative_colors) to transform the passed color into an {{cssxref("oklch()")}} color with an alpha channel equal to the passed alpha value; this becomes the function's `result`:

```css live-sample___basic-example
@function --transparent(--color <color>, --alpha <number>) {
  result: oklch(from var(--color) l c h / var(--alpha));
}
```

Next, we define a `--base-color` custom property with a value of `#faa6ff` on the `:root` element. We assign that property to be the value of the `<p>` element's {{cssxref("border")}} color, and then set its {{cssxref("background-color")}} value to equal a transparent version of the same color. This is done by setting the value to equal the `<dashed-function>` syntax, specifying the `--transparent()` function and passing it arguments of `var(--base-color)` and `0.8`.

```css hidden live-sample___basic-example
html,
body {
  height: 100%;
}

body {
  margin: 0;
  display: grid;
  place-items: center;
  font-family: system-ui;
  background-image: repeating-linear-gradient(
    -45deg,
    transparent 0 20px,
    lightgrey 20px 40px
  );
}
```

```css live-sample___basic-example
:root {
  --base-color: #faa6ff;
}

p {
  width: 50%;
  padding: 30px;
  border-radius: 20px;
  border: 3px solid var(--base-color);
  background-color: --transparent(var(--base-color), 0.8);
}
```

#### Result

{{ EmbedLiveSample('basic-example', '100%', '150px') }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS custom properties](/en-US/docs/Web/CSS/Reference/Properties/--*)
- {{cssxref("@function")}} at-rule
- [`type()`](/en-US/docs/Web/CSS/Reference/Values/type) function
- [Using CSS custom functions](/en-US/docs/Web/CSS/Guides/Custom_functions_and_mixins/Using_custom_functions)
- [CSS custom functions and mixins](/en-US/docs/Web/CSS/Guides/Custom_functions_and_mixins) module
