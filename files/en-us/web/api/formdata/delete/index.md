---
title: FormData.delete()
slug: Web/API/FormData/delete
tags:
  - API
  - FormData
  - Method
  - Reference
  - XHR
  - XMLHttpRequest
  - delete
browser-compat: api.FormData.delete
---
{{APIRef("XMLHttpRequest")}}

The **`delete()`** method of the {{domxref("FormData")}} interface deletes a key and its value(s) from a `FormData` object.

> **Note:** This method is available in [Web Workers](/en-US/docs/Web/API/Web_Workers_API).

## Syntax

```js
formData.delete(name);
```

### Parameters

- `name`
  - : The name of the key you want to delete.

### Returns

{{jsxref('undefined')}}.

## Example

The following line creates an empty `FormData` object and prepopulates it with key/value pairs from a form:

```js
var formData = new FormData(myForm);
```

You can delete keys and their values using `delete()`:

```js
formData.delete('username');
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
