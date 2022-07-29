---
title: URLSearchParams.entries()
slug: Web/API/URLSearchParams/entries
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - URL API
  - URLSearchParams
browser-compat: api.URLSearchParams.entries
---
{{APIRef("URL API")}}

The **`entries()`** method of the
{{domxref("URLSearchParams")}} interface returns an
{{jsxref("Iteration_protocols",'iterator')}} allowing iteration through all key/value
pairs contained in this object. The iterator returns key/value pairs in the same order as they appear in the query string. The key and value of each pair are
string objects.

{{availableinworkers}}

## Syntax

```js
entries()
```

### Parameters

None.

### Return value

Returns an {{jsxref("Iteration_protocols","iterator")}}.

## Examples

```js
// Create a test URLSearchParams object
const searchParams = new URLSearchParams("key1=value1&key2=value2");

// Display the key/value pairs
for (const [key, value] of searchParams.entries()) {
   console.log(`${key}, ${value}`);
}
```

The result is:

```
key1, value1
key2, value2
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("URL")}} interface.
