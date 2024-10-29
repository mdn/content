---
title: "ElementInternals: ariaHasPopup property"
short-title: ariaHasPopup
slug: Web/API/ElementInternals/ariaHasPopup
page-type: web-api-instance-property
browser-compat: api.ElementInternals.ariaHasPopup
---

{{APIRef("Web Components")}}

The **`ariaHasPopup`** property of the {{domxref("ElementInternals")}} interface reflects the value of the [`aria-haspopup`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup) attribute, which indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.

> [!NOTE]
> Setting aria attributes on `ElementInternals` allows default semantics to be defined on a custom element. These may be overwritten by author-defined attributes, but ensure that default semantics are retained should the author delete those attributes, or fail to add them at all. For more information see the [Accessibility Object Model explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Value

A string with one of the following values:

- `"false"`
  - : The element does not have a popup.
- `"true"`
  - : The element has a popup that is a menu.
- `"menu"`
  - : The element has a popup that is a menu.
- `"listbox"`
  - : The element has a popup that is a listbox.
- `"tree"`
  - : The element has a popup that is a tree.
- `"grid"`
  - : The element has a popup that is a grid.
- `"dialog"`
  - : The element has a popup that is a dialog.

## Examples

In this example the value of `ariaHasPopup` is set to "true".

```js
this.internals_.ariaHasPopup = "true";
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
