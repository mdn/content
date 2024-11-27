---
title: "Request: keepalive property"
short-title: keepalive
slug: Web/API/Request/keepalive
page-type: web-api-instance-property
browser-compat: api.Request.keepalive
---

{{APIRef("Fetch API")}}

The **`keepalive`** read-only property of the {{domxref("Request")}} interface contains the request's `keepalive` setting (`true` or `false`), which indicates whether the browser will keep the associated request alive if the page that initiated it is unloaded before the request is complete.

This enables a {{domxref('Window.fetch','fetch()')}} request to, for example, send analytics at the end of a session even if the user navigates away from or closes the page.
This has some advantages over using {{domxref("Navigator.sendBeacon()")}} for the same purpose, including allowing you to use HTTP methods other than [`POST`](/en-US/docs/Web/HTTP/Methods/POST), customize request properties, and access the server response via the fetch {{jsxref("Promise")}} fulfillment.
It is also available in [service workers](/en-US/docs/Web/API/Service_Worker_API).

## Value

A boolean value indicating the `keepalive` status of the request.

## Examples

### Create a Request with keepalive

In the following snippet, we create a new request using the {{domxref("Request.Request", "Request()")}} constructor with `keepalive` set to `true`, then save the `keepalive` value of the request in a variable:

```js
const options = {
  keepalive: true,
};

const myRequest = new Request("flowers.jpg", options);
let myKeepAlive = myRequest.keepalive; // true
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [ServiceWorker API](/en-US/docs/Web/API/Service_Worker_API)
- [HTTP access control (CORS)](/en-US/docs/Web/HTTP/CORS)
- [HTTP](/en-US/docs/Web/HTTP)
