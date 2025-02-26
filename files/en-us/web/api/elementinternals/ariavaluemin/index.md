---
title: "ElementInternals: ariaValueMin property"
short-title: ariaValueMin
slug: Web/API/ElementInternals/ariaValueMin
page-type: web-api-instance-property
browser-compat: api.ElementInternals.ariaValueMin
---

{{APIRef("Web Components")}}

The **`ariaValueMin`** property of the {{domxref("ElementInternals")}} interface reflects the value of the [`aria-valuemin`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin) attribute, which defines the minimum allowed value for a range widget.

> [!NOTE]
> Setting aria attributes on `ElementInternals` allows default semantics to be defined on a custom element. These may be overwritten by author-defined attributes, but ensure that default semantics are retained should the author delete those attributes, or fail to add them at all. For more information see the [Accessibility Object Model explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Value

A string which contains a number.

## Examples

In this example the value of `ariaValueMin` is set to "10".

```js
this.internals_.ariaValueMin = "10";
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
