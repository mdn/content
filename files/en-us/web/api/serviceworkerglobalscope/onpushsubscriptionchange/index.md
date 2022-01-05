---
title: ServiceWorkerGlobalScope.onpushsubscriptionchange
slug: Web/API/ServiceWorkerGlobalScope/onpushsubscriptionchange
tags:
  - API
  - NeedsExample
  - Property
  - Push
  - Reference
  - Service Workers
  - ServiceWorkerGlobalScope
  - onpushsubscriptionchange
browser-compat: api.ServiceWorkerGlobalScope.onpushsubscriptionchange
---
{{APIRef("Service Workers API")}}

The **`ServiceWorkerGlobalScope.onpushsubscriptionchange`**
event of the {{domxref("ServiceWorkerGlobalScope")}} interface is fired to indicate a
change in push subscription that was triggered outside the application's control, e.g.
when browser refresh the push subscription.

Previously, it was defined as the event interface that is fired whenever a push
subscription has been invalidated (or is about to become so). This offers an opportunity
to resubscribe in order to continue receiving push messages, if desired. This might
happen if, for example, the push service sets an expiration time a subscription.

## Syntax

```js
ServiceWorkerGlobalScope.onpushsubscriptionchange = function() { /* ... */ }
self.addEventListener('pushsubscriptionchange', function() { /* ... */ })
```

## Example

```js
self.addEventListener('pushsubscriptionchange', function() {
  // do something, usually resubscribe to push and
  // send the new subscription details back to the
  // server via XHR or Fetch
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Push API](/en-US/docs/Web/API/Push_API)
