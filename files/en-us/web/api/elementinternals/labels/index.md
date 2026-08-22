---
title: "ElementInternals: labels property"
short-title: labels
slug: Web/API/ElementInternals/labels
page-type: web-api-instance-property
browser-compat: api.ElementInternals.labels
---

{{APIRef("Web Components")}}

The **`labels`** read-only property of the {{domxref("ElementInternals")}} interface returns the labels associated with the element.

## Value

A {{domxref("NodeList")}} containing all of the label elements associated with this element.

## Examples

The following example shows a custom checkbox component with a {{HTMLElement("label")}} element linked to it.
Printing the value of `labels` to the console returns a {{domxref("NodeList")}} with one entry, representing this label.

```html
<form id="myForm">
  <custom-checkbox id="custom-checkbox"></custom-checkbox>
  <label for="custom-checkbox">Join newsletter</label>
</form>
```

```js
let element = document.getElementById("custom-checkbox");
console.log(element.internals_.label);
```

## Accessibility

While the `labels` property returns the label elements associated with a custom element, screen reader support for these labels varies by browser. In most browsers, the label is announced when the custom element receives focus. However, Safari does not reliably narrate labels associated via `ElementInternals` for form-associated custom elements (see [WebKit bug 259124](https://bugs.webkit.org/show_bug.cgi?id=259124)).

For robust screen reader support across browsers, consider supplementing `ElementInternals` label association with ARIA attributes such as [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) or [`aria-label`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
