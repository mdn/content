---
title: URLSearchParams.entries()
slug: Web/API/URLSearchParams/entries
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
pairs contained in this object. The key and value of each pair are
{{domxref("USVString")}} objects.

{{availableinworkers}}

## Syntax

```js
searchParams.entries();
```

### Parameters

None.

### Return value

Returns an {{jsxref("Iteration_protocols","iterator")}}.

## Examples

```js
// Create a test URLSearchParams object
var searchParams = new URLSearchParams("key1=value1&key2=value2");

// Display the key/value pairs
for(var pair of searchParams.entries()) {
   console.log(pair[0]+ ', '+ pair[1]);
}
```

The result is:

    key1, value1
    key2, value2

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("URL")}} interface.
