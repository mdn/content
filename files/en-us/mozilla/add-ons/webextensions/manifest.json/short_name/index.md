---
title: short_name
slug: Mozilla/Add-ons/WebExtensions/manifest.json/short_name
page-type: webextension-manifest-key
browser-compat: webextensions.manifest.short_name
---

{{AddonSidebar}}

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row">Type</th>
      <td><code>String</code></td>
    </tr>
    <tr>
      <th scope="row">Mandatory</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Manifest version</th>
      <td>2 or higher</td>
    </tr>
    <tr>
      <th scope="row">Example</th>
      <td><pre class="brush: json">"short_name": "My Extension"</pre></td>
    </tr>
  </tbody>
</table>

Short name for the extension. If given, this will be used in contexts where the [name](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/name) field is too long. It's recommended that the short name should not exceed 12 characters. If the short name field is not included in manifest.json, then name will be used instead and may be truncated.

This is a [localizable property](/en-US/docs/Mozilla/Add-ons/WebExtensions/Internationalization#internationalizing_manifest.json).

## Example

```json
"short_name": "My Extension"
```

## Browser compatibility

{{Compat}}
