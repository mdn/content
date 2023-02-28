---
title: hue-rotate()
slug: Web/CSS/filter-function/hue-rotate
page-type: css-function
browser-compat: css.types.filter-function.hue-rotate
---

{{CSSRef}}

The **`hue-rotate()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/CSS_Functions) rotates the [hue](https://en.wikipedia.org/wiki/Hue) of an element and its contents. Its result is a {{cssxref("&lt;filter-function&gt;")}}.

{{EmbedInteractiveExample("pages/css/function-hue-rotate.html")}}

## Syntax

The `hue-rotate()` function applies a color rotation to the elements on which it is applied.

```css
hue-rotate(angle)
```

### Parameters

- `angle`
  - : The relative change in hue of the input sample, specified as an {{cssxref("&lt;angle&gt;")}}. A value of `0deg` leaves the input unchanged. A positive hue rotation increases the hue value, while a negative rotation decreases the hue value. The initial value for {{Glossary("interpolation")}} is `0`. There is no minimum or maximum value. The effect of values above `360deg` are, given `hue-rotate(Ndeg)`, evaluates to `N` modulo 360.

### Examples of correct values for hue-rotate

```css
hue-rotate(-90deg)  /* Same as 270deg rotation */
hue-rotate(0deg)    /* No effect */
hue-rotate(90deg)   /* 90deg rotation */
hue-rotate(.5turn)  /* 180deg rotation */
hue-rotate(405deg)  /* Same as 45deg rotation (405 % 360 = 45) */
```

### SVG filter equivalent

The SVG {SVGElement("filter")}} element is used to define custom filter effects that can then be referenced by {{htmlattrxref("id")}}. The `<filter>`'s {{SVGElement("feColorMatrix")}} primitive `hueRotate` type provides the same effect. Given the following:

```html
<filter id="filterID">
  <feColorMatrix type="hueRotate" values="90" />
</filter>
```

These values for the {{cssxref("filter")}} and {{cssxref("backdrop-filter")}} properties would produce the same results:

```css
hue-rotate(90deg); /* 90deg rotation */
url(#filterID); /* with embedded SVG */
url(folder/fileName.svg#filterID); /* external svg filter definition */
```

## Examples

This example shows three images: the image with a `hue-rotate()` filter function applied, the image with an equivalent `url()` filter applied, and the original images for comparison:

```css
.filter {
  filter: hue-rotate(90deg);
}
```

```html hidden
<table cellpadding="5">
  <thead>
    <tr>
      <th><code>hue-rotate()</code></th>
      <th><code>url()</code></th>
      <th>Original image</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <img
          class="filter"
          src="flag.jpg"
          alt="Pride flag with rotated colors" />
      </td>
      <td>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 220 220"
          color-interpolation-filters="sRGB"
          height="220"
          width="220">
          <filter id="hue-rotate">
            <feColorMatrix type="hueRotate" values="90" />
          </filter>
          <image
            xlink:href="flag.jpg"
            filter="url(#hue-rotate)"
            width="220"
            height="220" />
        </svg>
      </td>

      <td><img src="flag.jpg" alt="Pride flag" /></td>
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
  - {{cssxref("filter-function/contrast", "contrast()")}}
  - {{cssxref("filter-function/drop-shadow", "drop-shadow()")}}
  - {{cssxref("filter-function/grayscale", "grayscale()")}}
  - {{cssxref("filter-function/invert", "invert()")}}
  - {{cssxref("filter-function/opacity", "opacity()")}}
  - {{cssxref("filter-function/saturate", "saturate()")}}
  - {{cssxref("filter-function/sepia", "sepia()")}}
