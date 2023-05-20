---
title: preserveAspectRatio
slug: Web/SVG/Attribute/preserveAspectRatio
page-type: svg-attribute
spec-urls:
  - https://drafts.fxtf.org/filter-effects/#element-attrdef-feimage-preserveaspectratio
  - https://svgwg.org/svg2-draft/coords.html#PreserveAspectRatioAttribute
---

{{SVGRef}}

The **`preserveAspectRatio`** attribute indicates how an element with a viewBox providing a given aspect ratio must fit into a viewport with a different aspect ratio.

Because the aspect ratio of an SVG image is defined by the {{SVGAttr('viewBox')}} attribute, if this attribute isn't set, the **`preserveAspectRatio`** attribute has no effect (_with one exception, the {{SVGElement('image')}} element, as described below_).

## Example

### meet (width > height)

This example shows the use of `meet` when the element's `width` is greater than its `height`. It presents three variations, with three different alignment values: `xMidYMid`, `xMinYMid`, and `xMaxYMid`.

```css hidden
html,
body,
svg {
  height: 100%;
}

/* place flex element on each iframe body for responsitivity at different screen sizes */
body {
  display: flex;
}
```

```html
<svg viewBox="-1 -1 202 40" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <path
      id="smiley"
      d="M50,10 A40,40,1,1,1,50,90 A40,40,1,1,1,50,10 M30,40 Q36,35,42,40 M58,40 Q64,35,70,40 M30,60 Q50,75,70,60 Q50,75,30,60" />
  </defs>
</svg>
```

```html
<rect x="0" y="0" width="60" height="30">
  <title>xMidYMid meet</title>
</rect>
<svg
  viewBox="0 0 100 100"
  width="60"
  height="30"
  preserveAspectRatio="xMidYMid meet"
  x="0"
  y="0">
  <use href="#smiley" />
</svg>
```

```html
<rect x="70" y="0" width="60" height="30">
  <title>xMinYMid meet</title>
</rect>
<svg
  viewBox="0 0 100 100"
  width="60"
  height="30"
  preserveAspectRatio="xMinYMid meet"
  x="70"
  y="0">
  <use href="#smiley" />
</svg>
```

```html
  <rect x="140" y="0" width="60" height="30">
    <title>xMaxYMid meet</title>
  </rect>
  <svg
    viewBox="0 0 100 100"
    width="60"
    height="30"
    preserveAspectRatio="xMaxYMid meet"
    x="140"
    y="0">
    <use href="#smiley" />
  </svg>
</svg>
```

```css
path {
  fill: yellow;
  stroke: black;
  stroke-width: 8px;
  stroke-linecap: round;
  stroke-linejoin: round;
  pointer-events: none;
}

rect:hover,
rect:active {
  outline: 1px solid red;
}
```

{{EmbedLiveSample('meet width height', '100%', 200)}}

### slice (width > height)

This example shows the use of `slice` when the element's `width` is greater than its `height`. It presents three variations, with three different alignment values: `xMidYMin`, `xMidYMid`, and `xMidYMax`.

```css hidden
html,
body,
svg {
  height: 100%;
}

/* place flex element on each iframe body for responsitivity at different screen sizes */
body {
  display: flex;
}
```

```html
<svg viewBox="-1 -1 202 57" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <path
      id="smiley"
      d="M50,10 A40,40,1,1,1,50,90 A40,40,1,1,1,50,10 M30,40 Q36,35,42,40 M58,40 Q64,35,70,40 M30,60 Q50,75,70,60 Q50,75,30,60" />
  </defs>
</svg>
```

```html
<rect x="0" y="15" width="60" height="30">
  <title>xMidYMin slice</title>
</rect>
<svg
  viewBox="0 0 100 100"
  width="60"
  height="30"
  preserveAspectRatio="xMidYMin slice"
  x="0"
  y="15">
  <use href="#smiley" />
</svg>
```

```html
<rect x="70" y="15" width="60" height="30">
  <title>xMidYMid slice</title>
</rect>
<svg
  viewBox="0 0 100 100"
  width="60"
  height="30"
  preserveAspectRatio="xMidYMid slice"
  x="70"
  y="15">
  <use href="#smiley" />
</svg>
```

```html
  <rect x="140" y="15" width="60" height="30">
    <title>xMidYMax slice</title>
  </rect>
  <svg
    viewBox="0 0 100 100"
    width="60"
    height="30"
    preserveAspectRatio="xMidYMax slice"
    x="140"
    y="15">
    <use href="#smiley" />
  </svg>
</svg>
```

```css
path {
  fill: yellow;
  stroke: black;
  stroke-width: 8px;
  stroke-linecap: round;
  stroke-linejoin: round;
  pointer-events: none;
}

rect:hover,
rect:active {
  outline: 1px solid red;
}
```

{{EmbedLiveSample('slice width height', '100%', 200)}}

### meet (height > width)

This example shows the use of `meet` when the element's `height` is greater than its `width`. It presents three variations, with three different alignment values: `xMidYMin`, `xMidYMid`, and `xMidYMax`.

```css hidden
html,
body,
svg {
  height: 100%;
}

/* place flex element on each iframe body for responsitivity at different screen sizes */
body {
  display: flex;
}
```

```html
<svg viewBox="-1 -1 202 80" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <path
      id="smiley"
      d="M50,10 A40,40,1,1,1,50,90 A40,40,1,1,1,50,10 M30,40 Q36,35,42,40 M58,40 Q64,35,70,40 M30,60 Q50,75,70,60 Q50,75,30,60" />
  </defs>
</svg>
```

```html
  <rect x=0" y="0" width="30" height="75">
    <title>xMidYMin meet</title>
  </rect>
  <svg
    viewBox="0 0 100 100"
    width="30"
    height="75"
    preserveAspectRatio="xMidYMin meet"
    x="0"
    y="0">
    <use href="#smiley" />
  </svg>
```

```html
<rect x="35" y="0" width="30" height="75">
  <title>xMidYMid meet</title>
</rect>
<svg
  viewBox="0 0 100 100"
  width="30"
  height="75"
  preserveAspectRatio="xMidYMid meet"
  x="35"
  y="0">
  <use href="#smiley" />
</svg>
```

```html
  <rect x="70" y="0" width="30" height="75">
    <title>xMidYMax meet</title>
  </rect>
  <svg
    viewBox="0 0 100 100"
    width="30"
    height="75"
    preserveAspectRatio="xMidYMax meet"
    x="70"
    y="0">
    <use href="#smiley" />
  </svg>
</svg>
```

```css
path {
  fill: yellow;
  stroke: black;
  stroke-width: 8px;
  stroke-linecap: round;
  stroke-linejoin: round;
  pointer-events: none;
}

rect:hover,
rect:active {
  outline: 1px solid red;
}
```

{{EmbedLiveSample('meet height width', '100%', 200)}}

### slice (height > width)

This example shows the use of `slice` when the element's `height` is greater than its `width`. It presents three variations, with three different alignment values: `xMinYMid`, `xMidYMid`, and `xMaxYMid`.

```css hidden
html,
body,
svg {
  height: 100%;
}

/* place flex element on each iframe body for responsitivity at different screen sizes */
body {
  display: flex;
}
```

```html
<svg viewBox="-1 -1 202 80" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <path
      id="smiley"
      d="M50,10 A40,40,1,1,1,50,90 A40,40,1,1,1,50,10 M30,40 Q36,35,42,40 M58,40 Q64,35,70,40 M30,60 Q50,75,70,60 Q50,75,30,60" />
  </defs>
</svg>
```

```html
<rect x="0" y="0" width="30" height="75">
  <title>xMinYMid slice</title>
</rect>
<svg
  viewBox="0 0 100 100"
  width="30"
  height="75"
  preserveAspectRatio="xMinYMid slice"
  x="0"
  y="0">
  <use href="#smiley" />
</svg>
```

```html
<rect x="35" y="0" width="30" height="75">
  <title>xMidYMid slice</title>
</rect>
<svg
  viewBox="0 0 100 100"
  width="30"
  height="75"
  preserveAspectRatio="xMidYMid slice"
  x="35"
  y="0">
  <use href="#smiley" />
</svg>
```

```html
  <rect x="70" y="0" width="30" height="75">
    <title>xMaxYMid slice</title>
  </rect>
  <svg
    viewBox="0 0 100 100"
    width="30"
    height="75"
    preserveAspectRatio="xMaxYMid slice"
    x="70"
    y="0">
    <use href="#smiley" />
  </svg>
</svg>
```

```css
path {
  fill: yellow;
  stroke: black;
  stroke-width: 8px;
  stroke-linecap: round;
  stroke-linejoin: round;
  pointer-events: none;
}

rect:hover,
rect:active {
  outline: 1px solid red;
}
```

{{EmbedLiveSample('slice height width', '100%', 200)}}

### none

This example shows an element with the alignment value set to `none`.

```css hidden
html,
body,
svg {
  height: 100%;
}

/* place flex element on each iframe body for responsitivity at different screen sizes */
body {
  display: flex;
}
```

```html
<svg viewBox="-1 -1 192 62" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <path
      id="smiley"
      d="M50,10 A40,40,1,1,1,50,90 A40,40,1,1,1,50,10 M30,40 Q36,35,42,40 M58,40 Q64,35,70,40 M30,60 Q50,75,70,60 Q50,75,30,60" />
  </defs>
</svg>
```

```html
  <!-- none -->
  <rect x="0" y="0" width="160" height="60">
    <title>none</title>
  </rect>
  <svg
    viewBox="0 0 100 100"
    width="160"
    height="60"
    preserveAspectRatio="none"
    x="0"
    y="0">
    <use href="#smiley" />
  </svg>
</svg>
```

```css
path {
  fill: yellow;
  stroke: black;
  stroke-width: 8px;
  stroke-linecap: round;
  stroke-linejoin: round;
  pointer-events: none;
}

rect:hover,
rect:active {
  outline: 1px solid red;
}
```

{{EmbedLiveSample('none ', '100%', 200)}}

## Syntax

```
preserveAspectRatio="<align> [<meetOrSlice>]"
```

Its value is made of one or two keywords: A required alignment value and an optional "meet or slice" reference as described below:

- Alignment value

  - : The alignment value indicates whether to force uniform scaling and, if so, the alignment method to use in case the aspect ratio of the {{ SVGAttr("viewBox") }} doesn't match the aspect ratio of the viewport. The alignment value must be one of the following keywords:

    - **none**
      Do not force uniform scaling. Scale the graphic content of the given element non-uniformly if necessary such that the element's bounding box exactly matches the viewport rectangle. _Note that if_ `<align>` _is_ `none`_, then the optional_ `<meetOrSlice>` _value is ignored_.
    - **xMinYMin** - Force uniform scaling.
      Align the `<min-x>` of the element's {{ SVGAttr("viewBox") }} with the smallest X value of the viewport.
      Align the `<min-y>` of the element's {{ SVGAttr("viewBox") }} with the smallest Y value of the viewport.
    - **xMidYMin** - Force uniform scaling.
      Align the midpoint X value of the element's {{ SVGAttr("viewBox") }} with the midpoint X value of the viewport.
      Align the `<min-y>` of the element's {{ SVGAttr("viewBox") }} with the smallest Y value of the viewport.
    - **xMaxYMin** - Force uniform scaling.
      Align the `<min-x>+<width>` of the element's {{ SVGAttr("viewBox") }} with the maximum X value of the viewport.
      Align the `<min-y>` of the element's {{ SVGAttr("viewBox") }} with the smallest Y value of the viewport.
    - **xMinYMid** - Force uniform scaling.
      Align the `<min-x>` of the element's {{ SVGAttr("viewBox") }} with the smallest X value of the viewport.
      Align the midpoint Y value of the element's {{ SVGAttr("viewBox") }} with the midpoint Y value of the viewport.
    - **xMidYMid** (the default) - Force uniform scaling.
      Align the midpoint X value of the element's {{ SVGAttr("viewBox") }} with the midpoint X value of the viewport.
      Align the midpoint Y value of the element's {{ SVGAttr("viewBox") }} with the midpoint Y value of the viewport.
    - **xMaxYMid** - Force uniform scaling.
      Align the `<min-x>+<width>` of the element's {{ SVGAttr("viewBox") }} with the maximum X value of the viewport.
      Align the midpoint Y value of the element's {{ SVGAttr("viewBox") }} with the midpoint Y value of the viewport.
    - **xMinYMax** - Force uniform scaling.
      Align the `<min-x>` of the element's {{ SVGAttr("viewBox") }} with the smallest X value of the viewport.
      Align the `<min-y>+<height>` of the element's {{ SVGAttr("viewBox") }} with the maximum Y value of the viewport.
    - **xMidYMax** - Force uniform scaling.
      Align the midpoint X value of the element's {{ SVGAttr("viewBox") }} with the midpoint X value of the viewport.
      Align the `<min-y>+<height>` of the element's {{ SVGAttr("viewBox") }} with the maximum Y value of the viewport.
    - **xMaxYMax** - Force uniform scaling.
      Align the `<min-x>+<width>` of the element's {{ SVGAttr("viewBox") }} with the maximum X value of the viewport.
      Align the `<min-y>+<height>` of the element's {{ SVGAttr("viewBox") }} with the maximum Y value of the viewport.

- Meet or slice reference

  - : The meet or slice reference is optional and, if provided, must be one of the following keywords:

    - **meet** (_the default_) - Scale the graphic such that:

      - aspect ratio is preserved
      - the entire {{ SVGAttr("viewBox") }} is visible within the viewport
      - the {{ SVGAttr("viewBox") }} is scaled up as much as possible, while still meeting the other criteria

      In this case, if the aspect ratio of the graphic does not match the viewport, some of the viewport will extend beyond the bounds of the {{ SVGAttr("viewBox") }} (i.e., the area into which the {{ SVGAttr("viewBox") }} will draw will be smaller than the viewport).

    - **slice** - Scale the graphic such that:

      - aspect ratio is preserved
      - the entire viewport is covered by the {{ SVGAttr("viewBox") }}
      - the {{ SVGAttr("viewBox") }} is scaled down as much as possible, while still meeting the other criteria

      In this case, if the aspect ratio of the {{ SVGAttr("viewBox") }} does not match the viewport, some of the {{ SVGAttr("viewBox") }} will extend beyond the bounds of the viewport (i.e., the area into which the {{ SVGAttr("viewBox") }} will draw is larger than the viewport).

## Elements

You can use this attribute with the following SVG elements:

- {{SVGElement("svg")}}
- {{SVGElement("symbol")}}
- {{SVGElement("image")}}
- {{SVGElement("feImage")}}
- {{SVGElement("marker")}}
- {{SVGElement("pattern")}}
- {{SVGElement("view")}}

### feImage

For {{SVGElement('feImage')}}, `preserveAspectRatio` defines how the referenced image should fit in the rectangle define by the `<feImage>` element.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td><strong>&#x3C;align> &#x3C;meetOrSlice>?</strong></td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>xMidYMid</code> <code>meet</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

### image

For {{SVGElement('image')}}, `preserveAspectRatio` defines how the referenced image should fit in the rectangle define by the `<image>` element.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td><strong>&#x3C;align> &#x3C;meetOrSlice>?</strong></td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>xMidYMid</code> <code>meet</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

### marker

For {{SVGElement('marker')}}, `preserveAspectRatio` indicates if a uniform scaling must be performed to fit the element viewport.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td><strong>&#x3C;align> &#x3C;meetOrSlice>?</strong></td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>xMidYMid</code> <code>meet</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

### pattern

For {{SVGElement('pattern')}}, `preserveAspectRatio` indicates if a uniform scaling must be performed to fit the element viewport.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td><strong>&#x3C;align> &#x3C;meetOrSlice>?</strong></td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>xMidYMid</code> <code>meet</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

### svg

For {{SVGElement('svg')}}, `preserveAspectRatio` indicates if a uniform scaling must be performed to fit the element viewport.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td><strong>&#x3C;align> &#x3C;meetOrSlice>?</strong></td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>xMidYMid</code> <code>meet</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

### symbol

For {{SVGElement('symbol')}}, `preserveAspectRatio` indicates if a uniform scaling must be performed to fit the element viewport.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td><strong>&#x3C;align> &#x3C;meetOrSlice>?</strong></td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>xMidYMid</code> <code>meet</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

### view

For {{SVGElement('view')}}, `preserveAspectRatio` indicates if a uniform scaling must be performed to fit the element viewport.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td><strong>&#x3C;align> &#x3C;meetOrSlice>?</strong></td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>xMidYMid</code> <code>meet</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## Specifications

{{Specifications}}
