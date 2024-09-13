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

```js
const params = new URL("https://example.com/?name=Jonathan%20Smith&age=18")
  .searchParams;
const name = params.get("name");
const age = parseInt(params.get("age"));

console.log(`name: ${name}`); // name: Jonathan Smith
console.log(`age: ${age}`); // age: 18
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
