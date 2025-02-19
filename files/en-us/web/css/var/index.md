---
title: var()
slug: Web/CSS/var
page-type: css-function
browser-compat: css.properties.custom-property.var
---

{{CSSRef}}

The **`var()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/CSS_Functions) can be used to insert the value of a [custom property](/en-US/docs/Web/CSS/--*) (sometimes called a "CSS variable") instead of any part of a value of another property.

{{EmbedInteractiveExample("pages/css/var.html")}}

The `var()` function cannot be used in property names, selectors or anything else besides property values. (Doing so usually produces invalid syntax, or else a value whose meaning has no connection to the variable.)

## Syntax

```css
/* Basic usage */
var(--custom-prop);

/* With fallback */
var(--custom-prop,);  /* empty value as fallback */
var(--custom-prop, initial); /* initial value of the property as fallback */
var(--custom-prop, #FF0000);
var(--custom-prop, var(--default-value));
var(--custom-prop, var(--default-value, red));
```

The first argument to the function is the name of the custom property to be substituted. An optional second argument to the function serves as a fallback value. If the custom property referenced by the first argument is not defined or equals a [CSS-wide keyword](/en-US/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types#css-wide_values), the function uses the second value.

The syntax of the fallback, like that of custom properties, allows commas. For example, `var(--foo, red, blue)` defines a fallback of `red, blue`; that is, anything between the first comma and the end of the function is considered a fallback value.

### Values

- `<custom-property-name>`

  - : A custom property's name represented by an identifier that starts with two dashes. Custom properties are solely for use by authors and users; CSS will never give them a meaning beyond what is presented here.

- `<declaration-value>`

  - : The custom property's fallback value, which is used in case the custom property is not defined or equals a [CSS-wide keyword](/en-US/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types#css-wide_values). This value may contain any character except some characters with special meaning like newlines, unmatched closing brackets, i.e. `)`, `]`, or `}`, top-level semicolons, or exclamation marks. The fallback value can itself be a custom property using the `var()` syntax. If the fallback value is omitted, and the custom property is not defined, the `var()` function resolves to an [invalid value](#invalid_values).

    > **Note:** `var(--a,)` is valid, specifying that if the `--a` custom property is not defined or equals a [CSS-wide keyword](/en-US/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types#css-wide_values), the `var()` should be replaced with nothing.

## Formal syntax

{{CSSSyntax}}

## Examples

### Using a custom property set on :root

#### CSS

```css
:root {
  --main-bg-color: pink;
}

body {
  background-color: var(--main-bg-color);
}
```

#### Result

{{EmbedLiveSample("Using a custom property set on :root")}}

Here, the value of the `background-color` property has been set via the custom property `--main-bg-color`. So the background color of the HTML body will be pink.

### Using a custom property before it is set

#### CSS

```css
body {
  background-color: var(--main-bg-color);
}

:root {
  --main-bg-color: pink;
}
```

#### Result

{{EmbedLiveSample("Using a custom property before it is set")}}

In this example, the background color of the HTML body will be pink even though the custom property is set later.

### Using a custom property set in another file

#### HTML

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="1.css" />
    <link rel="stylesheet" href="2.css" />
  </head>
  <body></body>
</html>
```

#### CSS

```css
/* 1.css */
body {
  background-color: var(--main-bg-color);
}
```

```css
/* 2.css */
:root {
  --main-bg-color: pink;
}
```

#### Result

{{EmbedLiveSample("Using a custom property set in another file")}}

The background color of the HTML body will be pink in this case even though the custom property is declared in another file.

### Custom properties with fallbacks for use when the property has not been set

#### HTML

```html
<div class="component">
  <h1 class="header">Header</h1>
  <p class="text">Text</p>
</div>
```

#### CSS

```css
/* In the component's style: */
.component .header {
  /* header-color isn't set, and so remains blue, the fallback value */
  color: var(--header-color, blue);
}

.component .text {
  color: var(--text-color, black);
}

/* In the larger application's style: */
.component {
  --text-color: #080;
}
```

#### Result

{{EmbedLiveSample("Custom properties with fallbacks for use when the property has not been set")}}

Since `--header-color` isn't set, the text "Header" will be blue, the fallback value.

### Using a custom property as a fallback

#### CSS

```css
:root {
  --backup-bg-color: teal;
}

body {
  background-color: var(--main-bg-color, var(--backup-bg-color, white));
}
```

#### Result

{{EmbedLiveSample("Using a custom property as a fallback")}}

Since `--main-bg-color` isn't set, the body's `background-color` will fall back to `--backup-bg-color`, which is teal.

### Invalid values

`var()` functions can resolve to invalid values if:

- The custom property is not defined and no fallback value is provided.
- The custom property is defined but its value is an invalid value for the property it is used in.

When this happens, the property is treated as if it has value {{cssxref("unset")}}. This is because variables can't "fail early" like other syntax errors can, so by the time the user agent realizes a property value is invalid, it has already thrown away the other cascaded values.

For example:

#### HTML

```html
<p class="p1">Undefined variable</p>
<p class="p2">Invalid variable</p>
<p class="p3">Invalid literal color</p>
```

#### CSS

```css
p {
  color: red;
}

.p1 {
  color: var(--invalid-color);
}

.p2 {
  --invalid-color: 20px;
  color: var(--invalid-color);
}

.p3 {
  color: 20px;
}
```

#### Result

{{EmbedLiveSample("Invalid values")}}

Note how the paragraphs using `var()` are reset to the default black, but the paragraph with an invalid literal color is still red, because the `color: 20px` declaration is simply ignored.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("env","env(…)")}} – read‑only environment variables controlled by the user‑agent.
- [Using CSS custom properties (variables)](/en-US/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties)
- {{cssxref("@property")}} at-rule
- [CSS custom properties for cascading variables](/en-US/docs/Web/CSS/CSS_cascading_variables) module
