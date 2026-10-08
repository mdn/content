---
title: "Element: mouseout event"
short-title: mouseout
slug: Web/API/Element/mouseout_event
page-type: web-api-event
browser-compat: api.Element.mouseout_event
---

{{APIRef("UI Events")}}

The **`mouseout`** event is fired at an {{domxref("Element")}} when a pointing device (usually a mouse) is used to move the cursor so that it is no longer contained within the element or one of its children.

`mouseout` is also delivered to an element if the cursor enters a child element, because the child element obscures the visible area of the element.

If the target element has child elements, `mouseout` and `mouseover` events fire as the mouse moves over the boundaries of these elements too, not just the target element itself. Usually, {{domxref("Element/mouseenter_event", "mouseenter")}} and {{domxref("Element/mouseleave_event", "mouseleave")}} events' behavior is more sensible, because they are not affected by moving into child elements.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js-nolint
addEventListener("mouseout", (event) => { })

onmouseout = (event) => { }
```

## Event type

A {{domxref("MouseEvent")}}. Inherits from {{domxref("UIEvent")}} and {{domxref("Event")}}.

{{InheritanceDiagram("MouseEvent")}}

## Examples

The following examples show the use of the `mouseout` event.

### mouseout and mouseleave

The following example illustrates the difference between `mouseout` and {{domxref("Element/mouseleave_event", "mouseleave")}} events. The `mouseleave` event is added to the {{HTMLElement("ul")}} to color the list purple whenever the mouse exits the `<ul>`. `mouseout` is added to the list to color the targeted element orange when the mouse exits it.

When you try this out, you'll find that `mouseout` is delivered to the individual list items, while `mouseleave` goes to the overall list, courtesy of the hierarchy of the items and the fact that list items obscure the underlying `<ul>`.

#### HTML

```html
<ul id="test">
  <li>item 1</li>
  <li>item 2</li>
  <li>item 3</li>
</ul>
```

#### JavaScript

```js
const test = document.getElementById("test");

// Briefly make the list purple when the mouse moves off the
// <ul> element
test.addEventListener("mouseleave", (event) => {
  // highlight the mouseleave target
  event.target.style.color = "purple";

  // reset the color after a short delay
  setTimeout(() => {
    event.target.style.color = "";
  }, 1000);
});

// Briefly make an <li> orange when the mouse moves off of it
test.addEventListener("mouseout", (event) => {
  // highlight the mouseout target
  event.target.style.color = "orange";

  // reset the color after a short delay
  setTimeout(() => {
    event.target.style.color = "";
  }, 500);
});
```

#### Result

{{EmbedLiveSample("mouseout_and_mouseleave", 640, 200)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Learn: Introduction to events](/en-US/docs/Learn_web_development/Core/Scripting/Events)
- {{domxref("Element/mousedown_event", "mousedown")}}
- {{domxref("Element/mouseup_event", "mouseup")}}
- {{domxref("Element/mousemove_event", "mousemove")}}
- {{domxref("Element/click_event", "click")}}
- {{domxref("Element/dblclick_event", "dblclick")}}
- {{domxref("Element/mouseover_event", "mouseover")}}
- {{domxref("Element/mouseenter_event", "mouseenter")}}
- {{domxref("Element/mouseleave_event", "mouseleave")}}
- {{domxref("Element/contextmenu_event", "contextmenu")}}
- {{domxref("Element/pointerout_event", "pointerout")}}
