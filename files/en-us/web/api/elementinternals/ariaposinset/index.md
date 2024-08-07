---
title: "ElementInternals: ariaPosInSet property"
short-title: ariaPosInSet
slug: Web/API/ElementInternals/ariaPosInSet
page-type: web-api-instance-property
browser-compat: api.ElementInternals.ariaPosInSet
---

{{APIRef("Web Components")}}

The **`ariaPosInSet`** property of the {{domxref("ElementInternals")}} interface reflects the value of the [`aria-posinset`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-posinset) attribute, which defines an element's number or position in the current set of listitems or treeitems.

> [!NOTE]
> Setting aria attributes on `ElementInternals` allows default semantics to be defined on a custom element. These may be overwritten by author-defined attributes, but ensure that default semantics are retained should the author delete those attributes, or fail to add them at all. For more information see the [Accessibility Object Model explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Value

A string containing an integer.

## Examples

In this example the value of `ariaPosInSet` is set to "2".

```js
this.internals_.ariaPosInSet = "2";
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
