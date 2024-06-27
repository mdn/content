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

It's good practice to keep the name short enough to display in the UI. Also, the length of the name of a published extension may be limited. For example, as of February 2024:

- addons.mozilla.org accepts a maximum of 50 characters.
- the Chrome Web Store accepts a maximum of 75 characters.
- the Microsoft Edge Addons store accepts a maximum of 45 characters.

These restrictions do not apply to self-hosted extensions or extensions distributed outside the stores.

This is a [localizable property](/en-US/docs/Mozilla/Add-ons/WebExtensions/Internationalization#internationalizing_manifest.json).

## Example

```json
"name": "My Extension"
```

## Browser compatibility

{{Compat}}
