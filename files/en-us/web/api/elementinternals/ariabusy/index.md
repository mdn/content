---
title: ElementInternals.ariaBusy
slug: Web/API/ElementInternals/ariaBusy
tags:
  - API
  - Property
  - Reference
  - ariaBusy
  - AriaAttributes
  - AriaMixin
  - ElementInternals
browser-compat: api.ElementInternals.ariaBusy
---
{{DefaultAPISidebar("DOM")}}

The **`ariaBusy`** property of the {{domxref("ElementInternals")}} interface reflects the value of the `aria-busy` attribute, which indicates whether an element is being modified, as assistive technologies may want to wait until the modifications are complete before exposing them to the user.

> **Note:** Setting aria attributes on `ElementInternals` allows default semantics to be defined on a custom element. These may be overwritten by author-defined attributes, but ensure that default semantics are retained should the author delete those attributes, or fail to add them at all. For more information see the [Accessibility Object Model explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Syntax

```js
let ariaBusy = ElementInternals.ariaBusy;
ElementInternals.ariaBusy = ariaBusy;
```

### Value

A {{domxref("DOMString")}} with one of the following values:

- `"true"`
  - : The element is being updated.
- `"false"`
  - : There are no expected updates for the element.

## Examples

In this example the value of `ariaBusy` is set to "true".

```js
this.internals_.ariaBusy = "true";
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
