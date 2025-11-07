---
title: "Request: blob() method"
short-title: blob()
slug: Web/API/Request/blob
page-type: web-api-instance-method
browser-compat: api.Request.blob
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

The **`blob()`** method of the {{domxref("Request")}} interface
reads the request body and returns it as a promise that resolves with a {{domxref("Blob")}}.

## Syntax

```js-nolint
blob()
```

### Parameters

None.

### Return value

A promise that resolves with a {{domxref("Blob")}} whose data is the body's bytes and the media type is the request's `Content-Type` header's value.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown for one of the following reasons:
    - The request body is [disturbed or locked](/en-US/docs/Web/API/Fetch_API/Using_Fetch#locked_and_disturbed_streams).
    - There was an error decoding the body content (for example, because the {{httpheader("Content-Encoding")}} header is incorrect).

## Examples

```js
const obj = { hello: "world" };
const myBlob = new Blob([JSON.stringify(obj, null, 2)], {
  type: "application/json",
});

const request = new Request("/myEndpoint", {
  method: "POST",
  body: myBlob,
});

request.blob().then((myBlob) => {
  // do something with the blob sent in the request
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Response.blob()")}}
