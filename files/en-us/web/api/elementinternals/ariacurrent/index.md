---
title: ElementInternals.ariaCurrent
slug: Web/API/ElementInternals/ariaCurrent
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - ariaCurrent
  - AriaAttributes
  - AriaMixin
  - ElementInternals
browser-compat: api.ElementInternals.ariaCurrent
---
{{DefaultAPISidebar("DOM")}}

The **`ariaCurrent`** property of the {{domxref("ElementInternals")}} interface reflects the value of the [`aria-current`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-current) attribute, which indicates the element that represents the current item within a container or set of related elements.

> **Note:** Setting aria attributes on `ElementInternals` allows default semantics to be defined on a custom element. These may be overwritten by author-defined attributes, but ensure that default semantics are retained should the author delete those attributes, or fail to add them at all. For more information see the [Accessibility Object Model explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Value

A string with one of the following values:

- `"page"`
  - : Represents the current page within a set of pages.
- `"step"`
  - : Represents the current step within a process.
- `"location"`
  - : Represents the current location, for example the current page in a breadcrumbs hierarchy.
- `"date"`
  - : Represents the current date within a collection of dates.
- `"time"`
  - : Represents the current time within a set of times.
- `"true"`
  - : Represents the current item within a set.
- `"false"`
  - : Does not represent the current item within a set.

## Examples

In this example the value of `ariaCurrent` is set to "page".

```js
this.internals_.ariaCurrent = "page";
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the aria-current attribute](https://tink.uk/using-the-aria-current-attribute/)
