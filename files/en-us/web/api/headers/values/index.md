---
title: Headers.values()
slug: Web/API/Headers/values
tags:
  - API
  - Experimental
  - Fetch API
  - Headers
  - Method
  - Reference
browser-compat: api.Headers.values
---
{{APIRef}}

The **`Headers.values()`** method returns an
{{jsxref("Iteration_protocols",'iterator')}} allowing to go through all values contained
in this object. The values are {{jsxref("String")}} objects.

> **Note:** This method is available in [Web Workers](/en-US/docs/Web/API/Web_Workers_API).

## Syntax

```js
headers.values();
```

### Return value

Returns an {{jsxref("Iteration_protocols","iterator")}}.

## Example

```js
// Create a test Headers object
var myHeaders = new Headers();
myHeaders.append('Content-Type', 'text/xml');
myHeaders.append('Vary', 'Accept-Language');

// Display the values
for (var value of myHeaders.values()) {
   console.log(value);
}
```

The result is:

    text/xml
    Accept-Language

## Browser compatibility

{{Compat}}

## See also

- [ServiceWorker API](/en-US/docs/Web/API/Service_Worker_API)
- [HTTP access control (CORS)](/en-US/docs/Web/HTTP/CORS)
- [HTTP](/en-US/docs/Web/HTTP)
