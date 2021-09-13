---
title: Headers.keys()
slug: Web/API/Headers/keys
tags:
  - API
  - Experimental
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
headers.keys();
```

### Return value

Returns an {{jsxref("Iteration_protocols","iterator")}}.

## Example

```js
// Create a test Headers object
var myHeaders = new Headers();
myHeaders.append('Content-Type', 'text/xml');
myHeaders.append('Vary', 'Accept-Language');

// Display the keys
for(var key of myHeaders.keys()) {
   console.log(key);
}
```

The result is:

    content-type
    vary

## Browser compatibility

{{Compat}}

## See also

- [ServiceWorker API](/en-US/docs/Web/API/Service_Worker_API)
- [HTTP access control (CORS)](/en-US/docs/Web/HTTP/CORS)
- [HTTP](/en-US/docs/Web/HTTP)
