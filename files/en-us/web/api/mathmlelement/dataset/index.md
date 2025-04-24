---
title: "MathMLElement: dataset property"
short-title: dataset
slug: Web/API/MathMLElement/dataset
page-type: web-api-instance-property
browser-compat: api.MathMLElement.dataset
---

{{APIRef("MathML")}}

The **`dataset`** read-only property of the {{DOMxRef("MathMLElement")}} interface provides read/write access to [custom data attributes](/en-US/docs/Web/MathML/Reference/Global_attributes/data-*) (`data-*`) on elements. It exposes a map of strings ({{domxref("DOMStringMap")}}) with an entry for each `data-*` attribute.

The `dataset` property itself can be read, but not directly written. Instead, all writes must be to the individual properties within the `dataset`, which in turn represent the data attributes.

## Value

A {{domxref("DOMStringMap")}}.

## Examples

```html
<div>
  <math>
    <msup id="equation" data-value="-1" data-equation="euler">
      <mi>e</mi>
      <mi>iπ</mi>
    </msup>
    <mo>+</mo>
    <mn>1</mn>
    <mo>=</mo>
    <mn>0</mn>
  </math>
</div>
```

```js
const el = document.querySelector("#equation");

console.log(el.dataset.value); // "-1"
console.log(el.dataset.equation); // "euler"
```

### Result

{{EmbedLiveSample("dataset",100,100)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLElement.dataset")}}
- [`data-*`](/en-US/docs/Web/MathML/Reference/Global_attributes/data-*)
- [Using data attributes](/en-US/docs/Web/HTML/How_to/Use_data_attributes)
