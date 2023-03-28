---
title: contentScriptType
slug: Web/SVG/Attribute/contentScriptType
page-type: svg-attribute
status:
  - deprecated
browser-compat: svg.elements.svg.contentScriptType
---

{{SVGRef}}{{deprecated_header}}

The **`contentScriptType`** attribute specifies the default scripting language for the given document fragment on the {{SVGElement("svg")}} element.

This attribute sets the default scripting language used to process the value strings in [event attributes](/en-US/docs/Web/SVG/Attribute#document_event_attributes). This language must be used for all instances of script that do not specify their own scripting language. The value specifies a media type, per [MIME Part Two: Media Types \[RFC2046\]](https://www.ietf.org/rfc/rfc2046.txt).

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        One of the content types specified in the
        <a href="https://www.ietf.org/rfc/rfc2046.txt">Media Types</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>application/ecmascript</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [MIME Part Two: Media Types \[RFC2046\]](https://www.ietf.org/rfc/rfc2046.txt)
- {{SVGElement("script")}}
