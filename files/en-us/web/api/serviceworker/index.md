---
title: ServiceWorker
slug: Web/API/ServiceWorker
tags:
  - API
  - Interface
  - Offline
  - Reference
  - Service Workers
  - ServiceWorker
  - Workers
browser-compat: api.ServiceWorker
---
{{securecontext_header}}{{APIRef("Service Workers API")}}

The **`ServiceWorker`** interface of the [Service Worker API](/en-US/docs/Web/API/Service_Worker_API) provides a reference to a service worker. Multiple {{glossary("browsing context", "browsing contexts")}} (e.g. pages, workers, etc.) can be associated with the same service worker, each through a unique `ServiceWorker` object.

A `ServiceWorker` object is available in the {{domxref("ServiceWorkerRegistration.active")}} property, and the {{domxref("ServiceWorkerContainer.controller")}} property — this is a service worker that has been activated and is controlling the page (the service worker has been successfully registered, and the controlled page has been reloaded.)

The `ServiceWorker` interface is dispatched a set of lifecycle events — `install` and `activate` — and functional events including `fetch`. A `ServiceWorker` object has an associated {{domxref("ServiceWorker.state")}}, related to its lifecycle.

## Properties

_The `ServiceWorker` interface inherits properties from its parent, {{domxref("EventTarget")}}._

- {{domxref("ServiceWorker.scriptURL")}} {{readonlyinline}}
  - : Returns the `ServiceWorker` serialized script URL defined as part of {{domxref("ServiceWorkerRegistration")}}. The URL must be on the same origin as the document that registers the `ServiceWorker`.
- {{domxref("ServiceWorker.state")}} {{readonlyinline}}
  - : Returns the state of the service worker. It returns one of the following values: `installing`, `installed,` `activating`, `activated`, or `redundant`.

### Event handlers

- {{domxref("ServiceWorker.onstatechange")}} {{readonlyinline}}
  - : An {{domxref("EventListener")}} property called whenever an event of type `statechange` is fired; it is basically fired anytime the {{domxref("ServiceWorker.state")}} changes.

## Methods

_The `ServiceWorker` interface inherits methods from its parent, {{domxref("EventTarget")}}._

## Examples

This code snippet is from the [service worker registration-events sample](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/registration-events/index.html) ([live demo](https://googlechrome.github.io/samples/service-worker/registration-events/)). The code listens for any change in the {{domxref("ServiceWorker.state")}} and returns its value.

```js
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js', {
        scope: './'
    }).then(function (registration) {
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
            // logState(serviceWorker.state);
            serviceWorker.addEventListener('statechange', function (e) {
                // logState(e.target.state);
            });
        }
    }).catch (function (error) {
        // Something went wrong during registration. The service-worker.js file
        // might be unavailable or contain a syntax error.
    });
} else {
    // The current browser doesn't support service workers.
    // Perhaps it is too old or we are not in a Secure Context.
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [ServiceWorker Cookbook](https://serviceworke.rs)
- [Using Service Workers](/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Service worker basic code example](https://github.com/mdn/sw-test)
- [Is ServiceWorker ready?](https://jakearchibald.github.io/isserviceworkerready/)
- {{jsxref("Promise")}}
- [Using web workers](/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)
