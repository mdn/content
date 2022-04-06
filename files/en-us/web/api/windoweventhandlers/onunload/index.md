---
title: WindowEventHandlers.onunload
slug: Web/API/WindowEventHandlers/onunload
tags:
  - API
  - Event Handler
  - MakeBrowserAgnostic
  - Property
  - Reference
  - WindowEventHandlers
browser-compat: api.WindowEventHandlers.onunload
---
{{APIRef("HTML DOM")}}

The **`onunload`** property of the
{{domxref("WindowEventHandlers")}} mixin is the [event handler](/en-US/docs/Web/Events/Event_handlers) for
processing {{Event("unload")}} events. These events fire when the window is unloading
its content and resources. The resource removal is processed _after_ the
`unload` event occurs.

> **Note:** Browsers equipped with pop-up blockers will ignore all
> {{domxref("Window.open()")}} method calls in `onunload` event handler
> functions.

> **Warning:** The `onunload` (and the
> [`unload`](/en-US/docs/Web/API/Window/unload_event) event
> itself) are not the right features to use with
> [`sendBeacon()`](/en-US/docs/Web/API/Navigator/sendBeacon).
> Instead for
> `sendBeacon(),` use
> the
> [`visibilitychange`](/en-US/docs/Web/API/Document/visibilitychange_event) and
> [`pagehide`](/en-US/docs/Web/API/Window/pagehide_event) events.
> See discussion comments in the blog post [Beacon API is
> broken](https://volument.com/blog/sendbeacon-is-broken#comments).

## Value

An [event handler](/en-US/docs/Web/Events/Event_handlers).

Typically, it is better to use {{domxref("EventTarget.addEventListener",
  "window.addEventListener()")}} and the {{event("unload")}} event, instead of
`onunload`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

In Firefox 1.5, using this event handler in your page prevents the browser from caching
the page in the in-memory bfcache. See [Using Firefox 1.5
caching](/en-US/Firefox/Releases/1.5/Using_Firefox_1.5_caching) for details.
