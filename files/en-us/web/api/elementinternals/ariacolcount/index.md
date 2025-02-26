---
title: "ElementInternals: ariaColCount property"
short-title: ariaColCount
slug: Web/API/ElementInternals/ariaColCount
page-type: web-api-instance-property
browser-compat: api.ElementInternals.ariaColCount
---

{{APIRef("Web Components")}}

The **`ariaColCount`** property of the {{domxref("ElementInternals")}} interface reflects the value of the [`aria-colcount`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-colcount) attribute, which defines the number of columns in a table, grid, or treegrid.

> [!NOTE]
> Setting aria attributes on `ElementInternals` allows default semantics to be defined on a custom element. These may be overwritten by author-defined attributes, but ensure that default semantics are retained should the author delete those attributes, or fail to add them at all. For more information see the [Accessibility Object Model explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Value

A string.

## Examples

In this example the [`aria-colcount`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-colcount) attribute is set to "3".

```js
this.internals_.ariaColCount = "3";
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [ARIA: table role](/en-US/docs/Web/Accessibility/ARIA/Roles/table_role)
