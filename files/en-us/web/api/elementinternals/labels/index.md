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

## Accessibility

Screen reader support for labels associated with a form-associated custom element via `ElementInternals` varies by browser.
In most browsers, the labels are announced when the custom element receives focus.
Safari does not narrate labels associated via `ElementInternals` for form-associated custom elements (see [WebKit bug 259124](https://bugs.webkit.org/show_bug.cgi?id=259124)).

For more robust cross-browser support, supplement label association with ARIA in one of two places:

- Consumers of the custom element can add [`aria-label`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) or [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) directly to it, the same as they would for a native form control.
- The custom element itself can set a default accessible name with {{domxref("ElementInternals.ariaLabel")}} or {{domxref("ElementInternals.ariaLabelledByElements")}}.
  These apply only until a consumer sets `aria-label` or `aria-labelledby` on the element directly, so they act as a fallback rather than overriding a name the consumer chose.

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

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
