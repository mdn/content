---
title: "SubmitEvent: SubmitEvent() constructor"
short-title: SubmitEvent()
slug: Web/API/SubmitEvent/SubmitEvent
page-type: web-api-constructor
browser-compat: api.SubmitEvent.SubmitEvent
---

{{APIRef("HTML DOM")}}

The **`SubmitEvent()`** constructor creates and returns a new {{domxref("SubmitEvent")}} object,
which is used to represent a {{domxref("HTMLFormElement.submit_event", "submit")}} event
fired at an {{Glossary("HTML")}} [form](/en-US/docs/Learn_web_development/Extensions/Forms).

## Syntax

```js-nolint
new SubmitEvent(type)
new SubmitEvent(type, options)
```

### Parameters

- `type`
  - : A string with the name of the event.
    It is case-sensitive and browsers always set it to `submit`.
- `options` {{optional_inline}}
  - : An object that, _in addition of the properties defined in {{domxref("Event/Event", "Event()")}}_, can have the following properties:
    - `submitter` {{optional_inline}}
      - : An {{domxref('HTMLElement')}} object that is the submit button that triggered the form submission.

### Return value

A {{domxref("SubmitEvent")}} object configured using the given inputs.

## Examples

This code snippet locates a form in the current document, and then an HTML
{{HTMLElement("button")}} within the form with the class `submit` on it.
Next, a new {{domxref("SubmitEvent")}} is created, configured with
its {{domxref("SubmitEvent.submitter", "submitter")}} set to the identified button
(or `null` if the button wasn't found). Then the event is sent to the form,
telling the form that it's been submitted by the button.

```js
const form = document.querySelector("form");
const formTrigger = form.querySelector("button.submit");
const submitEvent = new SubmitEvent("submit", { submitter: formTrigger });

form.dispatchEvent(submitEvent);
```

This is a somewhat contrived example, as you can do nearly all of this much more
easily, but this gives you deep control over the process that can be useful.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
