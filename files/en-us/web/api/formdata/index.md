---
title: FormData
slug: Web/API/FormData
tags:
  - API
  - FormData
  - Interface
  - Reference
  - XMLHttpRequest
browser-compat: api.FormData
---
{{APIRef("XMLHttpRequest")}}

The **`FormData`** interface provides a way to easily construct a set of key/value pairs representing form fields and their values, which can then be easily sent using the {{domxref("XMLHttpRequest.send()")}} method. It uses the same format a form would use if the encoding type were set to `"multipart/form-data"`.

You can also pass it directly to the {{domxref("URLSearchParams")}} constructor if you want to generate query parameters in the way a {{HTMLElement("form")}} would do if it were using simple `GET` submission.

An object implementing `FormData` can directly be used in a {{jsxref("Statements/for...of", "for...of")}} structure, instead of {{domxref('FormData.entries()', 'entries()')}}: `for (var p of myFormData)` is equivalent to `for (var p of myFormData.entries())`.

> **Note:** This feature is available in [Web Workers](/en-US/docs/Web/API/Web_Workers_API).

## Constructor

- {{domxref("FormData.FormData","FormData()")}}
  - : Creates a new `FormData` object.

## Methods

- {{domxref("FormData.append()")}}
  - : Appends a new value onto an existing key inside a `FormData` object, or adds the key if it does not already exist.
- {{domxref("FormData.delete()")}}
  - : Deletes a key/value pair from a `FormData` object.
- {{domxref("FormData.entries()")}}
  - : Returns an {{jsxref("Iteration_protocols","iterator")}} allowing to go through all key/value pairs contained in this object.
- {{domxref("FormData.get()")}}
  - : Returns the first value associated with a given key from within a `FormData` object.
- {{domxref("FormData.getAll()")}}
  - : Returns an array of all the values associated with a given key from within a `FormData`.
- {{domxref("FormData.has()")}}
  - : Returns a boolean stating whether a `FormData` object contains a certain key.
- {{domxref("FormData.keys()")}}
  - : Returns an {{jsxref("Iteration_protocols", "iterator")}} allowing to go through all keys of the key/value pairs contained in this object.
- {{domxref("FormData.set()")}}
  - : Sets a new value for an existing key inside a `FormData` object, or adds the key/value if it does not already exist.
- {{domxref("FormData.values()")}}
  - : Returns an {{jsxref("Iteration_protocols", "iterator")}} allowing to go through all values  contained in this object.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XMLHTTPRequest")}}
- [Using XMLHttpRequest](/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)
- [Using FormData objects](/en-US/docs/Web/API/FormData/Using_FormData_Objects)
- {{HTMLElement("Form")}}
