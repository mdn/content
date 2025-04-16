---
title: "MathMLElement: blur() method"
short-title: blur()
slug: Web/API/MathMLElement/blur
page-type: web-api-instance-method
browser-compat: api.MathMLElement.blur
---

{{APIRef("MathML")}}

The **`MathMLElement.blur()`** method removes keyboard focus from the current MathML element.

## Syntax

```js-nolint
blur()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Examples

### Remove focus from a MathML element

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
  <button id="blurButton">Blur the Math</button>
</div>
```

#### JavaScript

```js
const mathElement = document.getElementById("myMath");
const focusButton = document.getElementById("focusButton");
const blurButton = document.getElementById("blurButton");

// Focus the MathMLElement when the "Focus" button is clicked
focusButton.addEventListener("click", () => {
  mathElement.focus();
});

// Blur the MathMLElement when the "Blur" button is clicked
blurButton.addEventListener("click", () => {
  mathElement.blur();
});
```

### Result

{{EmbedLiveSample("blur",100,100)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("MathMLElement.focus()")}}
- {{domxref("HTMLElement.blur()")}}
