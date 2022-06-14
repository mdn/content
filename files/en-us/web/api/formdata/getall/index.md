---
title: FormData.getAll()
slug: Web/API/FormData/getAll
page-type: web-api-instance-method
tags:
  - API
  - FormData
  - Method
  - Reference
  - XMLHttpRequest
browser-compat: api.FormData.getAll
---
{{APIRef("XMLHttpRequest")}}

The **`getAll()`** method of the {{domxref("FormData")}} interface returns all the values associated with a given key from within a `FormData` object.

> **Note:** This method is available in [Web Workers](/en-US/docs/Web/API/Web_Workers_API).

## Syntax

```js
getAll(name)
```

### Parameters

- `name`
  - : A string representing the name of the key you want to retrieve.

### Return value

An array of values whose key matches the specified `name`. Otherwise, an empty list.

## Examples

If we add two `username` values to a {{domxref("FormData")}} using {{domxref("FormData.append", "append()")}}:

```js
formData.append('username', 'Chris');
formData.append('username', 'Bob');
```

The following `getAll()` method will return both `username` values in an array:

```js
formData.getAll('username'); // Returns ["Chris", "Bob"]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using FormData objects](/en-US/docs/Web/API/FormData/Using_FormData_Objects)
- {{HTMLElement("Form")}}
