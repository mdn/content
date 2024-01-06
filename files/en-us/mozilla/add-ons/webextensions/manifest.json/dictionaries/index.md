---
title: dictionaries
slug: Mozilla/Add-ons/WebExtensions/manifest.json/dictionaries
page-type: webextension-manifest-key
browser-compat: webextensions.manifest.dictionaries
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
"dictionaries": {
  "en-US": "dictionaries/en-US.dic"
}</pre
        >
      </td>
    </tr>
  </tbody>
</table>

The `dictionaries` key specifies the `locale_code` for which your extension supplies a dictionary. Although the dictionary consists of two files, one with a `.dic` and one with an `.aff` file extension, only the one with the `.dic` extension is referenced in the manifest.json.

If you use the `dictionaries` key, you must also set an ID for your extension using the [`browser_specific_settings`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) manifest.json key.

## Example

```json
"dictionaries": {
  "en-US": "dictionaries/en-US.dic"
}
```

## Browser compatibility

{{Compat}}
