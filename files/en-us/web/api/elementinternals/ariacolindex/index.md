---
title: "ElementInternals: ariaColIndex property"
short-title: ariaColIndex
slug: Web/API/ElementInternals/ariaColIndex
page-type: web-api-instance-property
browser-compat: api.ElementInternals.ariaColIndex
---

{{APIRef("Web Components")}}

The **`ariaColIndex`** property of the {{domxref("ElementInternals")}} interface reflects the value of the [`aria-colindex`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex) attribute, which defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.

> [!NOTE]
> Setting aria attributes on `ElementInternals` allows default semantics to be defined on a custom element. These may be overwritten by author-defined attributes, but ensure that default semantics are retained should the author delete those attributes, or fail to add them at all. For more information see the [Accessibility Object Model explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Value

A string which contains an integer.

## Examples

In this example the value of `ariaColIndex` is set to "2".

```js
class CustomControl extends HTMLElement {
  constructor() {
    super();
    this.internals_ = this.attachInternals();
    this.internals_.ariaColIndex = "2";
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
