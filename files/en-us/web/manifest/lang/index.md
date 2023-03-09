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
    <tr>
      <th scope="row">Mandatory</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

The optional `lang` web app manifest member specifies the language used by other localized web app manifest members, such as: [`name`](/en-US/docs/Web/Manifest/name), [`short_name`](/en-US/docs/Web/Manifest/short_name), or [`description`](/en-US/docs/Web/Manifest/description).

For example, if those localized members appear in English in the web app manifest, then the value of `lang` should be `en`.

The `lang` member uses the same syntax as the HTML {{htmlattrxref("lang")}} attribute, which means that syntaxes such as `fr-CA` for Canadian French, or `pt-BR` for Brazilian Portuguese are also possible values.

To learn more, see [Language tag syntax](/en-US/docs/Web/HTML/Global_attributes/lang#language_tag_syntax).

## Example

With the example web app manifest below, the browser knows that the localized `name`, `short_name`, and `description` manifest members are in French:

```json
{
  "name": "Ma météo en temps réel",
  "short_name": "Ma Météo",
  "start_url": "/",
  "display": "standalone",
  "description": "La météo précise de votre région en temps réel",
  "lang": "fr-FR",
  "icons": [
    {
      "src": "/icons/app-96.png",
      "sizes": "96x96",
      "type": "image/png"
    },
    {
      "src": "/icons/app-128.png",
      "sizes": "128x128",
      "type": "image/png"
    },
    {
      "src": "/icons/app-256.png",
      "sizes": "256x256",
      "type": "image/png"
    },
    {
      "src": "/icons/app-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`dir`](/en-US/docs/Web/Manifest/dir) manifest member.
- [Extended fields in _Web app manifest_ on web.dev](https://web.dev/learn/pwa/web-app-manifest/#extended-fields)
