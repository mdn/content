---
title: background_color
slug: Web/Manifest/background_color
page-type: web-manifest-member
status:
  - experimental
browser-compat: html.manifest.background_color
---

{{QuickLinksWithSubpages("/en-US/docs/Web/Manifest")}}{{SeeCompatTable}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type</th>
      <td><code>String</code></td>
    </tr>
  </tbody>
</table>

The `background_color` member defines a placeholder background color for the application page to display before its stylesheet is loaded. This value is used by the user agent to draw the background color of a shortcut when the manifest is available before the stylesheet has loaded.

Therefore `background_color` should match the {{cssxref("background-color")}} CSS property in the site's stylesheet for a smooth transition between launching the web application and loading the site's content.

> **Note:** The `background_color` member is only meant to improve the user experience while the main stylesheet is loading from the network or the storage media; it is not used by the user agent as the {{cssxref("background-color")}} CSS property when the progressive web app stylesheet is available.

## Examples

```json
"background_color": "red"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
