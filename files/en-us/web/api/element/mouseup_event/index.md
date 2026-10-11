---
title: "Element: mouseup event"
short-title: mouseup
slug: Web/API/Element/mouseup_event
page-type: web-api-event
browser-compat: api.Element.mouseup_event
---

{{APIRef("UI Events")}}

The **`mouseup`** event is fired at an {{domxref("Element")}} when a button on a pointing device (such as a mouse or trackpad) is released while the pointer is located inside it.

`mouseup` events are the counterpoint to {{domxref("Element.mousedown_event", "mousedown")}} events.

This behavior is different from {{domxref("Element/pointerup_event", "pointerup")}} events. When using a physical mouse, `mouseup` events fire whenever any button on a mouse is released. `pointerup` events fire only upon the last button release; previous button releases, while other buttons are held down, don't fire `pointerup` events.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js-nolint
addEventListener("mouseup", (event) => { })

onmouseup = (event) => { }
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
- {{domxref("Element/mousedown_event", "mousedown")}}
- {{domxref("Element/mousemove_event", "mousemove")}}
- {{domxref("Element/click_event", "click")}}
- {{domxref("Element/dblclick_event", "dblclick")}}
- {{domxref("Element/mouseover_event", "mouseover")}}
- {{domxref("Element/mouseout_event", "mouseout")}}
- {{domxref("Element/mouseenter_event", "mouseenter")}}
- {{domxref("Element/mouseleave_event", "mouseleave")}}
- {{domxref("Element/contextmenu_event", "contextmenu")}}
- {{domxref("Element/pointerup_event", "pointerup")}}
