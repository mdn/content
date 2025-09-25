---
title: "Document: scroll event"
short-title: scroll
slug: Web/API/Document/scroll_event
page-type: web-api-event
browser-compat: api.Document.scroll_event
---

{{APIRef("DOM")}}

The **`scroll`** event fires when the document view has been scrolled.
To detect when scrolling has completed, see the {{domxref("Document/scrollend_event", "scrollend")}} event of `Document`.
For element scrolling, see {{domxref("Element/scroll_event", "scroll")}} event of `Element`.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js-nolint
addEventListener("scroll", (event) => { })

onscroll = (event) => { }
```

## Event type

A generic {{domxref("Event")}}.

## Examples

### Scroll event throttling

Since `scroll` events can fire at a high rate, the event handler shouldn't execute computationally expensive operations such as DOM modifications. If you notice a {{glossary("jank")}} while fast scrolling, you should consider {{glossary("throttle", "throttling")}} the event.

Note that you may see code that throttles the `scroll` event handler using {{domxref("Window.requestAnimationFrame()", "requestAnimationFrame()")}}. This is _useless_ because animation frame callbacks are fired at the same rate as `scroll` event handlers. Instead, you must measure the timeout yourself, such as by using {{domxref("Window.setTimeout", "setTimeout()")}}.

```js
let lastKnownScrollPosition = 0;
let ticking = false;

function doSomething(scrollPos) {
  // Do something with the scroll position
}

document.addEventListener("scroll", (event) => {
  lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    // Throttle the event to "do something" every 20ms
    setTimeout(() => {
      doSomething(lastKnownScrollPosition);
      ticking = false;
    }, 20);

    ticking = true;
  }
});
```

Alternatively, consider using {{domxref("IntersectionObserver")}} instead, which allows threshold-based listening.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Document: `scrollend` event](/en-US/docs/Web/API/Document/scrollend_event)
- [Element: `scroll` event](/en-US/docs/Web/API/Element/scroll_event)
- [Element: `scrollend` event](/en-US/docs/Web/API/Element/scrollend_event)
