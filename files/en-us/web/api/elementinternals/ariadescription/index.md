---
title: "ElementInternals: ariaDescription property"
short-title: ariaDescription
slug: Web/API/ElementInternals/ariaDescription
page-type: web-api-instance-property
browser-compat: api.ElementInternals.ariaDescription
---

{{APIRef("Web Components")}}

The **`ariaDescription`** property of the {{domxref("ElementInternals")}} interface reflects the value of the [`aria-description`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-description) attribute, which defines a string value that describes or annotates the current element.

> [!NOTE]
> Setting aria attributes on `ElementInternals` allows default semantics to be defined on a custom element. These may be overwritten by author-defined attributes, but ensure that default semantics are retained should the author delete those attributes, or fail to add them at all. For more information see the [Accessibility Object Model explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Value

A string.

## Examples

In this example the value of `ariaDescription` is set to "A description of this widget".

```js
class CustomControl extends HTMLElement {
  constructor() {
    super();
    this.internals_ = this.attachInternals();
    this.internals_.ariaDescription = "A description of this widget";
  }
  // …
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
