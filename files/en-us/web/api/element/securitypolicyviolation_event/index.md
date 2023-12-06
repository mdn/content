---
title: "Element: securitypolicyviolation event"
short-title: securitypolicyviolation
slug: Web/API/Element/securitypolicyviolation_event
page-type: web-api-event
browser-compat: api.Element.securitypolicyviolation_event
---

{{APIRef}}

The **`securitypolicyviolation`** event is fired when a [Content Security Policy](/en-US/docs/Web/HTTP/CSP) is violated.

The event is fired on the element that violates the policy and bubbles.
It is normally handled by an event handler on the {{domxref("Window")}} or {{domxref("Document")}} object.

The handler can be assigned using the `onsecuritypolicyviolation` property or using {{domxref("EventTarget.addEventListener()")}}.

> **Note:** You must add the handler for this event to a top level object (i.e. {{domxref("Window")}} or {{domxref("Document")}}).
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

- [HTTP > Content Security Policy](/en-US/docs/Web/HTTP/CSP)
