---
title: "Element: mousedown event"
short-title: mousedown
slug: Web/API/Element/mousedown_event
page-type: web-api-event
browser-compat: api.Element.mousedown_event
---

{{APIRef("UI Events")}}

The **`mousedown`** event is fired at an {{domxref("Element")}} when a pointing device button is pressed while the pointer is inside the element.

This differs from the {{domxref("Element/click_event", "click")}} event in that `click` is fired after a full click action occurs; that is, the mouse button is pressed and released while the pointer remains inside the same element. `mousedown` is fired the moment the button is initially pressed.

This behavior is different from {{domxref("Element/pointerdown_event", "pointerdown")}} events. When using a physical mouse, `mousedown` events fire whenever any button on a mouse is pressed down. `pointerdown` events fire only upon the first button press; subsequent button presses don't fire `pointerdown` events.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js-nolint
addEventListener("mousedown", (event) => { })

onmousedown = (event) => { }
```

## Event type

A {{domxref("MouseEvent")}}. Inherits from {{domxref("UIEvent")}} and {{domxref("Event")}}.

{{InheritanceDiagram("MouseEvent")}}

## Examples

See [`mousemove` event](/en-US/docs/Web/API/Element/mousemove_event#examples) for example code.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Learn: Introduction to events](/en-US/docs/Learn_web_development/Core/Scripting/Events)
- {{domxref("Element/mouseup_event", "mouseup")}}
- {{domxref("Element/mousemove_event", "mousemove")}}
- {{domxref("Element/click_event", "click")}}
- {{domxref("Element/dblclick_event", "dblclick")}}
- {{domxref("Element/mouseover_event", "mouseover")}}
- {{domxref("Element/mouseout_event", "mouseout")}}
- {{domxref("Element/mouseenter_event", "mouseenter")}}
- {{domxref("Element/mouseleave_event", "mouseleave")}}
- {{domxref("Element/contextmenu_event", "contextmenu")}}
- {{domxref("Element/pointerdown_event", "pointerdown")}}
