---
title: description
slug: Web/Manifest/description
tags:
  - Manifest
  - Web
  - description
browser-compat: html.manifest.description
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

The `description` member is a string in which developers can explain what the application does. `description` is directionality-capable, which means it can be displayed left to right or right to left based on the values of the [`dir`](/en-US/docs/Web/Manifest/dir) and [`lang`](/en-US/docs/Web/Manifest/lang) manifest members.

## Examples

Simple `description` in left-to-right language:

```json
"description": "Awesome application that will help you achieve your dreams."
```

`description` in Arabic, which will be displayed right-to-left:

```json
"dir": "rtl",
"lang": "ar",
"description": ".تطبيق رائع سيساعدك على تحقيق أحلامك"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
