---
title: ServiceWorker.onstatechange
slug: Web/API/ServiceWorker/onstatechange
tags:
  - API
  - Property
  - Reference
  - Service Workers
  - ServiceWorker
  - onstatechange
browser-compat: api.ServiceWorker.onstatechange
---
{{APIRef("Service Workers API")}}

An {{domxref("EventListener")}} property called whenever an event of type
`statechange` is fired; it is basically fired anytime the
{{domxref("ServiceWorker.state")}} changes.

## Syntax

```js
ServiceWorker.onstatechange = function(statechangeevent) { /* ... */ }
ServiceWorker.addEventListener('statechange', function(statechangeevent) { /* ... */ } )
```

## Examples

This code snippet is from the [service
worker registration-events sample](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/registration-events/index.html) ([live
demo](https://googlechrome.github.io/samples/service-worker/registration-events/)). The code listens for any change in the {{domxref("ServiceWorker.state")}}
and returns its value.

```js
var serviceWorker;
if (registration.installing) {
  serviceWorker = registration.installing;
  document.querySelector('#kind').textContent = 'installing';
} else if (registration.waiting) {
  serviceWorker = registration.waiting;
  document.querySelector('#kind').textContent = 'waiting';
} else if (registration.active) {
  serviceWorker = registration.active;
  document.querySelector('#kind').textContent = 'active';
}

if (serviceWorker) {
  logState(serviceWorker.state);
  serviceWorker.addEventListener('statechange', function(e) {
  logState(e.target.state);
  });
}
```

Note that when `statechange` fires, the service worker's references may have
changed. For example:

```js
navigator.serviceWorker.register(..).then(function(swr) {
  swr.installing.state == "installing"
  swr.installing.onstatechange = function() {
    swr.installing == null;
    // At this point, swr.waiting OR swr.active might be true. This is because the statechange
    // event gets queued, meanwhile the underlying worker may have gone into the waiting
    // state and will be immediately activated if possible.
  }
})
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
