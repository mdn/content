---
title: "Document: securitypolicyviolation event"
short-title: securitypolicyviolation
slug: Web/API/Document/securitypolicyviolation_event
page-type: web-api-event
browser-compat: api.Document.securitypolicyviolation_event
---

{{APIRef}}

The **`securitypolicyviolation`** event is fired when a [Content Security Policy](/en-US/docs/Web/HTTP/Guides/CSP) is violated.

The event is fired on the document when there is a violation of the document CSP policy (and may also bubble from elements in the document).

This event [bubbles](/en-US/docs/Learn_web_development/Core/Scripting/Event_bubbling) to the {{domxref("Window")}} object, and is [composed](/en-US/docs/Web/API/Event/composed).

> [!NOTE]
> You should generally add the handler for this event to a top level object (i.e., {{domxref("Window")}} or {{domxref("Document")}}).
> While HTML elements can technically be the target of the `securitypolicyviolation` event, in reality this event does not fire on them—for example, a blocked `<img>` source directly triggers this event on `document` as the target, instead of bubbling from the `<img>` element.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js-nolint
addEventListener("securitypolicyviolation", (event) => { })

onsecuritypolicyviolation = (event) => { }
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
- [HTTP > Content Security Policy](/en-US/docs/Web/HTTP/Guides/CSP)
