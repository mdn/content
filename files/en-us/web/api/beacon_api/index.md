---
title: Beacon API
slug: Web/API/Beacon_API
page-type: web-api-overview
tags:
  - Guide
  - Overview
  - Web Performance
browser-compat: api.Navigator.sendBeacon
---
{{DefaultAPISidebar("Beacon")}}

The **`Beacon`** API is used to send an asynchronous and non-blocking request to a web server. The request does not expect a response. Unlike requests made using {{domxref("XMLHttpRequest")}} or the [Fetch API](/en-US/docs/Web/API/Fetch_API), the browser guarantees to initiate beacon requests before the page is unloaded and to run them to completion.

The main use case for the Beacon API is to send analytics such as client-side events or session data to the server. Historically, websites have used {{domxref("XMLHttpRequest")}} for this, but browsers do not guarantee to send these asynchronous requests in some circumstances (for example, if the page is about to be unloaded). To combat this, websites have resorted to various techniques, such as making the request synchronous, that have a bad effect on responsiveness. Because beacon requests are both asynchronous and guaranteed to be sent, they combine good performance characteristics and reliability.

For more details about the motivation for and usage of this API, see the documentation for the {{domxref("navigator.sendBeacon()")}} method.

> **Note:** This API is _not available_ in [Web Workers](/en-US/docs/Web/API/Web_Workers_API) (not exposed via {{domxref("WorkerNavigator")}}).

## Interfaces

This API defines a single method: {{domxref("navigator.sendBeacon()")}}.

The method takes two arguments, the URL and the data to send in the request. The data argument is optional and its type may be a {{jsxref("TypedArray")}}, a {{jsxref("DataView")}}, a {{domxref("Blob")}}, a string literal or object, or a {{domxref("FormData")}} object. If the browser successfully queues the request for delivery, the method returns "`true`"; otherwise, it returns "`false`".

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Beacon standard](https://w3c.github.io/beacon/)
- [Beacon CanIUse data](https://caniuse.com/#search=beacon)
- [Intercepting beacons through service workers](https://ehsanakhgari.org/blog/2015-04-08/intercepting-beacons-through-service-workers/); Ehsan Akhgari; 2015-Apr-08
- <https://webkit.org/blog/8821/link-click-analytics-and-privacy/>
- [Beaconing in Practice](https://calendar.perfplanet.com/2020/beaconing-in-practice/)
