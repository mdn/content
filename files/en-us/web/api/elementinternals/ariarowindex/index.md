---
title: ElementInternals.ariaRowIndex
slug: Web/API/ElementInternals/ariaRowIndex
tags:
  - API
  - Property
  - Reference
  - ariaRowIndex
  - AriaAttributes
  - AriaMixin
  - ElementInternals
browser-compat: api.ElementInternals.ariaRowIndex
---
{{DefaultAPISidebar("DOM")}}

The **`ariaRowIndex`** property of the {{domxref("ElementInternals")}} interface reflects the value of the `aria-rowindex` attribute, which defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.

> **Note:** Setting aria attributes on `ElementInternals` allows default semantics to be defined on a custom element. These may be overwritten by author-defined attributes, but ensure that default semantics are retained should the author delete those attributes, or fail to add them at all. For more information see the [Accessibility Object Model explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Syntax

```js
let ariaRowIndex = ElementInternals.ariaRowIndex;
ElementInternals.ariaRowIndex = ariaRowIndex;
```

### Value

A {{domxref("DOMString")}} which contains an integer.

## Examples

In this example the value of `ariaRowIndex` is set to "1".

```js
this.internals_.ariaRowIndex = "1";
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [ARIA: table role](/en-US/docs/Web/Accessibility/ARIA/Roles/Table_Role)
