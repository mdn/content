---
title: "ElementInternals: ariaAtomic property"
short-title: ariaAtomic
slug: Web/API/ElementInternals/ariaAtomic
page-type: web-api-instance-property
browser-compat: api.ElementInternals.ariaAtomic
---

{{APIRef("DOM")}}

The **`ariaAtomic`** property of the {{domxref("ElementInternals")}} interface reflects the value of the [`aria-atomic`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-atomic) attribute, which indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the `aria-relevant` attribute.

> **Note:** Setting aria attributes on `ElementInternals` allows default semantics to be defined on a custom element. These may be overwritten by author-defined attributes, but ensure that default semantics are retained should the author delete those attributes, or fail to add them at all. For more information see the [Accessibility Object Model explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Value

A string with one of the following values:

- `"false"`
  - : Assistive technologies will present only the changed node or nodes.
- `"true"`
  - : Assistive technologies will present the entire changed region as a whole, including the author-defined label if one exists.

## Examples

In this example the value of `ariaAtomic` is set to "true" in the constructor for a custom element .

```js
class MyCustomElement extends HTMLElement {
  constructor() {
    super();
    this.internals_ = this.attachInternals();
    this.internals_.ariaAtomic = "true";
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
