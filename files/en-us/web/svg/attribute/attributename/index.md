---
title: attributeName
slug: Web/SVG/Attribute/attributeName
tags:
  - NeedsCompatTable
  - SVG
  - SVG Attribute
---
{{SVGRef}}

The **`attributeName`** attribute indicates the name of the CSS property or attribute of the target element that is going to be changed during an animation.

You can use this attribute with the following SVG elements:

*   {{SVGElement("animate")}}
*   {{SVGElement("animateColor")}}
*   {{SVGElement("animateTransform")}}
*   {{SVGElement("set")}}

## Example

```css hidden
html, body, svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 250 250" xmlns="http://www.w3.org/2000/svg">
  <rect x="50" y="50" width="100" height="100">
    <animate attributeType="XML" attributeName="y" from="0" to="50"
        dur="5s" repeatCount="indefinite"/>
  </rect>
</svg>
```

{{EmbedLiveSample("Example", "400", "250")}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td><code>&#x3C;name></code></td>
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

*   `<name>`
    *   : This value indicates the name of the CSS property or attribute of the target element to be animated.

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
        {{SpecName("SVG Animations 2", "#AttributeNameAttribute", "attributeName")}}
      </td>
      <td>{{Spec2("SVG Animations 2")}}</td>
      <td>No change</td>
    </tr>
    <tr>
      <td>
        {{SpecName("SVG1.1", "animate.html#AttributeNameAttribute", "attributeName")}}
      </td>
      <td>{{Spec2("SVG1.1")}}</td>
      <td>Initial definition</td>
    </tr>
  </tbody>
</table>

## See also

*   [SMIL Animation specification](https://www.w3.org/TR/2001/REC-smil-animation-20010904/#AccumulateAttribute)
