---
title: ElementInternals.ariaValueNow
slug: Web/API/ElementInternals/ariaValueNow
tags:
  - API
  - Property
  - Reference
  - ariaValueNow
  - AriaAttributes
  - AriaMixin
  - ElementInternals
browser-compat: api.ElementInternals.ariaValueNow
---
{{DefaultAPISidebar("DOM")}}

The **`ariaValueNow`** property of the {{domxref("ElementInternals")}} interface reflects the value of the [`aria-valuenow`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow) attribute, which defines the current value for a range widget.

> **Note:** Setting aria attributes on `ElementInternals` allows default semantics to be defined on a custom element. These may be overwritten by author-defined attributes, but ensure that default semantics are retained should the author delete those attributes, or fail to add them at all. For more information see the [Accessibility Object Model explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Syntax

```js
let ariaValueNow = ElementInternals.ariaValueNow;
ElementInternals.ariaValueNow = ariaValueNow;
```

### Value

A {{domxref("DOMString")}} which contains a number.

## Examples

In this example the value of `ariaValueNow` is set to "1".

```js
this.internals_.ariaValueNow = "1";
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
