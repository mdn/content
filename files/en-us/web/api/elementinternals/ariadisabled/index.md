---
title: ElementInternals.ariaDisabled
slug: Web/API/ElementInternals/ariaDisabled
tags:
  - API
  - Property
  - Reference
  - ariaDisabled
  - AriaAttributes
  - AriaMixin
  - ElementInternals
browser-compat: api.ElementInternals.ariaDisabled
---
{{DefaultAPISidebar("DOM")}}

The **`ariaDisabled`** property of the {{domxref("ElementInternals")}} interface reflects the value of the [`aria-disabled`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-disabled) attribute, which indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.

> **Note:** Setting aria attributes on `ElementInternals` allows default semantics to be defined on a custom element. These may be overwritten by author-defined attributes, but ensure that default semantics are retained should the author delete those attributes, or fail to add them at all. For more information see the [Accessibility Object Model explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Syntax

```js
let ariaDisabled = ElementInternals.ariaDisabled;
ElementInternals.ariaDisabled = ariaDisabled;
```

### Value

A {{domxref("DOMString")}} with one of the following values:

- `"true"`
  - : The element and all focusable descendants are disabled, but perceivable, and their values cannot be changed by the user.
- `"false"`
  - : The element is enabled.

## Examples

In this example the value of `ariaDisabled` is set to "true".

```js
this.internals_.ariaDisabled = "true";
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
