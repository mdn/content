---
title: Element.ariaModal
slug: Web/API/Element/ariaModal
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - ariaModal
  - AriaAttributes
  - AriaMixin
  - Element
browser-compat: api.Element.ariaModal
---
{{DefaultAPISidebar("DOM")}}

The **`ariaModal`** property of the {{domxref("Element")}} interface reflects the value of the `aria-modal` attribute, which indicates whether an element is modal when displayed. Applying the `aria-modal` property to an element with `role="dialog"` replaces the technique of using aria-hidden on the background for informing assistive technologies that content outside a dialog is inert.

## Value

A string with one of the following values:

- `"true"`
  - : The element is modal.
- `"false"`
  - : The element is not modal.

## Examples

In this example the `aria-modal` attribute on the element with an ID of `address-modal` is set to "true" indicating that this is a modal dialog. Using `ariaModal` we update the value to "false".

```html
<div role="dialog" id="address-modal" aria-labelledby="dialog1Title"
  aria-describedby="dialog1Desc" aria-modal="true"></div>
```

```js
let el = document.getElementById('address-modal');
console.log(el.ariaModal); // "true"
el.ariaModal = "false"
console.log(el.ariaModal); // "false"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [ARIA: dialog role](/en-US/docs/Web/Accessibility/ARIA/Roles/dialog_role)
