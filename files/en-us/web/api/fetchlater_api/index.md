---
title: fetchLater() API
slug: Web/API/fetchLater_API
page-type: web-api-overview
---

{{DefaultAPISidebar("fetchLater API")}}

The **`fetchLater()` API** provides an interface to request a deferred fetch that can be sent after a specified period of time, or when the document is destroyed — that is when closing the page, or navigating away.

## Concepts and usage

Developers often have a need to "beacon" data back to the server, particularly at the end of a user's visit to a page, fr example for analytics services. There are a number of APIs to for this: from adding 1 pixel {{HTMLElement("img")}} elements to the page, to {{DOMxRef("XMLHttpRequest")}}, to the dedicated {{DOMxRef("Beacon API")}}, to the {{DOMxRef("Fetch API")}} itself.

The issue is that all of those suffer from reliability problems for end-of-visit beaconing. While the Beacon API, and the {{DOMxRef("Request.keepalive", "keepalive")}} property of the Fetch API does ensure the request is sent even if the document is destroyed (to the best efforts that can be made in this scenario), this only solves part of the problem.

The other, more difficult, part is _when_ to send the beacon, since there is not an ideal time in a page's lifecycle to make the JavaScript call to send out the beacon:

- The {{DOMxRef("window.unload_event", "unload")}} and {{DOMxRef("window.beforeunload_event", "beforeunload")}} events are unreliable, and outright ignored by several major browsers.
- The {{DOMxRef("window.pagehide_event", "pagehide")}} and {{DOMxRef("document.visibilitychange_event", "visibilitychange")}} events are more reliable, but still have issues on mobile platforms.

The workarounds have been to beacon more frequently than ideal (i.e., beacon on each change) which has a cost, or to accept some level of missing data — either by beaconing after some cut off and not collecting later data, or to beacon at end of the page but accept that sometime this will fail.

The `fetchLater()` API addresses the reliability issue by extending the {{DOMxRef("Fetch API")}} to allow fetch requests to be set up in advance. The browser then takes care of sending the beacon when the document is page is closed or navigated away from, or after a period of time if specified.

Deferred fetches can also be aborted and updated before they have been sent. This allows less beacons to be sent since, without this API, developers often are forced to beacon even before the beacon data is finalized, in case they do not get an opportunity to beacon later.

### Quotas

Deferred fetches are different from normal fetches, due to the fact that they are batched and sent once the tab is closed, and at that point the user has no way to abort them. To avoid situations where documents abuse this bandwidth to send unlimited amounts of data over the network, the overall quota for a top level document is capped at 640KB.

Since this cap makes deferred fetch bandwidth a scarce resource which needs to be shared between multiple reporting origins (e.g., several RUM libraries) and also across subframes of multiple origins, the platform provides a reasonable default division of this quota, but also provides permission policies to allow dividing it in a different way when desired.

### Guide

Find out more about using the `fetchLater()` API features in [Using the fetchLater() API](/en-us/docs/Web/API/fetchLater_API/Using_fetchLater).

## fetchLater interfaces

- {{DOMxRef("Window.fetchLater()")}}
  - : The `fetchLater()` method is used to queue a resource for later sending
- {{DOMxRef("Headers")}}
  - : Represents response/request headers, allowing you to query them and take different actions depending on the results.
- {{DOMxRef("Request")}}
  - : Represents a resource request.
- {{DOMxRef("DeferredRequestInit")}}
  - : Represents the set of options that can be used to configure a deferred fetch request.
- {{DOMxRef("FetchLaterResult")}}
  - : Represents the result of requesting a deferred fetch.
- {{HTTPHeader("Permissions-Policy/deferred-fetch", "deferred-fetch")}}
  - : Represents the `deferred-fetch` [Permissions-Policy](/en-US/docs/Web/HTTP/Guides/Permissions_Policy).
- {{HTTPHeader("Permissions-Policy/deferred-fetch-minimal", "deferred-fetch-minimal")}}
  - : Represents the `deferred-fetch-minimal` [Permissions-Policy](/en-US/docs/Web/HTTP/Guides/Permissions_Policy).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using fetchLater](/en-US/docs/Web/API/fetchLater_API/Using_fetchLater)
- [HTTP](/en-US/docs/Web/HTTP)
