---
title: Headers.entries()
slug: Web/API/Headers/entries
page-type: web-api-instance-method
tags:
  - API
  - Fetch API
  - Headers
  - Method
  - Reference
browser-compat: api.Headers.entries
---
{{APIRef}}

The **`Headers.entries()`** method returns an
{{jsxref("Iteration_protocols",'iterator')}} allowing to go through all key/value pairs
contained in this object. The both the key and value of each pairs are
{{jsxref("String")}} objects.

> **Note:** This method is available in [Web Workers](/en-US/docs/Web/API/Web_Workers_API).

## Syntax

```js
entries()
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

// Display the key/value pairs
for (const pair of myHeaders.entries()) {
   console.log(`${pair[0]}: ${pair[1]}`);
}
```

The result is:

```
content-type: text/xml
vary: Accept-Language
```

## Browser compatibility

{{Compat}}

## See also

- [ServiceWorker API](/en-US/docs/Web/API/Service_Worker_API)
- [HTTP access control (CORS)](/en-US/docs/Web/HTTP/CORS)
- [HTTP](/en-US/docs/Web/HTTP)
