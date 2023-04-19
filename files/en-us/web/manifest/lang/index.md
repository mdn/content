---
title: lang
slug: Web/Manifest/lang
browser-compat: html.manifest.lang
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

The `lang` key can be used to define the primary language of the web application in a web app manifest file. The value should be a string representing a BCP 47 language tag. For example, `fr` for French or `en-US` for American English.

The "lang" property value must respect the format defined in {{RFC(5646, "Tags for Identifying Languages (also known as BCP 47)")}} standard. For example, the value `en-US` is valid, but `en_US` is not.

> **Note:** The "lang" property is not used to specify the language of the web application's user interface; instead, it is used to specify the primary language that the web application's content is written in.

## Examples

```json
"lang": "en-US"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
