---
title: Element.ariaPressed
slug: Web/API/Element/ariaPressed
tags:
  - API
  - Property
  - Reference
  - ariaPressed
  - AriaAttributes
  - AriaMixin
  - Element
browser-compat: api.Element.ariaPressed
---
{{DefaultAPISidebar("DOM")}}

The **`ariaPressed`** property of the {{domxref("Element")}} interface reflects the value of the `aria-pressed` attribute, which indicates the current "pressed" state of toggle buttons.

> **Note:** Where possible use an HTML {{htmlelement("input")}} element with `type="button"` or the {{htmlelement("button")}} element as these have built in semantics and do not require ARIA attributes.

## Syntax

    var ariaPressed = element.ariaPressed;
    element.ariaPressed = ariaPressed

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

In this example the `aria-pressed` attribute on the element with an ID of `saveChanges` is set to "false" indicating that this input is currently not pressed. Using `ariaPressed` we update the value to "true".

```html
<div id="saveChanges" tabindex="0" role="button" aria-pressed="false">Save</div>
```

```js
let el = document.getElementById('saveChanges');
console.log(el.ariaPressed); // "false"
el.ariaPressed = "true"
console.log(el.ariaPressed); // "true"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [ARIA: button role](/en-US/docs/Web/Accessibility/ARIA/Roles/button_role)
