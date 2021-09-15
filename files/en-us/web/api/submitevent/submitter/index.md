---
title: SubmitEvent.submitter
slug: Web/API/SubmitEvent/submitter
tags:
  - API
  - Forms
  - HTML
  - HTML DOM
  - Property
  - Read-only
  - Reference
  - SubmitEvent
  - submission
  - submitter
browser-compat: api.SubmitEvent.submitter
---
{{APIRef("HTML DOM")}}

The read-only **`submitter`** property found on
the {{domxref("SubmitEvent")}} interface specifies the submit button or other element
that was invoked to cause the form to be submitted.

## Syntax

```js
let submitter = submitEvent.submitter;
```

### Value

An element, indicating the element that sent
the {{domxref("HTMLFormElement.submit_event", "submit")}} event to the form. While this
is often an {{HTMLElement("input")}} element whose [`type`](/en-US/docs/Web/HTML/Element/input#htmlattrdeftype) is `submit` or a {{HTMLElement("button")}} element whose [`type`](/en-US/docs/Web/HTML/Element/input#htmlattrdeftype) is `submit`, it could be some other element which has initiated a
submission process.

If the submission was not triggered by a button of some kind, the value of `submitter` is `null`.

## Examples

See [`SubmitEvent`](/en-US/docs/Web/API/SubmitEvent#examples) for example code.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
