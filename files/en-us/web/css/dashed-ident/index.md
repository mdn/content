---
title: <dashed-ident>
slug: Web/CSS/dashed-ident
page-type: css-type
spec-urls: https://drafts.csswg.org/css-values/#dashed-idents
---

{{CSSRef}}

The **`<dashed-ident>`** [CSS](/en-US/docs/Web/CSS) [data type](/en-US/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) denotes an arbitrary string used as an {{glossary("identifier")}}.

## Syntax

The syntax of `<dashed-ident>` is similar to CSS identifiers (such as property names), except that it is [case-sensitive](https://en.wikipedia.org/wiki/Case_sensitivity). It starts with two dashes, followed by the user-defined identifier.

The double dash at the beginning makes them easily identifiable when reading through a CSS code block, and helps to avoid name clashes with standard CSS keywords.

Just like [`<custom-ident>`](/en-US/docs/Web/CSS/custom-ident) `<dashed-ident>`s are defined by the user, but unlike `<custom-ident>` [CSS](/en-US/docs/Web/CSS) will never define a `<dashed-ident>`.

## Examples

### Using with CSS custom properties

When `<dashed-ident>` is used with [CSS custom properties](/en-US/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties), the property is declared first and then used within a [CSS var() function](/en-US/docs/Web/CSS/var).

```css
html {
  --primary-color: red;
  --secondary-color: blue;
  --tertiary-color: green;
}

h1,
h4 {
  color: var(--primary-color);
}

h2,
h5 {
  color: var(--secondary-color);
}

h3,
h6 {
  color: var(--tertiary-color);
}
```

### Using with @color-profile

When `<dashed-ident>` is used with the [@color-profile](/en-US/docs/Web/CSS/@color-profile) at-rule, the at-rule is declared first and then used within a [CSS color() function](/en-US/docs/Web/CSS/color_value/color).

```css
@color-profile --my-color-profile {
  src: url("https://example.org/SWOP2006_Coated5v2.icc");
}

.header {
  background-color: color(--my-color-profile 0% 70% 20% 0%);
}
```

### Using with @font-palette-values

When `<dashed-ident>` is used with the [@font-palette-values](/en-US/docs/Web/CSS/@font-palette-values) at-rule, the at-rule is declared first and then used as the value for the [font-palette](/en-US/docs/Web/CSS/font-palette) property.

```css
@font-palette-values --my-palette {
  font-family: Bixa;
  base-palette: 1;
  override-colors: 0 #ff0000;
}

h1,
h2,
h3,
h4 {
  font-palette: --my-palette;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

_As this type is not a real type but a convenience type used to simplify the definition of other CSS syntax, there is no browser compatibility information as such._

## See also

- [&lt;ident&gt;](/en-US/docs/Web/CSS/ident)
- [&lt;custom-ident&gt;](/en-US/docs/Web/CSS/custom-ident)
