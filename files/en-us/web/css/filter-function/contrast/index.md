---
title: contrast()
slug: Web/CSS/filter-function/contrast
page-type: css-function
browser-compat: css.types.filter-function.contrast
---

{{CSSRef}}

The **`contrast()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/CSS_Functions) adjusts the contrast of the input image. Its result is a {{cssxref("&lt;filter-function&gt;")}}.

{{EmbedInteractiveExample("pages/css/function-contrast.html")}}

## Syntax

```css
contrast(amount)
```

### Parameters

- `amount`
  - : The contrast of the result, specified as a {{cssxref("&lt;number&gt;")}} or a {{cssxref("&lt;percentage&gt;")}}. A value under `100%` decreases the contrast, while a value over `100%` increases it. A value of `0%` will create an image that is completely gray, while a value of `100%` leaves the input unchanged. The initial value for {{Glossary("interpolation")}} is `1`.

### Setting contrast using numbers and percentages

```css
contrast(0)     /* Completely gray */
contrast(65%)   /* 65% contrast */
contrast(1)     /* No effect */
contrast(200%)  /* Double contrast */
```

## SVG filter

The SVG {{SVGElement("filter")}} element is used to define custom filter effects that can then be referenced by {{htmlattrxref("id")}}. The `<filter>`'s {{SVGElement("feComponentTransfer")}} primitive enables pixel-level color remapping. To alter the contrast, include linear {{SVGElement("feFuncR")}} (red), {{SVGElement("feFuncB")}} (blue), and {{SVGElement("feFuncG")}} (green) primitives with the `slope` attribute value defining the contrast multiplier and the `intercept` attribute.

```svg
<svg style="position: absolute; top: -99999px" xmlns="http://www.w3.org/2000/svg">
  <filter id="contrast">
    <feComponentTransfer>
      <feFuncR type="linear" slope="[amount]" intercept="-(0.5 * [amount]) + 0.5"/>
      <feFuncG type="linear" slope="[amount]" intercept="-(0.5 * [amount]) + 0.5"/>
      <feFuncB type="linear" slope="[amount]" intercept="-(0.5 * [amount]) + 0.5"/>
    </feComponentTransfer>
  </filter>
</svg>
```

## Examples

This example shows three images: the image with a `contrast()` filter function applied, the image with the equivalent SVG blur function applied, and the original images for comparison:

```css
.filter {
  filter: contrast(2);
}
.svgFilter {
  filter: url(#contrast);
}
```

To create a filter that doubles the original contrast, we set the `slope` attribute to 2, for 200%, and the `intercept` attribute set to the `-(0.25 * [2.00]) + 0.5`, which is `-0.5`.

```svg
<svg role="none">
  <filter id="contrast">
    <feComponentTransfer>
      <feFuncR type="linear" slope="2" intercept="-0.5"/>
      <feFuncG type="linear" slope="2" intercept="-0.5"/>
      <feFuncB type="linear" slope="2" intercept="-0.5"/>
    </feComponentTransfer>
  </filter>
</svg>
```

```css hidden
svg {
  display: none;
}
.svgFilterLive {
  filter: url(#contrast2);
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
      <td>
        <img class="filter" src="flag.jpg" alt="Pride flag" />
      </td>
      <td>
        <img class="svgFilterLive" src="flag.jpg" alt="Pride flag" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="svg"
          viewBox="0 0 240 151"
          height="0"
          width="0"
          style="overflow: visible"
          color-interpolation-filters="sRGB">
          <filter id="contrast2">
            <feComponentTransfer>
              <feFuncR type="linear" slope="2" intercept="-0.5" />
              <feFuncG type="linear" slope="2" intercept="-0.5" />
              <feFuncB type="linear" slope="2" intercept="-0.5" />
            </feComponentTransfer>
          </filter>
        </svg>
      </td>
      <td>
        <img src="flag.jpg" alt="Pride flag" />
      </td>
    </tr>
  </tbody>
</table>
```

{{EmbedLiveSample('Examples','100%','280')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS filter effects](/en-us/docs/Web/CSS/filter_effects/) module
- The other {{cssxref("&lt;filter-function&gt;")}} functions available to be used in values of the {{cssxref("filter")}} and {{cssxref("backdrop-filter")}} properties include:
  - {{cssxref("filter-function/blur", "blur()")}}
  - {{cssxref("filter-function/brightness", "brightness()")}}
  - {{cssxref("filter-function/drop-shadow", "drop-shadow()")}}
  - {{cssxref("filter-function/grayscale", "grayscale()")}}
  - {{cssxref("filter-function/hue-rotate", "hue-rotate()")}}
  - {{cssxref("filter-function/invert", "invert()")}}
  - {{cssxref("filter-function/opacity", "opacity()")}}
  - {{cssxref("filter-function/saturate", "saturate()")}}
  - {{cssxref("filter-function/sepia", "sepia()")}}
