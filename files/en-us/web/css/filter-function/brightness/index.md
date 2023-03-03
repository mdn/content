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

### Values

- `amount`
  - : The brightness of the result, specified as a {{cssxref("&lt;number&gt;")}} or a {{cssxref("&lt;percentage&gt;")}}. A value under `100%` darkens the image, while a value over `100%` brightens it. A value of `0%` will create an image that is completely black, while a value of `100%` leaves the input unchanged. Other values are linear multipliers on the effect. Values of an amount over `100%` are allowed, providing brighter results. The initial value for {{Glossary("interpolation")}} is `1`.

The following are pairs of equivalent values:

```css
brightness(0) /* Completely black */
brightness(0%)

brightness(0.4) /* 40% brightness, which is 60% darker */
brightness(40%)

brightness(1) /* No effect */
brightness(100%)

brightness(2) /* Double brightness */
brightness(200%)
```

## SVG filter

The SVG {SVGElement("filter")}} element is used to define custom filter effects that can then be referenced by {{htmlattrxref("id")}}. The `<filter>`'s {{SVGElement("feComponentTransfer")}} primitive enables pixel-level color remapping. To alter the brightness, include linear {{SVGElement("feFuncR")}}, {{SVGElement("feFuncB")}}, and {{SVGElement("feFuncG")}} primitives with the `slope` attribute value defining the brightness multiplier.

```html
<svg role="none">
  <filter id="[filterId]">
    <feComponentTransfer>
      <feFuncR type="linear" slope="[amount]" />
      <feFuncG type="linear" slope="[amount]" />
      <feFuncB type="linear" slope="[amount]" />
    </feComponentTransfer>
  </filter>
</svg>
```

To create a filter that darkens the content on which it is applied by 25%, we set the `slope` attribute to 0.75, for 75% of the original brightness.

```html
<svg role="none">
  <filter id="darken25">
    <feComponentTransfer>
      <feFuncR type="linear" slope="0.75" />
      <feFuncG type="linear" slope="0.75" />
      <feFuncB type="linear" slope="0.75" />
    </feComponentTransfer>
  </filter>
</svg>
```

We can then reference the filter by `id`. The following declarations produce similar effects:

```css
filter: brightness(75%);
filter: url(#darken25); /* with embedded SVG */
filter: url(folder/fileName.svg#darken25); /* external svg filter definition */
```

## Examples

This example shows three images: the image with a `brightness()` filter function applied, the image with a similar SVG brightness function applied, and the original image for comparison:

```css
.filter {
  filter: brightness(1.5);
}
```

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
      <td><img class="filter" src="flag.jpg" style="width: 100%;" /></td>
      <td>
        <svg id="svg" height="220" width="220" style="overflow: visible">
          <filter id="brightness">
            <feComponentTransfer>
              <feFuncR type="linear" slope="2" />
              <feFuncG type="linear" slope="2" />
              <feFuncB type="linear" slope="2" />
            </feComponentTransfer>
          </filter>
          <image
            xlink:href="flag.jpg"
            filter="url(#brightness)"
            width="220"
            height="220" />
        </svg>
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

- [CSS filter effects](/en-US/docs/Web/CSS/filter_effects/) module
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
