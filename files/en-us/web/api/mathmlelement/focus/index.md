---
title: "MathMLElement: focus() method"
short-title: focus()
slug: Web/API/MathMLElement/focus
page-type: web-api-instance-method
browser-compat: api.MathMLElement.focus
---

{{APIRef("MathML")}}

The **`MathMLElement.focus()`** method sets focus on the specified MathML element, if it can be focused.
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

### Focusing a MathML element

This example uses a button to set the focus on a MathML circle element.

#### HTML

```html
<div>
  <math>
    <msup id="myMath" tabindex="0">
      <mi>x</mi>
      <mn>2</mn>
    </msup>
  </math>
  <button id="focusButton">Focus the Math</button>
</div>
```

#### JavaScript

```js
document.getElementById("focusButton").addEventListener("click", () => {
  const mathElement = document.getElementById("myMath");
  mathElement.focus();
});
```

## Specifications

{{Specifications}}

## Notes

- If you call `MathMLElement.focus()` from a mousedown event handler, you must call `event.preventDefault()` to keep the focus from leaving the `MathMLElement`

## Browser compatibility

{{Compat}}

## See also

- {{domxref("MathMLElement.blur()")}}
- {{domxref("HTMLElement.focus()")}}
