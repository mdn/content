---
title: "ElementInternals: ariaSetSize property"
short-title: ariaSetSize
slug: Web/API/ElementInternals/ariaSetSize
page-type: web-api-instance-property
browser-compat: api.ElementInternals.ariaSetSize
---

{{APIRef("Web Components")}}

The **`ariaSetSize`** property of the {{domxref("ElementInternals")}} interface reflects the value of the [`aria-setsize`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-setsize) attribute, which defines the number of items in the current set of listitems or treeitems.

> [!NOTE]
> Setting aria attributes on `ElementInternals` allows default semantics to be defined on a custom element. These may be overwritten by author-defined attributes, but ensure that default semantics are retained should the author delete those attributes, or fail to add them at all. For more information see the [Accessibility Object Model explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Value

A string containing an integer.

## Examples

In this example the value of `ariaSetSize` is set to "4".

```js
this.internals_.ariaSetSize = "4";
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [ARIA: tab role](/en-US/docs/Web/Accessibility/ARIA/Roles/tab_role)
