---
title: ElementInternals.ariaPlaceholder
slug: Web/API/ElementInternals/ariaPlaceholder
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - ariaPlaceholder
  - AriaAttributes
  - AriaMixin
  - ElementInternals
browser-compat: api.ElementInternals.ariaPlaceholder
---
{{DefaultAPISidebar("DOM")}}

The **`ariaPlaceholder`** property of the {{domxref("ElementInternals")}} interface reflects the value of the [`aria-placeholder`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-placeholder) attribute, which defines a short hint intended to aid the user with data entry when the control has no value.

> **Note:** Setting aria attributes on `ElementInternals` allows default semantics to be defined on a custom element. These may be overwritten by author-defined attributes, but ensure that default semantics are retained should the author delete those attributes, or fail to add them at all. For more information see the [Accessibility Object Model explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Value

A string.

## Examples

In this example the value of `ariaPlaceholder` is set to "12345".

```js
this.internals_.ariaPlaceholder = "12345";
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [ARIA: textbox role](/en-US/docs/Web/Accessibility/ARIA/Roles/textbox_role)
