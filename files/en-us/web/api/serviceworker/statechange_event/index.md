---
title: "ServiceWorker: statechange event"
short-title: statechange
slug: Web/API/ServiceWorker/statechange_event
page-type: web-api-event
browser-compat: api.ServiceWorker.statechange_event
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

The `statechange` event fires anytime the {{domxref("ServiceWorker.state")}} changes.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("statechange", (event) => {});

onstatechange = (event) => {};
```

## Event type

A generic {{domxref("Event")}}.

## Examples

This code snippet is from the [service worker registration-events sample](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/registration-events/index.html) ([live demo](https://googlechrome.github.io/samples/service-worker/registration-events/)). The code listens for any change in the {{domxref("ServiceWorker.state")}}
and returns its value.

```js
let serviceWorker;
if (registration.installing) {
  serviceWorker = registration.installing;
  document.querySelector("#kind").textContent = "installing";
} else if (registration.waiting) {
  serviceWorker = registration.waiting;
  document.querySelector("#kind").textContent = "waiting";
} else if (registration.active) {
  serviceWorker = registration.active;
  document.querySelector("#kind").textContent = "active";
}

if (serviceWorker) {
  logState(serviceWorker.state);
  serviceWorker.addEventListener("statechange", (e) => {
    logState(e.target.state);
  });
}
```

Note that when `statechange` fires, the service worker's references may have
changed. For example:

```js
navigator.serviceWorker.register("/sw.js").then((swr) => {
  swr.installing.state = "installing";
  swr.installing.onstatechange = () => {
    swr.installing = null;
    // At this point, swr.waiting OR swr.active might be true. This is because the statechange
    // event gets queued, meanwhile the underlying worker may have gone into the waiting
    // state and will be immediately activated if possible.
  };
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
