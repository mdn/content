---
title: "FormData: delete() method"
short-title: delete()
slug: Web/API/FormData/delete
page-type: web-api-instance-method
browser-compat: api.FormData.delete
---

{{APIRef("XMLHttpRequest API")}}

The **`delete()`** method of the {{domxref("FormData")}} interface deletes a key and its value(s) from a `FormData` object.

{{AvailableInWorkers}}

## Syntax

```js-nolint
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
formData.delete("username");
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using FormData objects](/en-US/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects)
- {{HTMLElement("Form")}}
