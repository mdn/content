---
title: cursor
slug: Web/SVG/Attribute/cursor
page-type: svg-attribute
browser-compat: svg.global_attributes.cursor
---

{{SVGRef}}

The `cursor` attribute specifies the mouse cursor displayed when the mouse pointer is over an element.

> [!NOTE]
> As a presentation attribute, `cursor` also has a CSS property counterpart: {{cssxref("cursor")}}. When both are specified, the CSS property takes priority.

This attribute behaves exactly like the CSS {{cssxref("cursor")}} property except that if the browser supports the {{ SVGElement("cursor") }} element, you should be able to use it with the [\<FuncIRI>](/en-US/docs/Web/SVG/Content_type#funciri) notation.

## Usage context

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Categories</th>
      <td>Presentation attribute</td>
    </tr>
    <tr>
      <th scope="row">Value</th>
      <td>
        [[<a href="/en-US/docs/Web/SVG/Content_type#funciri">&#x3C;FuncIRI></a
        >,]* [ <strong>auto</strong> | crosshair | default | pointer | move |
        e-resize | ne-resize | nw-resize | n-resize | se-resize | sw-resize |
        s-resize | w-resize| text | wait | help ]] | inherit
      </td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">Normative document</th>
      <td>
        <a href="https://www.w3.org/TR/SVG11/interact.html#CursorProperty"
          >SVG 1.1 (2nd Edition)</a
        >
      </td>
    </tr>
  </tbody>
</table>

## Elements

The following elements can use the `cursor` attribute

- [Container elements](/en-US/docs/Web/SVG/Element#container_elements)
- [Graphics elements](/en-US/docs/Web/SVG/Element#graphics_elements)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- CSS {{cssxref("cursor")}} property
