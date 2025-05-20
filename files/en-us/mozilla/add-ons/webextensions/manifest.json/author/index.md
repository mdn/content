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

The extension's author, intended for display in the browser's user interface. The type and meaning of this key vary depending on the browser and [manifest_version](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/manifest_version). The string held by value is a [localizable property](/en-US/docs/Mozilla/Add-ons/WebExtensions/Internationalization#internationalizing_manifest.json).

Chrome expects this key to represent the email address of the extension's author. In Manifest V2, the value must be a string. From Manifest V3, Chrome prefers the value to be an object with an `email` property and a string value. When publishing to the Chrome Web Store, either data structure is accepted, but the string value must match the email address of the account used to publish the extension.

Firefox expects this key to represent the name of the person or entity that developed the extension. Firefox expects a string; if it is declared as an object, Firefox ignores it. If the [developer](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/developer) key is also specified as an object with a `name` property, the value of name overrides the `author` key.

When targeting Chrome and Firefox, use the `author` key to identify the author in Chrome and the `developer` key to identify the author in Firefox.

## Example

```json
"author": "Walt Whitman"
```

## Browser compatibility

{{Compat}}
