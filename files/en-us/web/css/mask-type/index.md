---
title: mask-type
slug: Web/CSS/mask-type
page-type: css-property
browser-compat: css.properties.mask-type
---

{{CSSRef}}

The **`mask-type`** [CSS](/en-US/docs/Web/CSS) property sets whether an SVG {{svgElement("mask")}} element is used as a _luminance_ or an _alpha_ mask. It applies to the `<mask>` element itself.

This property may be overridden by the {{cssxref("mask-mode")}} property, which has the same effect but applies to the element where the mask is used. Alpha masks will generally be faster to render.

## Syntax

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

```html live-sample___mask-type-alpha-example
<section>
  <div class="red-square"></div>
</section>

<svg
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  width="0"
  height="0">
  <defs>
    <mask id="m" maskContentUnits="objectBoundingBox">
      <rect
        x=".2"
        y=".1"
        width=".4"
        height=".8"
        fill="yellow"
        fill-opacity="0.7" />
    </mask>
  </defs>
</svg>
```

#### CSS

```css live-sample___mask-type-alpha-example
* {
  margin: 0px;
  padding: 0px;
}

section {
  width: fit-content;
  border: 1px solid blue;
}

.red-square {
  height: 100px;
  width: 100px;
  background-color: red;
  border: solid 1px black;
  mask: url("#m");
}

mask {
  mask-type: alpha;
}
```

#### Result

{{EmbedLiveSample("mask-type-alpha-example", "", "150px")}}

### Setting a luminance mask

#### HTML

```html live-sample___mask-type-luminance-example
<section>
  <div class="red-square"></div>
</section>

<svg
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  width="0"
  height="0">
  <defs>
    <mask id="m" maskContentUnits="objectBoundingBox">
      <rect
        x=".2"
        y=".1"
        width=".4"
        height=".8"
        fill="yellow"
        fill-opacity="0.7" />
    </mask>
  </defs>
</svg>
```

#### CSS

```css live-sample___mask-type-luminance-example
* {
  margin: 0px;
  padding: 0px;
}

section {
  width: fit-content;
  border: 1px solid blue;
}

.red-square {
  height: 100px;
  width: 100px;
  background-color: red;
  border: solid 1px black;
  mask: url("#m");
}

mask {
  mask-type: luminance;
}
```

#### Result

{{EmbedLiveSample("mask-type-luminance-example", "", "150px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Other mask-related properties: {{cssxref("mask")}}, {{cssxref("mask-mode")}}
