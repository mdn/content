---
title: Fetch Later API
slug: Web/API/Fetch_Later_API
page-type: web-api-overview
browser-compat: api.fetchlater
---

{{DefaultAPISidebar("Fetch Later API")}}

The Fetch Later API provides an interface to request a deferred fetch that can be sent after a specified period of time, or when the document is destroyed.

## Concepts and usage

Developers often have a need to "beacon" data back to the server, particularly at the end of a user's visit to a page. For example for analytics services. There are a number of APIs to for this from adding 1 pixel {{HTMLElement("img")}} elements to the page, to the original {{DOMxRef("XMLHttpRequest")}}, to the dedicated {{DOMxRef("Beacon API")}}, to the {{DOMxRef("Fetch API")}} itself.

The issue is that all of those suffer from reliability problems for end-of-visit beaconing. While the Beacon API, and the {{DOMxRef("Request.keepalive", "keepalive")}} property of the Fetch API does ensure the request is sent even if the document is destroyed (to the best efforts that can be made in this scenario), this only solves part of the problem.

The other part is when to send the beacon, since there is not an ideal time in a page's lifecycle to make the JavaScript call to send out the beacon:

- The {{DOMxRef("window.unload_event", "unload")}} and {{DOMxRef("window.beforeunload_event", "beforeunload")}} events are unreliable, and outright ignored by several major browsers.
- The {{DOMxRef("window.pagehide_event", "pagehide")}} and {{DOMxRef("document.visibilitychange_event", "visibilitychange")}} events have issues on mobile platforms.

The workarounds have been to beacon more frequently than ideal, and to accept some level of missing data.

The Fetch Later API addresses the reliability issue by extending the {{DOMxRef("Fetch API")}} to allow fetch requests to be set up in advance. The browser then takes care of sending them when the document is page is closed or navigated away from (or after a period of time if specified).

Deferred fetches can also be aborted and updated before they have been sent. This allows less beacons to be sent since, without this API, developers often are forced to beacon even before the beacon data is finalized, in case they do not get an opportunity to beacon later.

## Fetch Later interfaces

- {{DOMxRef("Window.fetchLater()")}}
  - : The `fetchLater()` method used to queue a resource for later sending
- {{DOMxRef("Headers")}}
  - : Represents response/request headers, allowing you to query them and take different actions depending on the results.
- {{DOMxRef("Request")}}
  - : Represents a resource request.
- {{DOMxRef("FetchLaterResult")}}
  - : Represents the result of requesting a deferred fetch.
- {{DOMxRef("deferred-fetch")}}
  - : Represents the {{HTTPHeader("Permissions-Policy/deferred-fetch", "deferred-fetch")}} [Permissions-Policy](/en-US/docs/Web/HTTP/Permissions_Policy).
- {{DOMxRef("deferred-fetch-minimal")}}
  - : Represents the {{HTTPHeader("Permissions-Policy/deferred-fetch-minimal", "deferred-fetch-minimal")}} [Permissions-Policy](/en-US/docs/Web/HTTP/Permissions_Policy).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using Fetch Later](/en-US/docs/Web/API/Fetch_API/Using_FetchLater)
- [Service Worker API](/en-US/docs/Web/API/Service_Worker_API)
- [HTTP access control (CORS)](/en-US/docs/Web/HTTP/CORS)
- [HTTP](/en-US/docs/Web/HTTP)
