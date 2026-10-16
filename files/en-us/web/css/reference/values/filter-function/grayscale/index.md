---
title: "`grayscale()` CSS function"
short-title: grayscale()
slug: Web/CSS/Reference/Values/filter-function/grayscale
page-type: css-function
browser-compat: css.types.filter-function.grayscale
sidebar: cssref
---

The **`grayscale()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/Reference/Values/Functions) converts the input image to grayscale. Its result is a {{cssxref("filter-function")}}.

{{InteractiveExample("CSS Demo: grayscale()")}}

```css interactive-example-choice
filter: grayscale(0);
```

```css interactive-example-choice
filter: grayscale(0.2);
```

```css interactive-example-choice
filter: grayscale(60%);
```

```css interactive-example-choice
filter: grayscale(1);
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
/* No grayscale conversion */
grayscale(0)

/* Complete grayscale conversion */
grayscale()
grayscale(1)
grayscale(100%)

/* 60% grayscale conversion */
grayscale(.6)
grayscale(60%)
```

### Parameters

- {{cssxref("&lt;number&gt;")}} or {{cssxref("&lt;percentage&gt;")}} {{Optional_Inline}}
  - : Specifies the amount of the conversion. A value of `100%` is completely grayscale, while a value of `0%` leaves the input unchanged. Values between `0%` and `100%` are linear multipliers on the effect. The initial value for {{Glossary("interpolation")}} is `0`. The default value is `1`.

## Formal syntax

{{CSSSyntax}}

## Examples

### Using the SVG filter

This example shows three images for comparison: an image with a `grayscale()` filter function applied, an image with the equivalent SVG filter applied, and the original image.

#### SVG

The SVG {{SVGElement("feColorMatrix")}} filter element can also be used to convert content to grayscale. We set the `values` for the color matrix, then we can reference the SVG effect by the ID of the {{SVGElement("filter")}}:

```html live-sample___svg-filter
<svg height="0" role="none">
  <filter id="grayscale70" color-interpolation-filters="sRGB">
    <feColorMatrix
      type="matrix"
      values="0.44882 0.50064 0.05054 0 0
              0.14882 0.80064 0.05054 0 0
              0.14882 0.50064 0.35054 0 0
              0 0 0 1 0" />
  </filter>
</svg>
```

The following declarations produce the same effect:

```css
filter: grayscale(0.7);
filter: grayscale(70%);
filter: url("#grayscale70"); /* with embedded SVG */
filter: url("fileName.svg#grayscale70"); /* external SVG */
```

#### CSS

We include CSS that will convert elements to grayscale based on their `css-filter` or `svg-filter` class:

```css live-sample___svg-filter
.css-filter {
  filter: grayscale(0.7);
}

.svg-filter {
  filter: url("#grayscale70");
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
      <th><code>grayscale()</code> filter</th>
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
  - {{cssxref("filter-function/blur", "blur()")}}
  - {{cssxref("filter-function/brightness", "brightness()")}}
  - {{cssxref("filter-function/contrast", "contrast()")}}
  - {{cssxref("filter-function/drop-shadow", "drop-shadow()")}}
  - {{cssxref("filter-function/hue-rotate", "hue-rotate()")}}
  - {{cssxref("filter-function/invert", "invert()")}}
  - {{cssxref("filter-function/opacity", "opacity()")}}
  - {{cssxref("filter-function/saturate", "saturate()")}}
  - {{cssxref("filter-function/sepia", "sepia()")}}
