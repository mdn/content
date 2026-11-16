---
title: "ElementInternals: ariaDisabled property"
short-title: ariaDisabled
slug: Web/API/ElementInternals/ariaDisabled
page-type: web-api-instance-property
browser-compat: api.ElementInternals.ariaDisabled
---

{{APIRef("Web Components")}}

The **`ariaDisabled`** property of the {{domxref("ElementInternals")}} interface reflects the value of the [`aria-disabled`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-disabled) attribute, which indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.

> [!NOTE]
> Setting aria attributes on `ElementInternals` allows default semantics to be defined on a custom element. These may be overwritten by author-defined attributes, but ensure that default semantics are retained should the author delete those attributes, or fail to add them at all. For more information see the [Accessibility Object Model explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Value

A string with one of the following values:

- `"true"`
  - : The element and all focusable descendants are disabled, but perceivable, and their values cannot be changed by the user.
- `"false"`
  - : The element is enabled.

## Examples

In this example the value of `ariaDisabled` is set to "true".

```js
class CustomControl extends HTMLElement {
  constructor() {
    super();
    this.internals_ = this.attachInternals();
    this.internals_.ariaDisabled = "true";
  }
  // …
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
