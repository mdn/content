---
title: dur
slug: Web/SVG/Attribute/dur
page-type: svg-attribute
browser-compat: svg.elements.animate.dur
---

{{SVGRef}}

The **`dur`** attribute indicates the simple duration of an animation.

You can use this attribute with the following SVG elements:

- {{SVGElement("animate")}}
- {{SVGElement("animateMotion")}}
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
<svg viewBox="0 0 220 150" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="100" height="100">
    <animate
      attributeType="XML"
      attributeName="y"
      from="0"
      to="50"
      dur="1s"
      repeatCount="indefinite" />
  </rect>
  <rect x="120" y="0" width="100" height="100">
    <animate
      attributeType="XML"
      attributeName="y"
      from="0"
      to="50"
      dur="3s"
      repeatCount="indefinite" />
  </rect>
</svg>
```

{{EmbedLiveSample("Example", "220", "150")}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <code
          ><a href="/en-US/docs/Web/SVG/Content_type#Clock-value"
            >&#x3C;clock-value></a
          ></code
        >
        | <code>media</code> | <code>indefinite</code>
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>indefinite</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

- `<clock-value>`
  - : This value specifies the length of the simple duration. The value must be greater than 0 and can be expressed with hours (`h`), minutes (`m`), seconds (`s`) or milliseconds (`ms`). It's possible to combine those time representations to create some complex durations like `hh:mm:ss.iii` or `mm:ss.iii`.
- `media`
  - : This value specifies the simple duration as the intrinsic media duration. This is only valid for elements that define media.
    (For [animation elements](/en-US/docs/Web/SVG/Element#animation_elements) the attribute will be ignored if `media` is specified.)
- `indefinite`
  - : This value specifies the simple duration as indefinite.

> **Note:** the {{Glossary("interpolation")}} will not work if the simple duration is indefinite (although this may still be useful for {{SVGElement("set")}} elements).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
