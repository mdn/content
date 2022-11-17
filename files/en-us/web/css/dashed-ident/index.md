---
title: <dashed-ident>
slug: Web/CSS/dashed-ident
page-type: css-type
tags:
  - CSS
  - CSS Data Type
  - Data Type
  - Draft
  - Layout
  - Reference
  - Web
  - dashed-ident
spec-urls:
  - https://drafts.csswg.org/css-values/#dashed-idents
---

{{CSSRef}}

The **`<dashed-ident>`** [CSS](/en-US/docs/Web/CSS) [data type](/en-US/docs/Web/CSS/CSS_Types) denotes an arbitrary string used as an {{glossary("identifier")}}. `<dashed-ident>`s are only every defined by the user and [CSS](/en-US/docs/Web/CSS) will never define a `<dashed-ident>`.

## Syntax

The syntax of `<dashed-ident>` is similar to CSS identifiers (such as property names), except that it is [case-sensitive](https://en.wikipedia.org/wiki/Case_sensitivity). It starts with 2 dashes, followed by the user defined identity.

## Usage notes

The double dash at the beginning make these easy to identify when reading through a CSS code block. They also will not clash with CSS-defined properties that will come in the future.

### CSS custom properties

When `<dashed-ident>` is used for [CSS Custom Properties](/en-US/docs/Web/CSS/Using_CSS_custom_properties), the property is declared first and then used within a [CSS var() function](/en-US/docs/Web/CSS/var).

#### Example

```css
html {
  --primary-color: red;
  --secondary-color: blue;
  --tertiary-color: green;
}
h1, h4 {
  color: var(--primary-color);
}
h2, h5 {
  color: var(--secondary-color);
}
h3, h6 {
  color: var(--tertiary-color);
}
```

### @color-profile

When `<dashed-ident>` is used for [@color-profile](/en-US/docs/Web/CSS/@color-profile) [At-rules](/en-US/docs/Web/CSS/At-rule), the property is declared first and then used within a [CSS color() function](/en-US/docs/Web/CSS/color_value/color).

#### Example

```css
@color-profile --my-color-profile {
  src: url("https://example.org/SWOP2006_Coated5v2.icc");
}
.header {
  background-color: color(--my-color-profile 0% 70% 20% 0%);
}
```

### @font-palette-values

When `<dashed-ident>` is used for [@font-palette-values](/en-US/docs/Web/CSS/@font-palette-values) [At-rules](/en-US/docs/Web/CSS/At-rule), the property is declared first and then used as the value for the [font-palette](/en-US/docs/Web/CSS/font-palette) property.

#### Example

```css
@font-palette-values --my-palette {
  font-family: Bixa;
  base-palette: 1;
  override-colors: 0 #ff0000;
}
h1, h2, h3, h4 {
  font-palette: --my-palette;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

_As this type is not a real type but a convenience type used to simplify the definition of other CSS syntax._

## See also

- [&lt;ident&gt;](/en-US/docs/Web/CSS/ident)
- [&lt;custom-ident&gt;](/en-US/docs/Web/CSS/custom-ident)
