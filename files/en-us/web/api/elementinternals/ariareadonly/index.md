---
title: ElementInternals.ariaReadOnly
slug: Web/API/ElementInternals/ariaReadOnly
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - ariaReadOnly
  - AriaAttributes
  - AriaMixin
  - ElementInternals
browser-compat: api.ElementInternals.ariaReadOnly
---
{{DefaultAPISidebar("DOM")}}

The **`ariaReadOnly`** property of the {{domxref("ElementInternals")}} interface reflects the value of the [`aria-readonly`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-readonly) attribute, which indicates that the element is not editable, but is otherwise operable.

> **Note:** Setting aria attributes on `ElementInternals` allows default semantics to be defined on a custom element. These may be overwritten by author-defined attributes, but ensure that default semantics are retained should the author delete those attributes, or fail to add them at all. For more information see the [Accessibility Object Model explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Value

A string with one of the following values:

- `"true"`
  - : The user cannot change the value of the element.
- `"false"`
  - : The user can set the value of the element.

## Examples

In this example the value of `ariaReadOnly` is set to "true".

```js
this.internals_.ariaReadonly = "true";
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [ARIA: textbox role](/en-US/docs/Web/Accessibility/ARIA/Roles/textbox_role)
