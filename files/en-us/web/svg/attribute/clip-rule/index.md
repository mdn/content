---
title: clip-rule
slug: Web/SVG/Attribute/clip-rule
page-type: svg-attribute
browser-compat: svg.attributes.presentation.clip-rule
---

{{SVGRef}}

« [SVG Attribute reference home](/en-US/docs/Web/SVG/Attribute)

The `clip-rule` attribute only applies to graphics elements that are contained within a {{ SVGElement("clipPath") }} element. The `clip-rule` attribute basically works as the {{ SVGAttr("fill-rule") }} attribute, except that it applies to {{ SVGElement("clipPath") }} definitions.

The following fragment of code will cause an evenodd clipping rule to be applied to the clipping path because `clip-rule` is specified on the {{ SVGElement("path") }} element that defines the clipping shape:

```html
<g>
  <clipPath id="MyClip">
    <path d="..." clip-rule="evenodd" />
  </clipPath>
  <rect clip-path="url(#MyClip)" ... />
</g>
```

whereas the following fragment of code will not cause an evenodd clipping rule to be applied because the `clip-rule` is specified on the referencing element, not on the object defining the clipping shape:

```html
<g>
  <clipPath id="MyClip">
    <path d="..." />
  </clipPath>
  <rect clip-path="url(#MyClip)" clip-rule="evenodd" ... />
</g>
```

As a presentation attribute, it also can be used as a property directly inside a CSS stylesheet

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>nonzero | evenodd | inherit</td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td>nonzero</td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

- nonzero
  - : See description of {{ SVGAttr("fill-rule") }} property.
- evenodd
  - : See description of {{ SVGAttr("fill-rule") }} property.

## Example

```html
<svg
  width="100"
  viewBox="0 0 100 90"
  xmlns="http://www.w3.org/2000/svg"
  version="1.1">
  <!-- Define star path -->
  <defs>
    <path d="M50,0 21,90 98,35 2,35 79,90z" id="star" />
  </defs>

  <!-- Left: evenodd -->
  <clipPath id="emptyStar">
    <use xlink:href="#star" clip-rule="evenodd" />
  </clipPath>
  <rect clip-path="url(#emptyStar)" width="50" height="90" fill="blue" />

  <!-- Right: nonzero -->
  <clipPath id="filledStar">
    <use xlink:href="#star" clip-rule="nonzero" />
  </clipPath>
  <rect clip-path="url(#filledStar)" width="50" height="90" x="50" fill="red" />
</svg>
```

{{ EmbedLiveSample('Example', '100%', '110') }}

## Elements

The following elements can use the `clip-rule` attribute, but only if they are inside a {{ SVGElement("clipPath") }} element.

- [Graphical elements](/en-US/docs/Web/SVG/Element#graphical) »

## Browser compatibility

{{Compat}}

## See also

- {{ SVGElement("clipPath") }}
