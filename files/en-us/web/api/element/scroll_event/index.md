---
title: "Element: scroll event"
short-title: scroll
slug: Web/API/Element/scroll_event
page-type: web-api-event
browser-compat: api.Element.scroll_event
---

{{APIRef}}

The **`scroll`** event fires when an element has been scrolled.
To detect when scrolling has completed, see the {{domxref("Element/scrollend_event", "Element: scrollend event")}}.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("scroll", (event) => {});

onscroll = (event) => {};
```

## Event type

A generic {{domxref("Event")}}.

## Examples

The following examples show how to use the `scroll` event with an event listener and with the `onscroll` event handler property.
The {{DOMxRef("setTimeout()")}} method is used to throttle the event handler because `scroll` events can fire at a high rate.
For additional examples that use {{DOMxRef("Window.requestAnimationFrame()", "requestAnimationFrame()")}}, see the {{domxref("Document/scroll_event", "Document: scroll event")}} page.

### Using `scroll` with an event listener

The following example shows how to use the `scroll` event to detect when the user is scrolling inside an element:

```html
<div
  id="scroll-box"
  style="overflow: scroll; height: 100px; width: 100px; float: left;">
  <p style="height: 200px; width: 200px;">Scroll me!</p>
</div>
<p style="text-align: center;" id="output">Waiting on scroll events...</p>
```

```js
const element = document.querySelector("div#scroll-box");
const output = document.querySelector("p#output");

element.addEventListener("scroll", (event) => {
  output.textContent = "Scroll event fired!";
  setTimeout(() => {
    output.textContent = "Waiting on scroll events...";
  }, 1000);
});
```

{{EmbedLiveSample("Using_scroll_with_an_event_listener", "100%", 120)}}

### Using `onscroll` event handler property

The following example shows how to use the `onscroll` event handler property to detect when the user is scrolling:

```html
<div
  id="scroll-box"
  style="overflow: scroll; height: 100px; width: 100px; float: left;">
  <p style="height: 200px; width: 200px;">Scroll me!</p>
</div>
<p id="output" style="text-align: center;">Waiting on scroll events...</p>
```

```js
const element = document.querySelector("div#scroll-box");
const output = document.querySelector("p#output");

element.onscroll = (event) => {
  output.textContent = "Element scroll event fired!";
  setTimeout(() => {
    output.textContent = "Waiting on scroll events...";
  }, 1000);
};
```

{{EmbedLiveSample("Using_onscroll_event_handler_property", "100%", 120)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Element `scrollend` event](/en-US/docs/Web/API/Element/scrollend_event)
- [Document `scroll` event](/en-US/docs/Web/API/Document/scroll_event)
- [Document `scrollend` event](/en-US/docs/Web/API/Document/scrollend_event)
