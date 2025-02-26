---
title: description
slug: Mozilla/Add-ons/WebExtensions/manifest.json/description
page-type: webextension-manifest-key
browser-compat: webextensions.manifest.description
---

{{AddonSidebar}}

<table class="fullwidth-table">
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
      <td>
        <pre class="brush: json">
"description": "Replaces pictures with pictures of cats."</pre
        >
      </td>
    </tr>
  </tbody>
</table>

A short description of the extension, intended for display in the browser's user interface. In Chromium browsers, this value can be up to 132 characters. The limit in other browsers may differ.

This is a [localizable property](/en-US/docs/Mozilla/Add-ons/WebExtensions/Internationalization#internationalizing_manifest.json).

## Example

```json
"description": "Replaces pictures with pictures of cats."
```

## Browser compatibility

{{Compat}}
