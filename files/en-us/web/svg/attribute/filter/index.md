---
title: filter
slug: Web/SVG/Attribute/filter
page-type: svg-attribute
browser-compat: svg.global_attributes.filter
---

{{SVGRef}}

The **`filter`** attribute specifies the filter effects defined by the {{SVGElement("filter")}} element that shall be applied to its element.

> [!NOTE]
> As a presentation attribute, `filter` also has a CSS property counterpart: {{cssxref("filter")}}. When both are specified, the CSS property takes priority.

Technically, `filter` can be applied to any element, but it only has effect on [container elements](/en-US/docs/Web/SVG/Element#container_elements) without the {{SVGElement("defs")}} element, all [graphics elements](/en-US/docs/Web/SVG/Element#graphics_elements), and the {{SVGElement("use")}} element.

## Example

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <filter id="blur">
    <feGaussianBlur stdDeviation="2" />
  </filter>

  <rect x="10" y="10" width="80" height="80" filter="url(#blur)" />
</svg>
```

{{EmbedLiveSample("Example", "220", "220")}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <code>none</code>
        <a
          href="/en-US/docs/Web/CSS/Value_definition_syntax#single_bar"
          title="Single bar: exactly one of the entities must be present"
          >|</a
        >
        <code>&#x3C;filter-value-list></code>
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>none</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

For a description of the values see the CSS {{cssxref("filter")}} property.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{SVGElement("filter")}}
- CSS {{cssxref("filter")}} property
