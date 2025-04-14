---
title: "MathMLElement: tabIndex property"
short-title: tabIndex
slug: Web/API/MathMLElement/tabIndex
page-type: web-api-instance-property
browser-compat: api.MathMLElement.tabIndex
---

{{APIRef("MathML")}}

The **`tabIndex`** property of the {{DOMxRef("MathMLElement")}} interface represents the tab order of the current MathML element.

Tab order is as follows:

1. Elements with a positive `tabIndex`. Elements that have identical
   `tabIndex` values should be navigated in the order they appear. Navigation
   proceeds from the lowest `tabIndex` to the highest `tabIndex`.
2. Elements that do not support the `tabIndex` attribute or support it and
   assign `tabIndex` to `0`, in the order they appear.

Elements that are disabled do not participate in the tabbing order.

Values don't need to be sequential, nor must they begin with any particular value. They
may even be negative, though each browser trims very large values.

## Value

An integer.

## Examples

### Setting the `tabIndex` property

```html
<math id="math1" tabindex="2">
  <msup>
    <mi>a</mi>
    <mn>2</mn>
  </msup>
</math>

<math id="math2">
  <mfrac>
    <mn>1</mn>
    <mn>2</mn>
  </mfrac>
</math>
```

```js
const math1 = document.getElementById("math1");
const math2 = document.getElementById("math2");

// Access and modify the tabIndex
console.log(math1.tabIndex); // 2
math2.tabIndex = 1; // Add math2 to the tab order before math1

// Programmatically focus on an element with negative tabIndex
math1.tabIndex = -1;
math1.focus(); // Works, even though it is not in the tabbing order
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLElement.tabIndex")}}
- [Accessibility of keyboard-navigable JavaScript widgets](/en-US/docs/Web/Accessibility/Guides/Keyboard-navigable_JavaScript_widgets)
- The HTML
  [`tabindex`](/en-US/docs/Web/HTML/Global_attributes/tabindex)
  global attribute.
