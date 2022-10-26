---
title: version
slug: Mozilla/Add-ons/WebExtensions/manifest.json/version
tags:
  - Add-ons
  - Extensions
  - WebExtensions
browser-compat: webextensions.manifest.version
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
      <td><pre class="brush: json">"version": "0.1"</pre></td>
    </tr>
  </tbody>
</table>

The version number of the extension. The version number format is enforced by each extension store, and version numbers that don't comply with store requirements may trigger a warning message in the related browser.

For details of the supported version formats, see:

- [Firefox Version Format](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/version/format), for details of the version format supported in Firefox.
- [Manifest - Version](https://developer.chrome.com/docs/extensions/mv3/manifest/version/), for details of version number format in Chrome.

User [version_name](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/version_name) if you want to include an identifier in the version number that isn't supported by the store or browser. For example, `1.0 beta`.

To obtain your extension's version in your JavaScript code, use:

```js
console.log(browser.runtime.getManifest().version);
```

## Example

If the manifest contains:

```json
"version": "0.1"
```

To obtain your extension version in your JavaScript code, use:

```js
console.log(browser.runtime.getManifest().version);
// expected output: "0.1"
```

## Browser compatibility

{{Compat}}
