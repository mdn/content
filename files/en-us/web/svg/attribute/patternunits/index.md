---
title: patternUnits
slug: Web/SVG/Attribute/patternUnits
tags:
  - SVG
  - SVG Attribute
browser-compat: svg.elements.pattern.patternUnits
---
{{SVGRef}}

The **`patternUnits`** attribute indicates which coordinate system to use for the geometry properties of the {{ SVGElement("pattern") }} element.

You can use this attribute with the following SVG elements:

- {{SVGElement('pattern')}}

## Example

```css hidden
html,body,svg { height:100% }
```

```html
<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
  <!-- All geometry properties are relative to the current user space -->
  <pattern id="p1" x="12.5" y="12.5" width="25" height="25"
           patternUnits="userSpaceOnUse">
    <circle cx="10" cy="10" r="10" />
  </pattern>

  <!-- All geometry properties are relative to the target bounding box -->
  <pattern id="p2" x=".125" y=".125" width=".25" height=".25"
           patternUnits="objectBoundingBox">
    <circle cx="10" cy="10" r="10" />
  </pattern>

  <!-- Left square with user space tiles -->
  <rect x="10"  y="10" width="80" height="80"
        fill="url(#p1)" />

  <!-- Right square with bounding box tiles -->
  <rect x="110" y="10" width="80" height="80"
        fill="url(#p2)" />
</svg>
```

{{EmbedLiveSample("Example", '100%', 200)}}

## pattern

For {{SVGElement('pattern')}}, `patternUnits` defines the coordinate system in use for the geometry properties ({{ SVGAttr("x") }}, {{ SVGAttr("y") }}, {{ SVGAttr("width") }} and {{ SVGAttr("height") }}) of the element.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td><code>userSpaceOnUse</code> | <code>objectBoundingBox</code></td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>objectBoundingBox</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

- `userSpaceOnUse`
  - : This value indicates that all coordinates for the geometry properties refer to the user coordinate system as defined when the pattern was applied.
- `objectBoundingBox`
  - : This value indicates that all coordinates for the geometry properties represent fractions or percentages of the bounding box of the element to which the pattern is applied. A bounding box could be considered the same as if the content of the {{ SVGElement("pattern") }} were bound to a "`0 0 1 1`" {{ SVGAttr("viewBox") }}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
