---
title: 'Window: unload event'
slug: Web/API/Window/unload_event
tags:
  - Event
  - Reference
  - Window
  - events
browser-compat: api.Window.unload_event
---
{{APIRef}}

> **Warning:** Developers should avoid using this event. See "Usage notes" below.

The **`unload`** event is fired when the document or a child resource is being unloaded.

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
      <td>{{domxref("Event")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler property</th>
      <td>
        {{domxref("WindowEventHandlers/onunload", "onunload")}}
      </td>
    </tr>
  </tbody>
</table>

It is fired after:

- {{domxref("Window/beforeunload_event", "beforeunload")}} (cancelable event)
- {{domxref("Window/pagehide_event", "pagehide")}}

The document is in the following state:

- All the resources still exist (img, iframe etc.)
- Nothing is visible anymore to the end user
- UI interactions are ineffective ({{domxref("window.open")}}, {{domxref("window.alert", "alert")}}, {{domxref("window.confirm", "confirm")}}, etc.)
- An error won't stop the unloading workflow

Please note that the unload event also follows the document tree: parent frame unload will happen **before** child frame `unload` (see example below).

## Usage notes

Developers should avoid using this event.

Especially on mobile, the `unload` event is not reliably fired. For example, the `unload` event is not fired at all in the following scenario:

1.  A mobile user visits your page.
2.  The user then switches to a different app.
3.  Later, the user closes the browser from the app manager.

Also, the `unload` event is not compatible with the [back/forward cache](https://web.dev/bfcache/) (bfcache), because many pages using this event assume that the page will not continue to exist after the event is fired. To combat this, some browsers (such as Firefox) will not place pages in the bfcache if they have unload listeners, and this is bad for performance. Others, such as Chrome, will not fire the `unload` when a user navigates away.

The best event to use to signal the end of a user's session is the [`visibilitychange`](/en-US/docs/Web/API/Document/visibilitychange_event) event. In browsers that don't support `visibilitychange` the next-best alternative is the [`pagehide`](/en-US/docs/Web/API/Window/pagehide_event) event, which is also not fired reliably, but which is bfcache-compatible.

If you're specifically trying to detect page unload events, it's best to listen for the `pagehide` event.

See the [Page Lifecycle API](https://developers.google.com/web/updates/2018/07/page-lifecycle-api#the-unload-event) guide for more information about the problems associated with the `unload` event.

## Examples

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Parent Frame</title>
    <script>
      window.addEventListener('beforeunload', function(event) {
        console.log('I am the 1st one.');
      });
      window.addEventListener('unload', function(event) {
        console.log('I am the 3rd one.');
      });
    </script>
  </head>
  <body>
    <iframe src="child-frame.html"></iframe>
  </body>
</html>
```

Below, the content of `child-frame.html`:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Child Frame</title>
    <script>
      window.addEventListener('beforeunload', function(event) {
        console.log('I am the 2nd one.');
      });
      window.addEventListener('unload', function(event) {
        console.log('I am the 4th and last one…');
      });
    </script>
  </head>
  <body>
      ☻
  </body>
</html>
```

When the parent frame is unloaded, events will be fired in the order described by the `console.log()` messages.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Related events: {{domxref("Window/DOMContentLoaded_event", "DOMContentLoaded")}}, {{domxref("Document/readystatechange_event", "readystatechange")}}, {{domxref("Window/load_event", "load")}}
- [Unloading Documents — unload a document](https://html.spec.whatwg.org/multipage/browsers.html#unloading-documents)
- The [`visibilitychange`](/en-US/docs/Web/API/Document/visibilitychange_event) event.
- [Don't
  lose user and app state, use Page Visibility](https://www.igvita.com/2015/11/20/dont-lose-user-and-app-state-use-page-visibility/) explains in
  detail why you should use `visibilitychange`, not
  `beforeunload`/`unload`.
- [Page
  Lifecycle API](https://developers.google.com/web/updates/2018/07/page-lifecycle-api#developer-recommendations-for-each-state) gives best-practices guidance on handling
  page lifecyle behavior in your web applications.
- [PageLifecycle.js](https://github.com/GoogleChromeLabs/page-lifecycle): a JavaScript library that deals with cross-browser inconsistencies in page lifecyle behavior.
- [Back/forward cache](https://web.dev/bfcache/) explains what the back/forward cache is, and its implications for various page lifecycle events.
