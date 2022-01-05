---
title: 'Document: scroll event'
slug: Web/API/Document/scroll_event
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

<table class="properties">
  <tbody>
    <tr>
      <th>Bubbles</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th>Cancelable</th>
      <td>No</td>
    </tr>
    <tr>
      <th>Interface</th>
      <td>{{DOMxRef("Event")}}</td>
    </tr>
    <tr>
      <th>Event handler property</th>
      <td>
        {{DOMxRef("GlobalEventHandlers.onscroll", "onscroll")}}
      </td>
    </tr>
  </tbody>
</table>

> **Note:** In iOS UIWebViews, `scroll` events are not fired while scrolling is taking place; they are only fired after the scrolling has completed. See [Bootstrap issue #16202](https://github.com/twbs/bootstrap/issues/16202). Safari and WKWebViews are not affected by this bug.

## Examples

### Scroll event throttling

Since `scroll` events can fire at a high rate, the event handler shouldn't execute computationally expensive operations such as DOM modifications. Instead, it is recommended to throttle the event using {{DOMxRef("Window.requestAnimationFrame()", "requestAnimationFrame()")}}, {{DOMxRef("setTimeout()")}}, or a {{DOMxRef("CustomEvent")}}, as follows.

Note, however, that input events and animation frames are fired at about the same rate, and therefore the optimization below is often unnecessary. This example optimizes the`scroll` event for `requestAnimationFrame`.

```js
// Reference: http://www.html5rocks.com/en/tutorials/speed/animations/

let lastKnownScrollPosition = 0;
let ticking = false;

function doSomething(scrollPos) {
  // Do something with the scroll position
}

document.addEventListener('scroll', function(e) {
  lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
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
