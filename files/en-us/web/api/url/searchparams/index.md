---
title: "URL: searchParams property"
short-title: searchParams
slug: Web/API/URL/searchParams
page-type: web-api-instance-property
browser-compat: api.URL.searchParams
---

{{APIRef("URL API")}} {{AvailableInWorkers}}

The **`searchParams`** read-only property of the
{{domxref("URL")}} interface returns a {{domxref("URLSearchParams")}} object allowing
access to the {{httpmethod("GET")}} decoded query arguments contained in the URL.

## Value

A {{domxref("URLSearchParams")}} object.

## Examples

If the URL of your page is
`https://example.com/?name=Jonathan%20Smith&age=18` you could parse out
the `name` and `age` parameters using:

```js
let params = new URL(document.location).searchParams;
let name = params.get("name"); // is the string "Jonathan Smith".
let age = parseInt(params.get("age")); // is the number 18
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
