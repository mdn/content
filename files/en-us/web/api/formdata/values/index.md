---
title: "FormData: values() method"
short-title: values()
slug: Web/API/FormData/values
page-type: web-api-instance-method
browser-compat: api.FormData.values
---

{{APIRef("XMLHttpRequest")}}

The **`FormData.values()`** method returns an [iterator](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols) which iterates through all values contained in the {{domxref("FormData")}}. The values are strings or {{domxref("Blob")}} objects.

> **Note:** This method is available in [Web Workers](/en-US/docs/Web/API/Web_Workers_API).

## Syntax

```js-nolint
values()
```

### Parameters

None.

### Return value

An [`iterator`](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols) of {{domxref("FormData")}}'s values.

## Examples

```js
const formData = new FormData();
formData.append("key1", "value1");
formData.append("key2", "value2");

// Display the values
for (const value of formData.values()) {
  console.log(value);
}
```

The result is:

```
value1
value2
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using FormData objects](/en-US/docs/Web/API/FormData/Using_FormData_Objects)
- {{HTMLElement("Form")}}
