---
title: FormData.entries()
slug: Web/API/FormData/entries
tags:
  - API
  - FormData
  - Iterator
  - Method
  - Reference
  - XMLHttpRequest API
browser-compat: api.FormData.entries
---
{{APIRef("XMLHttpRequest")}}

The **`FormData.entries()`** method returns an
{{jsxref("Iteration_protocols",'iterator')}} allowing to go through all key/value
pairs contained in this object. The key of each pair is a {{domxref("USVString")}}
object; the value either a {{domxref("USVString")}}, or a {{domxref("Blob")}}.

> **Note:** This method is available in [Web Workers](/en-US/docs/Web/API/Web_Workers_API).

## Syntax

```js
formData.entries();
```

### Return value

Returns an {{jsxref("Iteration_protocols","iterator")}}.

## Example

```js
// Create a test FormData object
var formData = new FormData();
formData.append('key1', 'value1');
formData.append('key2', 'value2');

// Display the key/value pairs
for(var pair of formData.entries()) {
   console.log(pair[0]+ ', '+ pair[1]);
}
```

The result is:

    key1, value1
    key2, value2

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
