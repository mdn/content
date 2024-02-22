---
title: name
slug: Mozilla/Add-ons/WebExtensions/manifest.json/name
page-type: webextension-manifest-key
browser-compat: webextensions.manifest.name
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
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">Example</th>
      <td><pre class="brush: json">"name": "My Extension"</pre></td>
    </tr>
  </tbody>
</table>

Name of the extension. This is used to identify the extension in the browser's user interface and on sites like addons.mozilla.org.

It's good practice to keep the name short enough to display in the UI. Chromium browsers do not limit the length, however The Chrome Web Store has a maximum length of 75 characters, and the Microsoft Edge Addons store has a maximum length of 45 characters.

This is a [localizable property](/en-US/docs/Mozilla/Add-ons/WebExtensions/Internationalization#internationalizing_manifest.json).

## Example

```json
"name": "My Extension"
```

## Browser compatibility

{{Compat}}
