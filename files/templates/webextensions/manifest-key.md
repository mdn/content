---
title: key_name
slug: Mozilla/Add-ons/WebExtensions/manifest.json/key_name
page-type: webextension-manifest-key
# Add status if the key is deprecated or experimental, otherwise remove the status field
status:
  - deprecated
  - experimental
browser-compat: webextensions.manifest.key_name
sidebar: addonsidebar
---

<!-- If this manifest key is experimental, include the following macro -->

{{SeeCompatTable}}

<!-- If this manifest key is deprecated, include a warning with replacement info -->

> [!WARNING]
> This manifest key is deprecated. Use [`replacement_key`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/replacement_key) instead.

<!-- Write one or two sentences describing what the manifest key is used for -->

Description of the manifest key.

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
"key_name": {
  "property": "value"
}</pre>
      </td>
    </tr>
  </tbody>
</table>

<!-- Add a detailed description of what the key does, how it interacts with other keys or APIs, etc. -->

## Syntax

```json
"key_name": {
  "property": "value"
}
```

<!-- List the properties of the key value, if it is an object -->

- `property`
  - : `type`. Description of the property.
- `other_property` {{optional_inline}}
  - : `type`. Description of the property.

## Examples

### Example title

<!-- Provide one or more realistic manifest snippets -->

```json
"key_name": {
  "property": "value"
}
```

## Example extensions

<!-- If there are relevant complete extensions in the webextensions-examples repo, list them here -->
<!-- Remove this section if there are no relevant example extensions -->

- [example-extension-name](https://github.com/nicolo-ribaudo/webextensions-examples/tree/main/example-extension-name)

## Browser compatibility

{{Compat}}

<!-- Add see also links as appropriate -->

## See also

- [Related manifest key](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/…)
- [Related API](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/…)
