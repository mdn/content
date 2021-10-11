---
title: screenshots
slug: Web/Manifest/screenshots
tags:
  - Manifest
  - Screenshots
  - Web
browser-compat: html.manifest.screenshots
---
{{QuickLinksWithSubpages("/en-US/docs/Web/Manifest")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type</th>
      <td><code>Object</code></td>
    </tr>
    <tr>
      <th scope="row">Mandatory</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

The `screenshots` member defines an array of screenshots intended to showcase the application. These images are intended to be used by progressive web app stores.

## Examples

```json
"screenshots" : [
  {
    "src": "screenshot1.webp",
    "sizes": "1280x720",
    "type": "image/webp"
  },
  {
    "src": "screenshot2.webp",
    "sizes": "1280x720",
    "type": "image/webp"
  }
]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
