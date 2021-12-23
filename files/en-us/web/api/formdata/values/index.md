---
title: FormData.values()
slug: Web/API/FormData/values
tags:
  - API
  - FormData
  - Iterator
  - Method
  - Reference
  - XMLHttpRequest API
browser-compat: api.FormData.values
---
{{APIRef("XMLHttpRequest")}}

The **`FormData.values()`** method returns an
{{jsxref("Iteration_protocols",'iterator')}} allowing to go through all values
contained in this object. The values are {{domxref("USVString")}} or
{{domxref("Blob")}} objects.

> **Note:** This method is available in [Web Workers](/en-US/docs/Web/API/Web_Workers_API).

## Syntax

```js
formData.values();
```

### Return value

Returns an {{jsxref("Iteration_protocols","iterator")}}.

## Example

```js
// Create a test FormData object
var formData = new FormData();
formData.append('key1', 'value1');
formData.append('key2', 'value2');

// Display the values
for (var value of formData.values()) {
   console.log(value);
}
```

The result is:

    value1
    value2

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XMLHTTPRequest")}}
- [Using XMLHttpRequest](/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest "Using XMLHttpRequest")
- [Using
  FormData objects](/en-US/docs/Web/API/FormData/Using_FormData_Objects)
- {{HTMLElement("Form")}}
