---
title: "Element: auxclick event"
short-title: auxclick
slug: Web/API/Element/auxclick_event
page-type: web-api-event
browser-compat: api.Element.auxclick_event
---

{{APIRef}}

The **`auxclick`** event is fired at an {{domxref("Element")}} when a non-primary pointing device button (any mouse button other than the primary—usually leftmost—button) has been pressed and released both within the same element.

`auxclick` is fired after the {{domxref("Element/mousedown_event", "mousedown")}} and {{domxref("Element/mouseup_event", "mouseup")}} events have been fired, in that order.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("auxclick", (event) => {});

onauxclick = (event) => {};
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

## Preventing default actions

For the vast majority of browsers that map middle click to opening a link in a new tab, including Firefox, it is possible to cancel this behavior by calling {{domxref("Event.preventDefault()", "preventDefault()")}} from within an `auxclick` event handler.

When listening for `auxclick` events originating on elements that do not support input or navigation, you will often want to explicitly prevent other default actions mapped to the down action of the middle mouse button. On Windows this is usually autoscroll, and on macOS and Linux this is usually clipboard paste. This can be done by preventing the default behavior of the {{domxref("Element/mousedown_event", "mousedown")}} or {{domxref("Element/pointerdown_event", "pointerdown")}} event.

Additionally, you may need to avoid opening a system context menu after a right click. Due to timing differences between operating systems, this too is not a preventable default behavior of `auxclick`. Instead, this can be done by preventing the default behavior of the {{domxref("Element/contextmenu_event", "contextmenu")}} event.

## Examples

In this example we define functions for two event handlers — {{domxref("Element.click_event", "onclick")}} and `onauxclick`. The former changes the color of the button background, while the latter changes the button foreground (text) color. You also can see the two functions in action by trying the demo out with a multi-button mouse ([see it live on GitHub](https://mdn.github.io/dom-examples/auxclick/); also [see the source code](https://github.com/mdn/dom-examples/blob/main/auxclick/index.html)).

### JavaScript

```js
let button = document.querySelector("button");
let html = document.querySelector("html");

function random(number) {
  return Math.floor(Math.random() * number);
}

function randomColor() {
  return `rgb(${random(255)} ${random(255)} ${random(255)})`;
}

button.onclick = () => {
  button.style.backgroundColor = randomColor();
};

button.onauxclick = (e) => {
  e.preventDefault();
  button.style.color = randomColor();
};

button.oncontextmenu = (e) => {
  e.preventDefault();
};
```

Notice that in addition to capturing the `auxclick` event using `onauxclick`, the {{domxref("Element.contextmenu_event", "contextmenu")}} event is also captured, and {{domxref("Event.preventDefault", "preventDefault()")}} called on that event, in order to prevent the context menu from popping up after the color change is applied.

### HTML

```html
<button><h1>Click me!</h1></button>
```

```css hidden
html {
  height: 100%;
  overflow: hidden;
}

body {
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
}

button {
  border: 0;
  background-color: white;
  font-size: 8vw;
  display: block;
  width: 100%;
  height: 100%;
}

h1 {
  letter-spacing: 0.5rem;
}
```

{{EmbedLiveSample("Examples", 640, 300)}}

> [!NOTE]
> If you are using a three-button mouse, you'll notice that the `onauxclick` handler is run when any of the non-left mouse buttons are clicked (usually including any "special" buttons on gaming mice).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Learn: Introduction to events](/en-US/docs/Learn_web_development/Core/Scripting/Events)
- {{domxref("Element/click_event", "click")}}
- {{domxref("Element/contextmenu_event", "contextmenu")}}
- {{domxref("Element/dblclick_event", "dblclick")}}
- {{domxref("Element/mousedown_event", "mousedown")}}
- {{domxref("Element/mouseup_event", "mouseup")}}
- {{domxref("Element/pointerdown_event", "pointerdown")}}
- {{domxref("Element/pointerup_event", "pointerup")}}
