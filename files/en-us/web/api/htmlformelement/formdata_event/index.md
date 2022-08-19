---
title: 'HTMLFormElement: formdata event'
slug: Web/API/HTMLFormElement/formdata_event
page-type: web-api-event
tags:
  - Event
  - Forms
  - Reference
  - formevent
browser-compat: api.HTMLFormElement.formdata_event
---
{{APIRef}}

The **`formdata`** event fires after the entry list representing the form's data is constructed. This happens when the form is submitted, but can also be triggered by the invocation of a {{domxref("FormData.FormData", "FormData()")}} constructor.

This event is not cancelable and does not bubble.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('formdata', (event) => {});

onformdata = (event) => { };
```

## Event type

A {{domxref("FormDataEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("FormDataEvent")}}

## Event properties

_Inherits properties from its parent interface, {{domxref("Event")}}._

- {{domxref("FormDataEvent.formData")}}
  - : Contains the {{domxref("FormData")}} object representing the data contained in the form when the event was fired.

## Examples

```js
// grab reference to form

const formElem = document.querySelector('form');

// submit handler

formElem.addEventListener('submit', (e) => {
  // on form submission, prevent default
  e.preventDefault();

  console.log(formElem.querySelector('input[name="field1"]')); // FOO
  console.log(formElem.querySelector('input[name="field2"]')); // BAR

  // construct a FormData object, which fires the formdata event
  const formData = new FormData(formElem);
  // formdata gets modified by the formdata event
  console.log(formData.get('field1')); // foo
  console.log(formData.get('field2')); // bar
});

// formdata handler to retrieve data

formElem.addEventListener('formdata', (e) => {
  console.log('formdata fired');

  // modifies the form data
  const formData = e.formData;
  // formdata gets modified by the formdata event
  formData.set('field1', formData.get('field1').toLowerCase());
  formData.set('field2', formData.get('field2').toLowerCase());
});
```

The `onformdata` version would look like this:

```js
formElem.onformdata = (e) => {
  console.log('formdata fired');

  // modifies the form data
  const formData = e.formData;
  formData.set('field1', formData.get('field1').toLowerCase());
  formData.set('field2', formData.get('field2').toLowerCase());
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- HTML {{htmlElement("form")}} element
- {{domxref("FormDataEvent")}}
