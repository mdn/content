---
title: vector-effect
slug: Web/SVG/Attribute/vector-effect
page-type: svg-attribute
browser-compat: svg.global_attributes.vector-effect
---

{{SVGRef}}

The **`vector-effect`** property specifies the vector effect to use when drawing an object. Vector effects are applied before any of the other compositing operations, i.e. filters, masks and clips.

> [!NOTE]
> As a presentation attribute, `vector-effect` also has a CSS property counterpart: {{cssxref("vector-effect")}}. When both are specified, the CSS property takes priority.

## Elements

You can use this attribute with the following SVG elements:

- {{SVGElement("circle")}}
- {{SVGElement("ellipse")}}
- {{SVGElement("foreignObject")}}
- {{SVGElement("image")}}
- {{SVGElement("line")}}
- {{SVGElement("path")}}
- {{SVGElement("polygon")}}
- {{SVGElement("polyline")}}
- {{SVGElement("rect")}}
- {{SVGElement("text")}}
- {{SVGElement("textPath")}}
- {{SVGElement("tspan")}}
- {{SVGElement("use")}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <code>none</code> | <code>non-scaling-stroke</code> |
        <code>non-scaling-size</code> | <code>non-rotation</code> |
        <code>fixed-position</code>
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>none</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>discrete</td>
    </tr>
  </tbody>
</table>

- `none`
  - : This value specifies that no vector effect shall be applied, i.e. the default rendering behavior is used which is to first fill the geometry of a shape with a specified paint, then stroke the outline with a specified paint.
- `non-scaling-stroke`
  - : This value modifies the way an object is stroked. Normally stroking involves calculating stroke outline of the shape's path in current user coordinate system and filling that outline with the stroke paint (color or gradient). The resulting visual effect of this value is that the stroke width is not dependent on the transformations of the element (including non-uniform scaling and shear transformations) and zoom level.
- `non-scaling-size`
  - : This value specifies a special user coordinate system used by the element and its descendants. The scale of that user coordinate system does not change in spite of any transformation changes from a host coordinate space. However, it does not specify the suppression of rotation and skew. Also, it does not specify the origin of the user coordinate system. Since this value suppresses scaling of the user coordinate system, it also has the characteristics of `non-scaling-stroke`.
- `non-rotation`
  - : This value specifies a special user coordinate system used by the element and its descendants. The rotation and skew of that user coordinate system is suppressed in spite of any transformation changes from a host coordinate space. However, it does not specify the suppression of scaling. Also, it does not specify the origin of user coordinate system.
- `fixed-position`
  - : This value specifies a special user coordinate system used by the element and its descendants. The position of user coordinate system is fixed in spite of any transformation changes from a host coordinate space. However, it does not specify the suppression of rotation, skew and scaling. When this vector effect and the {{SVGAttr("transform")}} property are defined at the same time, that property is consumed for this effect.

## Examples

### Setting `vector-effect` as `non-scaling-stroke`

```html
<svg viewBox="0 0 500 240">
  <!-- normal -->
  <path
    d="M10,20 L40,100 L39,200 z"
    stroke="black"
    stroke-width="2px"
    fill="none"></path>

  <!-- scaled -->
  <path
    transform="translate(100,0) scale(4,1)"
    d="M10,20 L40,100 L39,200 z"
    stroke="black"
    stroke-width="2px"
    fill="none"></path>

  <!-- fixed-->
  <path
    vector-effect="non-scaling-stroke"
    transform="translate(300, 0) scale(4, 1)"
    d="M10,20 L40,100 L39,200 z"
    stroke="black"
    stroke-width="2px"
    fill="none"></path>
</svg>
```

#### Result

{{EmbedLiveSample("Setting vector-effect as non-scaling-stroke", 550, 330)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- CSS {{cssxref("vector-effect")}} property
