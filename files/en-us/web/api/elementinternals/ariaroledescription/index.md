---
title: ElementInternals.ariaRoleDescription
slug: Web/API/ElementInternals/ariaRoleDescription
tags:
  - API
  - Property
  - Reference
  - ariaRoleDescription
  - AriaAttributes
  - AriaMixin
  - ElementInternals
browser-compat: api.ElementInternals.ariaRoleDescription
---
{{DefaultAPISidebar("DOM")}}

The **`ariaRoleDescription`** property of the {{domxref("Element")}} interface reflects the value of the `aria-roledescription` attribute, which defines a human-readable, author-localized description for the role of an element.

> **Note:** Setting aria attributes on `ElementInternals` allows default semantics to be defined on a custom element. These may be overwritten by author-defined attributes, but ensure that default semantics are retained should the author delete those attributes, or fail to add them at all. For more information see the [Accessibility Object Model explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Syntax

```js
let ariaRoleDescription = ElementInternals.ariaRoleDescription;
ElementInternals.ariaRoleDescription = ariaRoleDescription;
```

### Value

A {{domxref("DOMString")}}.

## Examples

In this example the value of `ariaRoleDescription` is set to "My custom widget".

```js
this.internals_.ariaRoleDescription = "My custom widget";
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

- [ARIA: application role](/en-US/docs/Web/Accessibility/ARIA/Roles/Application_Role)
