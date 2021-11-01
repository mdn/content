---
title: 'aria-checked'
slug: web/Accessibility/ARIA/Attributes/aria-checked
tags: 

  - Accessibility
  - ARIA
  - ARIA attribute
  - ARIA property
  - aria-checked
---

The  `aria-checked` attribute indicates the current "checked" state of checkboxes, radio buttons, and other widgets. 
> **Note:** Where possible use an HTML {{htmlelement("input")}} element with `type="checkbox"` and `type="radio"` as these have built in semantics and do not require ARIA attributes.

## Description

The `aria-checked` attribute indicates whether the element is checked (`true`), unchecked (`false)`, or if the checked status is indeterminate (`mixed`), meaning it is neither checked nor unchecked. The `mixed` value is supported by the tri-state input roles of [`checkbox`](/en-US/docs/Web/Accessibility/ARIA/Roles/checkbox_role) and [`menuitemcheckbox`](/en-US/docs/Web/Accessibility/ARIA/Roles/Menuitemcheckbox_role).

The `mixed` value is not supported on [`radio`](/en-US/docs/Web/Accessibility/ARIA/Roles/Radio_role), [`menuitemradio`](/en-US/docs/Web/Accessibility/ARIA/Roles/Menuitemradio_role), or [`switch`](/en-US/docs/Web/Accessibility/ARIA/Roles/Switch_role) and elements that inherits from these. The value will be false if `mixed` is set when not supported. 

```html 
<span role="checkbox" id="checkBoxInput" aria-checked="false" tabindex="0" aria-labelledby="chk15-label"></span> 
<label id="chk15-label">Subscribe to the newsletter</label>
```
> **Note:** Where possible use an HTML {{htmlelement("input")}} element with `type="checkbox"` as this element has built in semantics and does not require ARIA attributes.

The `tabindex` attribute is required to enable focus. JavaScript is required to toggle the `aria-checked` state. And, if this checkbox is part of a submittable form, more JavaScript is required to set a name and a value.

The above could have been written as:

```html
<input type="checkbox" id="chk15-label" name="Subscribe">
<label for="chk15-label">Subscribe to the newsletter</label>
```

By using the {{htmlelement("input")}} element with `type="checkbox"` instead of ARIA, there is no need for any JavaScript.

## Values

- false
  - : The element supports being checked but is not currently checked. 
- true	
  - : The element is checked.
- mixed	
  - : for [`checkbox`](/en-US/docs/Web/Accessibility/ARIA/Roles/checkbox_role) and  [`menuitemcheckbox`](/en-US/docs/Web/Accessibility/ARIA/Roles/Menuitemcheckbox_role) only, equivalent to `indeterminate`, indicating a mixed mode value of neither checked nor unchecked.
- undefined (default)	
  - : The element does not support being checked.
  
## Associated roles

Used in roles: 

- [`checkbox`](/en-US/docs/Web/Accessibility/ARIA/Roles/checkbox_role)
- [`menuitemcheckbox`](/en-US/docs/Web/Accessibility/ARIA/Roles/Menuitemcheckbox_role)
- [`menuitemradio`](/en-US/docs/Web/Accessibility/ARIA/Roles/Menuitemradio_role)
- [`option`](/en-US/docs/Web/Accessibility/ARIA/Roles/Option_role)
- [`radio`](/en-US/docs/Web/Accessibility/ARIA/Roles/Radio_role)
- [`switch`](/en-US/docs/Web/Accessibility/ARIA/Roles/Switch_role)

## ARIAMixin API

The {{domxref("ariaChecked")}} property of the {{domxref("ARIAMixin")}} interface,  reflects the value of the `aria-checked` attribute, which indicates the current "checked" state of checkboxes, radio buttons, and other widgets that have a checked state.

```js
myHTMLElement.ariaChecked = true;
```

## Specifications

| Specification         | Status            |
| ---------------- | ---------------- |
| {{SpecName("ARIA","#aria-checked","ARIA: aria-checked Attribute")}}              | {{Spec2('ARIA')}}                         |
| {{SpecName("ARIA Authoring Practices 1.2","#checkbox","Checkbox role with `aria-checked`")}} | {{Spec2('ARIA Authoring Practices')}} |

## See Also

- [`<input type="checkbox">`](en-US/docs/Web/HTML/Element/Input/checkbox)
- [`<input type="radio">`](en-US/docs/Web/HTML/Element/Input/radio)
- [`aria-pressed`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-pressed)
- [`aria-selected`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-selected).
- [Two state checkbox example](https://www.w3.org/TR/wai-aria-practices-1.2/examples/checkbox/checkbox-1/checkbox-1.html) - w3.org
- [Tri-state checkbox example](https://www.w3.org/TR/wai-aria-practices-1.2/examples/checkbox/checkbox-2/checkbox-2.html) - w3.org
  
<section id="Quick_links">

1. [**WAI-ARIA states and properties**](/en-US/docs/Web/Accessibility/ARIA/Attributes)

    {{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/ARIA/Attributes")}}

</section>

