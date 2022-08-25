---
title: 'Element: scroll event'
slug: Web/API/Element/scroll_event
page-type: web-api-event
tags:
  - API
  - Element
  - Event
  - Reference
  - Scroll
browser-compat: api.Element.scroll_event
---
{{APIRef}}

The **`scroll`** event fires when an element has been scrolled.

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
let last_known_scroll_position = 0;
let ticking = false;

function doSomething(scroll_pos) {
  // Do something with the scroll position
}

window.addEventListener('scroll', (e) => {
  last_known_scroll_position = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(() => {
      doSomething(last_known_scroll_position);
      ticking = false;
    });

    ticking = true;
  }
});
```

> **Note:** You can find more examples on the {{domxref("Window/resize_event", "resize")}} event page.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Document: {{domxref("Document/scroll_event", "scroll")}} event
