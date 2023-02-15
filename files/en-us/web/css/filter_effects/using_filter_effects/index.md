---
title: Using filter effects
slug: Web/CSS/filter_effects/using_filter_effects
page-type: guide
tags:
  - CSS
  - CSS Property
  - Reference
  - filter-functions
  - filter
  - backdrop-filter
  - SVG
  - SVG Filter
---

{{CSSRef}}

CSS Filters enable may visual effects that used to be reserved to costly image editing applications. The CSS {{cssxref("filter")}} and {{cssxref("backdrop-filter")}} properties provides access to effects like blur or color shifting, impacting the rendering of images, backgrounds, and borders.

The {{cssxref("filter_effects")}} module defines the {{cssxref("&lt;filter-function&gt;")}} data type which provides 10 different graphical effects that can alter the appearance of an image as well as the ability to reference an SVG filter with a URL to an [SVG filter element](/en-US/docs/Web/SVG/Element/filter).

This guide defines the 10 CSS filter functions and their SVG equivalents.

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

The {{cssxref("filter-function/blur", "blur()")}} function applies a Gaussian blur to the input image. The blur radius parameter value, defined as a CSS {{cssxref("&lt;length&gt;)}}, defines the value of the standard deviation to the Gaussian function, or how many pixels on the screen blend into each other, so a larger value will create more blur. The initial value for interpolation is `0`. Percentage values are invalid.

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

```html
<svg role="img" aria-label="Flag">
  <filter id="blur">
    <feGaussianBlur stdDeviation="3.5" />
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

#### brightness()

The {{cssxref("filter-function/brightness", "brightness()")}} function applies a linear multiplier to the input image, making it appear more or less bright. A value of `0%` will create an image that is completely black. A value of `100%` leaves the input unchanged. Other values are linear multipliers on the effect. Values of an amount over `100%` are allowed, providing brighter results. The initial value for interpolation is `1`.

```css
filter: brightness(2);
```

```svg
<svg style="position: absolute; top: -99999px" xmlns="http://www.w3.org/2000/svg">
  <filter id="brightness">
    <feComponentTransfer>
      <feFuncR type="linear" slope="[amount]"/>
      <feFuncG type="linear" slope="[amount]"/>
      <feFuncB type="linear" slope="[amount]"/>
    </feComponentTransfer>
  </filter>
</svg>
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

#### contrast()

The {{cssxref("filter-function/contrast", "contrast()")}} function adjusts the contrast of the input image. A value of `0%` will create an image that is completely gray. A value of `100%` leaves the input unchanged. Values of an amount over `100%` are allowed, providing results with more contrast. The initial value for interpolation is `1`.

```css
filter: contrast(200%);
```

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
      <td><img src="flag.jpg" alt="Pride flag" /></td>
      <td><img class="filter" src="flag.jpg" alt="Pride flag" /></td>
      <td><div class="svg-container"><svg xmlns="http://www.w3.org/2000/svg" id="svg" viewBox="0 0 240 151" color-interpolation-filters="sRGB">
 <filter id="contrast">
    <feComponentTransfer>
      <feFuncR type="linear" slope="2" intercept="-0.5"/>
      <feFuncG type="linear" slope="2" intercept="-0.5"/>
      <feFuncB type="linear" slope="2" intercept="-0.5"/>
    </feComponentTransfer>
  </filter>
  <image xlink:href="flag.jpg" filter="url(#contrast)" width="220" height="220" />
</svg><div></td>
      <td><img id="img4" src="flag.jpg" alt="Pride flag" /></td>
    </tr>
  </tbody>
</table>
```

```css
.filter {
  filter: contrast(200%);
}
```

{{EmbedLiveSample('contrast','100%','203px','','', 'no-codepen')}}

#### drop-shadow()

The {{cssxref("filter-function/drop-shadow", "drop-shadow()")}} function applies a drop shadow effect to the input image. A drop shadow is effectively a blurred, offset version of the input image's alpha mask drawn in a particular color, composited below the image. The function accepts a parameter of type `<shadow>` (defined in [CSS Backgrounds and Borders Module Level 3](https://www.w3.org/TR/css-backgrounds-3/#typedef-shadow)), with the exception that the `inset` keyword and `spread` parameter are not allowed. This function is similar to the more established {{cssxref("box-shadow")}} property; the difference is that with filters, some browsers provide hardware acceleration for better performance. The parameters of the `<shadow>` parameter are as follows:

- `offset-x` (required)
  - : The horizontal offset for the shadow, specified as a {{cssxref("&lt;length&gt;")}} value. Negative values place the shadow to the left of the element.
- `offset-y` (required)
  - : The vertical offset for the shadow, specified as a {{cssxref("&lt;length&gt;")}} value. Negative values place the shadow above the element.
- `<blur-radius>` (optional)
  - : This is a third {{cssxref("&lt;length&gt;")}} value. The larger this value, the bigger the blur, so the shadow becomes bigger and lighter. Negative values are not allowed. If not specified, it will be `0` (the shadow's edge is sharp).
- `<color>` (optional)
  - : See {{cssxref("&lt;color&gt;")}} values for possible keywords and notations. If not specified, the color used depends on the browser - it is usually the value of the {{cssxref("&lt;color&gt;")}} property, but note that Safari currently paints a transparent shadow in this case.

```css
.filter {
  filter: drop-shadow(8px 9px 5px rgba(0 0 0/ 0.8));
}
```

```svg
<svg style="position: absolute; top: -999999px" xmlns="http://www.w3.org/2000/svg">
 <filter id="drop-shadow">
    <feGaussianBlur in="SourceAlpha" stdDeviation="[radius]"/>
    <feOffset dx="[offset-x]" dy="[offset-y]" result="offsetblur"/>
    <feFlood flood-color="[color]"/>
    <feComposite in2="offsetblur" operator="in"/>
    <feMerge>
      <feMergeNode/>
      <feMergeNode in="SourceGraphic"/>
    </feMerge>
  </filter>
</svg>
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
      <td>
        <img src="flag.jpg" alt="Pride flag" />
      </td>
      <td>
        <img class="filter" src="flag.jpg" alt="Pride flag" />
      </td>
      <td>
        <div class="svg-container">
          <svg
            aria-labelledby="svg-drop-shadow-title svg-drop-shadow-desc"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            id="svg"
            overflow="visible"
            viewBox="0 0 213 161"
            color-interpolation-filters="sRGB">
            <title id="svg-drop-shadow-title">Rectangular OMR photo</title>
            <desc id="svg-drop-shadow-desc">
              The same image as the previous two examples, but embedded within
              an SVG element. A filter element with a gaussian blur and offset
              is applied. The offset and blur values (set with the stdDeviation
              attribute on the feGaussianBlur element) produce a shadow that has
              less spread and is more rectangular than the CSS example. The
              shadow is visible below and to the right of the image, but with a
              smaller spread. The result is a shadow that is closer to the
              rectangular shape of the original image.
            </desc>
            <defs>
              <image
                id="MyImage"
                xlink:href="flag.jpg"
                width="220"
                height="220" />
            </defs>
            <filter
              id="drop-shadow"
              x="-50%"
              y="-50%"
              width="200%"
              height="200%">
              <feOffset dx="9" dy="9" in="SourceAlpha" />
              <feGaussianBlur stdDeviation="5" />
            </filter>
            <use xlink:href="#MyImage" filter="url(#drop-shadow)" />
            <use xlink:href="#MyImage" />
          </svg>
        </div>
      </td>
    </tr>
  </tbody>
</table>
```

{{EmbedLiveSample('drop-shadow','100%','400px','','', 'no-codepen')}}

#### grayscale()

The {{cssxref("filter-function/grayscale", "grayscale()")}} function converts the input image to grayscale. The value of `amount` defines the proportion of the conversion. A value of `100%` is completely grayscale. A value of `0%` leaves the input unchanged. Values between `0%` and `100%` are linear multipliers on the effect. The initial value for interpolation is `0`.

```css
.filter {
  filter: grayscale(100%);
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
      <td><img src="flag.jpg" alt="Pride flag" /></td>
      <td><img class="filter" src="flag.jpg" alt="Pride flag" /></td>
      <td><div class="svg-container"><svg xmlns="http://www.w3.org/2000/svg" id="svg" viewBox="0 0 276 184" color-interpolation-filters="sRGB">
 <filter id="grayscale">
    <feColorMatrix type="matrix"
               values="0.2126 0.7152 0.0722 0 0
                       0.2126 0.7152 0.0722 0 0
                       0.2126 0.7152 0.0722 0 0
                       0 0 0 1 0"/>
  </filter>
  <image xlink:href="flag.jpg" filter="url(#grayscale)" width="220" height="220" />
</svg><div></td>
    </tr>
  </tbody>
</table>
```

{{EmbedLiveSample('grayscale','100%','209px','','', 'no-codepen')}}

#### hue-rotate()

The {{cssxref("filter-function/hue-rotate", "hue-rotate()")}} function applies a hue rotation on the input image. The value of `angle` defines the number of degrees around the color circle the input samples will be adjusted. A value of `0deg` leaves the input unchanged. The initial value for interpolation is `0`. Though there is no maximum value; the effect of values above `360deg` wraps around.

```css
filter: hue-rotate(90deg);
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
      <td><img src="flag.jpg" alt="Pride flag" /></td>
      <td><img class="filter" src="flag.jpg" alt="Pride flag" /></td>
      <td><div class="svg-container"><svg xmlns="http://www.w3.org/2000/svg" id="svg" viewBox="0 0 266 190" color-interpolation-filters="sRGB">
 <filter id="hue-rotate">
    <feColorMatrix type="hueRotate"
               values="90"/>
  </filter>
  <image xlink:href="flag.jpg" filter="url(#hue-rotate)" width="220" height="220" />
</svg><div></td>
    </tr>
  </tbody>
</table>
```

```css
.filter {
  filter: hue-rotate(90deg);
}
```

```html
<svg
  style="position: absolute; top: -999999px"
  xmlns="http://www.w3.org/2000/svg">
  <filter id="svgHueRotate">
    <feColorMatrix type="hueRotate" values="90" />
  </filter>
</svg>
```

{{EmbedLiveSample('hue-rotate','100%','221px','','', 'no-codepen')}}

#### invert()

The {{cssxref("filter-function/invert", "invert()")}} function inverts the samples in the input image. The value of `amount` defines the proportion of the conversion. A value of `100%` is completely inverted. A value of `0%` leaves the input unchanged. Values between `0%` and `100%` are linear multipliers on the effect. The initial value for interpolation is `0`.

```css
.filter {
  filter: invert(100%);
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
      <td><img src="flag.jpg" alt="Pride flag" /></td>
      <td><img class="filter" src="flag.jpg" alt="Pride flag" /></td>
      <td><div class="svg-container"><svg xmlns="http://www.w3.org/2000/svg" id="svg" viewBox="0 0 183 276" color-interpolation-filters="sRGB">
 <filter id="invert">
    <feComponentTransfer>
        <feFuncR type="table" tableValues="1 0"/>
        <feFuncG type="table" tableValues="1 0"/>
        <feFuncB type="table" tableValues="1 0"/>
    </feComponentTransfer>
 </filter>
 <image xlink:href="flag.jpg" filter="url(#invert)" width="220" height="220" />
</svg><div></td>
    </tr>
  </tbody>
</table>
```

{{EmbedLiveSample('invert','100%','407px','','', 'no-codepen')}}

#### opacity()

The {{cssxref("filter-function/opacity", "opacity()")}} function applies transparency to the samples in the input image. The value of `amount` defines the proportion of the conversion. A value of `0%` is completely transparent. A value of `100%` leaves the input unchanged. Values between `0%` and `100%` are linear multipliers on the effect. This is equivalent to multiplying the input image samples by amount. The initial value for interpolation is `1`. This function is similar to the more established {{cssxref("opacity")}} property; the difference is that with filters, some browsers provide hardware acceleration for better performance.

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
      <td><img src="flag.jpg" alt="Pride flag" /></td>
      <td><img class="filter" src="flag.jpg" alt="Pride flag" /></td>
      <td><div class="svg-container"><svg xmlns="http://www.w3.org/2000/svg" id="svg" viewBox="0 0 276 183" color-interpolation-filters="sRGB">
 <filter id="opacity">
    <feComponentTransfer>
        <feFuncA type="table" tableValues="0 0.5">
    </feComponentTransfer>
 </filter>
 <image xlink:href="flag.jpg" filter="url(#opacity)" width="220" height="220" />
</svg><div></td>
    </tr>
  </tbody>
</table>
```

```css
.filter {
  filter: opacity(50%);
}
```

{{EmbedLiveSample('opacity','100%','210px','','', 'no-codepen')}}

#### saturate()

The {{cssxref("filter-function/saturate", "saturate()")}} function saturates the input image. The value of `amount` defines the proportion of the conversion. A value of `0%` is completely un-saturated. A value of `100%` leaves the input unchanged. Other values are linear multipliers on the effect. Values of amount over `100%` are allowed, providing super-saturated results. The initial value for interpolation is `1`.

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
      <td><img src="flag.jpg" alt="Pride flag" /></td>
      <td><img class="filter" src="flag.jpg" alt="Pride flag" /></td>
      <td><div class="svg-container"><svg xmlns="http://www.w3.org/2000/svg" id="svg" viewBox="0 0 201 239" color-interpolation-filters="sRGB">
 <filter id="saturate">
    <feColorMatrix type="saturate"
               values="2"/>
 </filter>
 <image xlink:href="flag.jpg" filter="url(#saturate)" width="220" height="220" />
</svg><div></td>
    </tr>
  </tbody>
</table>
```

```css
.filter {
  filter: saturate(200%);
}
```

{{EmbedLiveSample('saturate','100%','332px','','', 'no-codepen')}}

#### sepia()

The {{cssxref("filter-function/sepia", "sepia()")}} function converts the input image to sepia. The value of `amount` defines the proportion of the conversion. A value of `100%` is completely sepia. A value of `0%` leaves the input unchanged. Values between `0%` and `100%` are linear multipliers on the effect. The initial value for interpolation is `0`.

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
      <td><img src="flag.jpg" alt="Pride flag" /></td>
      <td><img class="filter" src="flag.jpg" alt="Pride flag" /></td>
      <td>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="svg"
          viewBox="0 0 259 194"
          color-interpolation-filters="sRGB">
          <filter id="sepia">
            <feColorMatrix
              type="matrix"
              values="0.393 0.769 0.189 0 0
                       0.349 0.686 0.168 0 0
                       0.272 0.534 0.131 0 0
                       0 0 0 1 0" />
          </filter>
          <image
            xlink:href="flag.jpg"
            filter="url(#sepia)"
            width="220"
            height="220" />
        </svg>
      </td>
    </tr>
  </tbody>
</table>
```

```css
.filter {
  filter: sepia(100%);
}
```

{{EmbedLiveSample('sepia','100%','229px','','', 'no-codepen')}}

## Combining functions

You may combine any number of functions to manipulate the rendering. The following example enhances the contrast and brightness of the image:

```html hidden
<table cellpadding="5">
  <thead>
    <tr>
      <th>Original image</th>
      <th>Live example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <img src="flag.jpg" alt="Pride flag" />
      </td>
      <td>
        <img class="filter" src="flag.jpg" alt="Pride flag" />
      </td>
    </tr>
  </tbody>
</table>
```

```css
.filter {
  filter: contrast(175%) brightness(103%);
}
```

{{EmbedLiveSample('Combining_functions','100%','209px','','', 'no-codepen')}}

## Interpolation

When animated, if both the beginning and end filters have a function list of the same length without {{cssxref("url","url()")}}, each of their filter functions is {{Glossary("interpolation", "interpolated")}} according to its specific rules. If they have different lengths, the missing equivalent filter functions from the longer list are added to the end of the shorter list using their initial values, then all filter functions are interpolated according to their specific rules. If one filter is `none`, it is replaced with the filter functions list of the other one using the filter function default values, then all filter functions are interpolated according to their specific rules. Otherwise, discrete interpolation is used.

## Formal syntax

{{csssyntax}}

## Examples

### Applying filter functions

Examples of using the predefined functions are shown below. See each function for a specific example.

```css
.mydiv {
  filter: grayscale(50%);
}

/* Gray all images by 50% and blur by 10px */
img {
  filter: grayscale(0.5) blur(10px);
}
```

### Applying SVG filters

Examples of using the URL function with an SVG resource are as follows:

```css
.target {
  filter: url(#c1);
}

.mydiv {
  filter: url(commonfilters.xml#large-blur);
}
```

## See also

- The [CSS filter effects](/en-US/docs/Web/CSS/filter_effects) module which defines these functions and the {{cssxref("filter")}} and {{cssxref("backdrop-filter")}} properties that takes these functions as their value.
- CSS [compositing and blending](/en-US/docs/Web/CSS/Compositing_and_Blending) module, including the CSS {{cssxref("background-blend-mode")}} and {{cssxref("mix-blend-mode")}} properties.
- The CSS {{cssxref("mask")}} property
- [SVG](/en-US/docs/Web/SVG), including the SVG {{SVGElement("filter")}} element and SVG {{SVGAttr("filter")}} attribute.
- [Applying SVG effects to HTML content](/en-US/docs/Web/SVG/Applying_SVG_effects_to_HTML_content)
