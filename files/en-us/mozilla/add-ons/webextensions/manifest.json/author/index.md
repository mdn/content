---
title: author
slug: Mozilla/Add-ons/WebExtensions/manifest.json/author
page-type: webextension-manifest-key
browser-compat: webextensions.manifest.author
sidebar: addonsidebar
---

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

The extension's author. It's intended for display in the browser's user interface. The string held by value is a [localizable property](/en-US/docs/Mozilla/Add-ons/WebExtensions/Internationalization#internationalizing_manifest.json).

Firefox expects this key to represent the name of the person or entity that developed the extension. If the [developer](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/developer) key is also specified as an object with a `name` property, the value of `name` overrides the `author` key.

Using the `developer` key to identify the author in Firefox is recommended.

As of May 2025, Chrome and the Chrome Web Store don't use this key.

## Example

```json
"author": "Walt Whitman"
```

## Browser compatibility

{{Compat}}
