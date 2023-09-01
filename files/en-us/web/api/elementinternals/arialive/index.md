---
title: "ElementInternals: ariaLive property"
short-title: ariaLive
slug: Web/API/ElementInternals/ariaLive
page-type: web-api-instance-property
browser-compat: api.ElementInternals.ariaLive
---

{{APIRef("DOM")}}

The **`ariaLive`** property of the {{domxref("ElementInternals")}} interface reflects the value of the [`aria-live`](/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions) attribute, which indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.

> **Note:** Setting aria attributes on `ElementInternals` allows default semantics to be defined on a custom element. These may be overwritten by author-defined attributes, but ensure that default semantics are retained should the author delete those attributes, or fail to add them at all. For more information see the [Accessibility Object Model explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Value

A string with one of the following values:

- `"assertive"`
  - : Indicates that updates to the region have the highest priority and should be presented the user immediately.
- `"off"`
  - : Indicates that updates to the region should not be presented to the user unless the user is currently focused on that region.
- `"polite"`
  - : Indicates that updates to the region should be presented at the next graceful opportunity, such as at the end of speaking the current sentence or when the user pauses typing.

## Examples

In this example the value of `ariaLive` is set to "assertive".

```js
this.internals_.ariaLive = "assertive";
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
