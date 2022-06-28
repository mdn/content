---
title: ElementInternals.ariaColSpan
slug: Web/API/ElementInternals/ariaColSpan
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - ariaColSpan
  - AriaAttributes
  - AriaMixin
  - ElementInternals
browser-compat: api.ElementInternals.ariaColSpan
---
{{DefaultAPISidebar("DOM")}}

The **`ariaColSpan`** property of the {{domxref("ElementInternals")}} interface reflects the value of the [`aria-colspan`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-colspan) attribute, which defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.

> **Note:** Setting aria attributes on `ElementInternals` allows default semantics to be defined on a custom element. These may be overwritten by author-defined attributes, but ensure that default semantics are retained should the author delete those attributes, or fail to add them at all. For more information see the [Accessibility Object Model explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Value

A string which contains an integer.

## Examples

In this example the value of `ariaColspan` is set to "2".

```js
this.internals_.ariaColspan = "2";
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [ARIA: table role](/en-US/docs/Web/Accessibility/ARIA/Roles/table_role)
