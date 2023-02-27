---
title: Using filter effects
slug: Web/CSS/filter_effects/using_filter_effects
page-type: guide
---

{{CSSRef}}

Have you ever hovered over a black and white or sepia image and the full color image came into view instantly? Have you ever encountered an image with a small blurred out section that makes the text on top more legible? Such effects used to require image editing software, time, and http requests. [CSS filter effects](/en-us/docs/Web/CSS/filter_effects/) enable applying these visual effects live, without PhotoShop and without extra HTTP requests. The only software required is the user's browser. And, unlike with pre-set image effects, CSS filter effects, like most CSS features, are fully responsive.

The CSS filter effects module defines the {{cssxref("&lt;filter-function&gt;")}} data type which provides 10 different graphical effects, like blur or color shifting, that can alter the appearance of an element as well as the ability to reference an SVG filter with a filter of your own creation. The CSS {{cssxref("filter")}} and {{cssxref("backdrop-filter")}} properties are used to apply these filters, impacting the rendering of text, images, backgrounds, and borders, or any element on which these properties are applied.

## CSS properties

There are two filter properties defined in the CSS filter effects module enable applying zero, one, or more graphical effects to an element, like [blur](/en-US/docs/Web/CSS/filter-function/blur), [sepia](/en-US/docs/Web/CSS/filter-function/sepia), or a [drop-shadow](/en-US/docs/Web/CSS/filter-function/drop-shadow).

With the `filter` property, the effects are applied to the element on which the `filter` property is defined. With the `backdrop-filter` property, the graphical effects are applied to the area behind the element, or the element's "backdrop". The `backdrop-filter` property is often used to make foreground content more legible when the larger area upon which it located would otherwise not provide enough contrast.

## Defined filter functions

The `filter` and `backdrop-filter` properties take as their value a filter function list, containing one or more filter-functions or the default keyword `none`.

There are 10 defined CSS [`<filter-function>`](/en-US/docs/Web/CSS/filter#functions) functions. The following table lists the filter functions, their equivalent SVG filter element, their initial interpolation, or default, value, and the function's parameter data type:

| Filter function                                             | SVG element                                                                                                                                                                                               | data type                                                          | default             | min | max |
| ----------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | ------------------- | --- | --- |
| {{cssxref("filter-function/blur", "blur()")}}               | {{SVGElement("feGaussianBlur")}}                                                                                                                                                                          | {{cssxref("&lt;length&gt;")}}                                      | 0                   |     |     |
| {{cssxref("filter-function/brightness", "brightness()")}}   | {{SVGElement("feComponentTransfer")}} containing linear{{SVGElement("feFuncR")}}, {{SVGElement("feFuncG")}}, {{SVGElement("feFuncB")}} with {{SVGAttr("slope")}}attribute                                 | {{cssxref("&lt;number&gt;")}} or {{cssxref("&lt;percentage&gt;")}} | 1                   | 0   |     |
| {{cssxref("filter-function/contrast", "contrast()")}}       | {{{SVGElement("feComponentTransfer")}} containing linear{{SVGElement("feFuncR")}}, {{SVGElement("feFuncG")}}, {{SVGElement("feFuncB")}} with {{SVGAttr("slope")}} and {{SVGAttr("intercept")}} attributes | {{cssxref("&lt;length&gt;")}}                                      |                     |     |     |
| {{cssxref("filter-function/drop-shadow", "drop-shadow()")}} | {{SVGElement("feGaussianBlur")}}, {{SVGElement("feOffset")}}, {{SVGElement("feFlood")}}, {{SVGElement("feComposite")}}, and {{SVGElement("feMerge")}}                                                     | {{cssxref("&lt;shadow&gt;")}}                                      | `0 0 0 transparent` |     |
| {{cssxref("filter-function/grayscale", "grayscale()")}}     | {{SVGElement("feColorMatrix")}}                                                                                                                                                                           | {{cssxref("&lt;length&gt;")}}                                      |                     |     |     |
| {{cssxref("filter-function/hue-rotate", "hue-rotate()")}}   | {{SVGElement("feColorMatrix")}}                                                                                                                                                                           | {{cssxref("&lt;length&gt;")}}                                      |                     |     |     |
| {{cssxref("filter-function/invert", "invert()")}}           | {{SVGElement("feComponentTransfer")}} containing table{{SVGElement("feFuncR")}}, {{SVGElement("feFuncG")}}, {{SVGElement("feFuncB")}} with {{SVGAttr("tableValues")}} attribute                           | {{cssxref("&lt;length&gt;")}}                                      |                     |     |     |
| {{cssxref("filter-function/opacity", "opacity()")}}         | {{SVGElement("feComponentTransfer")}} containing {{SVGElement("feFuncA")}} with {{SVGAttr("tableValues")}}attribute                                                                                       | {{cssxref("&lt;length&gt;")}}                                      |                     |     |     |
| {{cssxref("filter-function/saturate", "saturate()")}}       | {{SVGElement("feColorMatrix")}}                                                                                                                                                                           | {{cssxref("&lt;length&gt;")}}                                      |                     |     |     |
| {{cssxref("filter-function/sepia", "sepia()")}}             | {{SVGElement("feColorMatrix")}}                                                                                                                                                                           | {{cssxref("&lt;length&gt;")}}                                      |                     |     |     |

with a URL to an [SVG filter element](/en-US/docs/Web/SVG/Element/filter).

While generally applied to images, the `filter` and `backdrop-filter` properties can be applied to any element.

### Applying a filter to an element

To apply a filter effect to an element or pseudo-element, include a list of space separated [filter functions](#Defined_filter_functions). The effects are applied in the order in which they appear:

```css
#pinkText {
  color: magenta;
  filter: hue-rotate(180deg) drop-shadow(3px 3px red);
}
#blueText {
  color: lightblue;
  filter: drop-shadow(3px 3px red) hue-rotate(180deg);
}
```

```css hidden
h1 {
  font-family: san-serif;
  font-size: 4rem;
}
```

```html hidden
<h1 id="pinkText">This was originally pink!</h1>
<h1 id="blueText">This was originally blue!</h1>
```

{{EmbedLiveSample('Applying_a_filter_to_an_element','100%','280')}}
The same filters were applied to both lines of text, but in different order. Red drop shadows were applied to both lines of text. In the pink example, the pink hue was altered before the red shadow was applied; so the red shadow is red. In the blue example, the red drop shadow was added, and then the hue of both the text and the shadow were changed.

## Filter functions

The `filter` property is specified as `none` or one or more of the functions listed below. If the parameter for any function is invalid, the function returns `none`. Except where noted, the functions that take a value expressed with a percent sign (as in `34%`) also accept the value expressed as decimal (as in `0.34`).

When a `filter` property has two or more functions, its results are different from the same functions applied separately using multiple `filter` properties.

### SVG filter

#### url()

Takes an URI pointing to an [SVG filter](/en-US/docs/Web/SVG/Element/filter), which may be embedded in an external XML file.

```css
filter: url(resources.svg#c1);
```

### Filter functions

#### blur()

The {{cssxref("filter-function/blur", "blur()")}} function applies a Gaussian blur to the elements on which it is applied. The blur radius parameter value, defined as a CSS {{cssxref("&lt;length&gt;")}}, defines the value of the standard deviation to the Gaussian function, or how many pixels on the screen blend into each other, so a larger value will create more blur. The initial value for interpolation is `0`. Percentage values are invalid.

```css
.filter {
  filter: blur(3.5px);
}
```

```css hidden
svg:not([height]) {
  display: none;
}
```

The SVG {{SVGElement("feGaussianBlur")}} filter element can also be used to blur content. The filter's {{SVGAttr("stdDeviation")}} attribute accepts up to two values enabling creating more complex blur values. To create an equivalent blur, we include one value for `stdDeviation`:

```html
<svg role="img" aria-label="Flag">
  <filter id="blur">
    <feGaussianBlur stdDeviation="3.5" edgeMode="duplicate" />
  </filter>
  <image xlink:href="asset/flag.jpg" filter="url(#blur)" />
</svg>
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
        <svg id="svg" height="220" width="220" style="overflow: visible">
          <filter id="svgBlur">
            <feGaussianBlur stdDeviation="3.5" />
          </filter>
          <image xlink:href="flag.jpg" filter="url(#svgBlur)" />
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

## See also

- The [CSS filter effects](/en-US/docs/Web/CSS/filter_effects) module which defines these functions and the {{cssxref("filter")}} and {{cssxref("backdrop-filter")}} properties that takes these functions as their value.
- CSS [compositing and blending](/en-US/docs/Web/CSS/Compositing_and_Blending) module, including the CSS {{cssxref("background-blend-mode")}} and {{cssxref("mix-blend-mode")}} properties.
- The CSS {{cssxref("mask")}} property
- [SVG](/en-US/docs/Web/SVG), including the SVG {{SVGElement("filter")}} element and SVG {{SVGAttr("filter")}} attribute.
- [Applying SVG effects to HTML content](/en-US/docs/Web/SVG/Applying_SVG_effects_to_HTML_content)
