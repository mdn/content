---
title: fx
slug: Web/SVG/Attribute/fx
tags:
  - SVG
  - SVG Attribute
browser-compat: svg.elements.radialGradient.fx
---
{{SVGRef}}

The **`fx`** attribute defines the x-axis coordinate of the focal point for a radial gradient.

You can use this attribute with the following SVG elements:

*   {{SVGElement("radialGradient")}}

## Example

```css hidden
html, body, svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 480 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="gradient1" cx="0.5" cy="0.5" r="0.5"
        fx="0.35" fy="0.35" fr="5%">
      <stop offset="0%" stop-color="white"/>
      <stop offset="100%" stop-color="darkseagreen"/>
    </radialGradient>
    <radialGradient id="gradient2" cx="0.5" cy="0.5" r="0.5"
        fx="0.75" fy="0.35" fr="5%">
      <stop offset="0%" stop-color="white"/>
      <stop offset="100%" stop-color="darkseagreen"/>
    </radialGradient>
  </defs>

  <circle cx="100" cy="100" r="100" fill="url(#gradient1)" />
  <circle cx="100" cy="100" r="100" fill="url(#gradient2)" style="transform: translateX(240px);" />
</svg>
```

{{EmbedLiveSample("Example", "480", "200")}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>{{cssxref("length")}}</td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td>
        Coincides with the presentational value of {{SVGAttr("cx")}} for
        the element whether the value for <code>cx</code> was inherited or not.
      </td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>None</td>
    </tr>
  </tbody>
</table>

## Example

```html
<svg viewBox="0 0 120 120" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="Gradient" cx="0.5" cy="0.5" r="0.5"
        fx="0.35" fy="0.35" fr="5%">
      <stop offset="0%" stop-color="red"/>
      <stop offset="100%" stop-color="blue"/>
    </radialGradient>
  </defs>

  <rect x="10" y="10" rx="15" ry="15" width="100" height="100"
      fill="url(#Gradient)" stroke="black" stroke-width="2"/>

  <circle cx="60" cy="60" r="50" fill="transparent" stroke="white" stroke-width="2"/>
  <circle cx="45" cy="45" r="2" fill="white" stroke="white"/>
  <circle cx="60" cy="60" r="2" fill="white" stroke="white"/>
  <text x="38" y="40" fill="white" font-family="sans-serif" font-size="10pt">(fx,fy)</text>
  <text x="63" y="63" fill="white" font-family="sans-serif" font-size="10pt">(cx,cy)</text>
</svg>
```

{{EmbedLiveSample("Example", "200", "200")}}

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
        {{SpecName("SVG2", "pservers.html#RadialGradientElementFXAttribute", "fx")}}
      </td>
      <td>{{Spec2("SVG2")}}</td>
      <td>No change</td>
    </tr>
    <tr>
      <td>
        {{SpecName("SVG1.1", "pservers.html#RadialGradientElementFXAttribute", "fx")}}
      </td>
      <td>{{Spec2("SVG1.1")}}</td>
      <td>Initial definition</td>
    </tr>
  </tbody>
</table>

## Browser compatibility

{{Compat}}
