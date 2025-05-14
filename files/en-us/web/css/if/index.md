---
title: if()
slug: Web/CSS/if
page-type: css-function
status:
  - experimental
browser-compat: css.types.if
---

{{CSSRef}}{{SeeCompatTable}}

The **`if()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) allows different values to be set for a property depending on the result of a test. The test can be based on a [style query](/en-US/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#container_style_queries), a [media query](/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries), or a [feature query](/en-US/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries).

## Syntax

```css-nolint
/* Style query condition */
background-color: if(style(--scheme: dark): black);
padding: if(style(--size: 2xl): 1em; else: 0.25em);

/* Media query condition */
background: if(media(print): white; else: black);
margin: if(media(max-width: 700px): 0 auto ; else: 20px auto 0);

/* Feature query condition */
color: if(
  supports(color: lch(7.1% 60.23 300.16)): lch(7.1% 60.23 300.16);
  else: #03045e
);
border: if(
  supports(color: lch(77.7% 0 0)): 3px solid lch(77.7% 0 0);
  else: 3px solid #c0c0c0
);

/* Multiple tests */
background-image: if(
  style(--scheme: ice): linear-gradient(to left, #caf0f8, white, #caf0f8);
  style(--scheme: fire): linear-gradient(to left, #ffc971, white, #ffc971);
  else: none
);

/* Partial value */
border: 3px solid if(
  supports(color: lch(77.7% 0 0)): lch(77.7% 0 0);
  else: #c0c0c0
);
```

### Parameters

The `if()` function's syntax is as follows:

```plain
if([<if-condition> : <value>;]* [else : <value>;]?)
```

The parameters are:

- `<if-condition>`

  - : A [style query](/en-US/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#container_style_queries), [media query](/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries), or [feature query](/en-US/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries).

- `else`

  - : A keyword representing an `<if-condition>` that always evaluates to true.

- `<value>`

  - : A property value.

### Return value

A value, or nothing, in which case the property retains its initial value.

## Description

The CSS `if()` function provides conditional logic to CSS property values, and works in a similar fashion to JavaScript [`if ... else`](/en-US/docs/Web/JavaScript/Reference/Statements/if...else) statements.

The `if()` function can be used inside the value of any property, and can contain zero or more `<if-condition> : <value>` pairs, followed by zero or one `else : <value>` pair.

The return value is calculated as follows:

1. The `<if-condition>` expressions are evaluated, in the order they appear in the function.
2. The first `<if-condition>` that evaluates to true has its associated `<value>` returned.
3. If none of the provided `<if-condition>` expressions evaluate to true (or no `<if-condition> : <value>` pairs are provided), the `else` `<value>` will be returned, if an `else : <value>` pair is included.
4. If no `else : <value>` pair is included, nothing is returned.

For example:

```css-nolint
div {
  background-image: if(
    style(--scheme: ice): linear-gradient(to left, #caf0f8, white, #caf0f8);
    style(--scheme: fire): linear-gradient(to left, #ffc971, white, #ffc971);
    else: none
  );
}
```

In this case, we are setting a different {{cssxref("background-image")}} {{cssxref("linear-gradient()")}} value on {{htmlelement("div")}} elements depending on whether a `--scheme` [custom property](/en-US/docs/Web/CSS/--*) is set to `ice` or `fire`. If neither value is set, the `else` value comes into play, and the `background-image` property is set to `none`.

> [!NOTE]
> Each condition must be separated from its associated value with a colon, and each `<if-condition> : <value>` pair must be separated with a semi-colon.

If a single `<if-condition>` or `<value>` is invalid, it does not invalidate the entire `if()` function; instead, the parser moves on to the next `<if-condition> : <value>` pair.

An `if()` function is still valid if it contains only an `else : <value>` pair, or nothing at all:

```css
background-color: if(else: yellow);
background-image: if();
```

However, these functions are not useful. The {{cssxref("background-color")}} value will always be set to `yellow`, and the `background-image` will retain its initial value. You would be better off setting the first property to just `yellow`, and not setting the second property at all:

```css
background-color: yellow;
```

### Types of if condition

An `<if-condition>` can be one of three different types. This section looks at each on in detail.

#### Style queries

[Container style query](/en-US/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#container_style_queries) if conditions allow you to test whether a particular property value is set on an element, and apply a value to a different property as a result. We walked through a style query example earlier on, but let's look at a single `<if-condition> : <value>` pair again:

```css
style(--scheme: ice): linear-gradient(to left, #caf0f8, white, #caf0f8);
```

If the `--scheme` custom property is set to a value of `ice` on the same element, the provided `linear-gradient()` value is returned.

Using style queries inside `if()` statements has an advantage over using style queries via {{cssxref("@container")}} — you can check for a set property value on an element and set a different property on the same element as a result, rather than having to check styles on a container and apply styles to the container's children.

However, you can only set single property values at a time with `if()`, whereas `@container` queries can be used to set whole sets of rules. You can also only check for a single property value at a time with `if()`, and can't use `and`, `or`, or `not`. There is no way to do something like this:

```css
style(--scheme: dark or --scheme: very-dark): black;
```

You'd have to do this instead:

```css
style(--scheme: dark): black;
style(--scheme: very-dark): black;
```

The two approaches are complementary, and have different uses.

Note that container style queries currently don't support regular CSS properties, just CSS custom properties. So for example, the following won't work:

```css
background-color: if(style(color: white): black;);
```

#### Media queries

[Media query](/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries) if conditions can be used to set a value for a property depending on whether a media query test returns true.

You can use media types. For example, the following `<if-condition> : <value>` pair returns a value of `white` on printed media.

```css
media(print): white;
```

You can also use media features — the following returns a value of `0 auto` if the current viewport width is less than `700px`:

```css
media(width < 700px): 0 auto;
```

This is really useful when you need to vary a single property value based on a media query result, however, you can't use complex media queries inside an `if()` statement (multiple queries connected via `and`, `or`, or `not` keywords). For such cases, a regular {{cssxref("@media")}} construct is needed. The two approaches are complementary, and have different uses.

#### Feature queries

[Feature query](/en-US/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries) if conditions can be used to set a value for a property depending on whether the browser supports a particular property value.

For example, the following returns an {{cssxref("color_value/lch()")}} color, if `lch()` colors are supported:

```css
supports(color: lch(77.7% 0 0)): lch(77.7% 0 0);
```

Selector support queries also work. The following will return a value of `blue` if the browser supports the `h2 > p` selector:

```css
supports(selector(h2 > p)): blue;
```

Interestingly, support queries for a property without a value don't work, for example:

```css
supports(color): blue;
```

Feature queries are really useful inside `if()` statements when you need to vary a single property value based on support for a particular property: value combination. however, you can't use complex feature queries inside an `if()` statement (multiple queries connected via `and`, `or`, or `not` keywords). For such cases, a regular {{cssxref("@supports")}} construct is needed. The two approaches are complementary, and have different uses.

### Providing fallback values

`if()` statements do not gracefully degrade; explicit fallbacks need to be provided for non-supporting browsers.

For example, in this case we provide a static {{cssxref("padding")}} value for browsers that don't support `if()`. Browsers that do support `if()` will override the first declaration with the second one, which sets a padding value dynamically depending on whether the `--size: 2xl` custom property is set.

```css
padding: 1em;
padding: if(style(--size: 2xl): 1em; else: 0.25em);
```

### Whole and partial values

An `if()` function can be set as the value of any CSS property, but it can also be used to determine parts of property values. For example, the following sets a different {{cssxref("border-color")}} inside a {{cssxref("border")}} shorthand property, depending on whether {{cssxref("color_value/lch()")}} colors are supported:

```css-nolint
border: if(
  supports(color: lch(77.7% 0 0)): 3px solid lch(77.7% 0 0);
  else: 3px solid #c0c0c0;
);
```

But you can simplify it like this, using the `if()` function to determine only the color portion:

```css-nolint
border: 3px solid
  if(
    supports(color: lch(77.7% 0 0)): 3px solid lch(77.7% 0 0) ; else: #c0c0c0
  );
```

### Nesting if() functions

Because an `if()` function can take the place of whole or partial property values, it is possible to nest multiple `if()` functions.

For example, in this declaration we are using `if()` to set a `color` property value depending on various conditions. We have an outer `if()` function that returns a particular value depending on whether the `--scheme` custom property is set to `ice` or `fire` (with an `else` value of `black` that is returned if neither of the other conditions return true).

However, the two if condition values are also `if()` functions. These inner `if()` functions return an `lch()` color value if the browser supports `lch()`, or a hex value otherwise.

```css-nolint
color: if(
  style(--scheme: ice):
    if(
      supports(color: lch(7.1% 60.23 300.16)): lch(7.1% 60.23 300.16);
      else: #03045e
    );
  style(--scheme: fire):
    if(
      supports(color: lch(21.38% 44.22 40.66)): lch(21.38% 44.22 40.66);
      else: #621708
    );
  else: black
);
```

## Formal syntax

{{CSSSyntax}}

## Examples

### Basic `if()` usage

This example shows ...

#### HTML

#### CSS

xx

#### Result

{{EmbedLiveSample("Basic `color()` usage", "100%", "240")}}

xx

### Controlling a color scheme with `if()`

xx

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS values and units modules](/en-US/docs/Web/CSS/CSS_Values_and_Units)
- [Container style queries](/en-US/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#container_style_queries)
- [Media queries](/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [Feature queries](/en-US/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries)
