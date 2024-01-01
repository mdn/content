---
title: attributeType
slug: Web/SVG/Attribute/attributeType
page-type: svg-attribute
status:
  - deprecated
spec-urls: https://www.w3.org/TR/SVG11/animate.html#AttributeTypeAttribute
---

{{SVGRef}}{{Deprecated_Header}}

The **`attributeType`** attribute specifies the namespace in which the target attribute and its associated values are defined.

You can use this attribute with the following SVG elements:

- {{SVGElement("animate")}}
- {{SVGElement("animateTransform")}}
- {{SVGElement("set")}}

## Example

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 250 250" xmlns="http://www.w3.org/2000/svg">
  <rect x="50" y="50" width="100" height="100">
    <animate
      attributeType="XML"
      attributeName="y"
      from="0"
      to="50"
      dur="5s"
      repeatCount="indefinite" />
  </rect>
</svg>
```

{{EmbedLiveSample("Example", "400", "250")}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td><code>CSS</code> | <code>XML</code> | <code>auto</code></td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>auto</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

- `CSS`
  - : This value specifies that the value of {{SVGAttr("attributeName")}} is the name of a CSS property defined as animatable.
- `XML`
  - : This value specifies that the value of {{SVGAttr("attributeName")}} is the name of an XML attribute defined as animatable in the default XML namespace for the target element.
- `auto`
  - : This value specifies that the implementation should match the {{SVGAttr("attributeName")}} to an attribute for the target element. User agents first search through the list of CSS properties for a matching property name, and if none is found, search the default XML namespace for the element.

## Specifications

{{Specifications}}

## See also

- [SMIL Animation specification](https://www.w3.org/TR/2001/REC-smil-animation-20010904/#AccumulateAttribute)
