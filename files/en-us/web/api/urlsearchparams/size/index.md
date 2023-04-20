---
title: "URLSearchParams: size property"
short-title: size
slug: Web/API/URLSearchParams/size
page-type: web-api-instance-property
browser-compat: api.URLSearchParams.size
---

{{APIRef("URL API")}}

The read-only **`URLSearchParams.size`** property indicates the total number of search parameter entries.

## Value

A number indicating the total number of search parameter entries in the {{domxref("URLSearchParams")}} object.

## Examples

You can get the total number of search parameter entries like so:

```js
const searchParams = new URLSearchParams("c=4&a=2&b=3&a=1");
searchParams.size; // 4
```

The `size` property is also useful for checking whether there are any search parameters at all:

```js
const url = new URL("https://example.com?foo=1&bar=2");

if (url.searchParams.size) {
  console.log("URL has search parameters!");
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("URL.searchParams")}}
