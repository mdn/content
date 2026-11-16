---
title: "WorkerGlobalScope: securitypolicyviolation event"
short-title: securitypolicyviolation
slug: Web/API/WorkerGlobalScope/securitypolicyviolation_event
page-type: web-api-event
browser-compat: api.WorkerGlobalScope.securitypolicyviolation_event
---

{{APIRef("Reporting API")}}{{AvailableInWorkers("worker")}}

The **`securitypolicyviolation`** event is fired when a [Content Security Policy](/en-US/docs/Web/HTTP/Guides/CSP) is violated in a worker.

The handler can be assigned using the `onsecuritypolicyviolation` event handler property (but note that this replaces other event listeners added using `onsecuritypolicyviolation`, if any) or using {{domxref("EventTarget.addEventListener()")}}.

## Syntax

Use the event name in {{domxref("EventTarget/addEventListener", "addEventListener()")}}:

```js-nolint
addEventListener("securitypolicyviolation", (event) => { })
```

Alternatively, assign to the [event handler property](/en-US/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) of the interface:

```js-nolint
onsecuritypolicyviolation = (event) => { }
```

## Event type

A {{domxref("SecurityPolicyViolationEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("SecurityPolicyViolationEvent")}}

## Examples

The code below shows how you might add an event handler function using the `onsecuritypolicyviolation` event handler property (but note that this replaces other event listeners added using `onsecuritypolicyviolation`, if any) or call `addEventListener()` method.

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
- [HTTP > Content Security Policy](/en-US/docs/Web/HTTP/Guides/CSP)
