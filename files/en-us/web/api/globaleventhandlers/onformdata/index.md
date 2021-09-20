---
title: GlobalEventHandlers.onformdata
slug: Web/API/GlobalEventHandlers/onformdata
tags:
  - API
  - Event Handler
  - Experimental
  - GlobalEventHandlers
  - HTML DOM
  - Property
  - Reference
browser-compat: api.GlobalEventHandlers.onformdata
---
{{ApiRef("HTML DOM")}}

The **`onformdata`** property of the
{{domxref("GlobalEventHandlers")}} mixin is the [event handler](/en-US/docs/Web/Events/Event_handlers) for
processing {{domxref("HTMLFormElement/formdata_event", "formdata")}} events, fired after the entry list representing the
form's data is constructed. This happens when the form is submitted, but can also be
triggered by the invocation of a {{domxref("FormData.FormData", "FormData()")}}
constructor. `onformdata` is available on {{domxref("HTMLFormElement")}}.

## Syntax

```js
target.onformdata = functionRef;
```

### Value

`functionRef` is a function name or a [function
expression](/en-US/docs/Web/JavaScript/Reference/Operators/function). The function receives a {{domxref("FormDataEvent")}} object as its
sole argument.

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

- [`formdata`
  event](/en-US/docs/Web/API/HTMLFormElement/formdata_event)
- {{domxref("FormDataEvent")}}
- [Using FormData
  Objects](/en-US/docs/Web/API/FormData/Using_FormData_Objects)
