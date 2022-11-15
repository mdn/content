---
title: install_origins
slug: Mozilla/Add-ons/WebExtensions/manifest.json/install_origins
tags:
  - Add-ons
  - Extensions
  - WebExtensions
browser-compat: webextensions.manifest.install_origins
---

{{AddonSidebar}}

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row">Type</th>
      <td><code>Array of string</code></td>
    </tr>
    <tr>
      <th scope="row">Mandatory</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Manifest version</th>
      <td>3 or higher</td>
    </tr>
    <tr>
      <th scope="row">Example</th>
      <td><pre class="brush: json">"install_origins": ["https://www.example.com"]</pre></td>
    </tr>
  </tbody>
</table>

Enables the distribution and update of Manifest V3 extensions from third-party origins, in addition to store distribution. If [`update_url`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings#firefox_gecko_properties) is specified, its origin must be included here.

Up to 5 origins can be specified.

## Example

```json
"install_origins": ["https://www.example.com"]
```

## Browser compatibility

{{Compat}}
