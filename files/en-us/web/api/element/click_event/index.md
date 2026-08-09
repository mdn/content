---
title: "Element: click event"
short-title: click
slug: Web/API/Element/click_event
page-type: web-api-event
browser-compat: api.Element.click_event
---

{{APIRef("UI Events")}}

An element receives a **`click`** event when any of the following occurs:

- A pointing-device button (such as a mouse's primary button) is both pressed and released while the pointer is located inside the element.
- A touch gesture is performed on the element.
- Any user interaction that is equivalent to a click, such as pressing the <kbd>Space</kbd> key or <kbd>Enter</kbd> key while the element is focused. Note that this only applies to elements with a default key event handler, and therefore, excludes other elements that have been made focusable by setting the [`tabindex`](/en-US/docs/Web/HTML/Reference/Global_attributes/tabindex) attribute.

If the button is pressed on one element and the pointer is moved outside the element before the button is released, the event is fired on the most specific ancestor element that contained both elements.

`click` fires after both the {{domxref("Element/mousedown_event", "mousedown")}} and {{domxref("Element/mouseup_event", "mouseup")}} events have fired, in that order.

The event is a device-independent event — meaning it can be activated by touch, keyboard, mouse, and any other mechanism provided by assistive technology.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js-nolint
addEventListener("click", (event) => { })

onclick = (event) => { }
```

## Event type

A {{domxref("PointerEvent")}}. Inherits from {{domxref("MouseEvent")}}.

{{InheritanceDiagram("PointerEvent")}}

> [!NOTE]
> In earlier versions of the specification, the event type for this event was a {{domxref("MouseEvent")}}. Check [browser compatibility](#browser_compatibility) for more information.

## Usage notes

The {{domxref("PointerEvent")}} object passed into the event handler for `click` has its {{domxref("UIEvent/detail", "detail")}} property set to the number of times the {{domxref("Event.target", "target")}} was clicked. In other words, `detail` will be 2 for a double-click, 3 for triple-click, and so forth. This counter resets after a short interval without any clicks occurring; the specifics of how long that interval is may vary from browser to browser and across platforms. The interval is also likely to be affected by user preferences; for example, accessibility options may extend this interval to make it easier to perform multiple clicks with adaptive interfaces.

## Examples

This example displays the number of consecutive clicks on a {{HtmlElement("button")}}.

### HTML

```html
<button>Click</button>
```

### JavaScript

```js
const button = document.querySelector("button");

button.addEventListener("click", (event) => {
  button.textContent = `Click count: ${event.detail}`;
});
```

### Result

Try making rapid, repeated clicks on the button to increase the click count. If you take a break between clicks, the count will reset.

{{EmbedLiveSample("Examples")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Learn: Introduction to events](/en-US/docs/Learn_web_development/Core/Scripting/Events)
- {{domxref("Element/auxclick_event", "auxclick")}}
- {{domxref("Element/contextmenu_event", "contextmenu")}}
- {{domxref("Element/dblclick_event", "dblclick")}}
- {{domxref("Element/mousedown_event", "mousedown")}}
- {{domxref("Element/mouseup_event", "mouseup")}}
- {{domxref("Element/pointerdown_event", "pointerdown")}}
- {{domxref("Element/pointerup_event", "pointerup")}}
