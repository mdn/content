---
title: "@function"
slug: Web/CSS/@function
page-type: css-at-rule
browser-compat: css.at-rules.function
sidebar: cssref
---

The **`@function`** [CSS](/en-US/docs/Web/CSS) [at-rule](/en-US/docs/Web/CSS/CSS_syntax/At-rule) enables defining [CSS custom functions](/en-US/docs/Web/CSS/CSS_custom_functions_and_mixins/Using_custom_functions). Once defined, a custom function can be called using the {{cssxref("&lt;dashed-function>")}} syntax (for example, `--my-function(30px, 3)`) within any property value.

## Syntax

```css
@function --function-name(<function-parameter>#?) [returns <css-type>]? {
  <declaration-rule-list>
}

<function-parameter> = --param-name <css-type>? [ : <default-value> ]?
```

The different parts of the `@function` syntax are as follows:

- `--function-name`
  - : The identifying name of the function, a [`<dashed-ident>`](/en-US/docs/Web/CSS/dashed-ident) that starts with `--` and is followed by a valid, user-defined identifier. It is case-sensitive.
- `<function-parameter>#?` {{optional_inline}}
  - : Zero or more function parameter definitions. Multiple parameter definitions are separated by commas. Each parameter consists of:
    - `--param-name`
      - : A [CSS custom property](/en-US/docs/Web/CSS/--*) name to identify the parameter, a [`<dashed-ident>`](/en-US/docs/Web/CSS/dashed-ident) that starts with `--` and is followed by a valid, user-defined identifier. It is case-sensitive. Function parameters can be considered custom properties that are locally scoped to the function body.
    - `<css-type>` {{optional_inline}}
      - : A CSS data type or a {{cssxref("type()")}} function that defines the accepted data type(s) for the parameter. If this is not specified, any data type will be valid for the parameter (the same as specifying `type(*)`), although bear in mind that it may still be incompatible with the logic in the `<declaration-rule-list>` and produce an invalid result.
    - `<default-value>` {{optional_inline}}
      - : A CSS value specifying the default value to assign to the parameter if it is not specified when the function is called. This value must be valid according to the `<css-type>` if specified. The default value is separated from the other parts of the parameter definition with a colon (`:`).
- `[returns <css-type>]?` {{optional_inline}}
  - : A CSS data type or a {{cssxref("type()")}} function, preceded by the keyword `returns`, which defines the accepted return type(s) for the parameter. If this is not specified, any data type will be valid for the parameter (the same as specifying `returns type(*)`), although bear in mind that the function will be invalid if the return type does not match the type produced by the `result` descriptor.
- `<declaration-rule-list>`
  - : One or more CSS declarations or at-rules that define the body of the function, which contains its logic. Included declarations can include:
    - CSS custom properties, which are locally scoped to the function body.
    - The `result` descriptor, either directly inside the `@function` at-rule, or inside a nested at-rule.

### Descriptors

- `result`
  - : A valid property value that defines the result returned by the CSS custom function. The expression contained in the value is evaluated, and the result is returned.

## Description

CSS custom functions allow you to define reusable sections of logic that will return different values depending on the parameters they accept as inputs and the logic defined inside the function body.

A typical CSS function looks like this:

```css
@function --transparent(--color, --alpha) {
  result: oklch(from var(--color) l c h / var(--alpha));
}
```

The function has a name of `--transparent` and takes two custom properties as parameters: `--color` and `--alpha`, which can be used locally inside the function body. The body contains a single line, which is a `result` descriptor that defines the value returned by the function. The value of the `result` descriptor uses [CSS relative color syntax](/en-US/docs/Web/CSS/CSS_colors/Relative_colors) to convert the input `--color` value into an [`oklch()`](/en-US/docs/Web/CSS/color_value/oklch) color with the alpha channel value specified in the input `--alpha` value.

You can then call this function anywhere you want to produce a semi-transparent version of an existing color, for example:

```css
section {
  --base-color: #faa6ff;
  background-color: --transparent(var(--base-color), 0.8);
}
```

The function is called by using {{cssxref("&lt;dashed-function>")}} syntax, which is the function name with parentheses on the end, and the desired argument values specified inside.

> [!NOTE]
> If multiple CSS functions are given the same name, the function in the stronger cascade {{cssxref("@layer")}} wins. If all of them are in the same layer, the function defined last in the source order wins.

### Passing comma-containing values as arguments

In the next example, the `--max-plus-x()` function expects to be passed a comma-separated list of values and a single value as arguments. It uses the CSS {{cssxref("max()")}} function to determine which of the list of values is the largest, adds it to the single value, then returns the result.

```css
@function --max-plus-x(--list, --x) {
  result: calc(max(var(--list)) + var(--x));
}
```

Because the first argument needs to be a comma-separated list, you can include it when calling the function by wrapping the value in curly braces:

```css
div {
  width: --max-plus-x({1px, 7px, 2px}, 3px); /* 10px */
}
```

### Specifying data types

It is possible to specify data types for the function parameters and return types. For example:

```css
@function --transparent(--color <color>, --alpha <number>) returns <color> {
  result: oklch(from var(--color) l c h / var(--alpha));
}
```

Now the function will only produce a valid value if the input arguments are a {{cssxref("&lt;color>")}} and a {{cssxref("&lt;number>")}}, respectively, and the `result` is a {{cssxref("&lt;color>")}}. If not, for example:

```css
section {
  --base-color: #faa6ff;
  background-color: --transparent(var(--base-color), 50%);
}
```

then the value will be invalid, and the declaration will be ignored.

You can specify multiple accepted data types using a {{cssxref("type()")}} function and some OR logic, for example:

```css
@function --transparent(--color <color>, --alpha type(<number> | <percentage>))
  returns <color> {
  result: oklch(from var(--color) l c h / var(--alpha));
}
```

With this adjustment, the `--transparent(var(--base-color), 50%)` value will now be valid.

### Specifying default values

You can also specify default values for parameters, after a colon at the end of its definition. For example:

```css
@function --transparent(--color <color>, --alpha <number>: 0.8) returns <color> {
  result: oklch(from var(--color) l c h / var(--alpha));
}
```

The `--alpha` parameter's default value is now `0.8`. If you want to use this value, you can omit the second argument when calling the function:

```css
section {
  --base-color: #faa6ff;
  background-color: --transparent(var(--base-color));
}
```

> [!NOTE]
> If an invalid value is passed in as a function argument and a default value is specified in that parameter definition, the invalid value will be ignored, and the default value will be used instead.

### Including custom properties inside functions

As we've already seen, function parameters are defined as custom properties, which are then available inside the function body.

You can also specify custom properties inside the function body that will act as locally-scoped constants. In the following example, we define a function called `--anim-1s()`, which returns an {{cssxref("animation")}} shorthand value where the duration and easing values are always the same, and only the animation name and count are varied.

```css
@function --anim-1s(--animation, --count) {
  --duration: 1s;
  --easing: linear;
  result: var(--animation) var(--duration) var(--count) var(--easing);
}
```

This kind of usage allows you to write easier, more expressive syntax for animations, provided you know that you always want the duration and easing function to be the same:

```css
animation: --anim-1s(bounce, 2);
```

It is also worth noting that you can call one custom function from inside another one. In such cases, a custom function can access local variables and function parameters from functions higher up in the call stack. Here, the outer function's parameter and local custom property will be available inside the scope of the inner function:

```css
@function --outer(--outer-arg) {
  --outer-local: 2;
  result: --inner();
}

@function --inner() returns <number> {
  result: calc(var(--outer-arg) + var(--outer-local));
}

div {
  z-index: --outer(1); /* 3 */
}
```

In addition, custom properties defined on the same element the custom function is being called on will be available to it:

```css
@function --double-z() returns <number> {
  result: calc(var(--z) * 2);
}

div {
  --z: 3;
  z-index: --double-z(); /* 6 */
}
```

If a custom property of the same name is defined in multiple places, function parameters override custom properties defined on the same element, and local custom properties defined inside the function body override both. In the following example, the `--add-a-b-c()` function uses the `--a` property from the `div` rule's custom property, the `--b` property from the function parameter, and the `--c` local custom property.

```css
@function --add-a-b-c(--b, --c) {
  --c: 300;
  result: calc(var(--a) + var(--b) + var(--c));
}

div {
  --a: 1;
  --b: 2;
  --c: 3;
  z-index: --add-a-b-c(20, 30); /* 321 */
}
```

### Including complex logic

You can include more complex logic in functions using constructs such as {{cssxref("@media")}} at-rules and {{cssxref("if()")}} functions. For example, the next function takes two arguments, one for a narrow-screen layout, and one for a wide-screen layout. It returns the latter by default, but returns the former when the viewport width is less than `700px` wide, as detected using a media query.

```css
@function --narrow-wide(--narrow, --wide) {
  result: var(--wide);
  @media (width < 700px) {
    result: var(--narrow);
  }
}
```

You can include multiple `result` descriptors to express different results for different logic outcomes.

> [!NOTE]
> CSS functions behave in same way as the rest of CSS in regard to conflict resolution — last in source order wins. Therefore, in the above function, the `result` is `var(--wide)` unless the media query test returns true, in which case it is overriden by `var(--narrow)`.
>
> There are no early returns in CSS functions like there are in JavaScript functions. In the above function, if the media query was written first before the single `result` line, the `result` would always be `var(--wide)` because it would override `var(--narrow)` in cases where the media query test returns true.

We could rewrite the function to use an `if()` function instead:

```css
@function --narrow-wide(--narrow, --wide) {
  result: if(media(width < 700px): var(--narrow) ; else: var(--wide));
}
```

## Formal syntax

{{csssyntax}}

## Examples

For more complete example walkthroughs, see our [Using CSS custom functions](/en-US/docs/Web/CSS/CSS_custom_functions_and_mixins/Using_custom_functions) guide

### Basic `@function` usage

This example shows a basic function that doubles the value passed into it.

#### HTML

The markup features a {{htmlelement("div")}} element with a {{htmlelement("p")}} inside it containing some text content.

```html live-sample___basic-example
<div>
  <p>Some content</p>
</div>
```

#### CSS

In our styles we first define the CSS custom function. The function is called `--double`, and accepts a single parameter of any type, which we've called `--value`. Inside the function body, we include a `result` descriptor that uses the {{cssxref("calc()")}} function to double the passed argument:

```css live-sample___basic-example
@function --double(--value) {
  result: calc(var(--value) * 2);
}
```

Next, we define a `--base-spacing` custom property with a value of `10px`. We assign that property to be the value of our {{cssxref("border-radius")}}, but then double it for our {{cssxref("padding")}} value using our `--double()` custom function.

```css hidden live-sample___basic-example
html {
  font-family: system-ui;
  height: 100%;
}

body {
  margin: 0;
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
}

p {
  margin: 0;
}
```

```css live-sample___basic-example
div {
  --base-spacing: 10px;
  border-radius: var(--base-spacing);
  padding: --double(var(--base-spacing));
  width: 50%;
  background-color: magenta;
}
```

#### Result

{{ EmbedLiveSample('basic-example', '100%', '150px') }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS custom properties](/en-US/docs/Web/CSS/--*)
- {{cssxref("&lt;dashed-function>")}} data type
- [`type()`](/en-US/docs/Web/CSS/type) function
- [Using CSS custom functions](/en-US/docs/Web/CSS/CSS_custom_functions_and_mixins/Using_custom_functions)
- [CSS custom functions and mixins](/en-US/docs/Web/CSS/CSS_custom_functions_and_mixins) module
