---
title: ElementInternals.ariaColIndexText
slug: Web/API/ElementInternals/ariaColIndexText
page-type: web-api-instance-property
browser-compat: api.ElementInternals.ariaColIndexText
---

{{APIRef("Web Components")}}

The **`ariaColIndexText`** property of the {{domxref("ElementInternals")}} interface reflects the value of the [`aria-colindextext`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindextext) attribute, which defines a human readable text alternative of aria-colindex.

> [!NOTE]
> Setting aria attributes on `ElementInternals` allows default semantics to be defined on a custom element. These may be overwritten by author-defined attributes, but ensure that default semantics are retained should the author delete those attributes, or fail to add them at all. For more information see the [Accessibility Object Model explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Value

A string.

## Examples

In this example the value of `ariaColIndexText` is set to "Column name".

```js
class CustomEl extends HTMLElement {
  constructor() {
    super();
    this.internals_ = this.attachInternals();
    this.internals_.ariaColIndexText = "Column name";
  }
  // …
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [ARIA: table role](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/table_role)
