---
title: "SVGElement: focus() method"
short-title: focus()
slug: Web/API/SVGElement/focus
page-type: web-api-instance-method
browser-compat: api.SVGElement.focus
---

{{APIRef("SVG")}}

The **`SVGElement.focus()`** method sets focus on the specified SVG element, if it can be focused.
The focused element is the element that will receive keyboard and similar events by default.

By default the browser will scroll the element into view after focusing it, and it may also provide visible indication of the focused element (typically by displaying a "focus ring" around the element).
Parameter options are provided to disable the default scrolling and force visible indication on elements.

## Syntax

```js-nolint
focus()
focus(options)
```

### Parameters

- `options` {{optional_inline}}

  - : An optional object for controlling aspects of the focusing process.
    This object may contain the following properties:

    - `preventScroll` {{optional_inline}}
      - : A boolean value indicating whether or not the browser should scroll the document to bring the newly-focused element into view.
        A value of `false` for `preventScroll` (the default) means that the browser will scroll the element into view after focusing it.
        If `preventScroll` is set to `true`, no scrolling will occur.

### Return value

None ({{jsxref("undefined")}}).

## Examples

### Focusing an SVG element

This example uses a button to set the focus on an SVG circle element.

#### HTML

```html
<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
  <circle id="myCircle" cx="100" cy="100" r="50" tabindex="0" fill="blue" />
  <button id="focusButton">Focus the circle</button>
</svg>
```

#### JavaScript

```js
document.getElementById("focusButton").addEventListener("click", () => {
  const circle = document.getElementById("myCircle");
  circle.focus();
});
```

## Specifications

{{Specifications}}

## Notes

- If you call `SVGElement.focus()` from a mousedown event handler, you must call `event.preventDefault()` to keep the focus from leaving the `SVGElement`

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGElement.blur")}} to remove the focus from an element.
- {{domxref("HTMLElement.focus")}} a similar method for HTML elements.
