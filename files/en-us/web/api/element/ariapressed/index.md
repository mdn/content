---
title: "Element: ariaPressed property"
short-title: ariaPressed
slug: Web/API/Element/ariaPressed
page-type: web-api-instance-property
browser-compat: api.Element.ariaPressed
---

{{APIRef("DOM")}}

The **`ariaPressed`** property of the {{domxref("Element")}} interface reflects the value of the [`aria-pressed`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-pressed) attribute, which indicates the current "pressed" state of toggle buttons.

> [!NOTE]
> Where possible use an HTML {{htmlelement("input")}} element with `type="button"` or the {{htmlelement("button")}} element as these have built in semantics and do not require ARIA attributes.

## Value

A string with one of the following values:

- `"true"`
  - : The element is pressed.
- `"false"`
  - : The element supports being pressed but is not currently pressed.
- `"mixed"`
  - : Indicates a mixed mode value for a tri-state toggle button.
- `"undefined"`
  - : The element does not support being pressed.

## Examples

In this example the `aria-pressed` attribute on the element with an ID of `saveChanges` is set to "false" indicating that this input is currently not pressed. Using `ariaPressed` we update the value to "true".

```html
<div id="saveChanges" tabindex="0" role="button" aria-pressed="false">Save</div>
```

```js
let el = document.getElementById("saveChanges");
console.log(el.ariaPressed); // "false"
el.ariaPressed = "true";
console.log(el.ariaPressed); // "true"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [ARIA: button role](/en-US/docs/Web/Accessibility/ARIA/Roles/button_role)
