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

### Values

- `amount`
  - : The contrast of the result, specified as a {{cssxref("&lt;number&gt;")}} or a {{cssxref("&lt;percentage&gt;")}}. A value under `100%` decreases the contrast, while a value over `100%` increases it. A value of `0` or `0%` will create an image that is completely gray, while a value of `1` or `100%` leaves the input unchanged. Negative values are not allowed. The initial value for {{Glossary("interpolation")}} is `1`.

The following are pairs of equivalent values:

```css
contrast(0) /* Completely gray */
contrast(0%)

contrast(0.65) /* 65% contrast */
contrast(65%)

contrast(1)     /* No effect */
contrast(100%)

contrast(2)  /* Double contrast */
contrast(200%)
```

## Formal syntax

{{CSSSyntax}}

## Examples

### With the backdrop-filter property

This example applies a `contrast()` filter via the {{cssxref("backdrop-filter")}} CSS property to the paragraph and monospaced text, color shifting to the area behind the `<p>` and `<code>`.

```css
.container {
  background: url(image.jpg) no-repeat center / contain #339;
}
p {
  backdrop-filter: contrast(0.5);
}
code {
  backdrop-filter: contrast(0.15);
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
  font-family: sans-serif;
}
```

```html hidden
<div class="container" style="background-image: url(unity_for_the_people.jpg);">
  <p>
    Always ensure there is enough contrast between text and all background
    colors. If you think your text may land on top of a background image,
    include a <code>backdrop-filter</code>. Reducing the contrast of background
    colors with the <code>contrast()</code> filter may improve legibility but
    does not guarantee accessibility.
  </p>
</div>
```

{{EmbedLiveSample('With_the_backdrop-filter_property','100%','260')}}

### With the filter property

This example applies a `contrast()` filter via the {{cssxref("filter")}} CSS property, changing contrast by shifting colors of the entire element, including content, border, background, and shadows.

```css
p:first-of-type {
  filter: contrast(30%);
}
p:last-of-type {
  filter: contrast(300%);
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
<p>This paragraph has reduced contrast.</p>
<p>This paragraph has normal contrast.</p>
<p>This paragraph has increased contrast.</p>
```

{{EmbedLiveSample('With_the_filter_property','100%','320')}}

### With url() and the SVG contrast filter

The SVG {{SVGElement("filter")}} element is used to define custom filter effects that can then be referenced by [`id`](/en-US/docs/Web/HTML/Global_attributes/id). The `<filter>`'s {{SVGElement("feComponentTransfer")}} primitive enables pixel-level color remapping. Given the following:

```svg
  <filter id="contrast">
    <feComponentTransfer>
      <feFuncR type="linear" slope="2" intercept="-0.5"/>
      <feFuncG type="linear" slope="2" intercept="-0.5"/>
      <feFuncB type="linear" slope="2" intercept="-0.5"/>
    </feComponentTransfer>
  </filter>
```

```css hidden
.svgFilterLive {
  filter: url(#contrast2);
}
```

These values produce the same results:

```css
filter: contrast(200%);
filter: url(#contrast); /* with embedded SVG */
filter: url(folder/fileName.svg#contrast); /* external svg filter definition */
```

This example shows three images: the image with a `contrast()` filter function applied, the image with an equivalent `url()` filter applied, and the original images for comparison:

```html hidden
<table cellpadding="5">
  <thead>
    <tr>
      <th><code>contrast()</code></th>
      <th><code>url()</code></th>
      <th>Original image</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <img
          style="filter: contrast(200%)"
          src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
          alt="Pride flag" />
      </td>
      <td>
        <img
          class="svgFilterLive"
          src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
          alt="Pride flag" />
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
        <img
          src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
          alt="Pride flag" />
      </td>
    </tr>
  </tbody>
</table>
```

{{EmbedLiveSample('With_url()_and_the_SVG_contrast_filter','100%','280')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS filter effects](/en-US/docs/Web/CSS/CSS_filter_effects) module
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
