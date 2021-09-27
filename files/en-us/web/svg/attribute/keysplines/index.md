---
title: keySplines
slug: Web/SVG/Attribute/keySplines
tags:
  - SVG
  - SVG Attribute
browser-compat: svg.elements.animate.keySplines
---
{{SVGRef}}

The **`keySplines`** attribute defines a set of {{Glossary("Bézier curve")}} control points associated with the {{SVGAttr("keyTimes")}} list, defining a cubic Bézier function that controls interval pacing.

This attribute is ignored unless the {{SVGAttr("calcMode")}} attribute is set to `spline`.

If there are any errors in the keySplines specification (bad values, too many or too few values), the animation will not occur.

You can use this attribute with the following SVG elements:

*   {{SVGElement("animate")}}
*   {{SVGElement("animateColor")}}
*   {{SVGElement("animateMotion")}}
*   {{SVGElement("animateTransform")}}

## Example

```css hidden
html, body, svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  <circle cx="60" cy="10" r="10">
    <animate attributeName="cx" dur="4s" calcMode="spline" repeatCount="indefinite"
        values="60 ; 110 ; 60 ; 10 ; 60" keyTimes="0 ; 0.25 ; 0.5 ; 0.75 ; 1"
        keySplines="0.5 0 0.5 1 ; 0.5 0 0.5 1 ; 0.5 0 0.5 1 ; 0.5 0 0.5 1"/>
    <animate attributeName="cy" dur="4s" calcMode="spline" repeatCount="indefinite"
        values="10 ; 60 ; 110 ; 60 ; 10" keyTimes="0 ; 0.25 ; 0.5 ; 0.75 ; 1"
        keySplines="0.5 0 0.5 1 ; 0.5 0 0.5 1 ; 0.5 0 0.5 1 ; 0.5 0 0.5 1"/>
  </circle>
</svg>
```

{{EmbedLiveSample("Example", "200", "200")}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <code>&#x3C;control-point></code> [ <code>;</code>
        <code>&#x3C;control-point></code> ]* <code>;</code>?
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><em>None</em></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

The attribute value is a semicolon-separated list of control point descriptions.

*   `<control-point>`
    *   : Each control point description is a set of four values: `x1 y1 x2 y2`, describing the Bézier control points for one time segment. The {{SVGAttr("keyTimes")}} values that define the associated segment are the Bézier "anchor points", and the `keySplines` values are the control points. Thus, there must be one fewer sets of control points than there are {{SVGAttr("keyTimes")}}.

        The values of `x1 y1 x2 y2` must all be in the range 0 to 1.

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
        {{SpecName("SVG Animations 2", "#KeySplinesAttribute", "keySplines")}}
      </td>
      <td>{{Spec2("SVG Animations 2")}}</td>
      <td>No change</td>
    </tr>
    <tr>
      <td>
        {{SpecName("SVG1.1", "animate.html#KeySplinesAttribute", "keySplines")}}
      </td>
      <td>{{Spec2("SVG1.1")}}</td>
      <td>Initial definition</td>
    </tr>
  </tbody>
</table>

## Browser compatibility

{{Compat}}

## See also

*   [Wikipedia article on Bézier curves](https://en.wikipedia.org/wiki/B%C3%A9zier_curve)
