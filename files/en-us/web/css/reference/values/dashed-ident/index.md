---
title: <dashed-ident>
slug: Web/CSS/Reference/Values/dashed-ident
page-type: css-type
spec-urls: https://drafts.csswg.org/css-values/#dashed-idents
sidebar: cssref
---

The **`<dashed-ident>`** [CSS](/en-US/docs/Web/CSS) [data type](/en-US/docs/Web/CSS/Reference/Values/Data_types) is a case-sensitive {{cssxref("custom-ident")}} starting with two dashes that denotes an arbitrary string used as an {{glossary("identifier")}}.

## Syntax

The syntax of `<dashed-ident>` is similar to CSS identifiers (such as property names), except that it is case-sensitive. It is a user-defined identifier preceded by two dashes (`--`).

The double dash at the beginning makes them easily identifiable when reading through a CSS code block, and helps to avoid name clashes with standard CSS keywords.

Just like {{cssxref("custom-ident")}}s, `<dashed-ident>`s are defined by the user. However, some `<custom-ident>`s are defined by the CSS language itself; `<dashed-ident>`s will never be defined in CSS.

## Examples

### Using with CSS custom properties

When a `<dashed-ident>` is used as a [CSS custom property](/en-US/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties), the property is declared first, and then the `<dashed-ident>` is used within a [CSS `var()` function](/en-US/docs/Web/CSS/Reference/Values/var).

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

When a `<dashed-ident>` is used with the {{cssxref("@color-profile")}} at-rule, the at-rule is declared first, and then the `<dashed-ident>` is used within a [CSS `color()` function](/en-US/docs/Web/CSS/Reference/Values/color_value/color).

```css
@color-profile --my-color-profile {
  src: url("https://example.org/SWOP2006_Coated5v2.icc");
}

.header {
  background-color: color(--my-color-profile 0% 70% 20% 0%);
}
```

### Using with @font-palette-values

When a `<dashed-ident>` is used with the {{cssxref("@font-palette-values")}} at-rule, the at-rule is declared first, and then the `<dashed-ident>` is used as the value for the {{cssxref("font-palette")}} property.

```css
@font-palette-values --my-palette {
  font-family: "Bixa";
  base-palette: 1;
  override-colors: 0 red;
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

- {{cssxref("ident")}}
- {{cssxref("custom-ident")}}
