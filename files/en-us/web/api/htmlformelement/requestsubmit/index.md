---
title: HTMLFormElement.requestSubmit()
slug: Web/API/HTMLFormElement/requestSubmit
page-type: web-api-instance-method
tags:
  - API
  - HTML
  - HTML DOM
  - HTMLFormElement
  - Input
  - Method
  - button
  - form
  - requestSubmit
  - submit
browser-compat: api.HTMLFormElement.requestSubmit
---
{{APIRef("HTML DOM")}}

The {{domxref("HTMLFormElement")}} method **`requestSubmit()`** requests
that the form be submitted using a specific submit button.

## Syntax

```js
requestSubmit()
requestSubmit(submitter)
```

### Parameters

- `submitter` {{optional_inline}}

  - : The submit button whose attributes describe the method by which the form is to be
    submitted. This may be either an {{HTMLElement("input")}} or
    {{HTMLElement("button")}} element whose `type` attribute
    is `submit`.

    If you omit the `submitter` parameter, the form element
    itself is used as the submitter.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if the specified `submitter` is not a submit button.
- `NotFoundError` {{domxref("DOMException")}}
  - : Thrown if the specified `submitter` isn't a member of the form on
    which `requestSubmit()` was called. The submitter must be either a
    descendant of the form element or must have a {{htmlattrxref("form", "input")}}
    attribute referring to the form.

## Usage notes

The obvious question is: Why does this method exist, when we've had the
{{domxref("HTMLFormElement.submit", "submit()")}} method since the dawn of time?

The answer is simple. `submit()` submits the form, but that's all it
does. `requestSubmit()`, on the other hand, acts as if a submit button were
clicked. The form's content is validated, and the form is submitted only if validation
succeeds. Once the form has been submitted, the
{{domxref("HTMLFormElement.submit_event", "submit")}} event is sent back to the form
object.

## Examples

In the example below, the form is submitted by attempting to send the request using
`requestSubmit()` if it's available. If a submit button with the
ID `main-submit` is found, that's used to submit the form. Otherwise, the
form is submitted with no `submitter` parameter, so it's submitted directly
by the form itself.

If, on the other hand, `requestSubmit()` isn't available, this code falls
back to calling the form's {{domxref("HTMLFormElement.submit", "submit()")}} method.

```js
let myForm = document.querySelector("form");
let submitButton = myForm.querySelector("#main-submit");

if (myForm.requestSubmit) {
  if (submitButton) {
    myForm.requestSubmit(submitButton);
  } else {
    myForm.requestSubmit();
  }
} else {
  myForm.submit();
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
