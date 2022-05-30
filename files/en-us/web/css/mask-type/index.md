---
title: mask-type
slug: Web/CSS/mask-type
tags:
  - CSS
  - CSS Masking
  - CSS Property
  - Reference
  - SVG
  - recipe:css-property
browser-compat: css.properties.mask-type
---
{{CSSRef}}

The **`mask-type`** [CSS](/en-US/docs/Web/CSS) property sets whether an SVG {{svgElement("mask")}} element is used as a _luminance_ or an _alpha_ mask. It applies to the `<mask>` element itself.

```css
/* Keyword values */
mask-type: luminance;
mask-type: alpha;

/* Global values */
mask-type: inherit;
mask-type: initial;
mask-type: revert;
mask-type: revert-layer;
mask-type: unset;
```

This property may be overridden by the {{cssxref("mask-mode")}} property, which has the same effect but applies to the element where the mask is used. Alpha masks will generally be faster to render.

## Syntax

The `mask-type` property is specified as one of the keyword values listed below.

### Values

- `luminance`
  - : Is a keyword indicating that the associated mask image is a luminance mask, i.e., that its [relative luminance](https://en.wikipedia.org/wiki/Luminance_%28relative%29) values must be used when applying it.
- `alpha`
  - : Is a keyword indicating that the associated mask image is an alpha mask, i.e., that its [alpha channel](https://en.wikipedia.org/wiki/Alpha_compositing) values must be used when applying it.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting an alpha mask

#### HTML

```html
<div class="redsquare"></div>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink" width="0" height="0">
  <defs>
    <mask id="m" maskContentUnits="objectBoundingBox"
      style="mask-type:alpha">
      <rect x=".1" y=".1" width=".8" height=".8"
          fill="red" fill-opacity="0.7"/>
    </mask>
  </defs>
</svg>
```

#### CSS

```css
.redsquare {
  height: 100px;
  width: 100px;
  background-color: rgb(128, 128, 128);
  border: solid 1px black;
  mask: url("#m");
}
```

#### Result

{{EmbedLiveSample('Setting_an_alpha_mask', '100%', '102')}}

### Setting a luminance mask

#### HTML

```html
<div class="redsquare"></div>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink" width="0" height="0">
  <defs>
    <mask id="m" maskContentUnits="objectBoundingBox"
      style="mask-type:luminance">
      <rect x=".1" y=".1" width=".8" height=".8"
          fill="red" fill-opacity="0.7"/>
    </mask>
  </defs>
</svg>
```

#### CSS

```css
.redsquare {
  height: 100px;
  width: 100px;
  background-color: rgb(128, 128, 128);
  border: solid 1px black;
  mask: url("#m");
}
```

#### Result

{{EmbedLiveSample('Setting_a_luminance_mask', '100%', '102')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Other mask-related properties: {{cssxref("mask")}}, {{cssxref("mask-mode")}}
