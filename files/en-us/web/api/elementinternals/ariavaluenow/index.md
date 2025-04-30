---
title: "ElementInternals: ariaValueNow property"
short-title: ariaValueNow
slug: Web/API/ElementInternals/ariaValueNow
page-type: web-api-instance-property
browser-compat: api.ElementInternals.ariaValueNow
---

{{APIRef("Web Components")}}

The **`ariaValueNow`** property of the {{domxref("ElementInternals")}} interface reflects the value of the [`aria-valuenow`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow) attribute, which defines the current value for a range widget.

> [!NOTE]
> Setting aria attributes on `ElementInternals` allows default semantics to be defined on a custom element. These may be overwritten by author-defined attributes, but ensure that default semantics are retained should the author delete those attributes, or fail to add them at all. For more information see the [Accessibility Object Model explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Value

A string which contains a number.

## Examples

In this example the value of `ariaValueNow` is set to "1".

```js
class CustomControl extends HTMLElement {
  constructor() {
    super();
    this.internals_ = this.attachInternals();
    this.internals_.ariaValueNow = "1";
  }
  // …
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
