---
title: "ElementInternals: ariaOrientation property"
short-title: ariaOrientation
slug: Web/API/ElementInternals/ariaOrientation
page-type: web-api-instance-property
browser-compat: api.ElementInternals.ariaOrientation
---

{{APIRef("Web Components")}}

The **`ariaOrientation`** property of the {{domxref("ElementInternals")}} interface reflects the value of the [`aria-orientation`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation) attribute, which indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.

> [!NOTE]
> Setting aria attributes on `ElementInternals` allows default semantics to be defined on a custom element. These may be overwritten by author-defined attributes, but ensure that default semantics are retained should the author delete those attributes, or fail to add them at all. For more information see the [Accessibility Object Model explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Value

A string with one of the following values:

- `"horizontal"`
  - : The element is horizontal.
- `"vertical"`
  - : The element is vertical.
- `"undefined"`
  - : The element's orientation is unknown.

## Examples

In this example the value of `ariaOrientation` is set to "vertical".

```js
class CustomEl extends HTMLElement {
  constructor() {
    super();
    this.internals_ = this.attachInternals();
    this.internals_.ariaOrientation = "vertical";
  }
  // …
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
