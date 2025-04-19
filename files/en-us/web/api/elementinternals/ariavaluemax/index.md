---
title: "ElementInternals: ariaValueMax property"
short-title: ariaValueMax
slug: Web/API/ElementInternals/ariaValueMax
page-type: web-api-instance-property
browser-compat: api.ElementInternals.ariaValueMax
---

{{APIRef("Web Components")}}

The **`ariaValueMax`** property of the {{domxref("ElementInternals")}} interface reflects the value of the [`aria-valuemax`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax) attribute, which defines the maximum allowed value for a range widget.

> [!NOTE]
> Setting aria attributes on `ElementInternals` allows default semantics to be defined on a custom element. These may be overwritten by author-defined attributes, but ensure that default semantics are retained should the author delete those attributes, or fail to add them at all. For more information see the [Accessibility Object Model explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Value

A string which contains a number.

## Examples

In this example the value of `ariaValueMax` is set to "20".

```js
class CustomControl extends HTMLElement {
  constructor() {
    super();
    this.internals_ = this.attachInternals();
    this.internals_.ariaValueMax = "20";
  }
  // …
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
