---
title: "FormData: FormData() constructor"
short-title: FormData()
slug: Web/API/FormData/FormData
page-type: web-api-constructor
browser-compat: api.FormData.FormData
---

{{APIRef("XMLHttpRequest")}}

The **`FormData()`** constructor creates a new {{domxref("FormData")}} object.

> **Note:** This feature is available in [Web Workers](/en-US/docs/Web/API/Web_Workers_API).

## Syntax

```js-nolint
new FormData()
new FormData(form)
new FormData(form, submitter)
```

### Parameters

- `form` {{optional_inline}}
  - : An HTML {{HTMLElement("form")}} element — when specified, the {{domxref("FormData")}} object will be populated with the `form`'s current keys/values using the name property of each element for the keys and their submitted value for the values. It will also encode file input content.
- `submitter` {{optional_inline}}
  - : A {{Glossary("submit button")}} that is a member of the `form`. If the `submitter` has a `name` attribute or is an `{{HtmlElement('input/image', '&lt;input type="image"&gt;')}}`, its data [will be included](/en-US/docs/Glossary/Submit_button#form_data_entries) in the {{domxref("FormData")}} object (e.g. `btnName=btnValue`).

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if the specified `submitter` is not a {{Glossary("submit button")}}.
- `NotFoundError` {{domxref("DOMException")}}
  - : Thrown if the specified `submitter` isn't a member of the `form`. The `submitter` must be either a
    descendant of the form element or must have a [`form`](/en-US/docs/Web/HTML/Element/input#form)
    attribute referring to the form.

## Examples

### Creating an empty FormData

The following line creates an empty {{domxref("FormData")}} object:

```js
const formData = new FormData();
```

You could add a key/value pair to this using {{domxref("FormData.append", "append()")}}:

```js
formData.append("username", "Chris");
```

### Prepopulating from a HTML form element

You can specify the optional `form` and `submitter` arguments when creating the `FormData` object, to prepopulate it with values from the specified form.

> **Note:** Only successful form controls are included in a FormData object, i.e. those with a name and not in a disabled state.

#### HTML

```html
<form id="form">
  <input type="text" name="text1" value="foo" />
  <input type="text" name="text2" value="bar" />
  <input type="text" name="text2" value="baz" />
  <input type="checkbox" name="check" checked disabled />
  <button name="intent" value="save">Save</button>
  <button name="intent" value="saveAsCopy">Save As Copy</button>
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
const form = document.getElementById("form");
const submitter = document.querySelector("button[value=save]");
const formData = new FormData(form, submitter);

const output = document.getElementById("output");

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
