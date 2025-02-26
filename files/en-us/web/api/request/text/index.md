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
