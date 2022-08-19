---
title: ElementInternals.ariaRowCount
slug: Web/API/ElementInternals/ariaRowCount
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - ariaRowCount
  - AriaAttributes
  - AriaMixin
  - ElementInternals
browser-compat: api.ElementInternals.ariaRowCount
---
{{DefaultAPISidebar("DOM")}}

The **`ariaRowCount`** property of the {{domxref("ElementInternals")}} interface reflects the value of the [`aria-rowcount`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-rowcount) attribute, which defines the total number of rows in a table, grid, or treegrid.

> **Note:** Setting aria attributes on `ElementInternals` allows default semantics to be defined on a custom element. These may be overwritten by author-defined attributes, but ensure that default semantics are retained should the author delete those attributes, or fail to add them at all. For more information see the [Accessibility Object Model explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Value

A string which contains an integer.

## Examples

In this example the value of `ariaRowCount` is set to "100".

```js
this.internals_.ariaRowCount = "100";
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

- [ARIA: table role](/en-US/docs/Web/Accessibility/ARIA/Roles/table_role)
