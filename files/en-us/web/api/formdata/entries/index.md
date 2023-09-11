---
title: "FormData: entries() method"
short-title: entries()
slug: Web/API/FormData/entries
page-type: web-api-instance-method
browser-compat: api.FormData.entries
---

{{APIRef("XMLHttpRequest")}}

The **`FormData.entries()`** method returns an [iterator](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols) which iterates through all key/value pairs contained in the {{domxref("FormData")}}. The key of each pair is a string object, and the value is either a string or a {{domxref("Blob")}}.

> **Note:** This method is available in [Web Workers](/en-US/docs/Web/API/Web_Workers_API).

## Syntax

```js-nolint
entries()
```

### Parameters

None.

### Return value

An [iterator](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols) of {{domxref("FormData")}}'s key/value pairs.

## Examples

```js
formData.append("key1", "value1");
formData.append("key2", "value2");

// Display the key/value pairs
for (const pair of formData.entries()) {
  console.log(`${pair[0]}, ${pair[1]}`);
}
```

The result is:

```plain
key1, value1
key2, value2
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using FormData objects](/en-US/docs/Web/API/FormData/Using_FormData_Objects)
- {{HTMLElement("Form")}}
