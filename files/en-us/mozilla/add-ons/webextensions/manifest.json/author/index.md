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

The extension's author, intended for display in the browser's user interface. If the [developer](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/developer) key is supplied and it contains the "name" property, it overrides the author key. There's no way to specify multiple authors.

From Manifest V3, Chrome prefers this key to be an object, but the Chrome Web Store continues to accept a string value. When publishing to the Chrome Web Store, this key (if specified) must match the email address of the account used to publish the extension. If this item is specified as an object, Firefox ignores it. In this case, you can define the author to Firefox using the [developer](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/developer) key.

This is a [localizable property](/en-US/docs/Mozilla/Add-ons/WebExtensions/Internationalization#internationalizing_manifest.json).

## Example

```json
"author": "Walt Whitman"
```

## Browser compatibility

{{Compat}}
