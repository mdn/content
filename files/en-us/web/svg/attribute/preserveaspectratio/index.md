---
title: preserveAspectRatio
slug: Web/SVG/Attribute/preserveAspectRatio
tags:
  - SVG
  - SVG Attribute
---
{{SVGRef}}

The **`preserveAspectRatio`** attribute indicates how an element with a viewBox providing a given aspect ratio must fit into a viewport with a different aspect ratio.

Because the aspect ratio of an SVG image is defined by the {{SVGAttr('viewBox')}} attribute, if this attribute isn't set, the `preserveAspectRatio` attribute has no effect (*with one exception, the {{SVGElement('image')}} element, as described below*).

## Example

```css hidden
html,body,svg { height:100% }
```

```html
<svg viewBox="-1 -1 162 92" xmlns="http://www.w3.org/2000/svg">
  <defs>
     <path id="smiley" d="M50,10 A40,40,1,1,1,50,90 A40,40,1,1,1,50,10 M30,40 Q36,35,42,40 M58,40 Q64,35,70,40 M30,60 Q50,75,70,60 Q50,75,30,60" />
  </defs>

  <!-- (width>height) meet -->
  <rect x="0" y="0" width="20" height="10">
    <title>xMidYMid meet</title>
  </rect>
  <svg viewBox="0 0 100 100" width="20" height="10"
       preserveAspectRatio="xMidYMid meet" x="0" y="0">
    <use href="#smiley" />
  </svg>

  <rect x="25" y="0" width="20" height="10">
    <title>xMinYMid meet</title>
  </rect>
  <svg viewBox="0 0 100 100" width="20" height="10"
       preserveAspectRatio="xMinYMid meet" x="25" y="0">
    <use href="#smiley" />
  </svg>

  <rect x="50" y="0" width="20" height="10">
    <title>xMaxYMid meet</title>
  </rect>
  <svg viewBox="0 0 100 100" width="20" height="10"
       preserveAspectRatio="xMaxYMid meet" x="50" y="0">
    <use href="#smiley" />
  </svg>

  <!-- (width>height) slice -->
  <rect x="0" y="15" width="20" height="10">
    <title>xMidYMin slice</title>
  </rect>
  <svg viewBox="0 0 100 100" width="20" height="10"
       preserveAspectRatio="xMidYMin slice" x="0" y="15">
    <use href="#smiley" />
  </svg>

  <rect x="25" y="15" width="20" height="10">
    <title>xMidYMid slice</title>
  </rect>
  <svg viewBox="0 0 100 100" width="20" height="10"
       preserveAspectRatio="xMidYMid slice" x="25" y="15">
    <use href="#smiley" />
  </svg>

  <rect x="50" y="15" width="20" height="10">
    <title>xMidYMax slice</title>
  </rect>
  <svg viewBox="0 0 100 100" width="20" height="10"
       preserveAspectRatio="xMidYMax slice" x="50" y="15">
    <use href="#smiley" />
  </svg>

  <!-- (width<height) meet -->
  <rect x="75" y="0" width="10" height="25">
    <title>xMidYMin meet</title>
  </rect>
  <svg viewBox="0 0 100 100" width="10" height="25"
       preserveAspectRatio="xMidYMin meet" x="75" y="0">
    <use href="#smiley" />
  </svg>

  <rect x="90" y="0" width="10" height="25">
    <title>xMidYMid meet</title>
  </rect>
  <svg viewBox="0 0 100 100" width="10" height="25"
       preserveAspectRatio="xMidYMid meet" x="90" y="0">
    <use href="#smiley" />
  </svg>

  <rect x="105" y="0" width="10" height="25">
    <title>xMidYMax meet</title>
  </rect>
  <svg viewBox="0 0 100 100" width="10" height="25"
       preserveAspectRatio="xMidYMax meet" x="105" y="0">
    <use href="#smiley" />
  </svg>

  <!-- (width<height) slice -->
  <rect x="120" y="0" width="10" height="25">
    <title>xMinYMid slice</title>
  </rect>
  <svg viewBox="0 0 100 100" width="10" height="25"
       preserveAspectRatio="xMinYMid slice" x="120" y="0">
    <use href="#smiley" />
  </svg>

  <rect x="135" y="0" width="10" height="25">
    <title>xMidYMid slice</title>
  </rect>
  <svg viewBox="0 0 100 100" width="10" height="25"
       preserveAspectRatio="xMidYMid slice" x="135" y="0">
    <use href="#smiley" />
  </svg>

  <rect x="150" y="0" width="10" height="25">
    <title>xMaxYMid slice</title>
  </rect>
  <svg viewBox="0 0 100 100" width="10" height="25"
       preserveAspectRatio="xMaxYMid slice" x="150" y="0">
    <use href="#smiley" />
  </svg>

  <!-- none -->
  <rect x="0" y="30" width="160" height="60">
    <title>none</title>
  </rect>
  <svg viewBox="0 0 100 100" width="160" height="60"
       preserveAspectRatio="none" x="0" y="30">
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

rect:hover, rect:active {
  outline: 1px solid red;
}
```

{{EmbedLiveSample('Example', '100%', 200)}}

## Syntax

```js
preserveAspectRatio="<align> [<meetOrSlice>]"
```

Its value is made of one or two keywords: A required alignment value and an optional "meet or slice" reference as described below:

*   Alignment value
    *   : The alignment value indicates whether to force uniform scaling and, if so, the alignment method to use in case the aspect ratio of the {{ SVGAttr("viewBox") }} doesn't match the aspect ratio of the viewport. The alignment value must be one of the following keywords:

        *   **none**
            Do not force uniform scaling. Scale the graphic content of the given element non-uniformly if necessary such that the element's bounding box exactly matches the viewport rectangle. *Note that if* `<align>` *is* `none`*, then the optional* `<meetOrSlice>` *value is ignored*.
        *   **xMinYMin** - Force uniform scaling.
            Align the `<min-x>` of the element's {{ SVGAttr("viewBox") }} with the smallest X value of the viewport.
            Align the `<min-y>` of the element's {{ SVGAttr("viewBox") }} with the smallest Y value of the viewport.
        *   **xMidYMin** - Force uniform scaling.
            Align the midpoint X value of the element's {{ SVGAttr("viewBox") }} with the midpoint X value of the viewport.
            Align the `<min-y>` of the element's {{ SVGAttr("viewBox") }} with the smallest Y value of the viewport.
        *   **xMaxYMin** - Force uniform scaling.
            Align the `<min-x>+<width>` of the element's {{ SVGAttr("viewBox") }} with the maximum X value of the viewport.
            Align the `<min-y>` of the element's {{ SVGAttr("viewBox") }} with the smallest Y value of the viewport.
        *   **xMinYMid** - Force uniform scaling.
            Align the `<min-x>` of the element's {{ SVGAttr("viewBox") }} with the smallest X value of the viewport.
            Align the midpoint Y value of the element's {{ SVGAttr("viewBox") }} with the midpoint Y value of the viewport.
        *   **xMidYMid** (the default) - Force uniform scaling.
            Align the midpoint X value of the element's {{ SVGAttr("viewBox") }} with the midpoint X value of the viewport.
            Align the midpoint Y value of the element's {{ SVGAttr("viewBox") }} with the midpoint Y value of the viewport.
        *   **xMaxYMid** - Force uniform scaling.
            Align the `<min-x>+<width>` of the element's {{ SVGAttr("viewBox") }} with the maximum X value of the viewport.
            Align the midpoint Y value of the element's {{ SVGAttr("viewBox") }} with the midpoint Y value of the viewport.
        *   **xMinYMax** - Force uniform scaling.
            Align the `<min-x>` of the element's {{ SVGAttr("viewBox") }} with the smallest X value of the viewport.
            Align the `<min-y>+<height>` of the element's {{ SVGAttr("viewBox") }} with the maximum Y value of the viewport.
        *   **xMidYMax** - Force uniform scaling.
            Align the midpoint X value of the element's {{ SVGAttr("viewBox") }} with the midpoint X value of the viewport.
            Align the `<min-y>+<height>` of the element's {{ SVGAttr("viewBox") }} with the maximum Y value of the viewport.
        *   **xMaxYMax** - Force uniform scaling.
            Align the `<min-x>+<width>` of the element's {{ SVGAttr("viewBox") }} with the maximum X value of the viewport.
            Align the `<min-y>+<height>` of the element's {{ SVGAttr("viewBox") }} with the maximum Y value of the viewport.
*   Meet or slice reference
    *   : The meet or slice reference is optional and, if provided, must be one of the following keywords:

        *   **meet** (*the default*) - Scale the graphic such that:

            *   aspect ratio is preserved
            *   the entire {{ SVGAttr("viewBox") }} is visible within the viewport
            *   the {{ SVGAttr("viewBox") }} is scaled up as much as possible, while still meeting the other criteria

            In this case, if the aspect ratio of the graphic does not match the viewport, some of the viewport will extend beyond the bounds of the {{ SVGAttr("viewBox") }} (i.e., the area into which the {{ SVGAttr("viewBox") }} will draw will be smaller than the viewport).
        *   **slice** - Scale the graphic such that:

            *   aspect ratio is preserved
            *   the entire viewport is covered by the {{ SVGAttr("viewBox") }}
            *   the {{ SVGAttr("viewBox") }} is scaled down as much as possible, while still meeting the other criteria

            In this case, if the aspect ratio of the {{ SVGAttr("viewBox") }} does not match the viewport, some of the {{ SVGAttr("viewBox") }} will extend beyond the bounds of the viewport (i.e., the area into which the {{ SVGAttr("viewBox") }} will draw is larger than the viewport).

## Elements

You can use this attribute with the following SVG elements:

*   {{SVGElement("svg")}}
*   {{SVGElement("symbol")}}
*   {{SVGElement("image")}}
*   {{SVGElement("feImage")}}
*   {{SVGElement("marker")}}
*   {{SVGElement("pattern")}}
*   {{SVGElement("view")}}

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

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Specification</th>
      <th scope="col">Status</th>
      <th scope="col">Comment</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        {{SpecName("Filters 1.0", "#element-attrdef-feimage-preserveaspectratio", "preserveAspectRatio")}}
      </td>
      <td>{{Spec2('Filters 1.0')}}</td>
      <td></td>
    </tr>
    <tr>
      <td>
        {{SpecName("SVG2", "coords.html#PreserveAspectRatioAttribute", "preserveAspectRatio")}}
      </td>
      <td>{{Spec2("SVG2")}}</td>
      <td></td>
    </tr>
    <tr>
      <td>
        {{SpecName("SVG1.1", "coords.html#PreserveAspectRatioAttribute", "preserveAspectRatio")}}
      </td>
      <td>{{Spec2("SVG1.1")}}</td>
      <td>Initial definition</td>
    </tr>
  </tbody>
</table>
