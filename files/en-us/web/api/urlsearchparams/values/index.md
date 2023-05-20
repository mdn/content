---
title: "URLSearchParams: values() method"
short-title: values()
slug: Web/API/URLSearchParams/values
page-type: web-api-instance-method
browser-compat: api.URLSearchParams.values
---

{{APIRef("URL API")}}

The **`values()`** method of the {{domxref("URLsearchParams")}}
interface returns an {{jsxref("Iteration_protocols",'iterator')}} allowing iteration
through all values contained in this object. The values are string
objects.

{{availableinworkers}}

## Syntax

```js-nolint
values()
```

### Parameters

None.

### Return value

Returns an {{jsxref("Iteration_protocols","iterator")}}.

## Examples

The following example passes a URL search string to the `URLSearchParams` constructor, then uses the iterator returned by `values()` to print the values to the console.

```js
const searchParams = new URLSearchParams("key1=value1&key2=value2");

for (const value of searchParams.values()) {
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
const searchParams = new URLSearchParams("key1=value1&key2=value2");

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
