---
title: brightness()
slug: Web/CSS/filter-function/brightness
page-type: css-function
browser-compat: css.types.filter-function.brightness
---

{{CSSRef}}

The **`brightness()`** [CSS](/en-US/docs/Web/CSS) {{cssxref("&lt;filter-function&gt;")}} applies a linear multiplier value on an element or an input image, making the image appear brighter or darker.

{{EmbedInteractiveExample("pages/css/function-brightness.html")}}

## Syntax

```css
brightness(amount)
```

### Values

- `amount`
  - : Brightness specified as a {{cssxref("&lt;number&gt;")}} or a {{cssxref("&lt;percentage&gt;")}}. A value less than `100%` darkens the input image or element, while a value over `100%` brightens it. A value of `0%` creates a completely black image or element, while a value of `100%` leaves the input unchanged. Other values between `0%` to `100%` have a linear multiplier effect. Values greater than `100%` are allowed, providing brighter results. The initial value for {{Glossary("interpolation")}} is `1`. Negative values are not allowed. The default value, when nothing is specified, is `1`.

The following are pairs of equivalent values:

```css
brightness(0) /* Brightness is reduced to zero, so input turns black */
brightness(0%)

brightness(0.4) /* Brightness of input is reduced to 40%, so input is 60% darker */
brightness(40%)

brightness(1) /* Brightness of input is not changed */
brightness(100%)

brightness(2) /* Brightness of input is doubled */
brightness(200%)
```

### Formal syntax

{{csssyntax}}

## Examples

### Applying brightness using the backdrop-filter property

This example shows how to apply the `brightness()` filter to a paragraph via the [`backdrop-filter`](/en-US/docs/Web/CSS/backdrop-filter) CSS property.

#### CSS

```css
.container {
  background: url(image.jpg) no-repeat right / contain #d4d5b2;
}
p {
  backdrop-filter: brightness(150%);
  text-shadow: 2px 2px #ffffff;
}
```

```css hidden
.container {
  padding: 5rem 3rem 1rem;
  width: 30rem;
}
p {
  padding: 0.5rem;
  color: #000000;
  font-size: 2rem;
  font-family: sans-serif;
}
```

```html hidden
<div class="container" style="background-image: url(be_fierce.jpg);">
  <p>
    Text on images can be illegible and inaccessible even with a drop shadow.
  </p>
</div>
```

#### Result

{{EmbedLiveSample('Applying_brightness_using_the_backdrop_filter_property', '100%', '280')}}

In this example, the colors in the area behind the `<p>` element shift linearly. If the `backdrop-filter` property was set to `brightness(0%)`, the `<div>` area with the `<p>` element would have been black and hidden the image behind. At `brightness(100%)`, the `<div>` area color would be the same as the input `#d4d5b2`, and the image behind would be completely transparent. With the brightness set to `150%` as in this example, the colors in the image behind are getting hidden by the brightness of the `<div>` element.`

### Applying brightness using the filter property

In this example, a `brightness()` filter is applied to the entire element, including content, border, and background image via the [`filter`](/en-US/docs/Web/CSS/filter) CSS property. The result shows three variations of different brightness values.

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

### Applying brightness using the url() SVG brightness filter

The SVG {{SVGElement("filter")}} element is used to define custom filter effects that can then be referenced by [`id`](/en-US/docs/Web/HTML/Global_attributes#id). The `<filter>` element's {{SVGElement("feComponentTransfer")}} primitive enables pixel-level color remapping.

In this example, to create a filter that darkens the content on which it is applied by 25% (i.e., 75% of the original brightness), the `slope` attribute is set to `0.75`. We can then reference the filter by `id`.

Given the following:

```css hidden
.filter {
  filter: brightness(0.75);
}
svg {
  position: absolute;
}
```

```html
<svg role="none">
  <filter id="darken25" color-interpolation-filters="sRGB">
    <feComponentTransfer>
      <feFuncR type="linear" slope="0.75" />
      <feFuncG type="linear" slope="0.75" />
      <feFuncB type="linear" slope="0.75" />
    </feComponentTransfer>
  </filter>
</svg>
```

The following declarations produce similar effects:

```css
filter: brightness(75%);
filter: url(#darken25); /* with embedded SVG */
filter: url(folder/fileName.svg#darken25); /* external svg filter definition */
```

In the images below, the first one has a `brightness()` filter function applied, the second one has a similar SVG brightness function applied, and the third is the original image for comparison.

```html hidden
<table cellpadding="5">
  <thead>
    <tr>
      <th>Live example</th>
      <th>SVG Equivalent</th>
      <th>Original image</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img class="filter" src="flag.jpg" alt="darkened pride flag" /></td>
      <td>
        <img
          style="filter: url(#darken25)"
          src="flag.jpg"
          alt="darkened pride flag" />
      </td>
      <td>
        <img src="flag.jpg" alt="Pride flag" />
      </td>
    </tr>
  </tbody>
</table>
```

{{EmbedLiveSample('blur','100%','280')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS filter effects](/en-US/docs/Web/CSS/CSS_filter_effects) module
- The other {{cssxref("&lt;filter-function&gt;")}} functions available to be used in values of the {{cssxref("filter")}} and {{cssxref("backdrop-filter")}} properties include:
  - {{cssxref("filter-function/blur", "blur()")}}
  - {{cssxref("filter-function/contrast", "contrast()")}}
  - {{cssxref("filter-function/drop-shadow", "drop-shadow()")}}
  - {{cssxref("filter-function/grayscale", "grayscale()")}}
  - {{cssxref("filter-function/hue-rotate", "hue-rotate()")}}
  - {{cssxref("filter-function/invert", "invert()")}}
  - {{cssxref("filter-function/opacity", "opacity()")}}
  - {{cssxref("filter-function/saturate", "saturate()")}}
  - {{cssxref("filter-function/sepia", "sepia()")}}
