---
title: "Element: ariaDisabled property"
short-title: ariaDisabled
slug: Web/API/Element/ariaDisabled
page-type: web-api-instance-property
browser-compat: api.Element.ariaDisabled
---

{{APIRef("DOM")}}

The **`ariaDisabled`** property of the {{domxref("Element")}} interface reflects the value of the [`aria-disabled`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-disabled) attribute, which indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.

> [!NOTE]
> Where possible, use the {{htmlelement("input")}} element with `type="button"` or the {{htmlelement("button")}} element — because those elements have built in semantics and do not require ARIA attributes.

## Value

A string with one of the following values:

- `"true"`
  - : The element and all focusable descendants are disabled, but perceivable, and their values cannot be changed by the user.
- `"false"`
  - : The element is enabled.

## Examples

In this example the `aria-disabled` attribute on the element with an ID of `saveChanges` is set to "true" indicating that this input is currently disabled. Using `ariaDisabled` we update the value to "false".

```html
<div id="saveChanges" tabindex="0" role="button" aria-disabled="true">Save</div>
```

```js
let el = document.getElementById("saveChanges");
console.log(el.ariaDisabled); // "true"
el.ariaDisabled = "false";
console.log(el.ariaDisabled); // "false"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
