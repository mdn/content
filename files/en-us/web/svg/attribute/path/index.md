---
title: path
slug: Web/SVG/Attribute/path
tags:
  - SVG
  - SVG Attribute
spec-urls:
  - https://svgwg.org/svg2-draft/text.html#TextPathElementPathAttribute
  - https://svgwg.org/specs/animations/#AnimateMotionElementPathAttribute
---
{{SVGRef}}

The **`path`** attribute has two different meanings, either it defines a text path along which the characters of a text are rendered, or a motion path along which a referenced element is animated.

You can use this attribute with the following SVG elements:

- {{SVGElement("animateMotion")}}
- {{SVGElement("textPath")}}

## Example

```css hidden
html, body, svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path id="MyPath" fill="none" stroke="silver"
        d="M10,90 Q90,90 90,45 Q90,10 50,10 Q10,10 10,40 Q10,70 45,70 Q70,70 75,50" />

  <text>
    <textPath path="M10,90 Q90,90 90,45 Q90,10 50,10 Q10,10 10,40 Q10,70 45,70 Q70,70 75,50">
      Quick brown fox jumps over the lazy dog.
    </textPath>
  </text>
</svg>
```

{{EmbedLiveSample("Example", "420", "220")}}

## animateMotion

For {{SVGElement("animateMotion")}}, `path` defines the motion path, expressed in the same format and interpreted the same way as the {{SVGAttr("d")}} geometric property for the {{SVGElement("path")}} element. The effect of a motion path animation is a translation along the x- and y-axes of the current user coordinate system by the x and y values computed over time.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td><code>&#x3C;path-data></code></td>
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

- `<path-data>`
  - : This value defines the motion path along which the referenced element is animated. For detailed information about the commands that can be used, see the [explanation for the `d` attribute](/en-US/docs/Web/SVG/Attribute/d#path_commands).

## textPath

For {{SVGElement("textPath")}}, `path` defines the path onto which the {{Glossary("glyph", "glyphs")}} of a {{SVGElement("text")}} element will be rendered. An empty string indicates that there is no path data for the element. This means that the text within the `<textPath>` element does not render or contribute to the bounding box of the `<text>` element. If the attribute is not specified, the path specified in {{SVGAttr("href")}} is used instead.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td><code>&#x3C;path-data></code></td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><em>Path specified in {{SVGAttr("href")}}</em></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

- `<path-data>`
  - : This value defines the text path along which the glyphs of the `<text>` element are aligned. For detailed information about the commands that can be used, see the [explanation for the `d` attribute](/en-US/docs/Web/SVG/Attribute/d#path_commands).

## Specifications

{{Specifications}}
