---
title: author
slug: Mozilla/Add-ons/WebExtensions/manifest.json/author
page-type: webextension-manifest-key
browser-compat: webextensions.manifest.author
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
      <td><pre class="brush: json">"author": "Walt Whitman"</pre></td>
    </tr>
  </tbody>
</table>

The extension's author, intended for display in the browser's user interface. If the [developer](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/developer) key is supplied and it contains the "name" property, it will override the author key. There's no way to specify multiple authors.

This is a [localizable property](/en-US/docs/Mozilla/Add-ons/WebExtensions/Internationalization#internationalizing_manifest.json).

## Example

```json
"author": "Walt Whitman"
```

## Browser compatibility

{{Compat}}
