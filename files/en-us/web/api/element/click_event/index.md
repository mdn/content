---
title: "Element: click event"
short-title: click
slug: Web/API/Element/click_event
page-type: web-api-event
browser-compat: api.Element.click_event
---

{{APIRef}}

An element receives a **`click`** event when any of the following occurs:

- A pointing-device button (such as a mouse's primary button) is both pressed and released while the pointer is located inside the element.
- A touch gesture is performed on the element.
- Any user interaction that is equivalent to a click, such as pressing the <kbd>Space</kbd> key or <kbd>Enter</kbd> key while the element is focused. Note that this only applies to elements with a default key event handler, and therefore, excludes other elements that have been made focusable by setting the [`tabindex`](/en-US/docs/Web/HTML/Global_attributes/tabindex) attribute.

If the button is pressed on one element and the pointer is moved outside the element before the button is released, the event is fired on the most specific ancestor element that contained both elements.

`click` fires after both the {{domxref("Element/mousedown_event", "mousedown")}} and {{domxref("Element/mouseup_event", "mouseup")}} events have fired, in that order.

The event is a device-independent event — meaning it can be activated by touch, keyboard, mouse, and any other mechanism provided by assistive technology.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("click", (event) => {});

onclick = (event) => {};
```

## Event type

A {{domxref("PointerEvent")}}. Inherits from {{domxref("MouseEvent")}}.

{{InheritanceDiagram("PointerEvent")}}

> [!NOTE]
> In earlier versions of the specification, the event type for this event was a {{domxref("MouseEvent")}}. Check [browser compatibility](#browser_compatibility) for more information.

## Event properties

_This interface inherits properties from {{domxref("MouseEvent")}} and {{domxref("Event")}}._

- {{domxref('PointerEvent.altitudeAngle')}} {{ReadOnlyInline}} {{experimental_inline}}
  - : Represents the angle between a transducer (a pointer or stylus) axis and the X-Y plane of a device screen.
- {{domxref('PointerEvent.azimuthAngle')}} {{ReadOnlyInline}} {{experimental_inline}}
  - : Represents the angle between the Y-Z plane and the plane containing both the transducer (a pointer or stylus) axis and the Y axis.
- {{domxref('PointerEvent.pointerId')}} {{ReadOnlyInline}}
  - : A unique identifier for the pointer causing the event.
- {{domxref('PointerEvent.width')}} {{ReadOnlyInline}}
  - : The width (magnitude on the X axis), in CSS pixels, of the contact geometry of the pointer.
- {{domxref('PointerEvent.height')}} {{ReadOnlyInline}}
  - : The height (magnitude on the Y axis), in CSS pixels, of the contact geometry of the pointer.
- {{domxref('PointerEvent.pressure')}} {{ReadOnlyInline}}
  - : The normalized pressure of the pointer input in the range `0` to `1`, where `0` and `1` represent the minimum and maximum pressure the hardware is capable of detecting, respectively.
- {{domxref('PointerEvent.tangentialPressure')}} {{ReadOnlyInline}}
  - : The normalized tangential pressure of the pointer input (also known as barrel pressure or [cylinder stress](https://en.wikipedia.org/wiki/Cylinder_stress)) in the range `-1` to `1`, where `0` is the neutral position of the control.
- {{domxref('PointerEvent.tiltX')}} {{ReadOnlyInline}}
  - : The plane angle (in degrees, in the range of `-90` to `90`) between the Y–Z plane and the plane containing both the pointer (e.g. pen stylus) axis and the Y axis.
- {{domxref('PointerEvent.tiltY')}} {{ReadOnlyInline}}
  - : The plane angle (in degrees, in the range of `-90` to `90`) between the X–Z plane and the plane containing both the pointer (e.g. pen stylus) axis and the X axis.
- {{domxref('PointerEvent.twist')}} {{ReadOnlyInline}}
  - : The clockwise rotation of the pointer (e.g. pen stylus) around its major axis in degrees, with a value in the range `0` to `359`.
- {{domxref('PointerEvent.pointerType')}} {{ReadOnlyInline}}
  - : Indicates the device type that caused the event (mouse, pen, touch, etc.).
- {{domxref('PointerEvent.isPrimary')}} {{ReadOnlyInline}}
  - : Indicates if the pointer represents the primary pointer of this pointer type.

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
