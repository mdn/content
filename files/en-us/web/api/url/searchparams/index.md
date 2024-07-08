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
let params = new URL('https://example.com/?name=Jonathan%20Smith&age=18').searchParams;
let name = params.get("name");
let age = parseInt(params.get("age"));

console.log(`name:\t${name}`);
console.log(`age:\t${age}`);
```

```plain
name: Jonathan Smith
age:  18
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
