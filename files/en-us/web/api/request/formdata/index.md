---
title: Request.formData()
slug: Web/API/Request/formData
page-type: web-api-instance-method
tags:
  - API
  - Fetch
  - Fetch API
  - FormData
  - Method
  - Reference
browser-compat: api.Request.formData
---
{{APIRef("Fetch")}}

The **`formData()`** method of the {{domxref("Request")}} interface
reads the request body and returns it as a promise that resolves with a {{domxref("FormData")}} object.

## Syntax

```js
formData()
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} that resolves with a {{domxref("FormData")}} object.

## Examples

```js
const formData = new FormData();
const fileField = document.querySelector('input[type="file"]');

formData.append('username', 'abc123');
formData.append('avatar', fileField.files[0]);

const request = new Request('/myEndpoint', {
  method: 'POST',
  body: formData
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
