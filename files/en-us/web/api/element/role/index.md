---
title: "Element: role property"
short-title: role
slug: Web/API/Element/role
page-type: web-api-instance-property
browser-compat: api.Element.role
---

{{ ApiRef("DOM") }}

The **`role`** property of the {{domxref("Element")}} interface returns the explicitly set [WAI-ARIA role](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles) for the element.

All HTML elements have an implicit ARIA role, even if that role is [`generic`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/generic_role). This semantic association allows tools to present and support interaction with the object in a manner that is consistent with user expectations about other objects of that type. The `role` attribute is used to explicitly set the element's ARIA role, overriding the implicit role. For example, a {{htmlelement("ul")}}, which has an implicit [`list`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/list_role) role, might have [`role="treegrid"`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role) explicitly set. The `role` property reflects the explicitly set value of the `role` attribute—in this case `treegrid`; it does not return the element's implicit `list` role unless explicitly set.

The full list of defined ARIA roles can be found on the [ARIA roles](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles) reference page.

## Value

A string; the value of the `role` attribute or `null` if not explicitly set.

## Examples

In this example, images with empty or missing `alt` attributes are given a `role` of [`presentation`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role):

```js
const images = document.querySelectorAll("img");
images.forEach((image) => {
  if (!image.alt) {
    image.role = "presentation";
  }
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("ElementInternals.role")}}
- [ARIA attributes](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes)
