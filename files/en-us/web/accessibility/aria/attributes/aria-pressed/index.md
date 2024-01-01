---
title: aria-pressed
slug: Web/Accessibility/ARIA/Attributes/aria-pressed
page-type: aria-attribute
spec-urls: https://w3c.github.io/aria/#aria-pressed
---

The `aria-pressed` attribute indicates the current "pressed" state of a toggle button.

## Description

Adding `aria-pressed` to an element with a role of [`button`](/en-US/docs/Web/Accessibility/ARIA/Roles/button_role) turns the button into a toggle button. The `aria-pressed` attribute is only relevant for toggle buttons. It represents the button's current "pressed" state.

The value is "tri-state", meaning the value can be set to `true`, `false`, `mixed`, or `undefined` values. In the case of `aria-pressed`, like most tri-state value types, the default value is `undefined`.

Toggle buttons require a full press-and-release cycle to change their value. Pressing and releasing it once changes the value to `true`. If it's pressed and released again, the value changes back to `false`.

A value of `mixed` means that the values of more than one item controlled by the button do not all share the same value.

Do not change the contents of the label on a toggle when the state changes. If a button label says "pause", do not change it to "play" when pressed. In this example, when the pressed state is true, the label remains "Pause" so a screen reader would say something like "Pause toggle button pressed".

```html
<button aria-pressed="false">Pause</button>
```

If you want the label to toggle between "Paused" and "Play", don't use `aria-pressed`.

The first rule of ARIA use is "if you can use a native feature with the semantics and behavior you require already built in, instead of repurposing an element and adding an ARIA role, state or property to make it accessible, then do so." If we employ native HTML semantics with {{HTMLElement('button')}}, we can toggle the label instead of toggling the pressed state, removing the need for the `aria-pressed` attribute.

## Values

- `false`
  - : The button supports being pressed but is not currently pressed.
- `mixed`
  - : Indicates a mixed mode value for a tri-state toggle button.
- `true`
  - : The button is pressed.
- `undefined` (default)
  - : The element does not support being pressed.

## ARIAMixin API

- {{domxref("Element.ariaPressed")}}
  - : The [`ariaPressed`](/en-US/docs/Web/API/Element/ariaPressed) property, part of the {{domxref("Element")}} interface, reflects the value of the `aria-pressed` attribute.
- {{domxref("ElementInternals.ariaPressed")}}
  - : The [`ariaPressed`](/en-US/docs/Web/API/ElementInternals/ariaPressed) property, part of the {{domxref("ElementInternals")}} interface, reflects the value of the `aria-pressed` attribute.

## Associated roles

Used in roles:

- [`button`](/en-US/docs/Web/Accessibility/ARIA/Roles/button_role)

## Specifications

{{Specifications}}

## See Also

- [`<input type="button">`](/en-US/docs/Web/HTML/Element/input/button)
- [`<input type="submit">`](/en-US/docs/Web/HTML/Element/input/submit)
- {{HTMLElement('button')}}
- [`aria-checked`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-checked)
- [`aria-selected`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-selected)

<section id="Quick_links">
<strong><a href="/en-US/docs/Web/Accessibility/ARIA/Attributes">WAI-ARIA states and properties</a></strong>
{{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/aria/Attributes")}}
</section>
