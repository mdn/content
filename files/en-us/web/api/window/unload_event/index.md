---
title: "Window: unload event"
short-title: unload
slug: Web/API/Window/unload_event
page-type: web-api-event
browser-compat: api.Window.unload_event
---

{{APIRef("UI Events")}}

> [!WARNING]
> Developers should avoid using this event. See "Usage notes" below.

The **`unload`** event is fired when the document or a child resource is being unloaded.

It is fired after:

- {{domxref("Window/beforeunload_event", "beforeunload")}} (cancelable event)
- {{domxref("Window/pagehide_event", "pagehide")}}

The document is in the following state:

- All the resources still exist (img, iframe etc.)
- Nothing is visible anymore to the end user
- UI interactions are ineffective ({{domxref("window.open")}}, {{domxref("window.alert", "alert")}}, {{domxref("window.confirm", "confirm")}}, etc.)
- An error won't stop the unloading workflow

Please note that the unload event also follows the document tree: parent frame unload will happen **before** child frame `unload` (see example below).

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js-nolint
addEventListener("unload", (event) => { })

onunload = (event) => { }
```

## Event type

A generic {{domxref("Event")}}.

## Event handler aliases

In addition to the `Window` interface, the event handler property `onunload` is also available on the following targets:

- {{domxref("HTMLBodyElement")}}
- {{domxref("HTMLFrameSetElement")}}
- {{domxref("SVGSVGElement")}}

## Usage notes

Developers should avoid using this event.

Especially on mobile, the `unload` event is not reliably fired. For example, the `unload` event is not fired at all in the following scenario:

1. A mobile user visits your page.
2. The user then switches to a different app.
3. Later, the user closes the browser from the app manager.

Also, the `unload` event is not compatible with the [back/forward cache](https://web.dev/articles/bfcache) (bfcache), because many pages using this event assume that the page will not continue to exist after the event is fired. To combat this, some browsers (such as Firefox) will not place pages in the bfcache if they have unload listeners, and this is bad for performance.

For these reasons, Chrome has [stopped firing `unload` events by default](https://developer.chrome.com/docs/web-platform/deprecating-unload). A page that still depends on `unload` can opt back in using the `unload` directive of the {{HTTPHeader("Permissions-Policy")}} header.

```http
Permissions-Policy: unload=*
```

Conversely, a page can stop `unload` listeners from running, including those added by third-party scripts, so that it remains eligible for the bfcache:

```http
Permissions-Policy: unload=()
```

Instead of `unload`, use the following events, both of which are compatible with the bfcache:

- The [`visibilitychange`](/en-US/docs/Web/API/Document/visibilitychange_event) event, when {{domxref("Document.visibilityState")}} becomes `"hidden"`. This is the last event that is reliably fired, so it is the best place to save application state or send analytics data. Note that it also fires when the user switches to another tab, not only when they leave or close the page.
- The [`pagehide`](/en-US/docs/Web/API/Window/pagehide_event) event, if you're specifically trying to detect that the user is navigating away from the page. However, like `unload`, it is not reliably fired, especially on mobile, so prefer `visibilitychange` where possible.

For example, instead of sending data in an `unload` listener:

```js example-bad
window.addEventListener("unload", () => {
  navigator.sendBeacon("/log", analyticsData);
});
```

Send it when the page becomes hidden:

```js example-good
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") {
    navigator.sendBeacon("/log", analyticsData);
  }
});
```

See the [Page Lifecycle API](https://developer.chrome.com/docs/web-platform/page-lifecycle-api#the-unload-event) guide for more information about the problems associated with the `unload` event.

## Examples

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8" />
    <title>Parent Frame</title>
    <script>
      window.addEventListener("beforeunload", (event) => {
        console.log("I am the 1st one.");
      });
      window.addEventListener("unload", (event) => {
        console.log("I am the 3rd one.");
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
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8" />
    <title>Child Frame</title>
    <script>
      window.addEventListener("beforeunload", (event) => {
        console.log("I am the 2nd one.");
      });
      window.addEventListener("unload", (event) => {
        console.log("I am the 4th and last one…");
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

- Related events: {{domxref("Document/DOMContentLoaded_event", "DOMContentLoaded")}}, {{domxref("Document/readystatechange_event", "readystatechange")}}, {{domxref("Window/load_event", "load")}}
- [Unloading Documents — unload a document](https://html.spec.whatwg.org/multipage/browsers.html#unloading-documents)
- The [`visibilitychange`](/en-US/docs/Web/API/Document/visibilitychange_event) event.
- [Don't lose user and app state, use Page Visibility](https://www.igvita.com/2015/11/20/dont-lose-user-and-app-state-use-page-visibility/) explains in
  detail why you should use `visibilitychange`, not
  `beforeunload`/`unload`.
- [Page Lifecycle API](https://developer.chrome.com/docs/web-platform/page-lifecycle-api#developer-recommendations-for-each-state) gives best-practices guidance on handling
  page lifecycle behavior in your web applications.
- [PageLifecycle.js](https://github.com/GoogleChromeLabs/page-lifecycle): a JavaScript library that deals with cross-browser inconsistencies in page lifecycle behavior.
- [Back/forward cache](https://web.dev/articles/bfcache) explains what the back/forward cache is, and its implications for various page lifecycle events.
