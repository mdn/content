---
title: Element.setPointerCapture()
slug: Web/API/Element/setPointerCapture
page-type: web-api-instance-method
tags:
  - API
  - DOM
  - Element
  - Method
  - PointerEvent
  - Reference
browser-compat: api.Element.setPointerCapture
---
{{APIRef("DOM")}}

The **`setPointerCapture()`** method of the
{{domxref("Element")}} interface is used to designate a specific element as the
_capture target_ of future pointer events. Subsequent events for the pointer will
be targeted at the capture element until capture is released (via
{{domxref("Element.releasePointerCapture()")}} or the
{{domxref("HTMLElement/pointerup_event", "pointerup")}} event is fired).

> **Note:** When pointer capture is set,
> {{domxref("HTMLElement/pointerover_event", "pointerover")}},
> {{domxref("HTMLElement/pointerout_event", "pointerout")}},
> {{domxref("HTMLElement/pointerenter_event", "pointerenter")}}, and
> {{domxref("HTMLElement/pointerleave_event", "pointerleave")}} events are only generated
> when crossing the boundary of the capture target. This has the effect of suppressing
> these events on all other elements.

### Overview of pointer capture

_Pointer capture_ allows events for a particular _pointer event_
({{domxref("PointerEvent")}}) to be re-targeted to a particular element instead of the
normal (or _hit test_) target at a pointer's location. This can be used to ensure
that an element continues to receive pointer events even if the pointer device's contact
moves off the element (such as by scrolling or panning).

## Syntax

```js
setPointerCapture(pointerId)
```

### Parameters

- `pointerId`
  - : The {{domxref("PointerEvent.pointerId", "pointerId")}} of a
    {{domxref("PointerEvent")}} object.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- `NotFoundError` {{domxref("DOMException")}}
  - : Thrown if `pointerId` does not match any active pointer.

## Examples

This example sets pointer capture on a {{HtmlElement("div")}} when you press down on
it. This lets you slide the element horizontally, even when your pointer moves outside of
its boundaries.

### HTML

```html
<div id="slider">SLIDE ME</div>
```

### CSS

```css
div {
  width: 140px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fbe;
}
```

### JavaScript

```js
function beginSliding(e) {
  slider.onpointermove = slide;
  slider.setPointerCapture(e.pointerId);
}

function stopSliding(e) {
  slider.onpointermove = null;
  slider.releasePointerCapture(e.pointerId);
}

function slide(e) {
  slider.style.transform = `translate(${e.clientX - 70}px)`;
}

const slider = document.getElementById('slider');

slider.onpointerdown = beginSliding;
slider.onpointerup = stopSliding;
```

### Result

{{EmbedLiveSample("Examples")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Element.releasePointerCapture")}}
- {{domxref("Pointer_events","Pointer Events")}}
