---
title: SubmitEvent()
slug: Web/API/SubmitEvent/SubmitEvent
tags:
  - API
  - Allocate
  - Constructor
  - Event
  - Forms
  - HTML DOM
  - Initialize
  - Reference
  - SubmitEvent
  - submit
browser-compat: api.SubmitEvent.SubmitEvent
---
{{APIRef("HTML DOM")}}

The **`SubmitEvent()`** constructor
creates and returns a new {{domxref("SubmitEvent")}} object, which is used to
represent a {{domxref("HTMLFormElement.submit_event", "submit")}} event fired at an
{{Glossary("HTML")}} [form](/en-US/docs/Learn/Forms).

## Syntax

```js
let submitEvent = new SubmitEvent(type,eventInitDict);
```

### Parameters

- `type`
  - : A {{domxref("DOMString")}} indicating the event which occurred.
    For `SubmitEvent`, this is always `submit`.
- `eventInitDict` {{optional_inline}}
  - : An optional dictionary of initial values for the event's properties.

### Return value

A {{domxref("SubmitEvent")}} object configured using the given inputs.

## Examples

This code snippet locates a form in the current document, and then an HTML
{{HTMLElement("button")}} within the form with the class `submit` on it.
Next, a new {{domxref("SubmitEvent")}} is created, configured with
its {{domxref("SubmitEvent.submitter", "submitter")}} set to the identified button
(or `null` if the button wasn't found). Then the event is sent to the form,
telling the form that it's been submitted by the button.

```js
const form = document.querySelector("form");
const formTrigger = form.querySelector("button.submit");
const submitEvent = new SubmitEvent("submit", { submitter: formTrigger });

form.dispatchEvent(submitEvent);
```

This is a somewhat contrived example, as you can do nearly all of this much more
easily, but this gives you deep control over the process that can be useful.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
