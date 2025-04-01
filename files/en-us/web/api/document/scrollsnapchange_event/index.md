---
title: "Document: scrollsnapchange event"
short-title: scrollsnapchange
slug: Web/API/Document/scrollsnapchange_event
page-type: web-api-event
status:
  - experimental
browser-compat: api.Document.scrollsnapchange_event
---

{{APIRef}}{{SeeCompatTable}}

The **`scrollsnapchange`** event of the {{domxref("Document")}} interface is fired on the document [scroll container](/en-US/docs/Glossary/Scroll_container) at the end of a scrolling operation when a new scroll snap target is selected.

This event works in much the same way as the {{domxref("Element")}} interface's [`scrollsnapchange`](/en-US/docs/Web/API/Element/scrollsnapchange_event) event, except that the overall HTML document has to be set as the scroll snap container (i.e., {{cssxref("scroll-snap-type")}} is set on the {{htmlelement("html")}} element).

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("scrollsnapchange", (event) => {});

onscrollsnapchange = (event) => {};
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

The following JavaScript snippet would cause the `scrollsnapchange` event to fire on the HTML document when a child of the `<main>` element becomes a newly-selected snap target. In the handler function, we set a `selected` class on the child referenced by the {{domxref("SnapEvent.snapTargetBlock")}}, which could be used to style it to look like it has been selected (for example, with an animation) when the event fires.

```js
document.addEventListener("scrollsnapchange", (event) => {
  event.snapTargetBlock.classList.add("selected");
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Document/scrollsnapchanging_event", "scrollsnapchanging")}} event
- {{DOMxRef("Document/scrollend_event", "scrollend")}} event
- {{domxref("SnapEvent")}}
- CSS {{cssxref("scroll-snap-type")}} property
- [CSS scroll snap module](/en-US/docs/Web/CSS/CSS_scroll_snap)
- [Using scroll snap events](/en-US/docs/Web/CSS/CSS_scroll_snap/Using_scroll_snap_events)
- [Scroll Snap Events](https://developer.chrome.com/blog/scroll-snap-events) on developer.chrome.com (2024)
