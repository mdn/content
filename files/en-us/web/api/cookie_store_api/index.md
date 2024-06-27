---
title: Cookie Store API
slug: Web/API/Cookie_Store_API
page-type: web-api-overview
browser-compat:
  - api.CookieStore
  - api.CookieStoreManager
spec-urls: https://wicg.github.io/cookie-store/
---

{{securecontext_header}}{{DefaultAPISidebar("Cookie Store API")}}{{AvailableInWorkers("window_and_service")}}

The **Cookie Store API** is an asynchronous API for managing cookies, available in windows and also [service workers](/en-US/docs/Web/API/Service_Worker_API).

## Concepts and Usage

The existing method of getting and setting cookies involves working with {{domxref("document.cookie")}} as a string of key/value pairs. In addition to this being cumbersome and error prone, it also has a host of issues in the context of modern web development.

The `document.cookie` interface is {{Glossary("synchronous")}}, single-threaded, and blocking. When writing a cookie you must wait for the browser to update the string of all cookies. In addition, the reliance on {{domxref("document")}} means that cookies cannot be accessed by service workers which cannot access the `document` object.

The _Cookie Store API_ provides an updated method of managing cookies. It is {{Glossary("asynchronous")}} and promise-based, therefore does not block the event loop. It does not rely on {{domxref("document")}} and so is available to service workers. The methods for getting and setting cookies also provide more feedback by way of error messages. This means that web developers do not have to set then immediately read back a cookie to check that setting was successful.

## Interfaces

- {{domxref("CookieStore")}} {{Experimental_Inline}}
  - : The `CookieStore` interface enables getting and setting cookies.
- {{domxref("CookieStoreManager")}} {{Experimental_Inline}}
  - : The `CookieStoreManager` interface provides a service worker registration to enable service workers to subscribe to cookie change events.
- {{domxref("CookieChangeEvent")}} {{Experimental_Inline}}
  - : A `CookieChangeEvent` named `change` is dispatched against `CookieStore` objects in {{domxref("Window")}} contexts when any script-visible cookies changes occur.
- {{domxref("ExtendableCookieChangeEvent")}}
  - : An `ExtendableCookieChangeEvent` named `cookiechange` is dispatched in {{domxref("ServiceWorkerGlobalScope")}} contexts when any script-visible cookie changes occur that match the service worker's cookie change subscription list.

### Extensions to other interfaces

- {{domxref("ServiceWorkerGlobalScope.cookieStore")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a reference to the {{domxref("CookieStore")}} object associated with the service worker.
- {{domxref("ServiceWorkerRegistration.cookies")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a reference to the {{domxref("CookieStoreManager")}} interface, which enables a web app to subscribe to and unsubscribe from cookie change events.
- {{domxref("Window.cookieStore")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns a reference to the {{domxref("CookieStore")}} object for the current document context.
- {{domxref("ServiceWorkerGlobalScope/cookiechange_event", "cookiechange")}} event {{Experimental_Inline}}
  - : Fired when any cookie changes have occurred which match the service worker's cookie change subscription list.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Service Worker API](/en-US/docs/Web/API/Service_Worker_API)
