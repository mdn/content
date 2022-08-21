---
title: FormData.delete()
slug: Web/API/FormData/delete
page-type: web-api-instance-method
tags:
  - API
  - FormData
  - Method
  - Reference
  - XMLHttpRequest
browser-compat: api.FormData.delete
---
{{APIRef("XMLHttpRequest")}}

The **`delete()`** method of the {{domxref("FormData")}} interface deletes a key and its value(s) from a `FormData` object.

> **Note:** This method is available in [Web Workers](/en-US/docs/Web/API/Web_Workers_API).

## Syntax

```js
delete(name)
```

### Parameters

- `name`
  - : The name of the key you want to delete.

### Return value

None ({{jsxref("undefined")}}).

## Examples

You can delete a key and its values using `delete()`:

```js
formData.delete('username');
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using FormData objects](/en-US/docs/Web/API/FormData/Using_FormData_Objects)
- {{HTMLElement("Form")}}
