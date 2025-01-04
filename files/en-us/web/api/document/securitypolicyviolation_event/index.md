---
title: "Document: securitypolicyviolation event"
short-title: securitypolicyviolation
slug: Web/API/Document/securitypolicyviolation_event
page-type: web-api-event
browser-compat: api.Document.securitypolicyviolation_event
---

{{APIRef}}

The **`securitypolicyviolation`** event is fired when a [Content Security Policy](/en-US/docs/Web/HTTP/CSP) is violated.

The event is fired on the document when there is a violation of the document CSP policy (and may also bubble from elements in the document).

This event [bubbles](/en-US/docs/Learn_web_development/Core/Scripting/Event_bubbling) to the {{domxref("Window")}} object, and is [composed](/en-US/docs/Web/API/Event/composed).

> [!NOTE]
> You should add the handler for this event to a top level object (i.e. {{domxref("Window")}} or {{domxref("Document")}}).
> While the property exists in HTML elements, you can't assign a handler to the property until the elements have been loaded, by which time this event will already have fired.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("securitypolicyviolation", (event) => {});

onsecuritypolicyviolation = (event) => {};
```

## Event type

A {{domxref("SecurityPolicyViolationEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("SecurityPolicyViolationEvent")}}

## Examples

The code below shows how you might add an event handler function using the `onsecuritypolicyviolation` event handler property or `addEventListener()` on the `Document`.

```js
document.onsecuritypolicyviolation = (e) => {
  // Handle SecurityPolicyViolationEvent e here
};

document.addEventListener("securitypolicyviolation", (e) => {
  // Handle SecurityPolicyViolationEvent e here
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("Element/securitypolicyviolation_event", "securitypolicyviolation")}} event of the {{domxref("Element")}} interface
- The {{domxref("WorkerGlobalScope/securitypolicyviolation_event", "securitypolicyviolation")}} event of the {{domxref("WorkerGlobalScope")}} interface
- [HTTP > Content Security Policy](/en-US/docs/Web/HTTP/CSP)
