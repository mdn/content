---
title: FormData.set()
slug: Web/API/FormData/set
tags:
  - API
  - FormData
  - Method
  - Reference
  - XHR
  - XMLHttpRequest
  - set
browser-compat: api.FormData.set
---
{{APIRef("XMLHttpRequest")}}

The **`set()`** method of the {{domxref("FormData")}} interface sets a new value for an existing key inside a `FormData` object, or adds the key/value if it does not already exist.

The difference between `set()` and {{domxref("FormData.append")}} is that if the specified key does already exist, `set()` will overwrite all existing values with the new one, whereas {{domxref("FormData.append")}} will append the new value onto the end of the existing set of values.

> **Note:** This method is available in [Web Workers](/en-US/docs/Web/API/Web_Workers_API).

## Syntax

There are two versions of this method: a two and a three parameter version:

```js
formData.set(name, value);
formData.set(name, value, filename);
```

#### Parameters

- `name`
  - : The name of the field whose data is contained in `value`.
- `value`
  - : The field's value. This can be a {{domxref("USVString")}} or {{domxref("Blob")}} (including subclasses such as {{domxref("File")}}). If none of these are specified the value is converted to a string.
- `filename` {{optional_inline}}
  - : The filename reported to the server (a {{domxref("USVString")}}), when a {{domxref("Blob")}} or {{domxref("File")}} is passed as the second parameter. The default filename for {{domxref("Blob")}} objects is "blob". The default filename for {{domxref("File")}} objects is the file's filename.

> **Note:** If you specify a {{domxref("Blob")}} as the data to append to the `FormData` object, the filename that will be reported to the server in the "Content-Disposition" header used to vary from browser to browser.

## Example

The following line creates an empty `FormData` object:

```js
var formData = new FormData(); // Currently empty
```

You can set key/value pairs on this using {{domxref("FormData.set")}}:

```js
formData.set('username', 'Chris');
formData.set('userpic', myFileInput.files[0], 'chris.jpg');
```

If the sent value is different than String or Blob it will be automatically converted to String:

```js
formData.set('name', 72);
formData.get('name'); // "72"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XMLHTTPRequest")}}
- [Using XMLHttpRequest](/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest "Using XMLHttpRequest")
- [Using FormData objects](/en-US/docs/Web/API/FormData/Using_FormData_Objects)
- {{HTMLElement("Form")}}
