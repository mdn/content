---
title: name
slug: Web/Manifest/name
tags:
  - Manifest
  - Web
  - name
browser-compat: html.manifest.name
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
      <td>Yes</td>
    </tr>
  </tbody>
</table>

The `name` member is a string that represents the name of the web application as it is usually displayed to the user (e.g., amongst a list of other applications, or as a label for an icon). `name` is directionality-capable, which means it can be displayed left-to-right or right-to-left based on the values of the [`dir`](/en-US/docs/Web/Manifest/dir) and [`lang`](/en-US/docs/Web/Manifest/lang) manifest members.

## Examples

Simple `name` in left-to-right language:

```json
"name": "Awesome application"
```

Right-to-left `name` in Arabic:

```json
"dir": "rtl",
"lang": "ar",
"name": "!أنا من التطبيق"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
