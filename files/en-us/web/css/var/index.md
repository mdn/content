---
title: var()
slug: Web/CSS/var
tags:
  - CSS
  - CSS Custom Properties
  - CSS Function
  - CSS Variables
  - Function
  - Reference
  - Variables
  - var
  - var()
browser-compat: css.properties.custom-property.var
---
{{CSSRef}}

The **`var()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/CSS_Functions) can be used to insert the value of a [custom property](/en-US/docs/Web/CSS/--*) (sometimes called a "CSS variable") instead of any part of a value of another property.

{{EmbedInteractiveExample("pages/css/var.html")}}

The `var()` function cannot be used in property names, selectors or anything else besides property values. (Doing so usually produces invalid syntax, or else a value whose meaning has no connection to the variable.)

## Syntax

The first argument to the function is the name of the custom property to be substituted. An optional second argument to the function serves as a fallback value. If the custom property referenced by the first argument is invalid, the function uses the second value.

{{csssyntax}}

> **Note:** The syntax of the fallback, like that of custom properties, allows commas. For example, `var(--foo, red, blue)` defines a fallback of `red, blue`; that is, anything between the first comma and the end of the function is considered a fallback value.

### Values

- `<custom-property-name>`
  - : A custom property's name represented by an identifier that starts with two dashes. Custom properties are solely for use by authors and users; CSS will never give them a meaning beyond what is presented here.
- `<declaration-value>`
  - : The custom property's fallback value, which is used in case the custom property is invalid in the used context. This value may contain any character except some characters with special meaning like newlines, unmatched closing brackets, i.e. `)`, `]`, or `}`, top-level semicolons, or exclamation marks. The fallback value can itself be a custom property using the `var()` syntax.

## Examples

### Using a custom property set on :root

```css
:root {
  --main-bg-color: pink;
}

body {
  background-color: var(--main-bg-color);
}
```

### Custom properties with fallbacks for use when the property has not been set

```css
/* Fallback */
/* In the component's style: */
.component .header {
  color: var(--header-color, blue); /* header-color isn't set, and so remains blue, the fallback value */
}

.component .text {
  color: var(--text-color, black);
}

/* In the larger application's style: */
.component {
  --text-color: #080;
}
```

### Using a custom property as a fallback

```css
:root {
  --backup-bg-color: teal;
}

body {
  /* main-bg-color isn't set, it will fall back to backup-bg-color. If backup-bg-color isn't set it will fall back to white. */
  color: var(--main-bg-color, var(--backup-bg-color, white));
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("env","env(…)")}} – read‑only environment variables controlled by the user‑agent.
- [Using CSS variables](/en-US/docs/Web/CSS/Using_CSS_custom_properties)
