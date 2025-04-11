---
title: "ElementInternals: ariaExpanded property"
short-title: ariaExpanded
slug: Web/API/ElementInternals/ariaExpanded
page-type: web-api-instance-property
browser-compat: api.ElementInternals.ariaExpanded
---

{{APIRef("Web Components")}}

The **`ariaExpanded`** property of the {{domxref("ElementInternals")}} interface reflects the value of the [`aria-expanded`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) attribute, which indicates whether a grouping element owned or controlled by this element is expanded or collapsed.

> [!NOTE]
> Setting aria attributes on `ElementInternals` allows default semantics to be defined on a custom element. These may be overwritten by author-defined attributes, but ensure that default semantics are retained should the author delete those attributes, or fail to add them at all. For more information see the [Accessibility Object Model explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Value

A string with one of the following values:

- `"true"`
  - : The grouping element this element owns or controls is expanded.
- `"false"`
  - : The grouping element this element owns or controls is collapsed.
- `"undefined"`
  - : The element does not own or control a grouping element that is expandable.

## Examples

In this example the value of `ariaExpanded` is set to "true".

```js
class CustomControl extends HTMLElement {
  constructor() {
    super();
    this.internals_ = this.attachInternals();
    this.internals_.ariaInvalid = "true";
  }
  // …
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
