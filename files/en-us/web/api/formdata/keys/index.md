---
title: FormData.keys()
slug: Web/API/FormData/keys
tags:
  - API
  - FormData
  - Iterator
  - Method
  - Reference
  - XMLHttpRequest API
browser-compat: api.FormData.keys
---
{{APIRef("XMLHttpRequest")}}

The **`FormData.keys()`** method returns an
{{jsxref("Iteration_protocols",'iterator')}} allowing to go through all keys contained
in this object. The keys are {{domxref("USVString")}} objects.

> **Note:** This method is available in [Web Workers](/en-US/docs/Web/API/Web_Workers_API).

## Syntax

```js
formData.keys();
```

### Return value

Returns an {{jsxref("Iteration_protocols","iterator")}}.

## Example

```js
// Create a test FormData object
var formData = new FormData();
formData.append('key1', 'value1');
formData.append('key2', 'value2');

// Display the keys
for (var key of formData.keys()) {
   console.log(key);
}
```

The result is:

    key1
    key2

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
