---
title: ElementInternals.ariaKeyShortcuts
slug: Web/API/ElementInternals/ariaKeyShortcuts
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - ariaKeyShortcuts
  - AriaAttributes
  - AriaMixin
  - ElementInternals
browser-compat: api.ElementInternals.ariaKeyShortcuts
---
{{DefaultAPISidebar("DOM")}}

The **`ariaKeyShortcuts`** property of the {{domxref("ElementInternals")}} interface reflects the value of the [`aria-keyshortcuts`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-keyshortcuts) attribute, which indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.

> **Note:** Setting aria attributes on `ElementInternals` allows default semantics to be defined on a custom element. These may be overwritten by author-defined attributes, but ensure that default semantics are retained should the author delete those attributes, or fail to add them at all. For more information see the [Accessibility Object Model explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Value

A string.

## Examples

In this example the value of `ariaKeyShortcuts` is set to "Alt+Shift+A".

```js
this.internals_.ariaKeyShortcuts = "Alt+Shift+A";
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
