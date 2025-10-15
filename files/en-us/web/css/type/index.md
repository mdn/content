---
title: type()
slug: Web/CSS/type
page-type: css-function
browser-compat: css.types.type
sidebar: cssref
---

{{seecompattable}}

The **`type()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) allows you to specify a particular data type. It is used by the following CSS features:

- The {{cssxref("attr()")}} function, to specify the data type that an attribute value should be parsed into.
- The {{cssxref("@function")}} at-rule, to specify the permitted data types for [CSS custom function](/en-US/docs/Web/CSS/CSS_custom_functions_and_mixins/Using_custom_functions) parameters and results.

> [!NOTE]
> The {{cssxref("@property")}} at-rule {{cssxref("@property/syntax", "syntax")}} descriptor value uses the same `<syntax>` to define the permitted data types for registered [custom properties](/en-US/docs/Web/CSS/--*), however, this always takes the form of a string.

## Syntax

```css
/* Single value */
type(<color>)
type(auto)

/* "|" combinator for multiple types */
type(<length> | <percentage>)

/* Space-separated list of values */
type(<color>+)

/* Comma-separated list of values */
type(<length>#)

/* Multiple keywords */
type(red | blue | green)

/* Combination of data type and keyword */
type(<percentage> | auto)

/* Universal syntax value */
type(*)
```

### Parameters

The `type()` function's syntax is as follows:

```plain
type(<syntax>)
```

The `<syntax>` parameter is an expression defining the data type. This can take the following forms:

- `<ident>`
  - : A CSS keyword value, written without angle brackets.

- `<syntax-type>`
  - : A type name, written in angle brackets, representing a CSS data type. The following data types are supported:
    - `<angle>`
      - : Accepts any valid {{cssxref("&lt;angle&gt;")}} value.
    - `<color>`
      - : Accepts any valid {{cssxref("&lt;color&gt;")}} value.
    - `<custom-ident>`
      - : Accepts any valid {{cssxref("&lt;custom-ident&gt;")}} value.
    - `<image>`
      - : Accepts any valid {{cssxref("&lt;image&gt;")}} value.
    - `<integer>`
      - : Accepts any valid {{cssxref("&lt;integer&gt;")}} value.
    - `<length>`
      - : Accepts any valid {{cssxref("&lt;length&gt;")}} value.
    - `<length-percentage>`
      - : Accepts any valid {{cssxref("&lt;length&gt;")}} or {{cssxref("&lt;percentage&gt;")}} value and any valid {{cssxref("calc", "calc()")}} expression combining `<length>` and `<percentage>` values.
    - `<number>`
      - : Accepts any valid {{cssxref("&lt;number&gt;")}} value.
    - `<percentage>`
      - : Accepts any valid {{cssxref("&lt;percentage&gt;")}} value.
    - `<resolution>`
      - : Accepts any valid {{cssxref("&lt;resolution&gt;")}} value.
    - `<string>`
      - : Accepts any valid {{cssxref("&lt;string&gt;")}} value.
    - `<time>`
      - : Accepts any valid {{cssxref("&lt;time&gt;")}} value.
    - `<transform-function>`
      - : Accepts any valid {{cssxref("&lt;transform-function&gt;")}} value.
    - `<transform-list>`
      - : Accepts a list of valid {{cssxref("&lt;transform-function&gt;")}} values. It is equivalent to `"<transform-function>+"`, and may not be followed by a `+` or `#` token.
    - `<url>`
      - : Accepts any valid {{cssxref("url_value", "&lt;url&gt;")}} value.

- `*`
  - : The universal syntax.

You can combine `<syntax-type>` values using the following tokens:

- `+`
  - : A space-separated list of values is expected.
- `#`
  - : A comma-separated list of values is expected.

In addition, the `|` token can be used as a separator when specifying multiple values or combining `<ident>` and `<syntax-type>` values for the expected syntax.

### Return value

A data type definition.

## Description

The `type()` function is used when you need to define a data type. It can be considered as a subset of the overall value definition syntax used to define the set of valid values for every CSS property and function.

Most commonly, you'll see `type()` used to specify a single data type. The next example uses the {{cssxref("attr()")}} function to set the {{cssxref("background-color")}} property equal to the value of a user-defined `data-background` function. The required data type for the value has been specified as a {{cssxref("&lt;color>")}}.

```css
background-color: attr(data-background type(<color>), red);
```

You could also specify an exact keyword requirement (for example, `type(blue)`), but this would be overly limiting.

Specifying `type(*)` permits any valid CSS value. This is called the universal syntax, and it cannot be multiplied or combined with other syntax components.

### Specifying multiple permitted types

You can use the `|` token to create OR logic and specify a range of permitted data types, keywords, or a combination of both. For example:

- `type(<length> | <percentage>)`
- `type(red | green)`
- `type(<length> | auto)`

The following example shows how a {{cssxref("@function")}} at-rule can be used to define a [custom function](/en-US/docs/Web/CSS/CSS_custom_functions_and_mixins/Using_custom_functions) that takes two color parameters, and returns the first one unless the viewport width is less than `700px`, in which case it returns the second one. The first one is allowed to be `red` or `green`, while the second one has to be `blue`.

```css
@function --color-choice(--color1 type(red | green), --color2 blue) {
  result: var(--color1);
  @media (width < 700px) {
    result: var(--color2);
  }
}
```

> [!NOTE]
> In the case of `@function` data types, you can omit the `type()` function and just include the value in cases where only one data type or keyword is specified. This is the case with the `blue` type definition in the previous custom function. This doesn't work with the `attr()` function.

### Specifying lists of types

The `+` and `#` tokens can be appended to a `<syntax-type>` to specify that you are expecting a space-separated list or a comma-separated list, respectively. For example:

- A `<color>+` parameter expects a space-separated list of `<color>` values, for example `red blue #a60000 rgb(234 45 100)`.
- A `<length>#` parameter expects a comma-separated lists of `<length>` values, for example `30px, 1em, 15vw`.

You can combine OR logic with these tokens. For example, `<color># | <integer>#` would expect a comma-separated list of `<color>` values or a comma-separated list of `<integer>` values.

## Formal syntax

{{csssyntax}}

## Examples

You can find several other examples in the {{cssxref("attr()")}} and {{cssxref("@function")}} documentation.

### Basic `@function` data type definition

This example defines a CSS custom function that combines multiple strings.

#### HTML

The HTML contains a single {{htmlelement("section")}} element with some text content.

```html live-sample___basic-data-type
<section>What you goin' ta say?</section>
```

#### CSS

In the CSS, we start by specifying a `@function` called `--combine-strings`. This has a parameter called `--strings`, the data type of which is specified as one or more space-separated `<string>` values. It returns the string values with a space and a heart emoji appended onto the end.

```css-nolint live-sample___basic-data-type
@function --combine-strings(--strings type(<string>+)) {
  result: var(--strings) " ❤️";
}
```

We then specify some basic styles for the `<section>` element, then use the `--combine-strings()` function to specify the value of its {{cssxref("content")}} property, including two space-separated strings as the argument.

```css live-sample___basic-data-type
section {
  font-family: system-ui;
  background-color: lime;
  padding: 20px;
}

section::after {
  content: --combine-strings("hello" "goodbye");
}
```

#### Result

{{ EmbedLiveSample('basic-data-type', '100%', '70') }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("@function")}} at-rule
- {{cssxref("attr()")}} function
- [Using CSS custom functions](/en-US/docs/Web/CSS/CSS_custom_functions_and_mixins/Using_custom_functions)
