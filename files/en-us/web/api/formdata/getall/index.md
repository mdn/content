---
title: "FormData: getAll() method"
short-title: getAll()
slug: Web/API/FormData/getAll
page-type: web-api-instance-method
browser-compat: api.FormData.getAll
---

{{APIRef("XMLHttpRequest API")}}

The **`getAll()`** method of the {{domxref("FormData")}} interface returns all the values associated with a given key from within a `FormData` object.

{{AvailableInWorkers}}

## Syntax

```js-nolint
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
formData.append("username", "Chris");
formData.append("username", "Bob");
```

The following `getAll()` method will return both `username` values in an array:

```js
formData.getAll("username"); // Returns ["Chris", "Bob"]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using FormData objects](/en-US/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects)
- {{HTMLElement("Form")}}
