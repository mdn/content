---
title: fetchLater() API
slug: Web/API/fetchLater_API
page-type: web-api-overview
status:
  - experimental
browser-compat: api.Window.fetchLater
sidebar:
  - defaultapisidebar:
      - fetchLater API
---

{{SeeCompatTable}}

The **`fetchLater()` API** provides an interface to request a deferred fetch that can be sent after a specified period of time, or when the page is closed or navigated away from.

## Concepts and usage

Developers often need to send (or beacon) data back to the server, particularly at the end of a user's visit to a page — for example, for analytics services. There are several ways to do this: from adding 1 pixel {{HTMLElement("img")}} elements to the page, to {{domxref("XMLHttpRequest")}}, to the dedicated {{domxref("Beacon API", "Beacon API", "", "nocode")}}, and the {{domxref("Fetch API", "Fetch API", "", "nocode")}} itself.

The issue is that all of these methods suffer from reliability problems for end-of-visit beaconing. While the Beacon API and the {{domxref("Request.keepalive", "keepalive")}} property of the Fetch API will send data, even if the document is destroyed (to the best efforts that can be made in this scenario), this only solves part of the problem.

The other — more difficult — part to solve concerns deciding _when_ to send the data, since there is not an ideal time in a page's lifecycle to make the JavaScript call to send out the beacon:

- The {{domxref("Window.unload_event", "unload")}} and {{domxref("Window.beforeunload_event", "beforeunload")}} events are unreliable, and outright ignored by several major browsers.
- The {{domxref("Window.pagehide_event", "pagehide")}} and {{domxref("document.visibilitychange_event", "visibilitychange")}} events are more reliable, but still have issues on mobile platforms.

This means developers looking to reliably send out data via a beacon need to do so more frequently than is ideal. For example, they may send a beacon on each change, even if the final value for the page has not yet been reached. This has costs in network usage, server processing, and merging or discarding outdated beacons on the server.

Alternatively, developers can choose to accept some level of missing data — either by:

- Beaconing after a designated cut-off time and not collecting later data.
- Beaconing at the end of the page lifecycle but accepting that sometimes this will not be reliable.

The `fetchLater()` API extends the {{domxref("Fetch API", "Fetch API", "", "nocode")}} to allow setting fetch requests up in advance. These deferred fetches can be updated before they have been sent, allowing the payload to reflect the latest data to be beaconed.

The browser then sends the beacon when the tab is closed or navigated away from, or after a set time if specified. This avoids sending multiple beacons but still ensures a reliable beacon within reasonable expectations (i.e., excluding when the browser process shuts down unexpectedly during a crash).

Deferred fetches can also be aborted using an {{domxref("AbortController")}} if they are no longer required, avoiding further unnecessary costs.

### Quotas

Deferred fetches are batched and sent once the tab is closed; at this point, there is no way for the user to abort them. To avoid situations where documents abuse this bandwidth to send unlimited amounts of data over the network, the overall quota for a top-level document is capped at 640KiB.

Callers of `fetchLater()` should be defensive and catch `QuotaExceededError` errors in almost all cases, especially if they embed third-party JavaScript.

Since this cap makes deferred fetch bandwidth a scarce resource, which needs to be shared between multiple reporting origins (for example, several RUM libraries) and subframes from multiple origins, the platform provides a reasonable default division of this quota. In addition, it provides {{HTTPHeader("Permissions-Policy/deferred-fetch", "deferred-fetch")}} and {{HTTPHeader("Permissions-Policy/deferred-fetch-minimal", "deferred-fetch-minimal")}} [Permissions Policy](/en-US/docs/Web/HTTP/Guides/Permissions_Policy) directives to allow dividing it differently when desired.

See [fetchLater() quotas](/en-US/docs/Web/API/fetchLater_API/fetchLater_quotas) for more details and examples.

## Interfaces

- {{domxref("Window.fetchLater()")}}
  - : Used to queue a resource for sending at a later point.
- {{domxref("DeferredRequestInit")}}
  - : Represents the set of options that can be used to configure a deferred fetch request.
- {{domxref("FetchLaterResult")}}
  - : Represents the result of requesting a deferred fetch.

## HTTP headers

- {{HTTPHeader("Permissions-Policy/deferred-fetch", "deferred-fetch")}}
  - : Controls [top-level quota](/en-US/docs/Web/API/fetchLater_API/fetchLater_quotas) for the `fetchLater()` API.
- {{HTTPHeader("Permissions-Policy/deferred-fetch-minimal", "deferred-fetch-minimal")}}
  - : Controls [shared cross-origin subframe quota](/en-US/docs/Web/API/fetchLater_API/fetchLater_quotas) for the `fetchLater()` API.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`fetchLater()` quotas](/en-US/docs/Web/API/fetchLater_API/fetchLater_quotas)
- [Fetch API](/en-US/docs/Web/API/Fetch_API)
