---
title: "`param()` CSS function"
short-title: param()
slug: Web/CSS/Reference/Values/param
page-type: css-function
browser-compat: css.types.param
sidebar: cssref
---

The **`param()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/Reference/Values/Functions) is used to set link parameters. This can be done using the {{cssxref("link-parameters")}} CSS function, in the fragment URL of an external resource, or in the [`<url-modifier>`](/en-US/docs/Web/CSS/Reference/Values/url_function#url-modifier) of the `url()` CSS function.

## Formal definition

{{CSSInfo}}

## Examples

### Using `link-paramters` property

In this example an SVG file has attributes set with 

```svg
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

```css
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

{{EmbedLiveSample('unsing_link-parameters_property', '100%', '300px')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("link-parameters")}}
- {{cssxref("env")}}
