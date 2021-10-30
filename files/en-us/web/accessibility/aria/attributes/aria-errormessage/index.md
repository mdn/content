---
title: 'aria-errormessage'
slug: Web/Accessibility/ARIA/Attributes/aria-errormessage
tags: 
  - Accessibility
  - ARIA
  - ARIA attribute
  - ARIA property
  - aria-errormessage
  - Reference
---

The `aria-errormessage` attribute identifies the element that provides an error message for an object. 

## Description

When there is a user error, you want to let the user know there is an error and tell them how to fix it. There are two attributes you need to use: set [`aria-invalid="true"`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-invalid) to define the object as being in an error state, then add the `aria-errormessage` attribute, with the value being the `id` of the element containing the error message text for that object. 

The `aria-errormessage` should only be used in when the value of an object is not valid, so when[`aria-invalid`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-invalid) is set to true. If the object is not invalid, if you include the `aria-errormessage` make sure the element referenced is hidden, as the message it contains is not relevant.

When `aria-errormessage` is relevant, the element it references must be visible so users can see or hear the error message.

Often times you will want the element with the error message to be a live region, such as when an error message is displayed to users after they have provided an invalid value. The error message should describe what is wrong and inform the user what is required to make the object valid.

While not all invalid states require an error message; include an visible error message and link the invalid object with the `aria-errormessage` attribute if the failure is visually apparent and an explicit description of the error is necessary. 

## Example 

We create some styles to hide error messages, unless the error message is a sibling coming after an invalid object set with `aria-invalid="true"`:

```css
.errormessage {
  visibility: hidden;
}
[aria-invalid="true"] {
  border: 2px solid red;
}
[aria-invalid="true"] ~ .errormessage {
  visibility: visible;
}
```

When an object is invalid, `aria-invalid="true"` is set. Making the `.errormessage` become visible.

```html
<p>
  <label for="email">Email address:</label> 
  <input type="email" name="email" id="email"     aria-invalid="true" aria-errormessage="err1" />
  <span id="err1" class="errormessage">Error: Enter a valid email address</span>
</p> 
```

The change includes an update to `aria-invalid` on the email input object. We could have set `aria-live` on the element containing the text of the error message, but as it becomes visible and available on the accessibility tree, we are able to keep our example simple. We have also applied an [`aria-live`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-live) property or used a live region roles such as [`alert`](/en-US/docs/Web/Accessibility/ARIA/roles/Alert_role).

## Values

- `id` reference
  - : The value of the `id` of the element containing the error message for the current element

## Associated roles

Used in roles: 

- [`application`](/en-US/docs/Web/Accessibility/ARIA/roles/application_role)
- [`checkbox`](/en-US/docs/Web/Accessibility/ARIA/roles/checkbox_role)
- [`combobox`](/en-US/docs/Web/Accessibility/ARIA/roles/combobox_role)
- [`gridcell`](/en-US/docs/Web/Accessibility/ARIA/roles/gridcell_role)
- [`listbox`](/en-US/docs/Web/Accessibility/ARIA/roles/listbox_role)
- [`radiogroup`](/en-US/docs/Web/Accessibility/ARIA/roles/radiogroup_role)
- [`slider`](/en-US/docs/Web/Accessibility/ARIA/roles/slider_role)
- [`spinbutton`](/en-US/docs/Web/Accessibility/ARIA/roles/spinbutton_role)
- [`textbox`](/en-US/docs/Web/Accessibility/ARIA/roles/textbox_role)
- [`tree`](/en-US/docs/Web/Accessibility/ARIA/roles/tree_role)

Inherits from roles: 

- [`columnheader`](/en-US/docs/Web/Accessibility/ARIA/roles/columnheader_role)
- [`rowheader`](/en-US/docs/Web/Accessibility/ARIA/roles/rowheader_role)
- [`searchbox`](/en-US/docs/Web/Accessibility/ARIA/roles/searchbox_role)
- [`switch`](/en-US/docs/Web/Accessibility/ARIA/roles/switch_role)
- [`treegrid`](/en-US/docs/Web/Accessibility/ARIA/roles/treegrid_role)

## Specifications

| Specification | Status | 
| ------------- | ------  |
| {{SpecName("ARIA","#aria-errormessage","ARIA: aria-errormessage Attribute")}}  | {{Spec2('ARIA')}} |

## See Also

- [`aria-invalid`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-invalid) 
- [`aria-describedby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby)
- [`aria-live`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-live)