---
title: FormDataEvent
slug: Web/API/FormDataEvent
page-type: web-api-interface
browser-compat: api.FormDataEvent
---

{{APIRef("DOM")}}

The **`FormDataEvent`** interface represents a [`formdata` event](/en-US/docs/Web/API/HTMLFormElement/formdata_event) — such an event is fired on an {{domxref("HTMLFormElement")}} object after the entry list representing the form's data is constructed. This happens when the form is submitted, but can also be triggered by the invocation of a {{domxref("FormData.FormData", "FormData()")}} constructor.

This allows a {{domxref("FormData")}} object to be quickly obtained in response to a `formdata` event firing, rather than needing to put it together yourself when you wish to submit form data via a method like {{domxref("XMLHttpRequest")}} (see [Using FormData objects](/en-US/docs/Web/API/FormData/Using_FormData_Objects)).

{{InheritanceDiagram}}

## Constructor

- {{domxref("FormDataEvent.FormDataEvent","FormDataEvent()")}}
  - : Creates a new `FormDataEvent` object instance.

## Instance properties

_Inherits properties from its parent interface, {{domxref("Event")}}._

- {{domxref("FormDataEvent.formData")}}
  - : Contains the {{domxref("FormData")}} object representing the data contained in the form when the event was fired.

## Instance methods

_Inherits methods from its parent interface, {{domxref("Event")}}._

## Examples

```js
// grab reference to form

const formElem = document.querySelector("form");

// submit handler

formElem.addEventListener("submit", (e) => {
  // on form submission, prevent default
  e.preventDefault();

  console.log(form.querySelector('input[name="field1"]')); // FOO
  console.log(form.querySelector('input[name="field2"]')); // BAR

  // construct a FormData object, which fires the formdata event
  const formData = new FormData(formElem);
  // formdata gets modified by the formdata event
  console.log(formData.get("field1")); // foo
  console.log(formData.get("field2")); // bar
});

// formdata handler to retrieve data

formElem.addEventListener("formdata", (e) => {
  console.log("formdata fired");

  // modifies the form data
  const formData = e.formData;
  formData.set("field1", formData.get("field1").toLowerCase());
  formData.set("field2", formData.get("field2").toLowerCase());
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
