---
title: 'SVG attribute: crossorigin'
slug: Web/SVG/Attribute/crossorigin
tags:
  - Advanced
  - Attribute
  - CORS
  - SVG
  - NeedsContent
  - Reference
  - Security
browser-compat: api.SVGImageElement.crossOrigin
---
{{SVGRef}}

The crossorigin attribute, valid on the {{ SVGElement("image") }} element, provides support for [CORS](/en-US/docs/Web/HTTP/CORS), defining how the element handles crossorigin requests, thereby enabling the configuration of the CORS requests for the element's fetched data. It is a CORS settings attribute.

This table shows all possible keywords and their meaning:

<table class="no-markdown">
  <thead>
    <tr>
      <th>Keyword</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>anonymous</code></td>
      <td>
        CORS requests for this element will have the credentials flag set to
        'same-origin'.
      </td>
    </tr>
    <tr>
      <td><code>use-credentials</code></td>
      <td>
        CORS requests for this element will have the credentials flag set to
        'include'.
      </td>
    </tr>
    <tr>
      <td><code>""</code></td>
      <td>
        Setting the attribute name to an empty value, like
        <code>crossorigin</code> or <code>crossorigin=""</code>, is the same as
        <code>anonymous</code>.
      </td>
    </tr>
  </tbody>
</table>

It follows the same processing rules as the HTML attribute {{htmlattrxref("crossorigin")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

<!-- TODO: This should link to an attribute of the element instead
https://github.com/mdn/browser-compat-data/blob/178137547bc29a79b712cec221af099329b1f4a0/svg/elements/image.json
-->

> **Note:** The above compatibility table is broken and needs fixing.

## See also

- [Cross-Origin Resource Sharing (CORS)](/en-US/docs/Web/HTTP/CORS)
