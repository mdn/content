---
title: version_name
slug: Mozilla/Add-ons/WebExtensions/manifest.json/version_name
page-type: webextension-manifest-key
browser-compat: webextensions.manifest.version_name
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
      <td><pre class="brush: json">"version_name": "0.1 beta"</pre></td>
    </tr>
  </tbody>
</table>

In addition to the [version](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/version) field, which is used for update purposes, [version_name](https://developer.chrome.com/docs/extensions/mv3/manifest/version/) can be set to a descriptive version string and will be used for display purposes if present.

If no **version_name** is present, the **version** field will be used for display purposes as well.

## Browser compatibility

{{Compat}}
