---
title: FormData()
slug: Web/API/FormData/FormData
page-type: web-api-constructor
tags:
  - API
  - Constructor
  - FormData
  - Reference
  - XMLHttpRequest
browser-compat: api.FormData.FormData
---
{{APIRef("XMLHttpRequest")}}

The **`FormData()`** constructor creates a new {{domxref("FormData")}} object.

> **Note:** This feature is available in [Web Workers](/en-US/docs/Web/API/Web_Workers_API).

## Syntax

```js
new FormData()
new FormData(form)
```

### Parameters

- `form` {{optional_inline}}
  - : An HTML {{HTMLElement("form")}} element — when specified, the {{domxref("FormData")}} object will be populated with the form's current keys/values using the name property of each element for the keys and their submitted value for the values. It will also encode file input content.

## Examples

### Creating an empty FormData

The following line creates an empty {{domxref("FormData")}} object:

```js
const formData = new FormData();
```

You could add a key/value pair to this using {{domxref("FormData.append", "append()")}}:

```js
formData.append('username', 'Chris');
```

### Prepopulating from a HTML form element

You can specify the optional `form` argument when creating the `FormData` object, to prepopulate it with values from the specified form.

> **Note:** Only successful form controls are included in a FormData object, i.e. those with a name and not in a disabled state.

#### HTML

```html
<form id="form">
  <input type="text" name="text1" value="foo">
  <input type="text" name="text2" value="bar">
  <input type="text" name="text2" value="baz">
  <input type="checkbox" name="check" checked disabled>
</form>

<output id="output"></output>
```

```css hidden
form {
  display: none;
}

output {
  display: block;
  white-space: pre-wrap;
}
```

#### JavaScript

```js
const form = document.getElementById('form');
const formData = new FormData(form);

const output = document.getElementById('output');

for (const [key, value] of formData) {
  output.textContent += `${key}: ${value}\n`;
}
```

#### Result

For brevity, the `<form>` element is hidden from view.

{{EmbedLiveSample("prepopulating_from_a_html_form_element", "", 150)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using FormData objects](/en-US/docs/Web/API/FormData/Using_FormData_Objects)
- {{HTMLElement("Form")}}
