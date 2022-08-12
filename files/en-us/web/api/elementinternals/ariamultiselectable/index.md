---
title: ElementInternals.ariaMultiSelectable
slug: Web/API/ElementInternals/ariaMultiSelectable
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - ariaMultiSelectable
  - AriaAttributes
  - AriaMixin
  - ElementInternals
browser-compat: api.ElementInternals.ariaMultiSelectable
---
{{DefaultAPISidebar("DOM")}}

The **`ariaMultiSelectable`** property of the {{domxref("ElementInternals")}} interface reflects the value of the [`aria-multiselectable`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-multiselectable) attribute, which indicates that the user may select more than one item from the current selectable descendants.

> **Note:** Setting aria attributes on `ElementInternals` allows default semantics to be defined on a custom element. These may be overwritten by author-defined attributes, but ensure that default semantics are retained should the author delete those attributes, or fail to add them at all. For more information see the [Accessibility Object Model explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Value

A string with one of the following values:

- `"true"`
  - : More than one item may be selected at a time.
- `"false"`
  - : Only one item may be selected.

## Examples

In this example the value of `ariaMultiSelectable` is set to "true".

```js
this.internals_.ariaMultiSelectable = "true";
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [ARIA: listbox role](/en-US/docs/Web/Accessibility/ARIA/Roles/listbox_role)
