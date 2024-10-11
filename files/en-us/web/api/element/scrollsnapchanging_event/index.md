---
title: "Element: scrollsnapchanging event"
short-title: scrollsnapchanging
slug: Web/API/Element/scrollsnapchanging_event
page-type: web-api-event
status:
  - experimental
browser-compat: api.Element.scrollsnapchanging_event
---

{{APIRef}}{{SeeCompatTable}}

The **`scrollsnapchanging`** event of the {{domxref("Element")}} interface is fired on the [scroll container](/en-US/docs/Glossary/Scroll_container) when the browser determines a new scroll snap target is pending, i.e. it will be selected when the current scroll gesture ends.

Specifically, this event fires during a scrolling gesture, each time the user moves over potential new snap targets. For example, the user could scroll slowly by dragging their finger on a touch screen device, or hold down the mouse button on a scroll bar and move the mouse. `scrollsnapchanging` can therefore fire multiple times for each scrolling gesture.

However, it does not fire on all potential snap targets for a scrolling gesture that moves over multiple snap targets. Rather, it fires just for the last target that the snapping will potentially rest on.

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

The `<main>` element can be turned into a scroll container that snaps to its children when scrolled using a combination of the CSS {{cssxref("scroll-snap-type")}} property and other properties. For example:

```css
main {
  width: 250px;
  height: 450px;
  overflow: scroll;
  scroll-snap-type: block mandatory;
}
```

The following JavaScript snippet would cause the `scrollsnapchanging` event to fire on the `<main>` element when one of its children becomes a pending snap target. In the handler function, we set a `pending` class on the child referenced by the {{domxref("SnapEvent.snapTargetBlock", "snapTargetBlock")}} property, which could be used to style it differently when the event fires.

```js
scrollingElem.addEventListener("scrollsnapchanging", (event) => {
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

- {{domxref("Element/scrollsnapchange_event", "scrollsnapchange")}} event
- {{DOMxRef("Document/scrollend_event", "scrollend")}} event
- {{domxref("SnapEvent")}}
- CSS {{cssxref("scroll-snap-type")}} property
- [CSS scroll snap module](/en-US/docs/Web/CSS/CSS_scroll_snap)
- [Using scroll snap events](/en-US/docs/Web/CSS/CSS_scroll_snap/Using_scroll_snap_events)
- [Scroll Snap Events](https://developer.chrome.com/blog/scroll-snap-events) on developer.chrome.com (2024)
