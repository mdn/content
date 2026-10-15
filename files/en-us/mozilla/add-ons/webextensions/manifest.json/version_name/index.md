---
title: version_name
slug: Mozilla/Add-ons/WebExtensions/manifest.json/version_name
page-type: webextension-manifest-key
browser-compat: webextensions.manifest.version_name
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
      <td><pre class="brush: json">"version_name": "0.1 beta"</pre></td>
    </tr>
  </tbody>
</table>

In addition to the [`version`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/version) key, which is used for update purposes, `version_name` can be set to a descriptive version string and is used as the displayed version value.

If `version_name` isn't present, the `version` property is used as the displayed version.

## Browser compatibility

{{Compat}}

## See also

- The [`version`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/version) manifest key
