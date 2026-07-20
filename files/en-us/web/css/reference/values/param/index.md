---
title: "`param()` CSS function"
short-title: param()
slug: Web/CSS/Reference/Values/param
page-type: css-function
browser-compat: css.types.param
sidebar: cssref
---

The **`param()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/Reference/Values/Functions) is used to set link parameters. This can be done using the {{cssxref("link-parameters")}} CSS function, in the fragment URL of an external resource, or in the [`<url-modifier>`](/en-US/docs/Web/CSS/Reference/Values/url_function#url-modifier) of the `url()` CSS function.

## Syntax

```css
/* a single value */
param(--color, red);

/* multiple values */
param(--color1, red),
param(--color2, blue),
param(--color3, green);
```

## Values

- [`<dashed-ident>`](/en-US/docs/Web/CSS/Reference/Values/dashed-ident)
  - A `<dashed-ident>`is a user defined variable that is used as an identifier in the {{cssxref("env")}} CSS function to update the value.

- `<declaration_value>` {{optional_inline}}
  - : A `<declaration_value>` is the value of the attribute being updated. If the `<declaration-value>` is omitted, it represents an empty value.

## Formal definition

{{CSSInfo}}

## Examples

All of the following examples use the same SVG file, which has attributes set with {{cssxref("env")}} CSS function.

```svg-nolint
<!-- example of the code in the external SVG file -->
<!-- svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <rect
    width="100"
    height="100"
    stroke="env(--color1, chartreuse)"
    stroke-width="10"
    fill="env(--color2, darkgreen)"
   />
</svg -->
```

### Using `link-parameters` property

In this example the SVG attributes are updated with the {{cssxref("link-parameters")}} CSS property and `param()` function.

```html
<div class="squares">
  <img class="original" src="square.svg" />
  <img class="greyscale" src="square.svg" />
  <img class="high-contrast" src="square.svg" />
</div>
```

```css hidden
.squares {
  height: 200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
img {
  height: 100%;
}
```

```css-nolint
.greyscale {
  link-parameters:
    param(--color1, slategrey),
    param(--color2, lightgrey);
  &:hover {
    link-parameters:
      param(--color1, lightgrey),
      param(--color2, slategrey);
  }
}
.high-contrast {
  link-parameters:
    param(--color1, fuchsia),
    param(--color2, yellow);
  &:hover {
    link-parameters:
      param(--color1, yellow),
      param(--color2, fuchsia);
  }
}
```

{{EmbedLiveSample('using_link-parameters_property', '100%', '210px')}}

### Passing `param()` into URL modifier

In this example the SVG attributes are updated by passing the `param()` function into the URL fragment of the [`src`](/en-US/docs/Web/HTML/Reference/Elements/img#src) attribute of the {{htmlelement("img")}} HTML element.

```html-nolint
<img
  src="square.svg#param(--color1, slategrey)&param(--color2, lightgrey)"
  alt="greyscale version of square"
/>
```

### Using `param()` with `background-image` property

In this example the SVG attributes are updated by passing the `param()` function into the {{cssxref("url","url()")}} data type of the {{cssxref("background-image")}} CSS property.

```css-nolint
.foo {
  background-image: url(
    "square.svg"
    param(--color1, slategrey),
    param(--color2, lightgrey)
  );
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("link-parameters")}}
- {{cssxref("env")}}
