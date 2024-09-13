---
title: "WorkerGlobalScope: securitypolicyviolation event"
short-title: securitypolicyviolation
slug: Web/API/WorkerGlobalScope/securitypolicyviolation_event
page-type: web-api-event
browser-compat: api.WorkerGlobalScope.securitypolicyviolation_event
---

{{APIRef}}{{AvailableInWorkers("worker")}}

The **`securitypolicyviolation`** event is fired when a [Content Security Policy](/en-US/docs/Web/HTTP/CSP) is violated in a worker.

The handler can be assigned using the `onsecuritypolicyviolation` event handler property or using {{domxref("EventTarget.addEventListener()")}}.

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

The code below shows how you might add an event handler function using the `onsecuritypolicyviolation` event handler property or call `addEventListener()` method.

```js
self.onsecuritypolicyviolation = (e) => {
  // Handle SecurityPolicyViolationEvent e here
};

self.addEventListener("securitypolicyviolation", (e) => {
  // Handle SecurityPolicyViolationEvent e here
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("Document/securitypolicyviolation_event", "securitypolicyviolation")}} event of the {{domxref("Document")}} interface
- The {{domxref("Element/securitypolicyviolation_event", "securitypolicyviolation")}} event of the {{domxref("Element")}} interface
- [HTTP > Content Security Policy](/en-US/docs/Web/HTTP/CSP)
