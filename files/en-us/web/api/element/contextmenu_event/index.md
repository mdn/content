---
title: "Element: contextmenu event"
short-title: contextmenu
slug: Web/API/Element/contextmenu_event
page-type: web-api-event
browser-compat: api.Element.contextmenu_event
---

{{APIRef}}

The **`contextmenu`** event fires when the user attempts to open a context menu. This event is typically triggered by clicking the right mouse button, or by pressing the context menu key.

In the latter case, the context menu is displayed at the bottom left of the focused element, unless the element is a tree, in which case the context menu is displayed at the bottom left of the current row.

Any right-click event that is not disabled (by calling the click event's {{domxref("Event.preventDefault", "preventDefault()")}} method) will result in a `contextmenu` event being fired at the targeted element.

> [!NOTE]
> An exception to this in Firefox: if the user holds down the <kbd>Shift</kbd> key while right-clicking, then the context menu will be shown without a `contextmenu` event being fired.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("contextmenu", (event) => {});

oncontextmenu = (event) => {};
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

## Examples

### Canceling the `contextmenu` event

In this example, the default action of the `contextmenu` event is canceled using `preventDefault()` when the `contextmenu` event is fired at the first paragraph. As a result, the first paragraph will do nothing when right-clicked, while the second paragraph will show the standard context menu offered by your browser.

> [!NOTE]
> In Firefox, if you hold down the <kbd>Shift</kbd> key while right-clicking, then the context menu is shown without the `contextmenu` event being fired. Therefore, canceling the event does not stop the context menu from being shown.

#### HTML

```html
<p id="noContextMenu">The context menu has been disabled on this paragraph.</p>
<p>But it has not been disabled on this one.</p>
```

#### JavaScript

```js
const noContext = document.getElementById("noContextMenu");

noContext.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});
```

#### Result

{{EmbedLiveSample("Canceling the contextmenu event")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Learn: Introduction to events](/en-US/docs/Learn_web_development/Core/Scripting/Events)
- {{domxref("Element/auxclick_event", "auxclick")}}
- {{domxref("Element/click_event", "click")}}
- {{domxref("Element/dblclick_event", "dblclick")}}
- {{domxref("Element/mousedown_event", "mousedown")}}
- {{domxref("Element/mouseup_event", "mouseup")}}
- {{domxref("Element/pointerdown_event", "pointerdown")}}
- {{domxref("Element/pointerup_event", "pointerup")}}
