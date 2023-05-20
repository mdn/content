---
title: xlink:show
slug: Web/SVG/Attribute/xlink:show
page-type: svg-attribute
status:
  - deprecated
browser-compat: svg.attributes.xlink.xlink_show
---

{{SVGRef}}{{Deprecated_Header}}

The **`xlink:show`** attribute indicates how a linked resource should be opened and is meant for {{Glossary("XLink")}}-aware processors. In case of a conflict, the {{SVGAttr("target")}} attribute has priority, since it can express a wider range of values.

You can use this attribute with the following SVG elements:

- {{SVGElement("a")}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <code>new</code> | <code>replace</code> | <code>embed</code> |
        <code>other</code> | <code>none</code>
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>replace</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

- `new`
  - : This value specifies that the referenced resource is opened in a new window or tab. This is similar to the effect achieved by an HTML {{HTMLElement("a")}} element with [target](/en-US/docs/Web/HTML/Element/a#target) set to `_blank`.
- `replace`
  - : This value specifies that the referenced resource is opened in the same window or tab. This is similar to the effect achieved by an HTML {{HTMLElement("a")}} element with [target](/en-US/docs/Web/HTML/Element/a#target) set to `_self`.
- `embed`
  - : This value specifies that instead of linking to the resource it will be loaded and shown within the document. This is similar to the effect achieved by an HTML {{HTMLElement("img")}} element.
- `other`
  - : This value indicates that other markup present in the link, i.e. the {{SVGAttr("target")}} attribute, determines its behavior.
- `none`
  - : This value specifies that there is no indication for how to refer to the linked resource.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Definition of the `xlink:show` attribute in the XLink specification](https://www.w3.org/TR/xlink/#show-att)
