---
title: Request.body
slug: Web/API/Request/body
tags:
  - API
  - Fetch
  - Property
  - Reference
  - Streams
  - Request
browser-compat: api.Request.body
---
{{APIRef("Fetch")}}

The read-only **`body`** property of the {{domxref("Request")}}
interface contains a {{domxref("ReadableStream")}} with the body contents
that have been added to the request. Note that a request using the
`GET` or `HEAD` method cannot have a body
and `null` is return in these cases.

## Syntax

```js
request.body
```

### Value

A {{domxref("ReadableStream")}} or {{jsxref("null")}}.

## Examples

```js
const request = new Request('/myEndpoint', {
  method: 'POST',
  body: 'Hello world'
});

request.body; // ReadableStream
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Request.bodyUsed")}}
