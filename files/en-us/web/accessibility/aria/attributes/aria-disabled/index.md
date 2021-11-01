---
title: 'aria-disabled'
slug: Web/Accessibility/ARIA/Attributes/aria-disabled
tags: 
  - Accessibility
  - ARIA
  - ARIA attribute
  - ARIA property
  - aria-disabled
  - Reference
---

The `aria-disabled` state indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.

## Description

You generally want users to fill out all the required fields before submitting a form. One way to ensure all required fields are complete is to disable the submit button. However, you still want that submit button to be perceivable to **all** users. That is where the `aria-disabled` attribute comes in.

The `aria-disabled` attribute, when set to `true`, indicates to assistive technologies that the element upon which it is set and all focusable descendants are disabled. This declaration tells your user the elements are not editable or otherwise operable without making the element imperceivable.

There are several elements you may want to disable, but still want the user to know they exist. Some examples include:

- Irrelevant options in a radio group, 
- The header button element associated with non-collapsible accordion panel, 
- A button when the action associated with the button is unavailable, 
- The icon for the currently visible slide in a slideshow slide picker, and 
- Items in a menu that are not currently selectable. 

In each of these cases, you want the user to know the element is there even though the functionality of that control is removed or "disabled".

ARIA attributes only provide semantics. To semantically disable an element without removing it from focus order or from the accessibility tree, set `aria-disabled="true"` on the element. You should include JavaScript to disable the functionality of the element while also changing the appearance of the element so sighted users know it is disabled.

> **Note:**  The state of being disabled applies to the element with `aria-disabled` and all of its focusable descendants. 

The `aria-disabled` attribute is similar to the HTML `disabled` attribute, but better. The first rule of ARIA is "If you can use a native HTML element or attribute with the semantics and behavior you require already built in, instead of repurposing an element and adding an ARIA role, state or property to make it accessible, then do so." `aria-disabled` is an exception to that rule. It is one of the only cases where an ARIA attribute may be better than the native `disabled` attribute HTML equivalent.  

The `disabled` Boolean attribute provides CSS styles and semantics and removes the ability to click or focus while not disabling hover. By removing the ability to focus and removing it from the accessibility tree, it makes it invisible to assistive technology users. For good user experience, you want to make sure everyone can access all the visible content, no matter how they access the web. It is important to be aware that using the `disabled` attribute can harm usability. 

While adding `disabled` to an HTML form control causes `:disabled` user-agent styles to be applied, adding `aria-disabled="true"` doesn't, by default, alter an element's appearance. The element can be styled with the [attribute selector](/en-US/docs/Web/CSS/Attribute_selectors) `[aria-disabled="true"]

```css
[aria-disabled="true"] {
  opacity: 0.5;
}
```
> **Note:** If you are using CSS's [`pointer-events: none;`](/en-US/docs/Web/CSS/pointer-events) to make an element non-clickable, make sure you disable interactivity with JavaScript as well. `pointer-events: none;` prevents mouse clicks, but does not prevent the element from being activated via the keyboard.

```js
function toggleDisabled(element, status, update) {
  if(status) {
    //element.input.disabled = false;
    element.setAttribute('aria-disabled', 'false');
    update.textContent = 'The element is now enabled.';
    element.removeEventListener('click', function (event) {
      event.preventDefault();
    }
  } else {
    //element.input.disabled = true;
    element.setAttribute('aria-disabled', 'true');
    update.textContent = 'The element is now disabled.';
    element.addEventListener('click', function (event) {
      event.preventDefault();
    }
  }
}
```

When toggling from `aria-disabled="true"` to `"false"`, use JavaScript to: 

1. Toggle the value to `false`, 
2. Enable the element, and 
3. Let the user know the control is now enabled. 

If you used just CSS to style the disabled state using an attribute selector, the selector will no longer match and the disabled styling will no longer be in effect.

## Values

- `true`
  - : The element is disabled
  
- `false`
  - : The element is not disabled

## ARIAMixin API 

- {{domxref("Element.ariaDisabled")}}
  - : The  [`ariaDisabled`](/en-US/docs/Web/API/Element/ariaDisabled) property, part of the {{domxref("Element")}} interface, reflects the value of the `aria-disabled` attribute, which indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.
- {{domxref("ElementInternals.ariaDisabled")}}
  - : The [`ariaDisabled`](https://developer.mozilla.org/en-US/docs/Web/API/ElementInternals/ariaDisabled) property of the {{domxref("ElementInternals")}} interface reflects the value of the `aria-disabled` attribute.

## Associated roles

Used in roles: 
- [`application`](/en-US/docs/Web/Accessibility/ARIA/roles/application_role)
- [`button`](/en-US/docs/Web/Accessibility/ARIA/roles/button_role)
- [`composite`](/en-US/docs/Web/Accessibility/ARIA/roles/composite_role)
- [`gridcell`](/en-US/docs/Web/Accessibility/ARIA/roles/gridcell_role)
- [`group`](/en-US/docs/Web/Accessibility/ARIA/roles/group_role)
- [`input`](/en-US/docs/Web/Accessibility/ARIA/roles/input_role)
- [`link`](/en-US/docs/Web/Accessibility/ARIA/roles/link_role)
- [`menuitem`](/en-US/docs/Web/Accessibility/ARIA/roles/menuitem_role)
- [`scrollbar`](/en-US/docs/Web/Accessibility/ARIA/roles/scrollbar_role)
- [`separator`](/en-US/docs/Web/Accessibility/ARIA/roles/separator_role)
- [`tab`](/en-US/docs/Web/Accessibility/ARIA/roles/tab_role)

Inherits into roles:
- [`checkbox`](/en-US/docs/Web/Accessibility/ARIA/roles/checkbox_role)
- [`columnheader`](/en-US/docs/Web/Accessibility/ARIA/roles/columnheader_role)
- [`combobox`](/en-US/docs/Web/Accessibility/ARIA/roles/combobox_role)
- [`grid`](/en-US/docs/Web/Accessibility/ARIA/roles/grid_role)
- [`listbox`](/en-US/docs/Web/Accessibility/ARIA/roles/listbox_role)
- [`menu`](/en-US/docs/Web/Accessibility/ARIA/roles/menu_role)
- [`menubar`](/en-US/docs/Web/Accessibility/ARIA/roles/menubar_role)
- [`menuitemcheckbox`](/en-US/docs/Web/Accessibility/ARIA/roles/menuitemcheckbox_role)
- [`menuitemradio`](/en-US/docs/Web/Accessibility/ARIA/roles/menuitemradio_role)
- [`option`](/en-US/docs/Web/Accessibility/ARIA/roles/option_role)
- [`radio`](/en-US/docs/Web/Accessibility/ARIA/roles/radio_role)
- [`radiogroup`](/en-US/docs/Web/Accessibility/ARIA/roles/radiogroup_role)
- [`row`](/en-US/docs/Web/Accessibility/ARIA/roles/row_role)
- [`rowheader`](/en-US/docs/Web/Accessibility/ARIA/roles/rowheader_role)
- [`searchbox`](/en-US/docs/Web/Accessibility/ARIA/roles/searchbox_role)
- [`select`](/en-US/docs/Web/Accessibility/ARIA/roles/select_role)
- [`slider`](/en-US/docs/Web/Accessibility/ARIA/roles/slider_role)
- [`spinbutton`](/en-US/docs/Web/Accessibility/ARIA/roles/spinbutton_role)
- [`switch`](/en-US/docs/Web/Accessibility/ARIA/roles/switch_role)
- [`tablist`](/en-US/docs/Web/Accessibility/ARIA/roles/tablist_role)
- [`textbox`](/en-US/docs/Web/Accessibility/ARIA/roles/textbox_role)
- [`toolbar`](/en-US/docs/Web/Accessibility/ARIA/roles/toolbar_role)
- [`tree`](/en-US/docs/Web/Accessibility/ARIA/roles/tree_role)
- [`treegrid`](/en-US/docs/Web/Accessibility/ARIA/roles/treegrid_role)
- [`treeitem`](/en-US/docs/Web/Accessibility/ARIA/roles/treeitem_role)

## Specifications

| Specification | Status | 
| ------------- | ------  |
| {{SpecName("ARIA","#aria-disabled","ARIA: aria-disabled Attribute")}}  | {{Spec2('ARIA')}} |

## See Also

- [Making disabled buttons more inclusive](https://css-tricks.com/making-disabled-buttons-more-inclusive/) by Sandrina Pereira
- {{htmlattrxref('disabled')}}
- {{domxref("Element.ariaDisabled")}}
- {{domxref("ElementInternals.ariaDisabled")}}
- [`aria-hidden`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-hidden) 
- [`aria-readonly`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-readonly)

<section id="Quick_links">
<strong><a href="/en-US/docs/Web/Accessibility/ARIA/Attributes">WAI-ARIA states and properties</a></strong>
{{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/aria/Attributes")}}
</section>