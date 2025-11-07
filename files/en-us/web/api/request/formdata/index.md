---
title: "Request: formData() method"
short-title: formData()
slug: Web/API/Request/formData
page-type: web-api-instance-method
browser-compat: api.Request.formData
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

The **`formData()`** method of the {{domxref("Request")}} interface
reads the request body and returns it as a promise that resolves with a {{domxref("FormData")}} object.

## Syntax

```js-nolint
formData()
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} that resolves with a {{domxref("FormData")}} object.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown for one of the following reasons:
    - The request body is [disturbed or locked](/en-US/docs/Web/API/Fetch_API/Using_Fetch#locked_and_disturbed_streams).
    - There was an error decoding the body content (for example, because the {{httpheader("Content-Encoding")}} header is incorrect).
    - The {{glossary("MIME")}} type of the body cannot be determined from the {{httpheader("Content-Type")}} headers included in the request, or is not `application/x-www-form-urlencoded` or `multipart/form-data`.
    - The body cannot be parsed as a `FormData` object.

## Examples

```js
const formData = new FormData();
const fileField = document.querySelector('input[type="file"]');

formData.append("username", "abc123");
formData.append("avatar", fileField.files[0]);

const request = new Request("/myEndpoint", {
  method: "POST",
  body: formData,
});

request.formData().then((data) => {
  // do something with the formdata sent in the request
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Response.formData()")}}
