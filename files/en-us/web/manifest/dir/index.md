---
title: dir
slug: Web/Manifest/dir
tags:
  - Manifest
  - Web
  - dir
browser-compat: html.manifest.dir
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

The base direction in which to display direction-capable members of the manifest. Together with the [`lang`](/en-US/docs/Web/Manifest/lang) member, it helps to correctly display right-to-left languages.

The `dir` member can be set to one of the following values:

- `auto` — text direction is determined by the user agent
- `ltr` — left to right
- `rtl` — right to left

The _directionality-capable members_ are:

- [`name`](/en-US/docs/Web/Manifest/name)
- [`short_name`](/en-US/docs/Web/Manifest/short_name)
- [`description`](/en-US/docs/Web/Manifest/description)

> **Note:** If the value is omitted or set to `auto`, the browser will use the [Unicode bidirectional algorithm](/en-US/docs/Web/Guide/Unicode_Bidrectional_Text_Algorithm) to make a best guess about the text's direction.

## Example

```json
"dir": "rtl",
"lang": "ar",
"short_name": "!أنا من التطبيق"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
