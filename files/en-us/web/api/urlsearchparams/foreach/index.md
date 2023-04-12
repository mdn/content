---
title: "URLSearchParams: forEach() method"
short-title: forEach()
slug: Web/API/URLSearchParams/forEach
page-type: web-api-instance-method
browser-compat: api.URLSearchParams.forEach
---

{{APIRef("URL API")}}

The **`forEach()`** method of the
{{domxref("URLSearchParams")}} interface allows iteration through all values contained
in this object via a callback function.

{{availableinworkers}}

## Syntax

```js-nolint
forEach(callback)
forEach(callback, thisArg)
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

None ({{jsxref("undefined")}}).

## Examples

```js
// Create a test URLSearchParams object
const searchParams = new URLSearchParams("key1=value1&key2=value2");

// Log the values
searchParams.forEach((value, key) => {
  console.log(value, key);
});
```

The result is:

```
value1 key1
value2 key2
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("URL")}} interface.
