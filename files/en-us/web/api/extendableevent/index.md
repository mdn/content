---
title: ExtendableEvent
slug: Web/API/ExtendableEvent
page-type: web-api-interface
browser-compat: api.ExtendableEvent
---

{{APIRef("Service Workers API")}}{{AvailableInWorkers("service")}}

The **`ExtendableEvent`** interface extends the lifetime of the [`install`](/en-US/docs/Web/API/ServiceWorkerGlobalScope/install_event) and [`activate`](/en-US/docs/Web/API/ServiceWorkerGlobalScope/activate_event) events dispatched on the global scope as part of the service worker lifecycle. This ensures that any functional events (like {{domxref("FetchEvent")}}) are not dispatched until it upgrades database schemas and deletes the outdated cache entries.

If {{domxref("ExtendableEvent.waitUntil","waitUntil()")}} is called outside of the `ExtendableEvent` handler, the browser should throw an `InvalidStateError`; note also that multiple calls will stack up, and the resulting promises will be added to the list of [extend lifetime promises](https://w3c.github.io/ServiceWorker/#extendableevent-extend-lifetime-promises).

This interface inherits from the {{domxref("Event")}} interface.

{{InheritanceDiagram}}

> [!NOTE]
> This interface is only available when the global scope is a {{domxref("ServiceWorkerGlobalScope")}}. It is not available when it is a {{domxref("Window")}}, or the scope of another kind of worker.

## Constructor

- {{domxref("ExtendableEvent.ExtendableEvent()", "ExtendableEvent()")}}
  - : Creates a new `ExtendableEvent` object.

## Instance properties

_Doesn't implement any specific properties, but inherits properties from its parent, {{domxref("Event")}}._

## Instance methods

_Inherits methods from its parent, {{domxref("Event")}}_.

- {{domxref("ExtendableEvent.waitUntil", "ExtendableEvent.waitUntil()")}}
  - : Extends the lifetime of the event. It is intended to be called in the [`install`](/en-US/docs/Web/API/ServiceWorkerGlobalScope/install_event) [event handler](/en-US/docs/Web/Events/Event_handlers) for the {{domxref("ServiceWorkerRegistration.installing", "installing")}} worker and on the [`activate`](/en-US/docs/Web/API/ServiceWorkerGlobalScope/activate_event) [event handler](/en-US/docs/Web/Events/Event_handlers) for the {{domxref("ServiceWorkerRegistration.active", "active")}} worker.

## Examples

This code snippet is from the [service worker prefetch sample](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/prefetch/service-worker.js) (see [prefetch example live](https://googlechrome.github.io/samples/service-worker/prefetch/).) The code calls {{domxref("ExtendableEvent.waitUntil()")}} in {{domxref("ServiceWorkerGlobalScope.install_event", "oninstall")}}, delaying treating the {{domxref("ServiceWorkerRegistration.installing")}} worker as installed until the passed promise resolves successfully. The promise resolves when all resources have been fetched and cached, or else when any exception occurs.

The code snippet also shows a best practice for versioning caches used by the service worker. Though there's only one cache in this example, the same approach can be used for multiple caches. It maps a shorthand identifier for a cache to a specific, versioned cache name.

> [!NOTE]
> In Chrome, logging statements are visible via the "Inspect" interface for the relevant service worker accessed via chrome://serviceworker-internals.

```js
const CACHE_VERSION = 1;
const CURRENT_CACHES = {
  prefetch: `prefetch-cache-v${CACHE_VERSION}`,
};

self.addEventListener("install", (event) => {
  const urlsToPrefetch = [
    "./static/pre_fetched.txt",
    "./static/pre_fetched.html",
    "https://www.chromium.org/_/rsrc/1302286216006/config/customLogo.gif",
  ];

  console.log(
    "Handling install event. Resources to pre-fetch:",
    urlsToPrefetch,
  );

  event.waitUntil(
    caches
      .open(CURRENT_CACHES["prefetch"])
      .then((cache) => {
        return cache
          .addAll(
            urlsToPrefetch.map((urlToPrefetch) => {
              return new Request(urlToPrefetch, { mode: "no-cors" });
            }),
          )
          .then(() => {
            console.log("All resources have been fetched and cached.");
          });
      })
      .catch((error) => {
        console.error("Pre-fetching failed:", error);
      }),
  );
});
```

> [!NOTE]
> When fetching resources, it's very important to use `{mode: 'no-cors'}` if there is any chance that the resources are served off of a server that doesn't support {{glossary("CORS")}}. In this example, [www.chromium.org](https://www.chromium.org/) doesn't support CORS.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using Service Workers](/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Service workers basic code example](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [Using web workers](/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)
