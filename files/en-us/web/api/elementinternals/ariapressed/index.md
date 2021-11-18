---
title: ElementInternals.ariaPressed
slug: Web/API/ElementInternals/ariaPressed
tags:
  - API
  - Property
  - Reference
  - ariaPressed
  - AriaAttributes
  - AriaMixin
  - ElementInternals
browser-compat: api.ElementInternals.ariaPressed
---
{{DefaultAPISidebar("DOM")}}

The **`ariaPressed`** property of the {{domxref("ElementInternals")}} interface reflects the value of the [`aria-pressed`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-pressed) attribute, which indicates the current "pressed" state of toggle buttons.

> **Note:** Setting aria attributes on `ElementInternals` allows default semantics to be defined on a custom element. These may be overwritten by author-defined attributes, but ensure that default semantics are retained should the author delete those attributes, or fail to add them at all. For more information see the [Accessibility Object Model explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Syntax

```js
let ariaPressed = ElementInternals.ariaPressed;
ElementInternals.ariaPressed = ariaPressed;
```

### Value

A {{domxref("DOMString")}} with one of the following values:

- `"true"`
  - : The element is pressed.
- `"false"`
  - : The element supports being pressed but is not currently pressed.
- `"mixed"`
  - : Indicates a mixed mode value for a tri-state toggle button.
- `"undefined"`
  - : The element does not support being pressed.

## Examples

In this example the value of `ariaPressed` is set to "true".

```js
this.internals_.ariaPressed = "true";
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [ARIA: button role](/en-US/docs/Web/Accessibility/ARIA/Roles/button_role)
