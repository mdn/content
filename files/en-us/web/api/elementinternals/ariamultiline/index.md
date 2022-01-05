---
title: ElementInternals.ariaMultiline
slug: Web/API/ElementInternals/ariaMultiline
tags:
  - API
  - Property
  - Reference
  - ariaMultiline
  - AriaAttributes
  - AriaMixin
  - ElementInternals
browser-compat: api.ElementInternals.ariaMultiline
---
{{DefaultAPISidebar("DOM")}}

The **`ariaMultiline`** property of the {{domxref("ElementInternals")}} interface reflects the value of the [`aria-multiline`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-multiline) attribute, which indicates whether a text box accepts multiple lines of input or only a single line.

> **Note:** Setting aria attributes on `ElementInternals` allows default semantics to be defined on a custom element. These may be overwritten by author-defined attributes, but ensure that default semantics are retained should the author delete those attributes, or fail to add them at all. For more information see the [Accessibility Object Model explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Syntax

```js
let ariaMultiline = ElementInternals.ariaMultiline;
ElementInternals.ariaMultiline = ariaMultiline;
```

### Value

A {{domxref("DOMString")}} with one of the following values:

- `"true"`
  - : This is a multi-line text box.
- `"false"`
  - : This is a single-line text box.

## Examples

In this example the value of `ariaMultiline` is set to "true".

```js
this.internals_.ariaMultiline = "true";
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [ARIA: textbox role](/en-US/docs/Web/Accessibility/ARIA/Roles/textbox_role)
