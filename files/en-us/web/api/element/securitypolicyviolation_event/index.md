---
title: "Element: securitypolicyviolation event"
short-title: securitypolicyviolation
slug: Web/API/Element/securitypolicyviolation_event
page-type: web-api-event
browser-compat: api.Element.securitypolicyviolation_event
---

{{APIRef}}

The **`securitypolicyviolation`** event is fired when a [Content Security Policy](/en-US/docs/Web/HTTP/CSP) is violated.

The event is fired on the element when there is a violation of the CSP policy.

This event [bubbles](/en-US/docs/Learn_web_development/Core/Scripting/Event_bubbling) and is [composed](/en-US/docs/Web/API/Event/composed).
It is normally handled by an event handler on the {{domxref("Window")}} or {{domxref("Document")}} object.

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

The code below shows how you might add an event handler function using the `onsecuritypolicyviolation` global event handler property or `addEventListener()` on the top level `Window` (you could use exactly the same approach on `Document`).

> [!NOTE]
> The example doesn't assign the handler directly to an element because, as noted above, for elements defined in HTML, the event would fired before this code could run.
> You might however add the event listener directly to an element that is dynamically constructed!

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
- [HTTP > Content Security Policy](/en-US/docs/Web/HTTP/CSP)
