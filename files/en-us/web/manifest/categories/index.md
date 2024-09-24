---
title: categories
slug: Web/Manifest/categories
page-type: web-manifest-member
spec-urls: https://w3c.github.io/manifest-app-info/#categories-member
---

{{QuickLinksWithSubpages("/en-US/docs/Web/Manifest")}}

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

This manifest member is used by app stores and catalogs when publishing and listing web apps, so browser compatibility is not applicable. Browsers may parse this information, but it's optional and doesn't affect the core functionality of a web app.
