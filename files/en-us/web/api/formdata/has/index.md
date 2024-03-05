---
title: "FormData: has() method"
short-title: has()
slug: Web/API/FormData/has
page-type: web-api-instance-method
browser-compat: api.FormData.has
---

{{APIRef("XMLHttpRequest API")}}

The **`has()`** method of the {{domxref("FormData")}} interface returns whether a `FormData` object contains a certain key.

{{AvailableInWorkers}}

## Syntax

```js-nolint
has(name)
```

### Parameters

- `name`
  - : A string representing the name of the key you want to test for.

### Return value

`true` if a key of `FormData` matches the specified `name`. Otherwise, `false`.

## Examples

The following snippet shows the results of testing for the existence of `username` in a `FormData` object, before and after appending a `username` value to it with {{domxref("FormData.append", "append()")}}:

```js
formData.has("username"); // Returns false
formData.append("username", "Chris");
formData.has("username"); // Returns true
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using FormData objects](/en-US/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects)
- {{HTMLElement("Form")}}
