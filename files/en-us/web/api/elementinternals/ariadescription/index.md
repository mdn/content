---
title: ElementInternals.ariaDescription
slug: Web/API/ElementInternals/ariaDescription
tags:
  - API
  - Property
  - Reference
  - ariaDescription
  - AriaAttributes
  - AriaMixin
  - ElementInternals
browser-compat: api.ElementInternals.ariaDescription
---
{{DefaultAPISidebar("DOM")}}

The **`ariaDescription`** property of the {{domxref("ElementInternals")}} interface reflects the value of the [`aria-description`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-description) attribute, which defines a string value that describes or annotates the current element.

> **Note:** Setting aria attributes on `ElementInternals` allows default semantics to be defined on a custom element. These may be overwritten by author-defined attributes, but ensure that default semantics are retained should the author delete those attributes, or fail to add them at all. For more information see the [Accessibility Object Model explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Syntax

```js
let ariaDescription = ElementInternals.ariaDescription;
ElementInternals.ariaDescription = ariaDescription;
```

### Value

A {{domxref("DOMString")}}.

## Examples

In this example the value of `ariaDescription` is set to "A description of this widget".

```js
this.internals_.ariaDescription = "A description of this widget";
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
