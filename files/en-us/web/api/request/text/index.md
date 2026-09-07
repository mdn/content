---
title: "Request: text() method"
short-title: text()
slug: Web/API/Request/text
page-type: web-api-instance-method
browser-compat: api.Request.text
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

The **`text()`** method of the {{domxref("Request")}} interface
reads the request body and returns it as a promise that resolves with a {{jsxref("String")}}.
The response is _always_ decoded using UTF-8.

## Syntax

```js-nolint
text()
```

### Parameters

None.

### Return value

A Promise that resolves with a {{jsxref("String")}}.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown for one of the following reasons:
    - The request body is [disturbed or locked](/en-US/docs/Web/API/Fetch_API/Using_Fetch#locked_and_disturbed_streams).
    - There was an error decoding the body content (for example, because the {{httpheader("Content-Encoding")}} header is incorrect).

## Examples

```js
const text = "Hello world";

const request = new Request("/myEndpoint", {
  method: "POST",
  body: text,
});

request.text().then((text) => {
  // do something with the text sent in the request
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Response.text()")}}
