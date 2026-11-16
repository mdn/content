---
title: "FormData: set() method"
short-title: set()
slug: Web/API/FormData/set
page-type: web-api-instance-method
browser-compat: api.FormData.set
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers}}

The **`set()`** method of the {{domxref("FormData")}} interface sets a new value for an existing key inside a `FormData` object, or adds the key/value if it does not already exist.

The difference between `set()` and {{domxref("FormData.append", "append()")}} is that if the specified key does already exist, `set()` will overwrite all existing values with the new one, whereas `append()` will append the new value onto the end of the existing set of values.

## Syntax

```js-nolint
set(name, value)
set(name, value, filename)
```

### Parameters

- `name`
  - : The name of the field whose data is contained in `value`.
- `value`
  - : The field's value. This can be a string or {{domxref("Blob")}} (including subclasses such as {{domxref("File")}}). If none of these are specified the value is converted to a string.
- `filename` {{optional_inline}}
  - : The filename reported to the server (a string), when a {{domxref("Blob")}} or {{domxref("File")}} is passed as the second parameter. The default filename for {{domxref("Blob")}} objects is "blob". The default filename for {{domxref("File")}} objects is the file's filename.

> [!NOTE]
> If you specify a {{domxref("Blob")}} as the data to append to the `FormData` object, the filename that will be reported to the server in the "Content-Disposition" header used to vary from browser to browser.

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
formData.set("username", "Chris");
```

When the value is a {{domxref("Blob")}} (or a {{domxref("File")}}), you can specify its name with the `filename` parameter:

```js
formData.set("user-pic", myFileInput.files[0], "chris.jpg");
```

If the value is not a string or a `Blob`, `set()` will convert it to a string automatically:

```js
formData.set("name", 72);
formData.get("name"); // "72"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using FormData objects](/en-US/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects)
- {{HTMLElement("Form")}}
