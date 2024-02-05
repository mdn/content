---
title: omnibox
slug: Mozilla/Add-ons/WebExtensions/manifest.json/omnibox
page-type: webextension-manifest-key
browser-compat: webextensions.manifest.omnibox
---

{{AddonSidebar}}

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row">Type</th>
      <td><code>Object</code></td>
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
"omnibox": {
  "keyword": "mdn"
}</pre
        >
      </td>
    </tr>
  </tbody>
</table>

Use the `omnibox` key to define an omnibox keyword for your extension.

When the user types this keyword into the browser's address bar, followed by a space, then any subsequent characters will be sent to the extension using the [`omnibox`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/omnibox) API. The extension will then be able to populate the address bar's drop-down suggestions list with its own suggestions.

If two or more extensions define the same keyword, then the extension that was installed last gets to control the keyword. Any previously installed extensions that defined the same keyword will no longer be able to use the `omnibox` API.

## Example

```json
"omnibox": {
  "keyword": "mdn"
}
```

## Browser compatibility

{{Compat}}
