---
title: "URL: href property"
short-title: href
slug: Web/API/URL/href
page-type: web-api-instance-property
browser-compat: api.URL.href
---

{{ApiRef("URL API")}} {{AvailableInWorkers}}

The **`href`** property of the {{domxref("URL")}} interface is
a string containing the whole URL.

## Value

A string.

## Examples

### Full URL with path

```js
const url = new URL(
  "https://developer.mozilla.org/en-US/docs/Web/API/URL/href",
);
console.log(url.href); // Logs: 'https://developer.mozilla.org/en-US/docs/Web/API/URL/href'
```

### Origin-only URL

For [hierarchical schemes](https://www.rfc-editor.org/rfc/rfc3986#section-1.2.3) such as `https:`, the pathname must always be non-empty. When the URL has no path (for example, only an origin), the URL parser sets the pathname to `"/"`, so `href` includes a trailing slash. See the {{domxref("URL/pathname", "pathname")}} property for more details.

```js
const url = new URL("https://developer.mozilla.org");
console.log(url.href); // Logs: 'https://developer.mozilla.org/'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("URL")}} interface it belongs to.
- {{domxref("URL.pathname")}}
