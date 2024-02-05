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

### Values

- `angle`
  - : The relative change in hue of the input sample, specified as an {{cssxref("&lt;angle&gt;")}}. A value of `0deg` leaves the input unchanged. A positive hue rotation increases the hue value, while a negative rotation decreases the hue value. The initial value for {{Glossary("interpolation")}} is `0`. There is no minimum or maximum value. The effect of values above `360deg` are, given `hue-rotate(Ndeg)`, evaluates to `N` modulo 360.

The `<angle>` CSS data type represents an angle value expressed in degrees, gradians, radians, or turns. The following are equivalent:

```css
hue-rotate(-180deg)
hue-rotate(540deg)
hue-rotate(200grad)
hue-rotate(3.14159rad)
hue-rotate(0.5turn)
```

### Formal syntax

{{csssyntax}}

## Examples

### With the backdrop-filter property

This example applies a `hue-rotate()` filter via the `backdrop-filter` CSS property to the paragraph, color shifting to the area behind the `<p>`.

```css
.container {
  background: url(image.jpg) no-repeat left / contain #011296;
}
p {
  backdrop-filter: hue-rotate(240deg);
  text-shadow: 2px 2px #011296;
}
```

```css hidden
.container {
  padding: 3rem;
  width: 30rem;
}
p {
  padding: 0.5rem;
  color: #ffffff;
  font-size: 2rem;
  font-family: sans-serif;
}
```

```html hidden
<div
  class="container"
  style="background-image: url(listen_to_black_women.jpg);">
  <p>
    Text on images can be illegible and inaccessible even with a drop shadow.
  </p>
</div>
```

{{EmbedLiveSample('With_the_backdrop-filter_property','100%','280')}}

### With the filter property

This example applies a `hue-rotate()` filter via the `filter` CSS property adding the color shift to the entire element, including content, border, and background image.

```css
p {
  filter: hue-rotate(-60deg);
  text-shadow: 2px 2px blue;
  background-color: magenta;
  color: goldenrod;
  border: 1em solid rebeccapurple;
  box-shadow:
    inset -5px -5px red,
    5px 5px yellow;
}
```

```css hidden
p {
  padding: 0.5rem;
  font-size: 2rem;
  font-family: sans-serif;
  width: 85vw;
}
```

```html hidden
<p>The person who wrote this example is not a designer, fortunately.</p>
```

{{EmbedLiveSample('With_the_filter_property','100%','220')}}

### With url() and the SVG hue-rotate filter

The SVG {{SVGElement("filter")}} element is used to define custom filter effects that can then be referenced by [`id`](/en-US/docs/Web/HTML/Global_attributes#id). The `<filter>`'s {{SVGElement("feColorMatrix")}} primitive `hueRotate` type provides the same effect. Given the following:

```svg
<filter id="filterID">
  <feColorMatrix type="hueRotate" values="90" />
</filter>
```

These values produce the same results:

```css
filter: hue-rotate(90deg); /* 90deg rotation */
filter: url(#filterID); /* with embedded SVG */
filter: url(folder/fileName.svg#filterID); /* external svg filter definition */
```

This example shows three images: the image with a `hue-rotate()` filter function applied, the image with an equivalent `url()` filter applied, and the original images for comparison:

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
          style="filter: hue-rotate(90deg)"
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

{{EmbedLiveSample('With_url()_and_the_SVG_hue-rotate_filter','100%','280')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS filter effects](/en-US/docs/Web/CSS/CSS_filter_effects) module
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
