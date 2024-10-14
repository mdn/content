---
title: "Window: scrollsnapchanging event"
short-title: scrollsnapchanging
slug: Web/API/Window/scrollsnapchanging_event
page-type: web-api-event
status:
  - experimental
browser-compat: api.Window.scrollsnapchanging_event
---

{{APIRef}}{{SeeCompatTable}}

The **`scrollsnapchanging`** event of the {{domxref("Window")}} interface is fired on the `window` when the browser determines a new scroll snap target is pending, i.e. it will be selected when the current scroll gesture ends.

This event works in much the same way as the {{domxref("Element")}} interface's [`scrollsnapchanging`](/en-US/docs/Web/API/Element/scrollsnapchanging_event) event, except that the overall HTML document has to be set as the scroll snap container (i.e., {{cssxref("scroll-snap-type")}} is set on the {{htmlelement("html")}} element).

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("scrollsnapchanging", (event) => {});

onscrollsnapchanging = (event) => {};
```

## Event type

A {{domxref("SnapEvent")}}, which inherits from the generic {{domxref("Event")}} type.

## Examples

### Basic usage

Let's say we have a {{htmlelement("main")}} element containing significant content that causes it to scroll:

```html
<main>
  <!-- Significant content -->
</main>
```

The `<main>` element can be turned into a scroll container using a combination of CSS properties, for example:

```css
main {
  width: 250px;
  height: 450px;
  overflow: scroll;
}
```

We can then implement scroll snapping behavior on the scrolling content by specifying the {{cssxref("scroll-snap-type")}} property on the {{htmlelement("html")}} element:

```css
html {
  scroll-snap-type: block mandatory;
}
```

The following JavaScript snippet would cause the `scrollsnapchanging` event to fire on the HTML document when a child of the `<main>` element becomes a pending snap target. In the handler function, we set a `pending` class on the child referenced by the {{domxref("SnapEvent.snapTargetBlock", "snapTargetBlock")}} property, which could be used to style it differently when the event fires.

```js
window.addEventListener("scrollsnapchanging", (event) => {
  // remove previously-set "pending" classes
  const pendingElems = document.querySelectorAll(".pending");
  pendingElems.forEach((elem) => {
    elem.classList.remove("pending");
  });

  // Set current pending snap target class to "pending"
  event.snapTargetBlock.classList.add("pending");
});
```

At the start of the function, we select all elements that previously had the `pending` class applied and remove it, so that only the most recent pending snap target is styled.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Window/scrollsnapchange_event", "scrollsnapchange")}} event
- {{DOMxRef("Document/scrollend_event", "scrollend")}} event
- {{domxref("SnapEvent")}}
- CSS {{cssxref("scroll-snap-type")}} property
- [CSS scroll snap module](/en-US/docs/Web/CSS/CSS_scroll_snap)
- [Using scroll snap events](/en-US/docs/Web/CSS/CSS_scroll_snap/Using_scroll_snap_events)
- [Scroll Snap Events](https://developer.chrome.com/blog/scroll-snap-events) on developer.chrome.com (2024)
