---
title: "Request: integrity property"
short-title: integrity
slug: Web/API/Request/integrity
page-type: web-api-instance-property
browser-compat: api.Request.integrity
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

The **`integrity`** read-only property of the {{domxref("Request")}} interface contains the [subresource integrity](/en-US/docs/Web/Security/Subresource_Integrity) value of the request.

## Value

The value that was passed as the `options.integrity` argument when constructing the `Request`.

If an integrity has not been specified, the property returns `''`.

## Examples

In the following snippet, we create a new request using the {{domxref("Request/Request", "Request()")}} constructor (for an image file in the same directory as the script), then reads the request's integrity. Because the request was created without a specific integrity, the property returns an empty string.

```js
const myRequest = new Request("flowers.jpg");
console.log(myRequest.integrity); // ""
```

In the example below, the request was created with a specific integrity value, so the property returns that value. Note that there's no validation of the integrity value; the property returns exactly what was passed in.

```js
const myRequest = new Request("flowers.jpg", {
  integrity: "sha256-abc123",
});
console.log(myRequest.integrity); // "sha256-abc123"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [ServiceWorker API](/en-US/docs/Web/API/Service_Worker_API)
- [HTTP access control (CORS)](/en-US/docs/Web/HTTP/CORS)
- [HTTP](/en-US/docs/Web/HTTP)
