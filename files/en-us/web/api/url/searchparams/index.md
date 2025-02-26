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

### Basic usage

```js
const params = new URL("https://example.com/?name=Jonathan%20Smith&age=18")
  .searchParams;
const name = params.get("name");
const age = parseInt(params.get("age"));

console.log(`name: ${name}`); // name: Jonathan Smith
console.log(`age: ${age}`); // age: 18
```

### Interaction with search

The `searchParams` property exposes the {{domxref("URL.search")}} string as a {{domxref("URLSearchParams")}} object. When updating this `URLSearchParams`, the URL's `search` is updated with its serialization. However, `URL.search` encodes a subset of characters that `URLSearchParams` does, and encodes spaces as `%20` instead of `+`. This may cause some surprising interactions—if you update `searchParams`, even with the same values, the URL may be serialized differently.

```js
const url = new URL("https://example.com/?a=b ~");
console.log(url.href); // "https://example.com/?a=b%20~"
console.log(url.searchParams.toString()); // "a=b+%7E"
// This should be a no-op, but it changes the URL's query to the
// serialization of its searchParams
url.searchParams.sort();
console.log(url.href); // "https://example.com/?a=b+%7E"

const url2 = new URL("https://example.com?search=1234&param=my%20param");
console.log(url2.search); // "?search=1234&param=my%20param"
url2.searchParams.delete("search");
console.log(url2.search); // "?param=my+param"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
