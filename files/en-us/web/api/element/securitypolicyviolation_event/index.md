---
title: "Element: securitypolicyviolation event"
short-title: securitypolicyviolation
slug: Web/API/Element/securitypolicyviolation_event
page-type: web-api-event
browser-compat: api.Element.securitypolicyviolation_event
---

{{APIRef}}

The **`securitypolicyviolation`** event is fired when a [Content Security Policy](/en-US/docs/Web/HTTP/Guides/CSP) is violated.

The event is fired on the element when there is a violation of the CSP policy.

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

### Listening for securitypolicyviolation on Window

The code below shows how you might add an event handler function using the `onsecuritypolicyviolation` global event handler property or `addEventListener()` on the top level `Window` (you could use exactly the same approach on `Document`).

```js
window.onsecuritypolicyviolation = (e) => {
  // Handle SecurityPolicyViolationEvent e here
};

window.addEventListener("securitypolicyviolation", (e) => {
  // Handle SecurityPolicyViolationEvent e here
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("Document/securitypolicyviolation_event", "securitypolicyviolation")}} event of the {{domxref("Document")}} interface
- The {{domxref("WorkerGlobalScope/securitypolicyviolation_event", "securitypolicyviolation")}} event of the {{domxref("WorkerGlobalScope")}} interface
- [HTTP > Content Security Policy](/en-US/docs/Web/HTTP/Guides/CSP)
