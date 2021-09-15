---
title: FormData.getAll()
slug: Web/API/FormData/getAll
tags:
  - API
  - FormData
  - Method
  - Reference
  - XHR
  - XMLHttpRequest
browser-compat: api.FormData.getAll
---
{{APIRef("XMLHttpRequest")}}

The **`getAll()`** method of the {{domxref("FormData")}} interface returns all the values associated with a given key from within a `FormData` object.

> **Note:** This method is available in [Web Workers](/en-US/docs/Web/API/Web_Workers_API).

## Syntax

```js
formData.getAll(name);
```

### Parameters

- `name`
  - : A {{domxref("USVString")}} representing the name of the key you want to retrieve.

### Returns

An array of {{domxref("FormDataEntryValue")}}s whose key matches the value passed in the `name` parameter. If the key doesn't exist, the method returns an empty list.

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

The following `getAll()` function will return both `username` values in an array:

```js
formData.getAll('username'); // Returns ["Chris", "Bob"]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XMLHTTPRequest")}}
- [Using XMLHttpRequest](/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest "Using XMLHttpRequest")
- [Using FormData objects](/en-US/docs/Web/API/FormData/Using_FormData_Objects)
- {{HTMLElement("Form")}}
