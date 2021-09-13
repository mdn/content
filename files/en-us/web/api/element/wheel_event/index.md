---
title: 'Element: wheel event'
slug: Web/API/Element/wheel_event
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

<table class="properties">
  <tbody>
    <tr>
      <th>Bubbles</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th>Cancelable</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th>Interface</th>
      <td>{{domxref("WheelEvent")}}</td>
    </tr>
    <tr>
      <th>Event handler property</th>
      <td>
        {{domxref("GlobalEventHandlers.onwheel", "onwheel")}}
      </td>
    </tr>
  </tbody>
</table>

> **Note:** Don't confuse the `wheel` event with the {{domxref("Element/scroll_event", "scroll")}} event. The default action of a `wheel` event is implementation-specific, and doesn't necessarily dispatch a `scroll` event. Even when it does, the `delta*` values in the `wheel` event don't necessarily reflect the content's scrolling direction. Therefore, do not rely on the `wheel` event's `delta*` properties to get the scrolling direction. Instead, detect value changes of {{domxref("Element.scrollLeft", "scrollLeft")}} and {{domxref("Element.scrollTop", "scrollTop")}} of the target in the `scroll` event.

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
el.addEventListener('wheel', zoom);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WheelEvent")}}
- [Document: `wheel` event](/en-US/docs/Web/API/Document/wheel_event)
