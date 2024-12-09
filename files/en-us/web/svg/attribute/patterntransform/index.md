---
title: patternTransform
slug: Web/SVG/Attribute/patternTransform
page-type: svg-attribute
browser-compat: svg.elements.pattern.patternTransform
---

{{SVGRef}}

The **`patternTransform`** attribute defines a list of [transform definitions](/en-US/docs/Web/SVG/Attribute/transform#transform_functions) that are applied to a pattern tile.

You can use this attribute with the following SVG elements:

- {{SVGElement('pattern')}}

## Examples

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <!-- Apply a transform on the tile -->
  <pattern
    id="p1"
    width=".25"
    height=".25"
    patternTransform="rotate(20)
                      skewX(30)
                      scale(1 0.5)">
    <circle cx="10" cy="10" r="10" />
  </pattern>

  <!-- Apply the transformed pattern tile -->
  <rect x="10" y="10" width="80" height="80" fill="url(#p1)" />
</svg>
```

{{EmbedLiveSample("Examples", '100%', 300)}}

## Elements

You can use this attribute with the SVG elements described in the sections below.

### `<pattern>`

For {{SVGElement('pattern')}}, `patternTransform` defines a list of [transform definitions](/en-US/docs/Web/SVG/Attribute/transform#transform_functions) that are applied to a pattern tile.

> [!NOTE]
> As of SVG2, it is also allowed to use the CSS {{ cssxref('transform') }} property. However, the current state of implementation isn't very good. For backward compatibility reason, it is highly suggested to keep using the `patternTransform` attribute.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <a href="/en-US/docs/Web/SVG/Attribute/transform#transform_functions"
          >&#x3C;transform-list></a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><em>Identity transform</em></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

### Transform functions

To know more about the definition of transform functions, see the {{ SVGAttr("transform") }} attribute definition.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
