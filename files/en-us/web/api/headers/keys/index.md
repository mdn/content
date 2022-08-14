---
title: Headers.keys()
slug: Web/API/Headers/keys
page-type: web-api-instance-method
tags:
  - API
  - Fetch API
  - Headers
  - Method
  - Reference
browser-compat: api.Headers.keys
---
{{APIRef}}

The **`Headers.keys()`** method returns an
{{jsxref("Iteration_protocols",'iterator')}} allowing to go through all keys contained
in this object. The keys are {{jsxref("String")}} objects.

> **Note:** This method is available in [Web Workers](/en-US/docs/Web/API/Web_Workers_API).

## Syntax

```js
keys()
```

### Parameters

None.

### Return value

Returns an {{jsxref("Iteration_protocols","iterator")}}.

## Examples

```js
// Create a test Headers object
const myHeaders = new Headers();
myHeaders.append('Content-Type', 'text/xml');
myHeaders.append('Vary', 'Accept-Language');

// Display the keys
for (const key of myHeaders.keys()) {
   console.log(key);
}
```

The result is:

```
content-type
vary
```

## Browser compatibility

{{Compat}}

## See also

- [ServiceWorker API](/en-US/docs/Web/API/Service_Worker_API)
- [HTTP access control (CORS)](/en-US/docs/Web/HTTP/CORS)
- [HTTP](/en-US/docs/Web/HTTP)
