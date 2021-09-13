---
title: FormData.get()
slug: Web/API/FormData/get
tags:
  - API
  - FormData
  - Method
  - Reference
  - XHR
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
formData.get(name);
```

### Parameters

- `name`
  - : A {{domxref("USVString")}} representing the name of the key you want to retrieve.

### Return value

A {{domxref("FormDataEntryValue")}} containing the value. If the key doesn't exist, the
method returns null.

## Example

The following line creates an empty `FormData` object:

```js
var formData = new FormData();
```

If we add two `username` values using {{domxref("FormData.append")}}:

```js
formData.append('username', 'Chris');
formData.append('username', 'Bob');
```

The following `get()` function will only return the first
`username` value appended:

```js
formData.get('username'); // Returns "Chris"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XMLHTTPRequest")}}
- [Using XMLHttpRequest](/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest "Using XMLHttpRequest")
- [Using
  FormData objects](/en-US/docs/Web/API/FormData/Using_FormData_Objects)
- {{HTMLElement("Form")}}
