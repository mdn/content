---
title: "`blur()` CSS function"
short-title: blur()
slug: Web/CSS/Reference/Values/filter-function/blur
page-type: css-function
browser-compat: css.types.filter-function.blur
sidebar: cssref
---

The **`blur()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/Reference/Values/Functions) applies a [Gaussian blur](https://en.wikipedia.org/wiki/Gaussian_blur) to the input image. Its result is a {{cssxref("filter-function")}}.

{{InteractiveExample("CSS Demo: blur()")}}

```css interactive-example-choice
filter: blur(0);
```

```css interactive-example-choice
filter: blur(4px);
```

```css interactive-example-choice
filter: blur(1.5rem);
```

```html interactive-example
<section id="default-example">
  <img
    class="transition-all"
    id="example-element"
    src="/shared-assets/images/examples/firefox-logo.svg"
    width="200" />
</section>
```

## Syntax

```css
/* No blur */
blur()
blur(0)

/* Blur with 8px radius */
blur(8px)

/* Blur with 1.17rem radius */
blur(1.17rem)
```

### Parameters

- {{cssxref("length")}} {{Optional_Inline}}
  - : Specifies the radius of the blur. It defines the value of the standard deviation to the Gaussian function, that is, how many pixels on the screen blend into each other. Therefore, a larger value will create more blur. A value of `0` leaves the input unchanged. The initial value for {{Glossary("interpolation")}} is `0`. Percentage values and negative values are invalid. The default value is `0`.

## Formal syntax

{{CSSSyntax}}

## Examples

### Using the SVG filter

This example shows three images for comparison: an image with a `blur()` filter function applied, an image with the equivalent SVG filter applied, and the original image.

#### SVG

The SVG {{SVGElement("feGaussianBlur")}} filter element can also be used to blur content. We set the `stdDeviation` to the blur radius, then we can reference the SVG effect by the ID of the {{SVGElement("filter")}}:

```html live-sample___svg-filter
<svg height="0" role="none">
  <filter id="blur35" color-interpolation-filters="sRGB">
    <feGaussianBlur stdDeviation="3.5" />
  </filter>
</svg>
```

The following declarations produce the same effect:

```css
filter: blur(3.5px);
filter: url("#blur35"); /* with embedded SVG */
filter: url("fileName.svg#blur35"); /* external SVG */
```

#### CSS

We include CSS that will blur elements based on their `css-filter` or `svg-filter` class:

```css live-sample___svg-filter
.css-filter {
  filter: blur(3.5px);
}

.svg-filter {
  filter: url("#blur35");
}
```

```css hidden live-sample___svg-filter
th,
td {
  padding: 5px;
}
```

```html hidden live-sample___svg-filter
<table>
  <thead>
    <tr>
      <th><code>blur()</code> filter</th>
      <th>SVG filter equivalent</th>
      <th>Original image</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <img
          class="css-filter"
          src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
          alt="Pride flag" />
      </td>
      <td>
        <img
          class="svg-filter"
          src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
          alt="Pride flag" />
      </td>
      <td>
        <img
          src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
          alt="Pride flag" />
      </td>
    </tr>
  </tbody>
</table>
```

{{EmbedLiveSample('svg-filter','100%','280')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS filter effects](/en-US/docs/Web/CSS/Guides/Filter_effects) module
- The other {{cssxref("filter-function")}} functions available to be used in values of the {{cssxref("filter")}} and {{cssxref("backdrop-filter")}} properties include:
  - {{cssxref("filter-function/brightness", "brightness()")}}
  - {{cssxref("filter-function/contrast", "contrast()")}}
  - {{cssxref("filter-function/drop-shadow", "drop-shadow()")}}
  - {{cssxref("filter-function/grayscale", "grayscale()")}}
  - {{cssxref("filter-function/hue-rotate", "hue-rotate()")}}
  - {{cssxref("filter-function/invert", "invert()")}}
  - {{cssxref("filter-function/opacity", "opacity()")}}
  - {{cssxref("filter-function/saturate", "saturate()")}}
  - {{cssxref("filter-function/sepia", "sepia()")}}
