---
title: FormData
slug: Web/API/FormData
page-type: web-api-interface
browser-compat: api.FormData
---

{{APIRef("XMLHttpRequest")}}

The **`FormData`** interface provides a way to construct a set of key/value pairs representing form fields and their values, which can be sent using the {{domxref("fetch()")}}, {{domxref("XMLHttpRequest.send()")}} or {{domxref("navigator.sendBeacon()")}} methods. It uses the same format a form would use if the encoding type were set to `"multipart/form-data"`.

You can also pass it directly to the {{domxref("URLSearchParams")}} constructor if you want to generate query parameters in the way a {{HTMLElement("form")}} would do if it were using simple `GET` submission.

An object implementing `FormData` can directly be used in a {{jsxref("Statements/for...of", "for...of")}} structure, instead of {{domxref('FormData.entries()', 'entries()')}}: `for (const p of myFormData)` is equivalent to `for (const p of myFormData.entries())`.

> **Note:** This feature is available in [Web Workers](/en-US/docs/Web/API/Web_Workers_API).

## Constructor

- {{domxref("FormData.FormData","FormData()")}}
  - : Creates a new `FormData` object.

## Instance methods

- {{domxref("FormData.append()")}}
  - : Appends a new value onto an existing key inside a `FormData` object, or adds the key if it does not already exist.
- {{domxref("FormData.delete()")}}
  - : Deletes a key/value pair from a `FormData` object.
- {{domxref("FormData.entries()")}}
  - : Returns an [iterator](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols) that iterates through all key/value pairs contained in the `FormData`.
- {{domxref("FormData.get()")}}
  - : Returns the first value associated with a given key from within a `FormData` object.
- {{domxref("FormData.getAll()")}}
  - : Returns an array of all the values associated with a given key from within a `FormData`.
- {{domxref("FormData.has()")}}
  - : Returns whether a `FormData` object contains a certain key.
- {{domxref("FormData.keys()")}}
  - : Returns an [iterator](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols) iterates through all keys of the key/value pairs contained in the `FormData`.
- {{domxref("FormData.set()")}}
  - : Sets a new value for an existing key inside a `FormData` object, or adds the key/value if it does not already exist.
- {{domxref("FormData.values()")}}
  - : Returns an [iterator](/en-US/docs/Web/JavaScript/Reference/Iteration_protocols) that iterates through all values contained in the `FormData`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using FormData objects](/en-US/docs/Web/API/FormData/Using_FormData_Objects)
- {{HTMLElement("Form")}}
