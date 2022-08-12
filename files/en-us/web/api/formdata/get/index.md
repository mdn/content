---
title: FormData.get()
slug: Web/API/FormData/get
page-type: web-api-instance-method
tags:
  - API
  - FormData
  - Method
  - Reference
  - XMLHttpRequest
browser-compat: api.FormData.get
---
{{APIRef("XMLHttpRequest")}}

The **`get()`** method of the {{domxref("FormData")}} interface
returns the first value associated with a given key from within a `FormData`
object. If you expect multiple values and want all of them, use the
{{domxref("FormData.getAll()","getAll()")}} method instead.

> **Note:** This method is available in [Web Workers](/en-US/docs/Web/API/Web_Workers_API).

## Syntax

```js
get(name)
```

### Parameters

- `name`
  - : A string representing the name of the key you want to retrieve.

### Return value

A value whose key matches the specified `name`. Otherwise, [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null).

## Examples

If we add two `username` values to a {{domxref("FormData")}} using {{domxref("FormData.append", "append()")}}:

```js
formData.append('username', 'Chris');
formData.append('username', 'Bob');
```

The following `get()` method will only return the first `username` value:

```js
formData.get('username'); // Returns "Chris"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using FormData objects](/en-US/docs/Web/API/FormData/Using_FormData_Objects)
- {{HTMLElement("Form")}}
