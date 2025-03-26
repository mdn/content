---
title: "Document: scroll event"
short-title: scroll
slug: Web/API/Document/scroll_event
page-type: web-api-event
browser-compat: api.Document.scroll_event
---

{{APIRef}}

The **`scroll`** event fires when the document view has been scrolled.
To detect when scrolling has completed, see the {{domxref("Document/scrollend_event", "scrollend")}} event of `Document`.
For element scrolling, see {{domxref("Element/scroll_event", "scroll")}} event of `Element`.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("scroll", (event) => {});

onscroll = (event) => {};
```

## Event type

A generic {{domxref("Event")}}.

## Examples

### Scroll event throttling

Since `scroll` events can fire at a high rate, the event handler shouldn't execute computationally expensive operations such as DOM modifications. Instead, it is recommended to {{glossary("throttle")}} the event using {{DOMxRef("Window.requestAnimationFrame()", "requestAnimationFrame()")}}, {{DOMxRef("Window.setTimeout", "setTimeout()")}}, or a {{DOMxRef("CustomEvent")}}, as follows.

Note, however, that input events and animation frames are fired at about the same rate, and therefore the optimization below is often unnecessary. This example optimizes the `scroll` event for `requestAnimationFrame`.

```js
let lastKnownScrollPosition = 0;
let ticking = false;

function doSomething(scrollPos) {
  // Do something with the scroll position
}

document.addEventListener("scroll", (event) => {
  lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(() => {
      doSomething(lastKnownScrollPosition);
      ticking = false;
    });

    ticking = true;
  }
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Document: `scrollend` event](/en-US/docs/Web/API/Document/scrollend_event)
- [Element: `scroll` event](/en-US/docs/Web/API/Element/scroll_event)
- [Element: `scrollend` event](/en-US/docs/Web/API/Element/scrollend_event)
