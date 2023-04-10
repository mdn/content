---
title: "Element: releasePointerCapture() method"
short-title: releasePointerCapture()
slug: Web/API/Element/releasePointerCapture
page-type: web-api-instance-method
browser-compat: api.Element.releasePointerCapture
---

{{APIRef("DOM")}}

The **`releasePointerCapture()`** method of the
{{domxref("Element")}} interface releases (stops) _pointer capture_ that was
previously set for a specific ({{domxref("PointerEvent")}}) _pointer_.

See the {{domxref("Element.setPointerCapture","Element.setPointerCapture()")}} method
for a description of _pointer capture_ and how to set it for a particular
element.

## Syntax

```js-nolint
releasePointerCapture(pointerId)
```

### Parameters

- `pointerId`
  - : The {{domxref("PointerEvent.pointerId", "pointerId")}} of a
    {{domxref("PointerEvent")}} object.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

| Exception          | Explanation                                          |
| ------------------ | ---------------------------------------------------- |
| `InvalidPointerId` | pointerId does not match any of the active pointers. |

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

const slider = document.getElementById("slider");

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

- {{ domxref("Element.setPointerCapture","Element.setPointerCapture()") }}
- {{ domxref("Pointer_events","Pointer Events") }}
