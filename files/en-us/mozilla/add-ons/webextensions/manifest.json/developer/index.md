---
title: developer
slug: Mozilla/Add-ons/WebExtensions/manifest.json/developer
tags:
  - Add-ons
  - Extensions
  - WebExtensions
browser-compat: webextensions.manifest.developer
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
"developer": {
  "name": "Walt Whitman",
  "url": "https://en.wikipedia.org/wiki/Walt_Whitman"
}</pre
        >
      </td>
    </tr>
  </tbody>
</table>

The name of the extension's developer and their homepage URL, intended for display in the browser's user interface.

The object, and both of its properties, are optional. The "name" and "url" properties, if present, will override the [author](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/author) and [homepage_url](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/homepage_url) keys, respectively. This object only allows for a single developer name and URL to be specified.

This is a [localizable property](/en-US/docs/Mozilla/Add-ons/WebExtensions/Internationalization#internationalizing_manifest.json).

## Example

```json
"developer": {
  "name": "Walt Whitman",
  "url": "https://en.wikipedia.org/wiki/Walt_Whitman"
}
```

## Browser compatibility

{{Compat}}
