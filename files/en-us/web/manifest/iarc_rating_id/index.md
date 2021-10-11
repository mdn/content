---
title: iarc_rating_id
slug: Web/Manifest/iarc_rating_id
tags:
  - Manifest
  - Web
  - iarc_rating_id
browser-compat: html.manifest.iarc_rating_id
---
{{QuickLinksWithSubpages("/en-US/docs/Web/Manifest")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type</th>
      <td><code>String</code></td>
    </tr>
    <tr>
      <th scope="row">Mandatory</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

The _`iarc_rating_id`_ member is a string that represents the [International Age Rating Coalition (IARC)](https://www.globalratings.com/) certification code of the web application. It is intended to be used to determine which ages the web application is appropriate for.

> **Note:** The same code can be shared across multiple participating storefronts, as long as the distributed product remains the same (i.e., doesn’t serve totally different code paths on different storefronts).

## Examples

```json
"iarc_rating_id": "e84b072d-71b3-4d3e-86ae-31a8ce4e53b7"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [How IARC Works](https://www.globalratings.com/how-iarc-works.aspx)
- [How developers can get their games and apps rated with IARC](https://www.globalratings.com/for-developers.aspx)
