---
title: brightness()
slug: Web/CSS/filter-function/brightness
page-type: css-function
browser-compat: css.types.filter-function.brightness
---

{{CSSRef}}

The **`brightness()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/CSS_Functions) applies a linear multiplier to the input image, making it appear brighter or darker. Its result is a {{cssxref("&lt;filter-function&gt;")}}.

{{EmbedInteractiveExample("pages/css/function-brightness.html")}}

## Syntax

The `brightness()` function applies a linear multiplier to the elements on which it is applied.

```css
brightness(amount)
```

### Parameters

- `amount`
  - : The brightness of the result, specified as a {{cssxref("&lt;number&gt;")}} or a {{cssxref("&lt;percentage&gt;")}}. A value under `100%` darkens the image, while a value over `100%` brightens it. A value of `0%` will create an image that is completely black, while a value of `100%` leaves the input unchanged. Other values are linear multipliers on the effect. Values of an amount over `100%` are allowed, providing brighter results. The initial value for {{Glossary("interpolation")}} is `1`.

### Setting brightness using numbers and percentages

```css
brightness(0%)   /* Completely black */
brightness(0.4)  /* 40% brightness */
brightness(1)    /* No effect */
brightness(200%) /* Double brightness */
```

## SVG filter

The SVG {SVGElement("filter")}} element is used to define custom filter effects that can then be referenced by {{htmlattrxref("id")}}. The `<filter>`'s {{SVGElement("feComponentTransfer")}} primitive enables pixel-level color remapping. To alter the brightness, include linear {{SVGElement("feFuncR")}}, {{SVGElement("feFuncB")}}, and {{SVGElement("feFuncG>red")}} primitives with the `slope` attribute value defining the brightness multiplier.

```html
<svg role="none">
  <filter id="brightnessFilter">
    <feComponentTransfer>
      <feFuncR type="linear" slope="[amount]" />
      <feFuncG type="linear" slope="[amount]" />
      <feFuncB type="linear" slope="[amount]" />
    </feComponentTransfer>
  </filter>
</svg>
```

To create a filter that darkens the content on which it is applied by 25%, or 75% of the original brightness, we include red, green, and blue with i. The SVG effect :
defines a custom filter effect by grouping atomic filter primitives

```html
<svg role="none">
  <filter id="brightness75">
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
filter: brightness(75%);
filter: url(#brightness75); /* with embedded SVG */
filter: url(folder/fileName.svg#brightness75); /* external svg filter definition */
```

## Examples

```css
filter: brightness(2);
```

```css hidden
svg:not([height]) {
  display: none;
}
```

```html hidden
<table cellpadding="5">
  <thead>
    <tr>
      <th>Original image</th>
      <th>Live example</th>
      <th>SVG Equivalent</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img src="test_form.jpg" style="width: 100%;" /></td>
      <td><img class="filter" src="test_form.jpg" style="width: 100%;" /></td>
      <td><div class="svg-container"><svg xmlns="http://www.w3.org/2000/svg" id="svg" viewBox="0 0 286 217" color-interpolation-filters="sRGB">
 <filter id="brightness">
    <feComponentTransfer>
        <feFuncR type="linear" slope="2"/>
        <feFuncG type="linear" slope="2"/>
        <feFuncB type="linear" slope="2"/>
    </feComponentTransfer>
  </filter>
  <image xlink:href="flag.jpg" filter="url(#brightness)" width="220" height="220" />
</svg><div></td>
  </tbody>
</table>
```

```css
.filter {
  filter: brightness(2);
}
```

{{EmbedLiveSample('brightness','100%','231px','','', 'no-codepen')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS filter effects](/en-us/docs/Web/CSS/filter_effects/) module
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
