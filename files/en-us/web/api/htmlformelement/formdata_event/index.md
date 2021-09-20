---
title: 'HTMLFormElement: formdata event'
slug: Web/API/HTMLFormElement/formdata_event
tags:
  - Event
  - Forms
  - Reference
  - formevent
browser-compat: api.HTMLFormElement.formdata_event
---
{{APIRef}}

The **`formdata`** event fires after the entry list representing the form's data is constructed. This happens when the form is submitted, but can also be triggered by the invocation of a {{domxref("FormData.FormData", "FormData()")}} constructor.

## General info

<table class="properties">
  <tbody>
    <tr>
      <th>Bubbles</th>
      <td>No</td>
    </tr>
    <tr>
      <th>Cancelable</th>
      <td>No</td>
    </tr>
    <tr>
      <th>Interface</th>
      <td>{{DOMxRef("FormDataEvent")}}</td>
    </tr>
    <tr>
      <th>Event handler property</th>
      <td>{{domxref("GlobalEventHandlers.onformdata")}}</td>
    </tr>
  </tbody>
</table>

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

The `onformdata` version would look like this:

```js
formElem.onformdata = (e) => {
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
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- HTML {{htmlElement("form")}} element
- {{domxref("FormDataEvent")}}
