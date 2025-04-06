---
title: fetchLater() API
slug: Web/API/fetchLater_API
page-type: web-api-overview
browser-compat: api.Window.fetchLater
---

{{DefaultAPISidebar("fetchLater API")}}

The **`fetchLater()` API** provides an interface to request a deferred fetch that can be sent after a specified period of time, or when the page is closed or navigated away from.

## Concepts and usage

Developers often have a need to send (or beacon) data back to the server, particularly at the end of a user's visit to a page, for example for analytics services. There are a number of APIs to for this: from adding 1 pixel {{HTMLElement("img")}} elements to the page, to {{domxref("XMLHttpRequest")}}, to the dedicated {{domxref("Beacon API")}}, to the {{domxref("Fetch API")}} itself.

The issue is that all of those suffer from reliability problems for end-of-visit beaconing. While the Beacon API, and the {{domxref("Request.keepalive", "keepalive")}} property of the Fetch API do send even if the document is destroyed (to the best efforts that can be made in this scenario), this only solves part of the problem.

The other, more difficult, part is to find a reliable time _when_ to send the beacon, since there is not an ideal time in a page's lifecycle to make the JavaScript call to send out the beacon:

- The {{domxref("Window.unload_event", "unload")}} and {{domxref("Window.beforeunload_event", "beforeunload")}} events are unreliable, and outright ignored by several major browsers.
- The {{domxref("Window.pagehide_event", "pagehide")}} and {{domxref("document.visibilitychange_event", "visibilitychange")}} events are more reliable, but still have issues on mobile platforms.

This means developers looking to beacon reliably need to beacon more frequently than ideal — for example beacon on each change even if they might not yet be the final value for the page. This has costs in network usage, server processing, and needing to merge or discard outdated beacons on the server. Alternatively, developers can accept some level of missing data — either by beaconing after some time cut off and miss collecting later data, or to attempt to only beacon at end of the page but accept that sometimes this will not be reliable.

The `fetchLater()` API extends the {{domxref("Fetch API")}} to allow fetch requests to be set up in advance. These deferred fetches can be aborted using an {{domxref("AbortController")}} and updated before they have been sent allowing the payload to reflect the latest data needing to be beaconed. The browser then takes care of sending the beacon when the document is page is closed or navigated away from, or after a period of time if specified. This avoids the need to send multiple beacons but still ensures a reliable beacon (within reasonable expectations such as the browser process shutting down unexpectedly during a crash).

Find out more about using the `fetchLater()` API features in [Using the fetchLater() API](/en-us/docs/Web/API/fetchLater_API/Using_fetchLater).

### Quotas

As deferred fetches are batched and sent once the tab is closed the user has no way to abort them. To avoid situations where documents abuse this bandwidth to send unlimited amounts of data over the network, the overall quota for a top level document is capped at 640 kilobytes.

Since this cap makes deferred fetch bandwidth a scarce resource which needs to be shared between multiple reporting origins (e.g., several RUM libraries) and also across subframes of multiple origins, the platform provides a reasonable default division of this quota, but also provides {{HTTPHeader("Permissions-Policy/deferred-fetch", "deferred-fetch")}} and {{HTTPHeader("Permissions-Policy/deferred-fetch-minimal", "deferred-fetch-minimal")}} permission policies to allow dividing it in a different way when desired.

See [fetchLater() quotas](/en-us/docs/Web/API/fetchLater_API/fetchLater_quotas) for more details and examples.

## fetchLater interfaces

- {{domxref("Window.fetchLater()")}}
  - : The `fetchLater()` method is used to queue a resource for sending at a later point.
- {{domxref("DeferredRequestInit")}}
  - : Represents the set of options that can be used to configure a deferred fetch request.
- {{domxref("FetchLaterResult")}}
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

- [Usingthe `fetchLater()` API](/en-US/docs/Web/API/fetchLater_API/Using_fetchLater)
- [`fetchLater()` quotas](/en-US/docs/Web/API/fetchLater_API/fetchLater_quotas)
- {{domxref("Fetch API")}}
- [HTTP](/en-US/docs/Web/HTTP)
