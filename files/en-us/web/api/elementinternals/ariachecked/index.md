---
title: "ElementInternals: ariaChecked property"
short-title: ariaChecked
slug: Web/API/ElementInternals/ariaChecked
page-type: web-api-instance-property
browser-compat: api.ElementInternals.ariaChecked
---

{{APIRef("DOM")}}

The **`ariaChecked`** property of the {{domxref("ElementInternals")}} interface reflects the value of the [`aria-checked`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-checked) attribute, which indicates the current "checked" state of checkboxes, radio buttons, and other widgets that have a checked state.

> **Note:** Setting aria attributes on `ElementInternals` allows default semantics to be defined on a custom element. These may be overwritten by author-defined attributes, but ensure that default semantics are retained should the author delete those attributes, or fail to add them at all. For more information see the [Accessibility Object Model explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Value

A string with one of the following values:

- `"true"`
  - : The element is checked.
- `"mixed"`
  - : Indicates a mixed mode value for a tri-state checkbox or menuitemcheckbox.
- `"false"`
  - : The element supports being checked but is not currently checked.
- `"undefined"`
  - : The element does not support being checked.

## Examples

In this example the value of `ariaChecked` is set to "true".

```js
this.internals_.ariaChecked = "true";
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [ARIA: checkbox role](/en-US/docs/Web/Accessibility/ARIA/Roles/checkbox_role)
