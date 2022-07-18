---
title: ElementInternals.ariaHidden
slug: Web/API/ElementInternals/ariaHidden
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - ariaHidden
  - AriaAttributes
  - AriaMixin
  - ElementInternals
browser-compat: api.ElementInternals.ariaHidden
---
{{DefaultAPISidebar("DOM")}}

The **`ariaHidden`** property of the {{domxref("ElementInternals")}} interface reflects the value of the [`aria-hidden`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-hidden)) attribute, which indicates whether the element is exposed to an accessibility API.

> **Note:** Setting aria attributes on `ElementInternals` allows default semantics to be defined on a custom element. These may be overwritten by author-defined attributes, but ensure that default semantics are retained should the author delete those attributes, or fail to add them at all. For more information see the [Accessibility Object Model explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Value

A string with one of the following values:

- `"true"`
  - : The element is hidden from the accessibility API.
- `"false"`
  - : The element is exposed to the accessibility API as if it were rendered.
- `undefined`
  - : The element's hidden state is determined by the user agent based on whether it is rendered.

## Examples

In this example the value of `ariaHidden` is set to "true".

```js
this.internals_.ariaHidden = "true";
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
