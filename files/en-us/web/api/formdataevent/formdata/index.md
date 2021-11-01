---
title: FormDataEvent.formData
slug: Web/API/FormDataEvent/formData
tags:
  - API
  - Experimental
  - FormDataEvent
  - Forms
  - Property
  - Reference
browser-compat: api.FormDataEvent.formData
---
{{APIRef("DOM")}}

The `formData` read only property of the {{domxref("FormDataEvent")}}
interface contains the {{domxref("FormData")}} object representing the data contained in
the form when the event was fired.

## Syntax

```js
formData = formDataEvent.formData
```

### Returns

A {{domxref("FormData")}} object.

## Examples

```js
// grab reference to form

const formElem = document.querySelector('form');

// submit handler

formElem.addEventListener('submit', (e) => {
  // on form submission, prevent default
  e.preventDefault();

  // construct a FormData object, which fires the formdata event
  new FormData(formElem);
});

// formdata handler to retrieve data

formElem.addEventListener('formdata', (e) => {
  console.log('formdata fired');

  // Get the form data from the event object
  let data = e.formData;
  for (var value of data.values()) {
    console.log(value);
  }

  // submit the data via XHR
  var request = new XMLHttpRequest();
  request.open("POST", "/formHandler");
  request.send(data);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("XMLHTTPRequest")}}
- [Using
  XMLHttpRequest](/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)
- [Using FormData
  objects](/en-US/docs/Web/API/FormData/Using_FormData_Objects)
- {{HTMLElement("Form")}}
