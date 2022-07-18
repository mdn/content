---
title: ElementInternals.ariaValueMax
slug: Web/API/ElementInternals/ariaValueMax
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - ariaValueMax
  - AriaAttributes
  - AriaMixin
  - ElementInternals
browser-compat: api.ElementInternals.ariaValueMax
---
{{DefaultAPISidebar("DOM")}}

The **`ariaValueMax`** property of the {{domxref("ElementInternals")}} interface reflects the value of the [`aria-valuemax`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax) attribute, which defines the maximum allowed value for a range widget.

> **Note:** Setting aria attributes on `ElementInternals` allows default semantics to be defined on a custom element. These may be overwritten by author-defined attributes, but ensure that default semantics are retained should the author delete those attributes, or fail to add them at all. For more information see the [Accessibility Object Model explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Value

A string which contains a number.

## Examples

In this example the value of `ariaValueMax` is set to "20".

```js
this.internals_.ariaValueMax = "20";
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
