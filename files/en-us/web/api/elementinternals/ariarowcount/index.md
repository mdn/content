---
title: "ElementInternals: ariaRowCount property"
short-title: ariaRowCount
slug: Web/API/ElementInternals/ariaRowCount
page-type: web-api-instance-property
browser-compat: api.ElementInternals.ariaRowCount
---

{{APIRef("Web Components")}}

The **`ariaRowCount`** property of the {{domxref("ElementInternals")}} interface reflects the value of the [`aria-rowcount`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowcount) attribute, which defines the total number of rows in a table, grid, or treegrid.

> [!NOTE]
> Setting aria attributes on `ElementInternals` allows default semantics to be defined on a custom element. These may be overwritten by author-defined attributes, but ensure that default semantics are retained should the author delete those attributes, or fail to add them at all. For more information see the [Accessibility Object Model explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Value

A string which contains an integer.

## Examples

In this example the value of `ariaRowCount` is set to "100".

```js
class CustomEl extends HTMLElement {
  constructor() {
    super();
    this.internals_ = this.attachInternals();
    this.internals_.ariaRowCount = "100";
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
