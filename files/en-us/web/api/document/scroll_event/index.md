---
title: 'Document: scroll event'
slug: Web/API/Document/scroll_event
page-type: web-api-event
tags:
  - API
  - DOM
  - Document
  - Event
  - Reference
  - Scroll
  - UIEvent
browser-compat: api.Document.scroll_event
---
{{APIRef}}

The **`scroll`** event fires when the document view has been scrolled. For element scrolling, see {{domxref("Element/scroll_event", "Element:&nbsp;scroll&nbsp;event")}}.

> **Note:** In iOS UIWebViews, `scroll` events are not fired while scrolling is taking place; they are only fired after the scrolling has completed. See [Bootstrap issue #16202](https://github.com/twbs/bootstrap/issues/16202). Safari and WKWebViews are not affected by this bug.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('scroll', (event) => {});

onscroll = (event) => { };
```

## Event type

A generic {{domxref("Event")}}.

## Examples

### Scroll event throttling

Since `scroll` events can fire at a high rate, the event handler shouldn't execute computationally expensive operations such as DOM modifications. Instead, it is recommended to throttle the event using {{DOMxRef("Window.requestAnimationFrame()", "requestAnimationFrame()")}}, {{DOMxRef("setTimeout()")}}, or a {{DOMxRef("CustomEvent")}}, as follows.

Note, however, that input events and animation frames are fired at about the same rate, and therefore the optimization below is often unnecessary. This example optimizes the `scroll` event for `requestAnimationFrame`.

<!--Reference: http://www.html5rocks.com/en/tutorials/speed/animations/ no longer exists. -->

```js
let lastKnownScrollPosition = 0;
let ticking = false;

function doSomething(scrollPos) {
  // Do something with the scroll position
}

document.addEventListener('scroll', (e) => {
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

See more, similar examples on the [`resize`](/en-US/docs/Web/API/Window/resize_event) event page.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Element: `scroll` event](/en-US/docs/Web/API/Element/scroll_event)
