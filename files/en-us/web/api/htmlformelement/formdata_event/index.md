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

  console.log(form.querySelector('input[name="field1"]')); // FOO
  console.log(form.querySelector('input[name="field2"]')); // BAR

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
