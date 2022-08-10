---
title: ElementInternals.ariaLabel
slug: Web/API/ElementInternals/ariaLabel
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - ariaLabel
  - AriaAttributes
  - AriaMixin
  - ElementInternals
browser-compat: api.ElementInternals.ariaLabel
---
{{DefaultAPISidebar("DOM")}}

The **`ariaLabel`** property of the {{domxref("ElementInternals")}} interface reflects the value of the [`aria-label`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label)) attribute, which defines a string value that labels the current Element.

> **Note:** Setting aria attributes on `ElementInternals` allows default semantics to be defined on a custom element. These may be overwritten by author-defined attributes, but ensure that default semantics are retained should the author delete those attributes, or fail to add them at all. For more information see the [Accessibility Object Model explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Value

A string.

## Examples

In this example the value of `ariaLabel` is set to "close".

```js
this.internals_.ariaLabel = "close";
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
