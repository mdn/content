---
title: "HTMLElement: attributeStyleMap property"
short-title: attributeStyleMap
slug: Web/API/HTMLElement/attributeStyleMap
page-type: web-api-instance-property
browser-compat: api.HTMLElement.attributeStyleMap
---

{{APIRef("CSSOM")}}

The **`attributeStyleMap`** read-only property of the {{domxref("HTMLElement")}} interface returns a live {{domxref("StylePropertyMap")}} object that contains a list of style properties of the element that are defined in the element's inline [`style`](/en-US/docs/Web/HTML/Global_attributes/style) attribute, or assigned using the {{domxref("HTMLElement.style", "style")}} property of the {{domxref("HTMLElement")}} interface via script.

Shorthand properties are expanded. If you set `style="border-top: 1px solid black"`, the longhand properties ({{cssxref("border-top-color")}}, {{cssxref("border-top-style")}}, and {{cssxref("border-top-width")}}) are set instead.

The difference between {{domxref("HTMLElement.style", "style")}} property and `attributeStyleMap` property is that, the `style` property will list all style properties, no matter it is specificed by `style` attribute or not; but the `attributeStyleMap` property will only list style properties that is specificed by `style` attribute.

Though the property itself is not writable, you could read and write inline styles through the {{domxref("StylePropertyMap")}} object that it expose, just like through the {{domxref("CSSStyleDeclaration")}} object that expose via the `style` property.

## Value

A live {{domxref("StylePropertyMap")}} object.

## Examples

The following code snippet shows the relationship between HTML `style` attribute and `attributeStyleMap` property:

```html
<div style="font-weight: bold;">
  <div id="el" style="border-top: 1px solid blue; color: red;">
    An example element
  </div>
  <div id="output"></div>
</div>
```

```js
const element = document.getElementById("el");
const output = document.getElementById("output");

for (const property of element.attributeStyleMap) {
  output.textContent += ``
}
```

{{EmbedLiveSample("Examples", "200", "200")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLElement.style")}}
