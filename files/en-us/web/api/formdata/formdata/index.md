---
title: FormData()
slug: Web/API/FormData/FormData
tags:
  - API
  - Constructor
  - FormData
  - Reference
  - XHR
  - XMLHttpRequest
browser-compat: api.FormData.FormData
---
{{APIRef("XMLHttpRequest")}}

The **`FormData()`** constructor creates a new {{domxref("FormData")}} object.

> **Note:** This feature is available in [Web Workers](/en-US/docs/Web/API/Web_Workers_API).

## Syntax

```js
new FormData(form)
```

### Parameters

- `form` {{optional_inline}}
  - : An HTML {{HTMLElement("form")}} element — when specified, the {{domxref("FormData")}} object will be populated with the form's current keys/values using the name property of each element for the keys and their submitted value for the values. It will also encode file input content.

## Example

The following line creates an empty {{domxref("FormData")}} object:

```js
var formData = new FormData(); // Currently empty
```

You could add a key/value pair to this using {{domxref("FormData.append")}}:

```js
formData.append('username', 'Chris');
```

Or you can specify the optional `form` argument when creating the `FormData` object, to prepopulate it with values from the specified form:

```html
<form id="myForm" name="myForm">
  <div>
    <label for="username">Enter name:</label>
    <input type="text" id="username" name="username">
  </div>
  <div>
    <label for="useracc">Enter account number:</label>
    <input type="text" id="useracc" name="useracc">
  </div>
  <div>
    <label for="userfile">Upload file:</label>
    <input type="file" id="userfile" name="userfile">
  </div>
  <input type="submit" value="Submit!">
</form>
```

> **Note:** Only successful form controls are included in a FormData object, i.e. those with a name, not disabled and checked (radio buttons and checkboxes) or selected (one or more options within a select).

```js
let myForm = document.getElementById('myForm');
let formData = new FormData(myForm);
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
