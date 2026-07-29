---
title: "URLSearchParams: sort() method"
short-title: sort()
slug: Web/API/URLSearchParams/sort
page-type: web-api-instance-method
browser-compat: api.URLSearchParams.sort
---

{{APIRef("URL API")}} {{AvailableInWorkers}}

The **`URLSearchParams.sort()`** method sorts all key/value
pairs contained in this object in place and returns `undefined`. Key/value pairs are sorted by the values of the {{glossary("UTF-16", "UTF-16 code units")}} of the keys. This method uses a stable sorting
algorithm (i.e., the relative order between key/value pairs with equal keys will be
preserved).

## Syntax

```js-nolint
sort()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
// Create a test URLSearchParams object
const searchParams = new URLSearchParams("c=4&a=2&b=3&a=1");

// Sort the key/value pairs
searchParams.sort();

// Display the sorted query string
console.log(searchParams.toString());
```

The result is:

```plain
a=2&a=1&b=3&c=4
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
