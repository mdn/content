---
title: 'Element: wheel event'
slug: Web/API/Element/wheel_event
page-type: web-api-event
tags:
  - API
  - DOM
  - Element
  - Event
  - Reference
  - WheelEvent
  - wheel
browser-compat: api.Element.wheel_event
---
{{APIRef}}

The **`wheel`** event fires when the user rotates a wheel button on a pointing device (typically a mouse).

This event replaces the non-standard deprecated {{domxref("Element/mousewheel_event", "mousewheel")}} event.

> **Note:** Don't confuse the `wheel` event with the {{domxref("Element/scroll_event", "scroll")}} event. The default action of a `wheel` event is implementation-specific, and doesn't necessarily dispatch a `scroll` event. Even when it does, the `delta*` values in the `wheel` event don't necessarily reflect the content's scrolling direction. Therefore, do not rely on the `wheel` event's `delta*` properties to get the scrolling direction. Instead, detect value changes of {{domxref("Element.scrollLeft", "scrollLeft")}} and {{domxref("Element.scrollTop", "scrollTop")}} of the target in the `scroll` event.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('wheel', (event) => {});

onwheel = (event) => { };
```

## Event type

A {{domxref("WheelEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("WheelEvent")}}

## Event properties

_This interface inherits properties from its ancestors, {{DOMxRef("MouseEvent")}}, {{DOMxRef("UIEvent")}}, and {{DOMxRef("Event")}}._

- {{DOMxRef("WheelEvent.deltaX")}} {{ReadOnlyInline}}
  - : Returns a `double` representing the horizontal scroll amount.
- {{DOMxRef("WheelEvent.deltaY")}} {{ReadOnlyInline}}
  - : Returns a `double` representing the vertical scroll amount.
- {{DOMxRef("WheelEvent.deltaZ")}} {{ReadOnlyInline}}
  - : Returns a `double` representing the scroll amount for the z-axis.
- {{DOMxRef("WheelEvent.deltaMode")}} {{ReadOnlyInline}}

  - : Returns an `unsigned long` representing the unit of the `delta*` values' scroll amount. Permitted values are:

    | Constant                     | Value  | Description                                                                                                                                                  |
    | ---------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
    | `WheelEvent.DOM_DELTA_PIXEL` | `0x00` | The `delta*` values are specified in pixels.                                                                                                                 |
    | `WheelEvent.DOM_DELTA_LINE`  | `0x01` | The `delta*` values are specified in lines. Each mouse click scrolls a line of content, where the method used to calculate line height is browser dependent. |
    | `WheelEvent.DOM_DELTA_PAGE`  | `0x02` | The `delta*` values are specified in pages. Each mouse click scrolls a page of content.                                                                      |

- {{DOMxRef("WheelEvent.wheelDelta")}} {{ReadOnlyInline}} {{deprecated_inline}}
  - : Returns an integer (32-bit) representing the distance in pixels.
- {{DOMxRef("WheelEvent.wheelDeltaX")}} {{ReadOnlyInline}} {{deprecated_inline}}
  - : Returns an integer representing the horizontal scroll amount.
- {{DOMxRef("WheelEvent.wheelDeltaY")}} {{ReadOnlyInline}} {{deprecated_inline}}
  - : Returns an integer representing the vertical scroll amount.

## Examples

### Scaling an element via the wheel

This example shows how to scale an element using the mouse (or other pointing device) wheel.

```html
<div>Scale me with your mouse wheel.</div>
```

```css
body {
  min-height: 100vh;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

div {
  width: 105px;
  height: 105px;
  background: #cdf;
  padding: 5px;
}
```

```js
function zoom(event) {
  event.preventDefault();

  scale += event.deltaY * -0.01;

  // Restrict scale
  scale = Math.min(Math.max(.125, scale), 4);

  // Apply scale transform
  el.style.transform = `scale(${scale})`;
}

let scale = 1;
const el = document.querySelector('div');
el.onwheel = zoom;
```

{{EmbedLiveSample("Scaling_an_element_via_the_wheel", 700, 300)}}

### addEventListener equivalent

The event handler can also be set up using the {{domxref("EventTarget/addEventListener", "addEventListener()")}} method:

```js
el.addEventListener('wheel', zoom, { passive: false });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WheelEvent")}}
- [Document: `wheel` event](/en-US/docs/Web/API/Document/wheel_event)
