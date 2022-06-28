---
title: ElementInternals.ariaModal
slug: Web/API/ElementInternals/ariaModal
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - ariaModal
  - AriaAttributes
  - AriaMixin
  - ElementInternals
browser-compat: api.ElementInternals.ariaModal
---
{{DefaultAPISidebar("DOM")}}

The **`ariaModal`** property of the {{domxref("ElementInternals")}} interface reflects the value of the [`aria-modal`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-modal) attribute, which indicates whether an element is modal when displayed.

> **Note:** Setting aria attributes on `ElementInternals` allows default semantics to be defined on a custom element. These may be overwritten by author-defined attributes, but ensure that default semantics are retained should the author delete those attributes, or fail to add them at all. For more information see the [Accessibility Object Model explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Value

A string with one of the following values:

- `"true"`
  - : The element is modal.
- `"false"`
  - : The element is not modal.

## Examples

In this example the value of `ariaModal` is set to "true".

```js
this.internals_.ariaModal = "true";
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [ARIA: dialog role](/en-US/docs/Web/Accessibility/ARIA/Roles/dialog_role)
