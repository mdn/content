---
title: FormData.has()
slug: Web/API/FormData/has
page-type: web-api-instance-method
tags:
  - API
  - FormData
  - Method
  - Reference
  - XHR
  - XMLHttpRequest
  - has
browser-compat: api.FormData.has
---
{{APIRef("XMLHttpRequest")}}

The **`has()`** method of the {{domxref("FormData")}} interface returns a boolean stating whether a `FormData` object contains a certain key.

> **Note:** This method is available in [Web Workers](/en-US/docs/Web/API/Web_Workers_API).

## Syntax

```js
has(name)
```

### Parameters

- `name`
  - : A string representing the name of the key you want to test for.

### Return value

A boolean value.

## Examples

The following line creates an empty `FormData` object:

```js
var formData = new FormData();
```

The following snippet shows the results of testing for the existence of `username` in the `FormData` object, before and after appending a `username` value to it with {{domxref("FormData.append")}}:

```js
formData.has('username'); // Returns false
formData.append('username', 'Chris');
formData.has('username'); // Returns true
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XMLHTTPRequest")}}
- [Using XMLHttpRequest](/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)
- [Using FormData objects](/en-US/docs/Web/API/FormData/Using_FormData_Objects)
- {{HTMLElement("Form")}}
