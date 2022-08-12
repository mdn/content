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

Version of the extension, formatted as numbers and ASCII characters separated by dots. For the details of the version format, see the [Version format](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/version/format) page.

You can inspect the [add-ons linter code](https://github.com/mozilla/addons-linter/blob/master/src/schema/formats.js#L10) to see how extension versions for Firefox are validated.

Note that [the syntax defined for Chrome's `version`](https://developer.chrome.com/docs/extensions/mv3/manifest/version/) is more restrictive than that used by Firefox:

- values for `version` that are valid for Chrome will always be valid for Firefox
- values for `version` that are valid for Firefox may not be valid for Chrome

To obtain your extension version in your JavaScript code, use:

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
