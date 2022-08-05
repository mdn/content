---
title: Request.text()
slug: Web/API/Request/text
page-type: web-api-instance-method
tags:
  - API
  - Fetch
  - Method
  - Reference
  - Text
  - Request
browser-compat: api.Request.text
---
{{APIRef("Fetch")}}

The **`text()`** method of the {{domxref("Request")}} interface
reads the request body and returns it as a promise that resolves with a {{jsxref("String")}}.
The response is *always* decoded using UTF-8.

## Syntax

```js
text()
```

### Parameters

None.

### Return value

A Promise that resolves with a {{jsxref("String")}}.

## Examples

```js
const text = "Hello world";

const request = new Request('/myEndpoint', {
  method: 'POST',
  body: text
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
