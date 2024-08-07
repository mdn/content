---
title: "SVGElement: attributeStyleMap property"
short-title: attributeStyleMap
slug: Web/API/SVGElement/attributeStyleMap
page-type: web-api-instance-property
browser-compat: api.SVGElement.attributeStyleMap
---

{{APIRef("CSSOM")}}

The **`attributeStyleMap`** read-only property of the {{domxref("SVGElement")}} interface returns a live {{domxref("StylePropertyMap")}} object that contains a list of style properties of the element that are defined in the element's inline `style` attribute, or assigned using the {{domxref("SVGElement.style", "style")}} property of the {{domxref("SVGElement")}} interface via script.

Shorthand properties are expanded. If you set `border-top: 1px solid black`, the longhand properties ({{cssxref("border-top-color")}}, {{cssxref("border-top-style")}}, and {{cssxref("border-top-width")}}) are set instead.

The main difference between {{domxref("SVGElement.style", "style")}} property and `attributeStyleMap` property is that, the `style` property will return a {{domxref("CSSStyleDeclaration")}} object, while the `attributeStyleMap` property will return a {{domxref("StylePropertyMap")}} object.

Though the property itself is not writable, you could read and write inline styles through the {{domxref("StylePropertyMap")}} object that it returns, just like through the {{domxref("CSSStyleDeclaration")}} object that returns via the `style` property.

## Value

A live {{domxref("StylePropertyMap")}} object.

## Examples

The following code snippet shows the relationship between the `style` attribute and the `attributeStyleMap` property:

```html
<div style="white-space: pre-line;">
  <svg
    width="50"
    height="50"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 250 250"
    width="250"
    height="250"
    style="white-space: pre-line;">
    <circle
      cx="100"
      cy="100"
      r="50"
      id="el"
      style="border-top: 1px solid blue; color: red;" />
  </svg>
  <div id="output"></div>
</div>
```

```css
#el {
  font-size: 16px;
}
```

```js
const element = document.getElementById("el");
const output = document.getElementById("output");

for (const property of element.attributeStyleMap) {
  output.textContent += `${property[0]} = ${property[1][0].toString()}\n`;
}
```

{{EmbedLiveSample("Examples", "200", "200")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGElement.style")}}
- {{domxref("HTMLElement.attributeStyleMap")}}
- {{domxref("MathMLElement.attributeStyleMap")}}
