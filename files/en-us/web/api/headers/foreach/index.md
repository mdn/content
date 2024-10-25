---
title: "Headers: forEach() method"
short-title: forEach()
slug: Web/API/Headers/forEach
page-type: web-api-instance-method
browser-compat: api.Headers.forEach
---

{{APIRef("Fetch API")}} {{AvailableInWorkers}}

The **`Headers.forEach()`** method executes a callback function once per each key/value pair in the [`Headers`](/en-US/docs/Web/API/Headers) object.

## Syntax

```js-nolint
forEach(callbackFn)
forEach(callbackFn, thisArg)
```

### Parameters

- `callbackFn`
  - : Function to execute for each entry in the map. It takes the following arguments:
    - `value`
      - : Value of the currently visited header entry.
    - `key`
      - : Name of the currently visited header entry.
    - `object`
      - : The Headers object being iterated.
- `thisArg` {{Optional_Inline}}
  - : Value to use as `this` when executing `callback`.

### Return value

{{jsxref("undefined")}}.

## Description

The `Headers.forEach()` method executes the provided callback once for each key of the Headers which actually exist. It is not invoked for keys which have been deleted. However, it is executed for keys which are present but have the value undefined.

## Examples

### Printing the contents of Headers object

The following code logs a line for each key/value in the `myHeaders` object.

```js
// Create a new test Headers object
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Cookie", "This is a demo cookie");
myHeaders.append("compression", "gzip");

// Display the key/value pairs
myHeaders.forEach((value, key) => {
  console.log(`${key} ==> ${value}`);
});
```

The result is:

```plain
compression ==> gzip
content-type ==> application/json
cookie ==> This is a demo cookie
```

## Browser compatibility

{{Compat}}

## See also

- [`Map.prototype.forEach()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/forEach)
- [ServiceWorker API](/en-US/docs/Web/API/Service_Worker_API)
- [HTTP access control (CORS)](/en-US/docs/Web/HTTP/CORS)
- [HTTP](/en-US/docs/Web/HTTP)
