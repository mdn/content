---
title: overflow
slug: Web/SVG/Attribute/overflow
page-type: svg-attribute
browser-compat: svg.global_attributes.overflow
---

{{SVGRef}}

The **`overflow`** attribute sets what to do when an element's content is too big to fit in its block formatting context. **This feature is not widely implemented yet**.

This attribute has the same parameter values and meaning as the CSS {{cssxref("overflow")}} property, however, the following additional points apply:

- If it has a value of `visible`, the attribute has no effect (i.e., a clipping rectangle is not created).
- If the `overflow` property has the value `hidden` or `scroll`, a clip of the exact size of the SVG viewport is applied.
- When `scroll` is specified on an {{SVGElement("svg")}} element, a scrollbar or panner is normally shown for the SVG viewport whether or not any of its content is clipped.
- Within SVG content, the value `auto` implies that all rendered content for child elements must be visible, either through a scrolling mechanism, or by rendering with no clip.

> [!NOTE]
> Although the initial value for overflow is `auto`, it is overwritten in the User Agent style sheet for the {{SVGElement("svg")}} element when it is not the root element of a stand-alone document, the {{SVGElement("pattern")}} element, and the {{SVGElement("marker")}} element to be hidden by default.

> [!NOTE]
> As a presentation attribute, `overflow` also has a CSS property counterpart: {{cssxref("overflow")}}. When both are specified, the CSS property takes priority.

You can use this attribute with the following SVG elements:

- {{SVGElement("foreignObject")}}
- {{SVGElement("image")}}
- {{SVGElement("marker")}}
- {{SVGElement("pattern")}}
- {{SVGElement("symbol")}}
- {{SVGElement("svg")}}
- {{SVGElement("text")}}

## Example

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 200 30" xmlns="http://www.w3.org/2000/svg" overflow="auto">
  <text y="20">
    This text is wider than the SVG, so there should be a scrollbar shown.
  </text>
</svg>
```

{{EmbedLiveSample("Example", "200", "50")}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <code>visible</code> | <code>hidden</code> | <code>scroll</code> |
        <code>auto</code>
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>visible</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

For a description of the values, please see the CSS {{cssxref("overflow")}} property.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- CSS {{cssxref("overflow")}} property
