---
title: "HTMLElement: tabIndex property"
short-title: tabIndex
slug: Web/API/HTMLElement/tabIndex
page-type: web-api-instance-property
browser-compat: api.HTMLElement.tabIndex
---

{{APIRef("HTML DOM")}}

The **`tabIndex`** property of the
{{DOMxRef("HTMLElement")}} interface represents the tab order of the current element.

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

```js
const b1 = document.getElementById("button1");

b1.tabIndex = 1;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Accessibility of keyboard-navigable JavaScript widgets](/en-US/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets)
- The HTML
  [`tabindex`](/en-US/docs/Web/HTML/Global_attributes/tabindex)
  global attribute.
