---
title: "ServiceWorkerGlobalScope: cookiechange event"
short-title: cookiechange
slug: Web/API/ServiceWorkerGlobalScope/cookiechange_event
page-type: web-api-event
browser-compat: api.ServiceWorkerGlobalScope.cookiechange_event
---

{{APIRef("Cookie Store API")}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

The **`cookiechange`** event of the {{domxref("ServiceWorkerGlobalScope")}} interface is fired when a cookie change occurs that matches the service worker's cookie change subscription list.

This event is not cancelable and does not bubble.

## Syntax

Use the event name in {{domxref("EventTarget/addEventListener", "addEventListener()")}}:

```js-nolint
addEventListener("cookiechange", (event) => { })
```

Alternatively, assign to the [event handler property](/en-US/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) of the interface:

```js-nolint
oncookiechange = (event) => { }
```

## Event type

An {{domxref("ExtendableCookieChangeEvent")}}. Inherits from {{domxref("ExtendableEvent")}}.

{{InheritanceDiagram("ExtendableCookieChangeEvent")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
