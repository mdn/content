---
title: "`brightness()` CSS function"
short-title: brightness()
slug: Web/CSS/Reference/Values/filter-function/brightness
page-type: css-function
browser-compat: css.types.filter-function.brightness
sidebar: cssref
---

The **`brightness()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/Reference/Values/Functions) applies a linear multiplier value on an element or an input image, making the image appear brighter or darker. Its result is a {{cssxref("filter-function")}}.

{{InteractiveExample("CSS Demo: brightness()")}}

```css interactive-example-choice
filter: brightness(1);
```

```css interactive-example-choice
filter: brightness(1.75);
```

```css interactive-example-choice
filter: brightness(50%);
```

```css interactive-example-choice
filter: brightness(0);
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
/* Completely black */
brightness(0)

/* No change */
brightness()
brightness(1)
brightness(100%)

/* 60% brightness */
brightness(.6)
brightness(60%)

/* Double brightness */
brightness(2)
brightness(200%)
```

### Parameters

- {{cssxref("&lt;number&gt;")}} or {{cssxref("&lt;percentage&gt;")}} {{Optional_Inline}}
  - : Specifies the amount of the conversion. A value less than `100%` darkens the input image or element, while a value over `100%` brightens it. A value of `0%` creates a completely black image or element, while a value of `100%` leaves the input unchanged. Values between `0%` and `100%` are linear multipliers on the effect. Values greater than `100%` are allowed, providing brighter results. The initial value for {{Glossary("interpolation")}} is `1`. Negative values are not allowed. The default value is `1`.

## Formal syntax

{{CSSSyntax}}

## Examples

### Applying brightness using the backdrop-filter property

This example shows how to apply the `brightness()` filter to a paragraph via the {{cssxref("backdrop-filter")}} CSS property.

#### CSS

```css
.container {
  background: url("be_fierce.jpg") no-repeat right / contain #d4d5b2;
}
p {
  backdrop-filter: brightness(150%);
  text-shadow: 2px 2px white;
}
```

```css hidden
.container {
  padding: 5rem 3rem 1rem;
  width: 30rem;
}
p {
  padding: 0.5rem;
  color: black;
  font-size: 2rem;
  font-family: sans-serif;
}
```

```html hidden
<div class="container">
  <p>
    Text on images can be illegible and inaccessible even with a drop shadow.
  </p>
</div>
```

#### Result

{{EmbedLiveSample('Applying_brightness_using_the_backdrop_filter_property', '100%', '280')}}

In this example, the colors in the area behind the `<p>` element shift linearly. If the `backdrop-filter` property was set to `brightness(0%)`, the `<div>` area with the `<p>` element would have been black and hidden the image behind. At `brightness(100%)`, the `<div>` area color would be the same as the input `#d4d5b2`, and the image behind would be completely transparent. With the brightness set to `150%` as in this example, the colors in the image behind are getting hidden by the brightness of the `<div>` element.

### Applying brightness using the filter property

In this example, a `brightness()` filter is applied to the entire element, including content, border, and background image via the {{cssxref("filter")}} CSS property. The result shows three variations of different brightness values.

```css
p:first-of-type {
  filter: brightness(50%);
}
p:last-of-type {
  filter: brightness(200%);
}
```

```css hidden
p {
  text-shadow: 2px 2px blue;
  background-color: magenta;
  color: palegoldenrod;
  border: 1em solid rebeccapurple;
  box-shadow:
    inset -5px -5px red,
    5px 5px yellow;
  padding: 0.25rem;
  font-size: 1.25rem;
  font-family: sans-serif;
  width: 85vw;
}
```

```html hidden
<p>This paragraph has reduced brightness.</p>
<p>This paragraph has normal brightness.</p>
<p>This paragraph has increased brightness.</p>
```

{{EmbedLiveSample('Applying_brightness_using_the_filter_property','100%','280')}}

### Using the SVG filter

This example shows three images for comparison: an image with a `brightness()` filter function applied, an image with the equivalent SVG filter applied, and the original image.

#### SVG

The SVG {{SVGElement("feComponentTransfer")}} filter element can also be used to adjust the brightness of content by creating equivalent brightness adjustments on nested {{SVGElement("feFuncR")}}, {{SVGElement("feFuncG")}}, and {{SVGElement("feFuncB")}} linear elements. We set the same `slope` for the red, green, and blue filter primitives, then we can reference the SVG effect by the ID of the {{SVGElement("filter")}}:

```html live-sample___svg-filter
<svg height="0" role="none">
  <filter id="brightness75" color-interpolation-filters="sRGB">
    <feComponentTransfer>
      <feFuncR type="linear" slope="0.75" />
      <feFuncG type="linear" slope="0.75" />
      <feFuncB type="linear" slope="0.75" />
    </feComponentTransfer>
  </filter>
</svg>
```

The following declarations produce the same effect:

```css
filter: brightness(0.75);
filter: brightness(75%);
filter: url("#brightness75"); /* with embedded SVG */
filter: url("fileName.svg#brightness75"); /* external SVG */
```

#### CSS

We include CSS that will adjust the brightness of elements based on their `css-filter` or `svg-filter` class:

```css live-sample___svg-filter
.css-filter {
  filter: brightness(0.75);
}

.svg-filter {
  filter: url("#brightness75");
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
      <th><code>brightness()</code> filter</th>
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
  - {{cssxref("filter-function/contrast", "contrast()")}}
  - {{cssxref("filter-function/drop-shadow", "drop-shadow()")}}
  - {{cssxref("filter-function/grayscale", "grayscale()")}}
  - {{cssxref("filter-function/hue-rotate", "hue-rotate()")}}
  - {{cssxref("filter-function/invert", "invert()")}}
  - {{cssxref("filter-function/opacity", "opacity()")}}
  - {{cssxref("filter-function/saturate", "saturate()")}}
  - {{cssxref("filter-function/sepia", "sepia()")}}
