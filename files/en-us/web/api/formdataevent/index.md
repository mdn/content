---
title: FormDataEvent
slug: Web/API/FormDataEvent
tags:
  - API
  - Experimental
  - FormDataEvent
  - Forms
  - Landing
  - Reference
browser-compat: api.FormDataEvent
---
{{APIRef("DOM")}}

The **`FormDataEvent`** interface represents a [`formdata` event](/en-US/docs/Web/API/HTMLFormElement/formdata_event) — such an event is fired on an {{domxref("HTMLFormElement")}} object after the entry list representing the form's data is constructed. This happens when the form is submitted, but can also be triggered by the invocation of a {{domxref("FormData.FormData", "FormData()")}} constructor.

This allows a {{domxref("FormData")}} object to be quickly obtained in response to a `formdata` event firing, rather than needing to put it together yourself when you wish to submit form data via a method like {{domxref("XMLHttpRequest")}} (see [Using FormData objects](/en-US/docs/Web/API/FormData/Using_FormData_Objects)).

## Constructor

- {{domxref("FormDataEvent.FormDataEvent","FormDataEvent()")}}
  - : Creates a new `FormDataEvent` object instance.

## Properties

_Inherits properties from its parent interface, {{domxref("Event")}}._

- {{domxref("FormDataEvent.formData")}}
  - : Contains the {{domxref("FormData")}} object representing the data contained in the form when the event was fired.

## Methods

_Inherits methods from its parent interface, {{domxref("Event")}}._

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
- {{domxref("FormData")}}
- [Using FormData objects](/en-US/docs/Web/API/FormData/Using_FormData_Objects)
- {{HTMLElement("Form")}}
