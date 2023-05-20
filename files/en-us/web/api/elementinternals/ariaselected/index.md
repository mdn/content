---
title: "ElementInternals: ariaSelected property"
short-title: ariaSelected
slug: Web/API/ElementInternals/ariaSelected
page-type: web-api-instance-property
browser-compat: api.ElementInternals.ariaSelected
---

{{APIRef("DOM")}}

The **`ariaSelected`** property of the {{domxref("ElementInternals")}} interface reflects the value of the [`aria-selected`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-selected) attribute, which indicates the current "selected" state of elements that have a selected state.

> **Note:** Setting aria attributes on `ElementInternals` allows default semantics to be defined on a custom element. These may be overwritten by author-defined attributes, but ensure that default semantics are retained should the author delete those attributes, or fail to add them at all. For more information see the [Accessibility Object Model explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Value

A string with one of the following values:

- `"true"`
  - : The item is selected.
- `"false"`
  - : The item is not selected.
- `"undefined"`
  - : The item is not

## Examples

In this example the value of `ariaSelected` is set to "true".

```js
this.internals_.ariaSelected = "true";
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [ARIA: tab role](/en-US/docs/Web/Accessibility/ARIA/Roles/tab_role)
