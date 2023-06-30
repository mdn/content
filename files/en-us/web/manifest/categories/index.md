---
title: categories
slug: Web/Manifest/categories
page-type: web-manifest-member
status:
  - experimental
browser-compat: html.manifest.categories
---

{{QuickLinksWithSubpages("/en-US/docs/Web/Manifest")}}{{SeeCompatTable}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type</th>
      <td><code>Array</code> of <code>String</code>s</td>
    </tr>
  </tbody>
</table>

The `categories` member is an array of strings defining the names of categories that the application supposedly belongs to. There is no standard list of possible values, but the W3C maintains [a list of known categories](https://github.com/w3c/manifest/wiki/Categories).

> **Note:** `categories` are used only as hints for catalogs or stores listing web applications. Like search engines and meta keywords, catalogs and stores are free to ignore them.

> **Note:** `categories` values are lower-cased by the stores and catalogs before processing, so "News" and "news" are treated as the same value. Developers are encouraged to use lower case in the first place.

## Example

```json
"categories": ["books", "education", "medical"]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
