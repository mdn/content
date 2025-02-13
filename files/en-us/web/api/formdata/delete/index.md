---
title: "FormData: delete() method"
short-title: delete()
slug: Web/API/FormData/delete
page-type: web-api-instance-method
browser-compat: api.FormData.delete
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers}}

The **`delete()`** method of the {{domxref("FormData")}} interface deletes a key and its value(s) from a `FormData` object.

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

Do not delete a key while iterating over FormData as making changes to FormData during iteration will result in unexpected behaviour such as keys not being deleted:

```js
// Bad code
for (var [key, value] of formData.entries()) {
  if (value.length === 0) {
    formData.delete(key);
  }
}
```

Instead make an array of formData first:

```js
// Good code
for (var [key, value] of Array.from(formData.entries())) {
  if (value.length === 0) {
    formData.delete(key);
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using FormData objects](/en-US/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects)
- {{HTMLElement("Form")}}
