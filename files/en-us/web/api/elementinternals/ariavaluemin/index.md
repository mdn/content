---
title: ElementInternals.ariaValueMin
slug: Web/API/ElementInternals/ariaValueMin
tags:
  - API
  - Property
  - Reference
  - ariaValueMin
  - AriaAttributes
  - AriaMixin
  - ElementInternals
browser-compat: api.ElementInternals.ariaValueMin
---
{{DefaultAPISidebar("DOM")}}

The **`ariaValueMin`** property of the {{domxref("ElementInternals")}} interface reflects the value of the [`aria-valuemin`](/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-valuemin_attribute) attribute, which defines the minimum allowed value for a range widget.

> **Note:** Setting aria attributes on `ElementInternals` allows default semantics to be defined on a custom element. These may be overwritten by author-defined attributes, but ensure that default semantics are retained should the author delete those attributes, or fail to add them at all. For more information see the [Accessibility Object Model explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Syntax

```js
let ariaValueMin = ElementInternals.ariaValueMin;
ElementInternals.ariaValueMin = ariaValueMin;
```

### Value

A {{domxref("DOMString")}} which contains a number.

## Examples

In this example the value of `ariaValueMin` is set to "10".

```js
this.internals_.ariaValueMin = "10";
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
