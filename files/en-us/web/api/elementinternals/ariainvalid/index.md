---
title: "ElementInternals: ariaInvalid property"
short-title: ariaInvalid
slug: Web/API/ElementInternals/ariaInvalid
page-type: web-api-instance-property
browser-compat: api.ElementInternals.ariaInvalid
---

{{APIRef("Web Components")}}

The **`ariaInvalid`** property of the {{domxref("ElementInternals")}} interface reflects the value of the [`aria-invalid`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-invalid) attribute. Relevant for the [`application`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/application_role), [`checkbox`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role), [`combobox`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role), [`gridcell`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role), [`listbox`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role), [`radiogroup`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/radiogroup_role), [`slider`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role), [`spinbutton`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role), [`textbox`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role), and [`tree`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role) roles, it indicates to the accessibility API whether the entered value does not conform to the format expected by the application.

> [!NOTE]
> Setting ARIA attributes on `ElementInternals` allows default semantics to be defined on a custom element. These may be overwritten by author-defined attributes, but ensure that default semantics are retained should the author delete those attributes, or fail to add them at all. For more information see the [Accessibility Object Model explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Value

A string with one of the following values:

- `"true"`
  - : The element is invalid.
- `"false"` (default)
  - : The element is not in an invalid state.
- `"grammar"`
  - : The element is in an invalid state because grammatical error was detected.
- `"spelling"`
  - : The element is in an invalid state because spelling error was detected.

## Examples

In this example, we define and create a `<custom-text>` element, and then retrieve the value of `ariaInvalid` from the first `<custom-text>` element in the document.

```js
class CustomControl extends HTMLElement {
  constructor() {
    super();
    this._internals = this.attachInternals();
    this._internals.ariaInvalid = "false";
  }
  // …
}

window.customElements.define("custom-text", CustomControl);

const element = document.querySelector("custom-text");
console.log(element._internals.ariaInvalid);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("ElementInternals.ariaRequired")}}
- [`aria-required`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required)
- [`aria-errormessage`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage)
