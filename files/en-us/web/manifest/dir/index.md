---
title: dir
slug: Web/Manifest/dir
browser-compat: html.manifest.dir
---

{{QuickLinksWithSubpages("/en-US/docs/Web/Manifest")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type</th>
      <td><code>String</code></td>
    </tr>
  </tbody>
</table>

The `dir` property specifies the base direction for the localizable members of the manifest.
The default value is `auto`.

## Values

The possible values are:

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="col">Base direction</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>auto</code></td>
      <td>
        No explicit directionality.
      </td>
    </tr>
    <tr>
      <td><code>ltr</code></td>
      <td>
        Left-to-right text.
      </td>
    </tr>
    <tr>
      <td><code>rtl</code></td>
      <td>
        Right-to-left text.
      </td>
    </tr>
  </tbody>
</table>

## Example

```json
"dir": "ltr"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
