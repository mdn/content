---
title: "Element: ariaRoleDescription property"
short-title: ariaRoleDescription
slug: Web/API/Element/ariaRoleDescription
page-type: web-api-instance-property
browser-compat: api.Element.ariaRoleDescription
---

{{APIRef("DOM")}}

The **`ariaRoleDescription`** property of the {{domxref("Element")}} interface reflects the value of the [`aria-roledescription`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-roledescription) attribute, which defines a human-readable, author-localized description for the role of an element.

## Value

A string.

## Examples

In this example the `aria-roledescription` attribute on the element with an ID of `myApplication` has been set. Using `ariaRoleDescription` we can update the value.

```html
<div
  id="myApplication"
  role="application"
  aria-roledescription="a description of this widget">
  …
</div>
```

```js
let el = document.getElementById("myApplication");
console.log(el.ariaRoleDescription); // "a description of this widget"
el.ariaRoleDescription = "an updated description of this widget";
console.log(el.ariaRoleDescription); // "an updated description of this widget"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [ARIA: application role](/en-US/docs/Web/Accessibility/ARIA/Roles/application_role)
