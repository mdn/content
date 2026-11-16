---
title: "MathMLElement: drawable property"
short-title: drawable
slug: Web/API/MathMLElement/drawable
page-type: web-api-instance-property
browser-compat: api.MathMLElement.drawable
---

{{APIRef("MathML")}}

The **`drawable`** property of the {{domxref("MathMLElement")}} interface marks an element as a **paint root**, meaning that it can be rendered independently on a parent {{htmlelement("canvas")}} element with its [`content`](/en-US/docs/Web/HTML/Reference/Elements/canvas#content) attribute set to `drawable`, using the [HTML-in-Canvas API](/en-US/docs/Web/API/HTML-in-Canvas_API).

Reflects the value of the MathML [`drawable`](/en-US/docs/Web/MathML/Reference/Global_attributes/drawable) attribute.

## Value

A boolean — `true` if the element is marked as a paint root, and `false` otherwise.

## Examples

### Basic usage

Given this HTML:

```html
<canvas width="240" height="180" content="drawable">
  <math display="block" drawable>
    <mrow>
      <mi>E</mi>
      <mo>=</mo>
      <mi>m</mi>
      <msup>
        <mi>c</mi>
        <mn>2</mn>
      </msup>
    </mrow>
  </math>
</canvas>
```

You can get the value of the `drawable` attribute like so:

```js
const mathElem = document.querySelector("math");
console.log(mathElem.drawable); // true
```

And set it like this:

```js
mathElem.drawable = false;
console.log(mathElem.drawable); // false
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [HTML-in-Canvas API](/en-US/docs/Web/API/HTML-in-Canvas_API)
