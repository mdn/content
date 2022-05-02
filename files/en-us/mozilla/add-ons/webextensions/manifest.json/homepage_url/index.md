---
title: homepage_url
slug: Mozilla/Add-ons/WebExtensions/manifest.json/homepage_url
tags:
  - Add-ons
  - Extensions
  - WebExtensions
browser-compat: webextensions.manifest.homepage_url
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
      <td>
        <pre class="brush: json">
"homepage_url": "https://example.org/my-addon"</pre
        >
      </td>
    </tr>
  </tbody>
</table>

URL for the extension's home page.

If a [developer](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/developer) key containing the "url" property and "homepage_url" are defined, Firefox uses "developer.url" while Opera uses "homepage_url".
Chrome and Safari do not support the "developer" key.

This is a [localizable property](/en-US/docs/Mozilla/Add-ons/WebExtensions/Internationalization#internationalizing_manifest.json).

## Example

```json
"homepage_url": "https://github.com/mdn/webextensions-examples/tree/master/beastify"
```

## Browser compatibility

{{Compat}}
