---
title: 'aria-haspopup'
slug: Web/Accessibility/ARIA/Attributes/aria-haspopup
tags: 
  - Accessibility
  - ARIA
  - ARIA attribute
  - ARIA property
  - aria-haspopup
  - Reference
---

The `aria-haspopup` attribute indicates the availability and type of interactive popup element that can be triggered by the element on which the attribute is set.

## Description

In ARIA, interactive menus, listboxes, trees, grids, and dialogs that appear on top of other content when triggered to appear are considered "popups". These popups are triggered by one or more interactive elements on the page. The availability and type of popup the interactive element will trigger should be identified with the `aria-haspopup` state.
 
The presence of the `aria-haspopup`, with one of six enumerated values - `menu`, `listbox`, `tree`, `grid`, `dialog`, or `true` - indicates the element can trigger a popup and what kind of popup will be displayed. In turn, the element that pops up must be of the role indicated. The value `true` is the same as `menu`. Any other value, including an empty string or other [role](/en-US/docs/Web/Accessibility/ARIA/Roles), is treated as if `false` were set. 

A [`tooltip`](/en-US/docs/Web/Accessibility/ARIA/Roles/tooltip_role) is not considered to be a popup in this context, as is not interactive.

> **Note:** Make sure the role of the element that serves as the container for the popup content is a [`menu`](/en-US/docs/Web/Accessibility/ARIA/Roles/Menu_role), [`listbox`](/en-US/docs/Web/Accessibility/ARIA/Roles/Listbox_role), [`tree`](/en-US/docs/Web/Accessibility/ARIA/Roles/Tree_role), [`grid`](/en-US/docs/Web/Accessibility/ARIA/Roles/Grid_role) or [`dialog`](/en-US/docs/Web/Accessibility/ARIA/Roles/Dialog_role) and that the value of `aria-haspopup` matches the role of the popup container.

The `aria-haspopup` state informs assistive technology users that there is a popup and the type of popup it is, but provides no interactivity. For the popup to be keyboard accessible, make sure the element with `aria-haspopup` is focusable and can trigger the popup, that there is a keyboard mechanism for opening the popup, and that the popup element manages focus of all its descendants.

> **Note:** ARIA does not enable accessible functionality. ARIA only conveys the intended behavior of your functionality.

When creating a [`menubar`](/en-US/docs/Web/Accessibility/ARIA/Roles/Menubar_role), a parent [`menuitem`](/en-US/docs/Web/Accessibility/ARIA/Roles/Menuitem_role) should have `aria-haspopup="menu"` (or `true`) set. Any button that open a menu should have a role of [`button`](/en-US/docs/Web/Accessibility/ARIA/Roles/Button_role) or, preferably, be a {{HTMLElement('button')}}, and also have `aria-haspopup="menu"` (or `true`) set. [`Tab`](/en-US/docs/Web/Accessibility/ARIA/Roles/Tab_role) elements with popup menus should also have `aria-haspopup="menu"` set. Note that `menubar`s should not be used to create website navigation.

> **Note:** Elements with role [`combobox`](/en-US/docs/Web/Accessibility/ARIA/Roles/Combobox_role) have an implicit `aria-haspopup` value of `listbox`.

## Values

- `false` (default)	
  - : The element does not have a popup.
- `true`		
  - : The popup is a menu.
- `menu`		
  - : The popup is a menu.
- `listbox`		
  - : The popup is a listbox.
- `tree`		
  - : The popup is a tree.
- `grid`		
  - : The popup is a grid.
- `dialog`		
  - : The popup is a dialog.
  
## ARIAMixin API 

- {{domxref("Element.ariaHasPopup")}}
  - : The  [`ariaHasPopup`](/en-US/docs/Web/API/Element/ariaHasPopup) property, part of the {{domxref("Element")}} interface, reflects the value of the `aria-haspopup` attribute, which indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.
- {{domxref("ElementInternals.ariaHasPopup")}}
  - : The [`ariaHasPopup`](/en-US/docs/Web/API/ElementInternals/ariaHasPopup) property of the {{domxref("ElementInternals")}} interface reflects the value of the `aria-haspopup` attribute.

## Associated roles

Used in roles:

- [`application`](/en-US/docs/Web/Accessibility/ARIA/Roles/Application_role)
- [`button`](/en-US/docs/Web/Accessibility/ARIA/Roles/Button_role)
- [`combobox`](/en-US/docs/Web/Accessibility/ARIA/Roles/Combobox_role)
- [`gridcell`](/en-US/docs/Web/Accessibility/ARIA/Roles/Gridcell_role)
- [`link`](/en-US/docs/Web/Accessibility/ARIA/Roles/:ink_role)
- [`menuitem`](/en-US/docs/Web/Accessibility/ARIA/Roles/Menuitem_role)
- [`slider`](/en-US/docs/Web/Accessibility/ARIA/Roles/Slider_role)
- [`tab`](/en-US/docs/Web/Accessibility/ARIA/Roles/Tab_role)
- [`textbox`](/en-US/docs/Web/Accessibility/ARIA/Roles/Textbox_role)
- [`treeitem`](/en-US/docs/Web/Accessibility/ARIA/Roles/Treeitem_role)

Inherited into roles:

- [`columnheader`](/en-US/docs/Web/Accessibility/ARIA/Roles/Columnheader_role) 
- [`menuitemcheckbox`](/en-US/docs/Web/Accessibility/ARIA/Roles/Menuitemcheckbox_role) 
- [`menuitemradio`](/en-US/docs/Web/Accessibility/ARIA/Roles/Menuitemradio_role) 
- [`rowheader`](/en-US/docs/Web/Accessibility/ARIA/Roles/Rowheader_role) 
- [`searchbox`](/en-US/docs/Web/Accessibility/ARIA/Roles/Searchbox_role) 

## Specifications

| Specification | Status | 
| ------------- | ------  |
| {{SpecName("ARIA","#aria-haspopup","ARIA: aria-haspopup Attribute")}}  | {{Spec2('ARIA')}} |

## See Also

- [`aria-controls`](/en-US/docs/Web/Accessibility/aria/Attributes/aria-controls)
- [`menu`](/en-US/docs/Web/Accessibility/ARIA/Roles/Menu_role)
- [`listbox`](/en-US/docs/Web/Accessibility/ARIA/Roles/Listbox_role)
- [`tree`](/en-US/docs/Web/Accessibility/ARIA/Roles/Tree_role)
- [`grid`](/en-US/docs/Web/Accessibility/ARIA/Roles/Grid_role)
- [`dialog`](/en-US/docs/Web/Accessibility/ARIA/Roles/Dialog_role)
- [Toolbar example](https://www.w3.org/TR/2019/WD-wai-aria-practices-1.2-20191218/examples/toolbar/toolbar.html) - W3C WAI ARIA practices

<section id="Quick_links">
<strong><a href="/en-US/docs/Web/Accessibility/ARIA/Attributes">WAI-ARIA states and properties</a></strong>
{{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/aria/Attributes")}}
</section>