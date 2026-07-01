---
title: "ElementInternals: ariaReadOnly property"
short-title: ariaReadOnly
slug: Web/API/ElementInternals/ariaReadOnly
page-type: web-api-instance-property
browser-compat: api.ElementInternals.ariaReadOnly
---

{{APIRef("Web Components")}}

The **`ariaReadOnly`** property of the {{domxref("ElementInternals")}} interface reflects the value of the [`aria-readonly`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-readonly) attribute, which indicates that the element is not editable, but is otherwise operable.

> [!NOTE]
> Setting aria attributes on `ElementInternals` allows default semantics to be defined on a custom element. These may be overwritten by author-defined attributes, but ensure that default semantics are retained should the author delete those attributes, or fail to add them at all. For more information see the [Accessibility Object Model explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Value

A string with one of the following values:

- `"true"`
  - : The user cannot change the value of the element.
- `"false"`
  - : The user can set the value of the element.

## Examples

In this example the value of `ariaReadOnly` is set to "true".

```js
class CustomControl extends HTMLElement {
  constructor() {
    super();
    this.internals_ = this.attachInternals();
    this.internals_.ariaReadonly = "true";
  }
  // …
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [ARIA: textbox role](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role)
