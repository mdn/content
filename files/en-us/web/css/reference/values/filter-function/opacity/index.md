---
title: "`opacity()` CSS function"
short-title: opacity()
slug: Web/CSS/Reference/Values/filter-function/opacity
page-type: css-function
browser-compat: css.types.filter-function.opacity
sidebar: cssref
---

The **`opacity()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/Reference/Values/Functions) applies transparency to the samples in the input image. Its result is a {{cssxref("filter-function")}}.

{{InteractiveExample("CSS Demo: opacity()")}}

```css interactive-example-choice
filter: opacity(1);
```

```css interactive-example-choice
filter: opacity(80%);
```

```css interactive-example-choice
filter: opacity(50%);
```

```css interactive-example-choice
filter: opacity(0.2);
```

```css interactive-example-choice
filter: opacity(0);
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

> [!NOTE]
> This function is similar to the more established {{Cssxref("opacity")}} property. The difference is that with filters, some browsers provide hardware acceleration for better performance.

## Syntax

```css
/* Completely transparent */
opacity(0)

/* No change */
opacity()
opacity(1)
opacity(100%)

/* 60% opacity */
opacity(.6)
opacity(60%)
```

### Parameters

- {{cssxref("&lt;number&gt;")}} or {{cssxref("&lt;percentage&gt;")}} {{Optional_Inline}}
  - : Specifies the amount of the conversion. A value of `0%` is completely transparent, while a value of `100%` leaves the input unchanged. Values between `0%` and `100%` are linear multipliers on the effect. Values above `100%` are allowed, but the effect is clamped to `100%`. The initial value for {{Glossary("interpolation")}} is `1`. The default value is `1`.

## Formal syntax

{{CSSSyntax}}

## Examples

### Using the SVG filter

This example shows three images for comparison: an image with an `opacity()` filter function applied, an image with the equivalent SVG filter applied, and the original image.

#### SVG

The SVG {{SVGElement("feComponentTransfer")}} filter element can also be used to adjust the opacity of content by creating equivalent transparency on a nested {{SVGElement("feFuncA")}} table element. We set the `tableValues` for the alpha filter primitive, then we can reference the SVG effect by the ID of the {{SVGElement("filter")}}:

```html live-sample___svg-filter
<svg height="0" role="none">
  <filter id="opacity70" color-interpolation-filters="sRGB">
    <feComponentTransfer>
      <feFuncA type="table" tableValues="0 0.7" />
    </feComponentTransfer>
  </filter>
</svg>
```

The following declarations produce the same effect:

```css
filter: opacity(0.7);
filter: opacity(70%);
filter: url("#opacity70"); /* with embedded SVG */
filter: url("fileName.svg#opacity70"); /* external SVG */
```

#### CSS

We include CSS that will adjust the opacity of elements based on their `css-filter` or `svg-filter` class:

```css live-sample___svg-filter
.css-filter {
  filter: opacity(0.7);
}

.svg-filter {
  filter: url("#opacity70");
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
      <th><code>opacity()</code> filter</th>
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
  - {{cssxref("filter-function/grayscale", "grayscale()")}}
  - {{cssxref("filter-function/hue-rotate", "hue-rotate()")}}
  - {{cssxref("filter-function/invert", "invert()")}}
  - {{cssxref("filter-function/saturate", "saturate()")}}
  - {{cssxref("filter-function/sepia", "sepia()")}}
- The CSS {{cssxref("opacity")}} property
