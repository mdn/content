---
title: ElementInternals.ariaSetSize
slug: Web/API/ElementInternals/ariaSetSize
tags:
  - API
  - Property
  - Reference
  - ariaSetSize
  - AriaAttributes
  - AriaMixin
  - ElementInternals
browser-compat: api.ElementInternals.ariaSetSize
---
{{DefaultAPISidebar("DOM")}}

The **`ariaSetSize`** property of the {{domxref("ElementInternals")}} interface reflects the value of the [`aria-setsize`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-setsize) attribute, which defines the number of items in the current set of listitems or treeitems.

> **Note:** Setting aria attributes on `ElementInternals` allows default semantics to be defined on a custom element. These may be overwritten by author-defined attributes, but ensure that default semantics are retained should the author delete those attributes, or fail to add them at all. For more information see the [Accessibility Object Model explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Syntax

```js
let ariaSetSize = ElementInternals.ariaSetSize;
ElementInternals.ariaSetSize = ariaSetSize;
```

### Value

A {{domxref("DOMString")}} containing an integer.

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

- [ARIA: tab role](/en-US/docs/Web/Accessibility/ARIA/Roles/Tab_Role)
