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
    <tr>
      <th scope="row">Mandatory</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

The optional `dir` member specifies the text direction used in other localized web app manifest members such as: [`name`](/en-US/docs/Web/Manifest/name), [`short_name`](/en-US/docs/Web/Manifest/short_name), or [`description`](/en-US/docs/Web/Manifest/description).

For example, if those localized manifest members are written using a left-to-right language such as English, then the value of `dir` should be `ltr`.

## Values

The `dir` manifest member values are:

- `auto`
  - : This is the default value used when no explicit text direction is provided.
- `ltr`
  - : Left-to-right text.
- `rtl`
  - : Right-to-left text.

## Example

With the example web app manifest below, the browser knows that the localized `name`, `short_name`, and `description` manifest members are written in a right-to-left language:

```json
{
  "name": "توقعات الطقس الخاصة بي في الوقت الحقيقي",
  "short_name": "الطقس الخاص بي",
  "start_url": "/",
  "display": "standalone",
  "description": "الطقس الدقيق لمنطقتك في الوقت الحقيقي",
  "lang": "ar",
  "dir": "rtl",
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

- [`lang`](/en-US/docs/Web/Manifest/lang) manifest member.
- [Extended fields in _Web app manifest_ on web.dev](https://web.dev/learn/pwa/web-app-manifest/#extended-fields)
