---
title: FormData.append()
slug: Web/API/FormData/append
page-type: web-api-instance-method
tags:
  - API
  - FormData
  - Method
  - Reference
  - XMLHttpRequest
browser-compat: api.FormData.append
---
{{APIRef("XMLHttpRequest")}}

The **`append()`** method of the {{domxref("FormData")}} interface appends a new value onto an existing key inside a `FormData` object, or adds the key if it does not already exist.

The difference between {{domxref("FormData.set", "set()")}} and `append()` is that if the specified key already exists, `set()` will overwrite all existing values with the new one, whereas `append()` will append the new value onto the end of the existing set of values.

> **Note:** This method is available in [Web Workers](/en-US/docs/Web/API/Web_Workers_API).

## Syntax

```js
append(name, value)
append(name, value, filename)
```

### Parameters

- `name`
  - : The name of the field whose data is contained in `value`.
- `value`
  - : The field's value. This can be a string or {{domxref("Blob")}} (including subclasses such as {{domxref("File")}}). If none of these are specified the value is converted to a string.
- `filename` {{optional_inline}}
  - : The filename reported to the server (a string), when a {{domxref("Blob")}} or {{domxref("File")}} is passed as the second parameter. The default filename for {{domxref("Blob")}} objects is "blob". The default filename for {{domxref("File")}} objects is the file's filename.

> **Note:** If you specify a {{domxref("Blob")}} as the data to append to the `FormData` object, the filename that will be reported to the server in the "Content-Disposition" header used to vary from browser to browser.

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
formData.append('username', 'Chris');
```

When the value is a {{domxref("Blob")}} (or a {{domxref("File")}}), you can specify its name with the `filename` parameter:

```js
formData.append('userpic', myFileInput.files[0], 'chris.jpg');
```

As with regular form data, you can append multiple values with the same name:

```js
formData.append('userpic', myFileInput.files[0], 'chris1.jpg');
formData.append('userpic', myFileInput.files[1], 'chris2.jpg');
```

If the value is not a string or a `Blob`, `append()` will convert it to a string automatically:

```js
formData.append('name', true);
formData.append('name', 72);
formData.getAll('name'); // ["true", "72"]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using FormData objects](/en-US/docs/Web/API/FormData/Using_FormData_Objects)
- {{HTMLElement("Form")}}
