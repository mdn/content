---
title: 'Window: pagehide event'
slug: Web/API/Window/pagehide_event
tags:
  - API
  - Event
  - History
  - Navigation
  - Reference
  - Window
  - pagehide
browser-compat: api.Window.pagehide_event
---
{{APIRef("HTML DOM")}}

The **`pagehide`** event is sent to a {{domxref("Window")}} when the browser hides the current page in the process of presenting a different page from the session's history.

For example, when the user clicks the browser's Back button, the current page receives a `pagehide` event before the previous page is shown.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Bubbles</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Cancelable</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Interface</th>
      <td>{{domxref("PageTransitionEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler property</th>
      <td>{{domxref("Window.onpagehide", "onpagehide")}}</td>
    </tr>
  </tbody>
</table>

## Usage notes

Like the [`unload`](/en-US/docs/Web/API/Window/unload_event)
and [`beforeunload`](/en-US/docs/Web/API/Window/beforeunload_event) events, this event is not reliably fired by browsers, especially on mobile. For example, the `pagehide` event is not fired at all in the following scenario:

1.  A mobile user visits your page.
2.  The user then switches to a different app.
3.  Later, the user closes the browser from the app manager.

However, unlike the `unload` and `beforeunload` events, this event is compatible with the [back/forward cache](https://web.dev/bfcache/) (bfcache), so adding a listener to this event will not prevent the page
from being included in the bfcache.

The best event to use to signal the end of a user's session is the [`visibilitychange`](/en-US/docs/Web/API/Document/visibilitychange_event) event. In browsers that don't support `visibilitychange` the `pagehide` event is the next-best alternative.

If you're specifically trying to detect page unload events, the `pagehide` event is the best option.

See the [Page Lifecycle API](https://developers.google.com/web/updates/2018/07/page-lifecycle-api) guide for more information about how this event relates to other events in the page lifecycle.

## Examples

In this example, an event handler is established to watch for `pagehide` events and to perform special handling if the page is being persisted for possible reuse.

```js
window.addEventListener("pagehide", event => {
  if (event.persisted) {
    /* the page isn't being discarded, so it can be reused later */
  }
}, false);
```

This can also be written using the {{domxref("Window.onpagehide", "onpagehide")}} event handler property on the {{domxref("Window")}}:

```js
window.onpagehide = event => {
  if (event.persisted) {
    /* the page isn't being discarded, so it can be reused later */
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("Window.pageshow_event", "pageshow")}} event.
- [Page Lifecycle API](https://developers.google.com/web/updates/2018/07/page-lifecycle-api#developer-recommendations-for-each-state) gives best-practices guidance on handling page lifecyle behavior in your web applications.
- [PageLifecycle.js](https://github.com/GoogleChromeLabs/page-lifecycle): a JavaScript library that deals with cross-browser inconsistencies in page lifecyle behavior.
- [Back/forward cache](https://web.dev/bfcache/) explains what the back/forward cache is, and its implications for various page lifecycle events.
