---
title: "Navigator: sendBeacon() method"
short-title: sendBeacon()
slug: Web/API/Navigator/sendBeacon
page-type: web-api-instance-method
browser-compat: api.Navigator.sendBeacon
---

{{APIRef("HTML DOM")}}

The **`navigator.sendBeacon()`**
method {{glossary("Asynchronous", "asynchronously")}} sends an [HTTP POST](/en-US/docs/Web/HTTP/Methods/POST) request containing a small amount of data to a web server.

It's intended to be used for
sending analytics data to a web server, and avoids some of the problems with
legacy techniques for sending analytics, such as the use of
{{domxref("XMLHttpRequest","XMLHttpRequest")}}.

> **Note:** For use cases that need the ability to send requests with methods other than `POST`, or to change any request properties, or that need access to the server response, instead use the [`fetch()`](/en-US/docs/Web/API/Window/fetch) method with [`keepalive`](/en-US/docs/Web/API/RequestInit#keepalive) set to true.

## Syntax

```js-nolint
sendBeacon(url)
sendBeacon(url, data)
```

### Parameters

- `url`
  - : The URL that will receive the _data_. Can be relative or absolute.
- `data` {{Optional_inline}}
  - : An {{jsxref("ArrayBuffer")}}, a {{jsxref("TypedArray")}}, a {{jsxref("DataView")}}, a {{domxref("Blob")}},
    a string literal or object, a {{domxref("FormData")}} or a {{domxref("URLSearchParams")}}
    object containing the data to send.

### Return values

The **`sendBeacon()`** method returns `true` if the
{{glossary("user agent")}} successfully queued the `data` for transfer.
Otherwise, it returns `false`.

## Description

This method is intended for analytics and diagnostics code to send data to a server.

A problem with sending analytics is that a site often wants to send analytics
when the user has finished with a page: for example, when the user navigates
to another page. In this situation the browser may be about to unload the page,
and in that case the browser may choose not to send asynchronous
{{domxref("XMLHttpRequest")}} requests.

In the past, web pages have tried to delay page unload long enough to send data. To do this they have
used workarounds such as:

- Submitting the data with a blocking synchronous `XMLHttpRequest` call.
- Creating an {{HTMLElement("img")}} element and setting its `src`. Most user agents will delay the unload to load the image.
- Creating a no-op loop for several seconds.

All these methods block unloading the document, which slows down navigation to the next page.
There's nothing the next page can do to avoid this, so the new page seems
slow, even though it's the fault of the previous page.

With the `sendBeacon()` method, the data is transmitted asynchronously when the user
agent has an opportunity to do so, without delaying unload or the next navigation.
This means:

- The data is sent reliably
- It's sent asynchronously
- It doesn't impact the loading of the next page

The data is sent as an [HTTP POST](/en-US/docs/Web/HTTP/Methods/POST) request.

### Sending analytics at the end of a session

Websites often want to send analytics or diagnostics to the server when the user has finished with the page.
The most reliable way to do this is to send the data on the [`visibilitychange`](/en-US/docs/Web/API/Document/visibilitychange_event) event:

```js
document.addEventListener("visibilitychange", function logData() {
  if (document.visibilityState === "hidden") {
    navigator.sendBeacon("/log", analyticsData);
  }
});
```

#### Avoid unload and beforeunload

In the past, many websites have used the [`unload`](/en-US/docs/Web/API/Window/unload_event)
or [`beforeunload`](/en-US/docs/Web/API/Window/beforeunload_event) events to send analytics at the end of a session.
However, this is extremely unreliable. In many situations, especially on mobile, the browser will not fire the
`unload`, `beforeunload`, or `pagehide` events. For example, these events will not fire in the following situation:

1. The user loads the page and interacts with it.
2. When they are finished, they switch to a different app, instead of closing the tab.
3. Later, they close the browser app using the phone's app manager.

Additionally, the `unload` event is incompatible with the back/forward cache ([bfcache](https://web.dev/articles/bfcache))
implemented in modern browsers. Some browsers, such as Firefox, handle this incompatibility by excluding pages from the bfcache if they contain unload handlers,
thus hurting performance. Others, such as Safari and Chrome on Android, handle it by not firing the `unload` event when the user navigates to another page in the same tab.

Firefox will also exclude pages from the bfcache if they contain `beforeunload` handlers.

#### Use pagehide as a fallback

To support browsers which don't implement `visibilitychange`, use the [`pagehide`](/en-US/docs/Web/API/Window/pagehide_event) event.
Like `beforeunload` and `unload`, this event is not reliably fired, especially on mobile. However, it is compatible with the bfcache.

## Examples

The following example specifies a handler for the {{domxref("document.visibilitychange_event", "visibilitychange")}} event. The handler calls `sendBeacon()` to send analytics.

```js
document.addEventListener("visibilitychange", function logData() {
  if (document.visibilityState === "hidden") {
    navigator.sendBeacon("/log", analyticsData);
  }
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [`visibilitychange`](/en-US/docs/Web/API/Document/visibilitychange_event) event.
- {{domxref("Beacon_API","Beacon API", "", "true")}} overview page.
- [Don't lose user and app state, use Page Visibility](https://www.igvita.com/2015/11/20/dont-lose-user-and-app-state-use-page-visibility/) explains in
  detail why you should use `visibilitychange`, not
  `beforeunload`/`unload`.
- [Page Lifecycle API](https://developer.chrome.com/blog/page-lifecycle-api/#developer-recommendations-for-each-state) gives best-practices guidance on handling
  page lifecycle behavior in your web applications.
- [PageLifecycle.js](https://github.com/GoogleChromeLabs/page-lifecycle): a JavaScript library that deals with cross-browser inconsistencies in page lifecycle behavior.
- [Back/forward cache](https://web.dev/articles/bfcache) explains what the back/forward cache is, and its implications for various page lifecycle events.
