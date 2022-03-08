---
title: URLSearchParams.values()
slug: Web/API/URLSearchParams/values
tags:
  - API
  - Iterator
  - Method
  - Reference
  - URL API
  - URLSearchParams
browser-compat: api.URLSearchParams.values
---
{{APIRef("URL API")}}

The **`values()`** method of the {{domxref("URLsearchParams")}}
interface returns an {{jsxref("Iteration_protocols",'iterator')}} allowing iteration
through all values contained in this object. The values are {{domxref("USVString")}}
objects.

{{availableinworkers}}

## Syntax

```js
searchParams.values();
```

### Parameters

None.

### Return value

Returns an {{jsxref("Iteration_protocols","iterator")}}.

## Examples

The following example passes a URL search string to the `URLSearchParams` constructor, then uses the iterator returned by `values()` to print the values to the console.

```js
var searchParams = new URLSearchParams("key1=value1&key2=value2");

for(var value of searchParams.values()) {
  console.log(value);
}
```

The result is:

```
value1
value2
```

This example does much the same as above, but first casts the iterator into an array.

```js
var searchParams = new URLSearchParams("key1=value1&key2=value2");

console.log(Array.from(searchParams.values()));
```

The result is:

```
['value1', 'value2']
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("URL")}} interface.
