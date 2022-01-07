---
title: Element.ariaRoleDescription
slug: Web/API/Element/ariaRoleDescription
tags:
  - API
  - Property
  - Reference
  - ariaRoleDescription
  - AriaAttributes
  - AriaMixin
  - Element
browser-compat: api.Element.ariaRoleDescription
---
{{DefaultAPISidebar("DOM")}}

The **`ariaRoleDescription`** property of the {{domxref("Element")}} interface reflects the value of the [`aria-roledescription`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-roledescription) attribute, which defines a human-readable, author-localized description for the role of an element.

## Syntax

```js
var ariaRoleDescription = element.ariaRoleDescription;
element.ariaRoleDescription = ariaRoleDescription
```

### Value

A {{domxref("DOMString")}}.

## Examples

In this example the `aria-roledescription` attribute on the element with an ID of `myApplication` has been set. Using `ariaRoleDescription` we can update the value.

```html
<div id="myApplication" role="application" aria-roledescription="a description of this widget">...</div>
```

```js
let el = document.getElementById('myApplication');
console.log(el.ariaRoleDescription); // "a description of this widget"
el.ariaRoleDescription = "an updated description of this widget"
console.log(el.ariaRoleDescription); // "an updated description of this widget"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

- [ARIA: application role](/en-US/docs/Web/Accessibility/ARIA/Roles/Application_Role)
