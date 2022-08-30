---
title: prefer_related_applications
slug: Web/Manifest/prefer_related_applications
tags:
  - Manifest
  - Web
  - prefer_related_applications
  - Experimental
browser-compat: html.manifest.prefer_related_applications
---
{{QuickLinksWithSubpages("/en-US/docs/Web/Manifest")}}{{SeeCompatTable}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type</th>
      <td><code>Boolean</code></td>
    </tr>
    <tr>
      <th scope="row">Mandatory</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

The `prefer_related_applications` member is a boolean value that specifies that applications listed in [`related_applications`](/en-US/docs/Web/Manifest/related_applications) should be preferred over the web application. If the `prefer_related_applications` member is set to `true`, the user agent might suggest installing one of the related applications instead of this web app.

If omitted, `prefer_related_applications` defaults to `false`.

## Examples

```json
"prefer_related_applications": true
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
