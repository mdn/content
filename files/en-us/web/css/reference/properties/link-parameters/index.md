---
title: "`link-parameters` CSS property"
short-title: link-parameters
slug: Web/CSS/Reference/Properties/link-parameters
page-type: css-property
browser-compat: css.properties.link-parameters
sidebar: cssref
---

The **`link-parameters`** [CSS](/en-US/docs/Web/CSS) property sets values of external resources, such as SVGs, whose attributes have been set with the {{cssxref("env")}} CSS function

## Syntax

```css-nolint
/* single value */
link-parameters: param(--color, red);

/* multiple values */
link-parameters:
  param(--color1, red),
  param(--color2, blue),
  param(--color3, green);
```

## Values

- `none`
  - : No link parameters are specified.

- {{cssxref("param")}}
  - : A list of one or more link parameters.

## Formal definition

{{CSSInfo}}

## Example

### Updating the colors of an external SVG file

In this example the original SVG, on the left, is a square with `stroke` attribute set with `env(--color1, chartreuse)` and `fill` attribute set with `env(--color2, darkgreen)`. The `link-parameters` property is used to update both of these attributes on the updated square, on the right, with multiple {{cssxref("param")}} CSS functions.

```html
<div class="squares">
  <img class="original" src="square.svg" />
  <img class="updated" src="square.svg" />
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
.updated {
  link-parameters:
    param(--color1, red),
    param(--color2, tomato);
}
```

{{EmbedLiveSample('updating_the_colors_of_an_external_SVG_file', '100%', '210px')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("param")}}
- {{cssxref("env")}}
