---
title: short_name
slug: Web/Manifest/short_name
tags:
  - Manifest
  - Web
  - short_name
browser-compat: html.manifest.short_name
---
{{QuickLinksWithSubpages("/en-US/docs/Web/Manifest")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type</th>
      <td><code>String</code></td>
    </tr>
    <tr>
      <th scope="row">Mandatory</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

The `short_name` member is a string that represents the name of the web application displayed to the user if there is not enough space to display [`name`](/en-US/docs/Web/Manifest/name) (e.g., as a label for an icon on the phone home screen). `short_name` is directionality-capable, which means it can be displayed left-to-right or right-to-left based on the value of the [`dir`](/en-US/docs/Web/Manifest/dir) and [`lang`](/en-US/docs/Web/Manifest/lang) manifest members.

## Examples

Simple `short_name` in left-to-right language:

```json
"name": "Awesome application",
"short_name": "Awesome app"
```

`short_name` in Arabic, which will be displayed right-to-left:

```json
"dir": "rtl",
"lang": "ar",
"name": "تطبيق رائع",
"short_name": "رائع"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
