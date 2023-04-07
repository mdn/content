---
title: "HTMLFormElement: requestSubmit() method"
short-title: requestSubmit()
slug: Web/API/HTMLFormElement/requestSubmit
page-type: web-api-instance-method
browser-compat: api.HTMLFormElement.requestSubmit
---

{{APIRef("HTML DOM")}}

The {{domxref("HTMLFormElement")}} method **`requestSubmit()`** requests
that the form be submitted using a specific submit button.

## Syntax

```js-nolint
requestSubmit()
requestSubmit(submitter)
```

### Parameters

- `submitter` {{optional_inline}}

  - : A {{Glossary("submit button")}} that is a member of the form.

    If the `submitter` specifies `form*` attributes, they [will override](/en-US/docs/Glossary/Submit_button#overriding_the_forms_behavior) the form's submission behavior (e.g. `formmethod="POST"`).

    If the `submitter` has a `name` attribute or is an `{{HtmlElement('input/image', '&lt;input type="image"&gt;')}}`, its data [will be included](/en-US/docs/Glossary/Submit_button#form_data_entries) in the form submission (e.g. `btnName=btnValue`).

    If you omit the `submitter` parameter, the form element itself is used as the submitter.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if the specified `submitter` is not a {{Glossary("submit button")}}.
- `NotFoundError` {{domxref("DOMException")}}
  - : Thrown if the specified `submitter` isn't a member of the form on
    which `requestSubmit()` was called. The submitter must be either a
    descendant of the form element or must have a [`form`](/en-US/docs/Web/HTML/Element/input#form)
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
