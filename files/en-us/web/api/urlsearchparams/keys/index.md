---
title: "URLSearchParams: keys() method"
short-title: keys()
slug: Web/API/URLSearchParams/keys
page-type: web-api-instance-method
browser-compat: api.URLSearchParams.keys
---

{{APIRef("URL API")}}

The **`keys()`** method of the {{domxref("URLSearchParams")}}
interface returns an {{jsxref("Iteration_protocols",'iterator')}} allowing iteration
through all keys contained in this object. The keys are string
objects.

> **Note:** This method is available in [Web Workers](/en-US/docs/Web/API/Web_Workers_API).

## Syntax

```js-nolint
keys()
```

### Parameters

None.

### Return value

Returns an {{jsxref("Iteration_protocols","iterator")}}.

## Examples

```js
// Create a test URLSearchParams object
const searchParams = new URLSearchParams("key1=value1&key2=value2");

// Display the keys
for (const key of searchParams.keys()) {
  console.log(key);
}
```

The result is:

```plain
key1
key2
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("URL")}} interface.
