---
title: name
slug: Mozilla/Add-ons/WebExtensions/manifest.json/name
tags:
  - Add-ons
  - Extensions
  - WebExtensions
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

It's good practice to keep the name short enough to display in the UI. Google Chrome and Microsoft Edge restrict the name length to 45 characters.

This is a [localizable property](/en-US/docs/Mozilla/Add-ons/WebExtensions/Internationalization#internationalizing_manifest.json).

## Example

```json
"name": "My Extension"
```

## Browser compatibility

{{Compat}}
