---
title: numOctaves
slug: Web/SVG/Attribute/numOctaves
tags:
  - Filters
  - SVG
  - SVG Attribute
browser-compat: svg.elements.feTurbulence.numOctaves
---
{{SVGRef}}

The **`numOctaves`** attribute defines the number of octaves for the noise function of the {{SVGElement("feTurbulence")}} primitive.

An octave is a noise function defined by its frequency and amplitude. A turbulence is built by accumulating several octaves with increasing frequencies and decreasing amplitudes.
The higher the number of octaves, the more natural the noise looks. Though more octaves also require more calculations, resulting in a negative impact on performance.

You can use this attribute with the following SVG elements:

*   {{SVGElement("feTurbulence")}}

## Example

```css hidden
html, body, svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 420 200" xmlns="http://www.w3.org/2000/svg">
  <filter id="noise1" x="0" y="0" width="100%" height="100%">
    <feTurbulence baseFrequency="0.025" numOctaves="1" />
  </filter>
  <filter id="noise2" x="0" y="0" width="100%" height="100%">
    <feTurbulence baseFrequency="0.025" numOctaves="3" />
  </filter>

  <rect x="0" y="0" width="200" height="200" style="filter: url(#noise1);" />
  <rect x="0" y="0" width="200" height="200" style="filter: url(#noise2); transform: translateX(220px);" />
</svg>
```

{{EmbedLiveSample("Example", "420", "200")}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>{{cssxref("integer")}}</td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

*   `<integer>`
    *   : Defines the number of octaves. Negative values are forbidden.

## Example

```html
<svg width="200" height="200" viewBox="0 0 220 220"
     xmlns="http://www.w3.org/2000/svg">
  <filter id="displacementFilter">
    <feTurbulence baseFrequency="0.05"
        numOctaves="3" result="turbulence"/>
    <feDisplacementMap in2="turbulence" in="SourceGraphic"
        scale="50" xChannelSelector="R" yChannelSelector="G"/>
  </filter>

  <circle cx="100" cy="100" r="100"
      style="filter: url(#displacementFilter)"/>
</svg>
```

{{EmbedLiveSample("Example", "220", "220")}}

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
        {{SpecName("Filters 1.0", "#element-attrdef-feturbulence-numoctaves", "numOctaves")}}
      </td>
      <td>{{Spec2("Filters 1.0")}}</td>
      <td>No change</td>
    </tr>
    <tr>
      <td>
        {{SpecName("SVG1.1", "filters.html#feTurbulenceNumOctavesAttribute", "numOctaves")}}
      </td>
      <td>{{Spec2("SVG1.1")}}</td>
      <td>Initial definition</td>
    </tr>
  </tbody>
</table>

## Browser compatibility

{{Compat}}

## See also

*   [Understanding Perlin Noise](https://flafla2.github.io/2014/08/09/perlinnoise.html)
*   {{SVGAttr("baseFrequency")}}
