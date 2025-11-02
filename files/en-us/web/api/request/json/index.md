---
title: "Request: json() method"
short-title: json()
slug: Web/API/Request/json
page-type: web-api-instance-method
browser-compat: api.Request.json
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

The **`json()`** method of the {{domxref("Request")}} interface
reads the request body and returns it as a promise that resolves with the result of parsing the body text as {{JSxRef("JSON")}}.

Note that despite the method being named `json()`, the result is not JSON but is instead the result of taking JSON as input and parsing it to produce a JavaScript object.

## Syntax

```js-nolint
json()
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} that resolves to a JavaScript object. This object could be
anything that can be represented by JSON — an object, an array, a string, a number…

### Exceptions

* `TypeError`
    :   Thrown for one of the following reasons:
        * The response body is [disturbed or locked](/en-US/docs/Web/API/Fetch_API/Using_Fetch#locked_and_disturbed_streams).
        * There was an error decoding the body content (for example, because the {{httpheader("Content-Encoding")}} header is incorrect).
* `SyntaxError`
    :   The response body cannot be parsed as JSON.

## Examples

```js
const obj = { hello: "world" };

const request = new Request("/myEndpoint", {
  method: "POST",
  body: JSON.stringify(obj),
});

request.json().then((data) => {
  // do something with the data sent in the request
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Response.json()")}}
