---
title: "SVGTextContentElement: getRotationOfChar() method"
short-title: getRotationOfChar()
slug: Web/API/SVGTextContentElement/getRotationOfChar
page-type: web-api-instance-method
browser-compat: api.SVGTextContentElement.getRotationOfChar
---

{{APIRef("SVG")}}

The `getRotationOfChar()` method of the {{domxref("SVGTextContentElement")}} interface the represents the rotation of a typographic character.

## Syntax

```js-nolint
getRotationOfChar(index)
```

### Parameters

- `index`
  - : An `integer`; the index of the character.

### Return value

A float; the rotation angle of the character in degrees.

### Exceptions

- `IndexSizeError` {{domxref("DOMException")}}
  - : Thrown if no character is found at `index`.

## Examples

### Getting the Rotation of a Character

```html
<svg width="200" height="100">
  <text id="exampleText" x="10" y="40" writing-mode="vertical-rl">
    Hello, SVG
  </text>
</svg>
```

```js
const textElement = document.getElementById("exampleText");

// Get the rotation of the first character "H"
const rotation = textElement.getRotationOfChar(0);

console.log(extent); // Output: 90
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`writing-mode`](/en-US/docs/Web/CSS/writing-mode)
