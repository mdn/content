---
title: Request.priority
slug: Web/API/Request/priority
tags:
  - API
  - Fetch
  - Property
  - Reference
  - priority
  - request
browser-compat: api.Request.priority
---
{{APIRef("Fetch")}}

The **`priority`** read-only property of the {{domxref("Request")}}
interface contains the hinted priority of the request relative to other requests.

## Syntax

```js
var myPriority = request.priority;
```

### Value

A {{domxref("USVString")}} indicating the hinted priority of the request.

## Example

In the following snippet, we create a new request using the
{{domxref("Request.Request", "Request()")}} constructor (for an API endpoint)
at a low priority, then save the priority of the request in a variable:

```js
var myRequest = new Request('/background-api-call', {priority: 'low'});
var myPriority = myRequest.priority; // "low"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [ServiceWorker API](/en-US/docs/Web/API/Service_Worker_API)
- [HTTP access control (CORS)](/en-US/docs/Web/HTTP/CORS)
- [HTTP](/en-US/docs/Web/HTTP)
