---
title: "ElementInternals: ariaRoleDescription property"
short-title: ariaRoleDescription
slug: Web/API/ElementInternals/ariaRoleDescription
page-type: web-api-instance-property
browser-compat: api.ElementInternals.ariaRoleDescription
---

{{APIRef("Web Components")}}

The **`ariaRoleDescription`** property of the {{domxref("ElementInternals")}} interface reflects the value of the [`aria-roledescription`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-roledescription) attribute, which defines a human-readable, author-localized description for the role of an element.

> [!NOTE]
> Setting aria attributes on `ElementInternals` allows default semantics to be defined on a custom element. These may be overwritten by author-defined attributes, but ensure that default semantics are retained should the author delete those attributes, or fail to add them at all. For more information see the [Accessibility Object Model explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Value

A string.

## Examples

In this example the value of `ariaRoleDescription` is set to "My custom widget".

```js
this.internals_.ariaRoleDescription = "My custom widget";
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [ARIA: application role](/en-US/docs/Web/Accessibility/ARIA/Roles/application_role)
