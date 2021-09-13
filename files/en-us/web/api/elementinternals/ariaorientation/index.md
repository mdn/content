---
title: ElementInternals.ariaOrientation
slug: Web/API/ElementInternals/ariaOrientation
tags:
  - API
  - Property
  - Reference
  - ariaOrientation
  - AriaAttributes
  - AriaMixin
  - ElementInternals
browser-compat: api.ElementInternals.ariaOrientation
---
{{DefaultAPISidebar("DOM")}}

The **`ariaOrientation`** property of the {{domxref("ElementInternals")}} interface reflects the value of the [`aria-orientation`](/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-orientation_attribute) attribute, which indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.

> **Note:** Setting aria attributes on `ElementInternals` allows default semantics to be defined on a custom element. These may be overwritten by author-defined attributes, but ensure that default semantics are retained should the author delete those attributes, or fail to add them at all. For more information see the [Accessibility Object Model explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Syntax

```js
let ariaOrientation = ElementInternals.ariaOrientation;
ElementInternals.ariaOrientation = ariaOrientation;
```

### Value

A {{domxref("DOMString")}} with one of the following values:

- `"horizontal"`
  - : The element is horizontal.
- `"vertical"`
  - : The element is vertical.
- `"undefined"`
  - : The element's orientation is unknown.

## Examples

In this example the value of `ariaOrientation` is set to "vertical".

```js
this.internals_.ariaOrientation = "vertical";
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
