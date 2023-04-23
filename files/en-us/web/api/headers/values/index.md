---
title: "Headers: values() method"
short-title: values()
slug: Web/API/Headers/values
page-type: web-api-instance-method
browser-compat: api.Headers.values
---

{{APIRef("Fetch API")}}

The **`Headers.values()`** method returns an
{{jsxref("Iteration_protocols",'iterator')}} allowing to go through all values contained
in this object. The values are {{jsxref("String")}} objects.

> **Note:** This method is available in [Web Workers](/en-US/docs/Web/API/Web_Workers_API).

## Syntax

```js-nolint
values()
```

### Parameters

None.

### Return value

Returns an {{jsxref("Iteration_protocols","iterator")}}.

## Examples

```js
// Create a test Headers object
const myHeaders = new Headers();
myHeaders.append("Content-Type", "text/xml");
myHeaders.append("Vary", "Accept-Language");

// Display the values
for (const value of myHeaders.values()) {
  console.log(value);
}
```

The result is:

```
text/xml
Accept-Language
```

## Browser compatibility

{{Compat}}

## See also

- [ServiceWorker API](/en-US/docs/Web/API/Service_Worker_API)
- [HTTP access control (CORS)](/en-US/docs/Web/HTTP/CORS)
- [HTTP](/en-US/docs/Web/HTTP)
