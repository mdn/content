---
title: URLSearchParams.forEach()
slug: Web/API/URLSearchParams/forEach
tags:
  - API
  - Method
  - Reference
  - URLSearchParams
  - forEach
browser-compat: api.URLSearchParams.forEach
---
{{APIRef("URL API")}}

The **`forEach()`** method of the
{{domxref("URLSearchParams")}} interface allows iteration through all values contained
in this object via a callback function.

{{availableinworkers}}

## Syntax

```js
searchParams.forEach(callback);
```

### Parameters

- `callback`

  - : Function to execute on each element, which is passed the following arguments:

    - `value`
      - : The value of the current entry being processed in the `URLSearchParams` object.
    - `key`
      - : The key of the current entry being processed in the `URLSearchParams` object.
    - `searchParams`
      - : The `URLSearchParams` object the `forEach()` was called upon.

- `thisArg` {{optional_inline}}
  - : Value to use as `this` when executing `callback`.

### Return value

Void.

## Examples

```js
// Create a test URLSearchParams object
var searchParams = new URLSearchParams("key1=value1&key2=value2");

// Log the values
searchParams.forEach(function(value, key) {
  console.log(value, key);
});
```

The result is:

    value1 key1
    value2 key2

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("URL")}} interface.
