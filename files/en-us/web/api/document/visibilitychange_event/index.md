---
title: "Document: visibilitychange event"
short-title: visibilitychange
slug: Web/API/Document/visibilitychange_event
page-type: web-api-event
browser-compat: api.Document.visibilitychange_event
---

{{APIRef}}

The `visibilitychange` event is fired at the document when the contents of its tab have become visible or have been hidden.

The event is not cancelable.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("visibilitychange", (event) => {});

onvisibilitychange = (event) => {};
```

## Event type

A generic {{domxref("Event")}}.

## Usage notes

The event doesn't include the document's updated visibility status, but you can get that information from the document's {{domxref("Document.visibilityState", "visibilityState")}} property.

This event fires with a `visibilityState` of `hidden` when a user navigates to a new page, switches tabs, closes the tab, minimizes or closes the browser, or, on mobile, switches from the browser to a different app. Transitioning to `hidden` is the last event that's reliably observable by the page, so developers should treat it as the likely end of the user's session (for example, for [sending analytics data](/en-US/docs/Web/API/Navigator/sendBeacon)).

The transition to `hidden` is also a good point at which pages can stop making UI updates and stop any tasks that the user doesn't want to have running in the background.

## Examples

### Pausing music on transitioning to hidden

This example begins playing a music track when the document becomes visible, and pauses the music when the document is no longer visible.

```js
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") {
    backgroundMusic.play();
  } else {
    backgroundMusic.pause();
  }
});
```

### Sending end-of-session analytics on transitioning to hidden

This example treats the transition to `hidden` as the end of the user's session, and sends the appropriate analytics using the {{domxref("Navigator.sendBeacon()")}}
API:

```js
document.onvisibilitychange = () => {
  if (document.visibilityState === "hidden") {
    navigator.sendBeacon("/log", analyticsData);
  }
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Page Visibility API](/en-US/docs/Web/API/Page_Visibility_API)
- {{domxref("Document.visibilityState")}}
- [Don't lose user and app state, use Page Visibility](https://www.igvita.com/2015/11/20/dont-lose-user-and-app-state-use-page-visibility/) explains in detail why you should use `visibilitychange`, not `beforeunload`/`unload`.
- [Page Lifecycle API](https://developer.chrome.com/blog/page-lifecycle-api/) gives best-practices guidance on handling page lifecycle behavior in your web applications.
