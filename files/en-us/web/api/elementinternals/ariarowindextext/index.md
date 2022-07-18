---
title: ElementInternals.ariaRowIndexText
slug: Web/API/ElementInternals/ariaRowIndexText
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - ariaRowIndexText
  - AriaAttributes
  - AriaMixin
  - ElementInternals
browser-compat: api.ElementInternals.ariaRowIndexText
---
{{DefaultAPISidebar("DOM")}}

The **`ariaRowIndexText`** property of the {{domxref("ElementInternals")}} interface reflects the value of the [`aria-rowindextext`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-rowindextext) attribute, which defines a human readable text alternative of aria-rowindex.

> **Note:** Setting aria attributes on `ElementInternals` allows default semantics to be defined on a custom element. These may be overwritten by author-defined attributes, but ensure that default semantics are retained should the author delete those attributes, or fail to add them at all. For more information see the [Accessibility Object Model explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Value

A string.

## Examples

In this example the value of `ariaRowIndexText` is set to "Heading row".

```js
this.internals_.ariaRowIndexText = "Heading row";
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [ARIA: table role](/en-US/docs/Web/Accessibility/ARIA/Roles/table_role)
