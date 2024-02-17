---
title: "Headers: keys() method"
short-title: keys()
slug: Web/API/Headers/keys
page-type: web-api-instance-method
browser-compat: api.Headers.keys
---

{{APIRef("Fetch API")}}

The **`Headers.keys()`** method returns an
{{jsxref("Iteration_protocols",'iterator')}} allowing to go through all keys contained
in this object. The keys are {{jsxref("String")}} objects.

{{AvailableInWorkers}}

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
// Create a test Headers object
const myHeaders = new Headers();
myHeaders.append("Content-Type", "text/xml");
myHeaders.append("Vary", "Accept-Language");

// Display the keys
for (const key of myHeaders.keys()) {
  console.log(key);
}
```

The result is:

```plain
content-type
vary
```

## Browser compatibility

{{Compat}}

## See also

- [ServiceWorker API](/en-US/docs/Web/API/Service_Worker_API)
- [HTTP access control (CORS)](/en-US/docs/Web/HTTP/CORS)
- [HTTP](/en-US/docs/Web/HTTP)
