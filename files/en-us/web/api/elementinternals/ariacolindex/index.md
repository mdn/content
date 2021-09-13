---
title: ElementInternals.ariaColIndex
slug: Web/API/ElementInternals/ariaColIndex
tags:
  - API
  - Property
  - Reference
  - ariaColIndex
  - AriaAttributes
  - AriaMixin
  - ElementInternals
browser-compat: api.ElementInternals.ariaColIndex
---
{{DefaultAPISidebar("DOM")}}

The **`ariaColIndex`** property of the {{domxref("ElementInternals")}} interface reflects the value of the `aria-colindex` attribute, which defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.

> **Note:** Setting aria attributes on `ElementInternals` allows default semantics to be defined on a custom element. These may be overwritten by author-defined attributes, but ensure that default semantics are retained should the author delete those attributes, or fail to add them at all. For more information see the [Accessibility Object Model explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Syntax

```js
let ariaColIndex = ElementInternals.ariaColIndex;
ElementInternals.ariaColIndex = ariaColIndex;
```

### Value

A {{domxref("DOMString")}} which contains an integer.

## Examples

In this example the value of `ariaColIndex` is set to "2".

```js
this.internals_.ariaColIndex = "2";
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [ARIA: table role](/en-US/docs/Web/Accessibility/ARIA/Roles/Table_Role)
