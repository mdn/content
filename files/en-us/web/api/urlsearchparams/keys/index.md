---
title: URLSearchParams.keys()
slug: Web/API/URLSearchParams/keys
tags:
  - API
  - Method
  - Reference
  - URL API
  - URLSearchParams
browser-compat: api.URLSearchParams.keys
---
{{APIRef("URL API")}}

The **`keys()`** method of the {{domxref("URLSearchParams")}}
interface returns an {{jsxref("Iteration_protocols",'iterator')}} allowing iteration
through all keys contained in this object. The keys are {{domxref("USVString")}}
objects.

> **Note:** This method is available in [Web Workers](/en-US/docs/Web/API/Web_Workers_API).

## Syntax

```js
searchParams.keys();
```

### Parameters

None.

### Return value

Returns an {{jsxref("Iteration_protocols","iterator")}}.

## Examples

```js
// Create a test URLSearchParams object
var searchParams = new URLSearchParams("key1=value1&key2=value2");

// Display the keys
for(var key of searchParams.keys()) {
  console.log(key);
}
```

The result is:

    key1
    key2

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("URL")}} interface.
