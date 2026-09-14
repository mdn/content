---
title: "FormData: entries() method"
short-title: entries()
slug: Web/API/FormData/entries
page-type: web-api-instance-method
browser-compat: api.FormData.entries
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers}}

The **`FormData.entries()`** method returns an [iterator](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols) which iterates through all key/value pairs contained in the {{domxref("FormData")}}. The key of each pair is a string, and the value is either a string or a {{domxref("Blob")}}.

> [!NOTE]
> Unlike [`Map`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) entries, `FormData` entries are not necessarily unique by key. A form can contain multiple elements with the same name, so the same key may appear in more than one pair while iterating. Past the first entry, the value may differ from the return value of {{domxref("FormData.get()", "get()")}} which returns the first value associated with the key.

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
  console.log(pair[0], pair[1]);
}
```

The result is:

```plain
key1 value1
key2 value2
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using FormData objects](/en-US/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects)
- {{HTMLElement("Form")}}
