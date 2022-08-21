---
title: Element.ariaChecked
slug: Web/API/Element/ariaChecked
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - ariaChecked
  - AriaAttributes
  - AriaMixin
  - Element
browser-compat: api.Element.ariaChecked
---
{{DefaultAPISidebar("DOM")}}

The **`ariaChecked`** property of the {{domxref("Element")}} interface reflects the value of the [`aria-checked`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-checked) attribute, which indicates the current "checked" state of checkboxes, radio buttons, and other widgets that have a checked state.

> **Note:** Where possible use an HTML {{htmlelement("input")}} element with `type="checkbox"` as this element has built in semantics and does not require ARIA attributes.

## Value

A string with one of the following values:

- `"true"`
  - : The element is checked.
- `"mixed"`
  - : Indicates a mixed mode value for a tri-state checkbox or menuitemcheckbox.
- `"false"`
  - : The element supports being checked but is not currently checked.
- `"undefined"`
  - : The element does not support being checked.

## Examples

In this example the `aria-checked` attribute on the element with an ID of `checkBoxInput` is set to "false" indicating that this input is currently unchecked. Using `ariaChecked` we update the value to "true".

```html
<span role="checkbox" id="checkBoxInput" aria-checked="false" tabindex="0" aria-labelledby="chk1-label">
</span> <label id="chk1-label">Remember my preferences</label>
```

```js
let el = document.getElementById('checkBoxInput');
console.log(el.ariaChecked); // "false"
el.ariaChecked = "true"
console.log(el.ariaChecked); // "true"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [ARIA: checkbox role](/en-US/docs/Web/Accessibility/ARIA/Roles/checkbox_role)
