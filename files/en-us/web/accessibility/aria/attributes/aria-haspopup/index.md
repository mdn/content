---
title: aria-haspopup
slug: Web/Accessibility/ARIA/Attributes/aria-haspopup
tags:
  - Accessibility
  - ARIA
  - ARIA attribute
  - ARIA property
  - aria-haspopup
  - Reference
spec-urls: https://w3c.github.io/aria/#aria-haspopup
---
The `aria-haspopup` attribute indicates the availability and type of interactive popup element that can be triggered by the element on which the attribute is set.

## Description

In ARIA, interactive menus, listboxes, trees, grids, and dialogs that appear on top of other content when triggered to appear are considered "popups". These popups are triggered by one or more interactive elements on the page. The availability and type of popup the interactive element will trigger should be identified with the `aria-haspopup` state.

The presence of the `aria-haspopup`, with one of six enumerated values - `menu`, `listbox`, `tree`, `grid`, `dialog`, or `true` - indicates the element can trigger a popup and what kind of popup will be displayed. In turn, the element that pops up must be of the role indicated. The value `true` is the same as `menu`. Any other value, including an empty string or other [role](/en-US/docs/Web/Accessibility/ARIA/Roles), is treated as if `false` were set.

A [`tooltip`](/en-US/docs/Web/Accessibility/ARIA/Roles/tooltip_role) is not considered to be a popup in this context, as it is not interactive.

> **Note:** Make sure the role of the element that serves as the container for the popup content is a [`menu`](/en-US/docs/Web/Accessibility/ARIA/Roles/menu_role), [`listbox`](/en-US/docs/Web/Accessibility/ARIA/Roles/listbox_role), [`tree`](/en-US/docs/Web/Accessibility/ARIA/Roles/tree_role), [`grid`](/en-US/docs/Web/Accessibility/ARIA/Roles/grid_role) or [`dialog`](/en-US/docs/Web/Accessibility/ARIA/Roles/dialog_role) and that the value of `aria-haspopup` matches the role of the popup container.

The `aria-haspopup` state informs assistive technology users that there is a popup and the type of popup it is, but provides no interactivity. For the popup to be keyboard accessible, make sure the element with `aria-haspopup` is focusable and can trigger the popup, that there is a keyboard mechanism for opening the popup, and that the popup element manages focus of all its descendants.

> **Note:** ARIA does not enable accessible functionality. ARIA only conveys the intended behavior of your functionality.

When creating a [`menubar`](/en-US/docs/Web/Accessibility/ARIA/Roles/menubar_role), a parent [`menuitem`](/en-US/docs/Web/Accessibility/ARIA/Roles/menuitem_role) should have `aria-haspopup="menu"` (or `true`) set. Any button that open a menu should have a role of [`button`](/en-US/docs/Web/Accessibility/ARIA/Roles/button_role) or, preferably, be a {{HTMLElement('button')}}, and also have `aria-haspopup="menu"` (or `true`) set. [`Tab`](/en-US/docs/Web/Accessibility/ARIA/Roles/tab_role) elements with popup menus should also have `aria-haspopup="menu"` set. Note that `menubar`s should not be used to create website navigation.

> **Note:** Elements with role [`combobox`](/en-US/docs/Web/Accessibility/ARIA/Roles/combobox_role) have an implicit `aria-haspopup` value of `listbox`.

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
  - : The [`ariaHasPopup`](/en-US/docs/Web/API/Element/ariaHasPopup) property, part of the {{domxref("Element")}} interface, reflects the value of the `aria-haspopup` attribute, which indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.
- {{domxref("ElementInternals.ariaHasPopup")}}
  - : The [`ariaHasPopup`](/en-US/docs/Web/API/ElementInternals/ariaHasPopup) property of the {{domxref("ElementInternals")}} interface reflects the value of the `aria-haspopup` attribute.

## Associated roles

Used in roles:

- [`application`](/en-US/docs/Web/Accessibility/ARIA/Roles/application_role)
- [`button`](/en-US/docs/Web/Accessibility/ARIA/Roles/button_role)
- [`combobox`](/en-US/docs/Web/Accessibility/ARIA/Roles/combobox_role)
- [`gridcell`](/en-US/docs/Web/Accessibility/ARIA/Roles/gridcell_role)
- [`link`](/en-US/docs/Web/Accessibility/ARIA/Roles/link_role)
- [`menuitem`](/en-US/docs/Web/Accessibility/ARIA/Roles/menuitem_role)
- [`slider`](/en-US/docs/Web/Accessibility/ARIA/Roles/slider_role)
- [`tab`](/en-US/docs/Web/Accessibility/ARIA/Roles/tab_role)
- [`textbox`](/en-US/docs/Web/Accessibility/ARIA/Roles/textbox_role)
- [`treeitem`](/en-US/docs/Web/Accessibility/ARIA/Roles/treeitem_role)

Inherited into roles:

- [`columnheader`](/en-US/docs/Web/Accessibility/ARIA/Roles/columnheader_role)
- [`menuitemcheckbox`](/en-US/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role)
- [`menuitemradio`](/en-US/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role)
- [`rowheader`](/en-US/docs/Web/Accessibility/ARIA/Roles/rowheader_role)
- [`searchbox`](/en-US/docs/Web/Accessibility/ARIA/Roles/searchbox_role)

## Specifications

{{Specifications}}

## See Also

- [`aria-controls`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-controls)
- [`menu`](/en-US/docs/Web/Accessibility/ARIA/Roles/menu_role)
- [`listbox`](/en-US/docs/Web/Accessibility/ARIA/Roles/listbox_role)
- [`tree`](/en-US/docs/Web/Accessibility/ARIA/Roles/tree_role)
- [`grid`](/en-US/docs/Web/Accessibility/ARIA/Roles/grid_role)
- [`dialog`](/en-US/docs/Web/Accessibility/ARIA/Roles/dialog_role)
- [Toolbar example](https://www.w3.org/TR/2019/WD-wai-aria-practices-1.2-20191218/examples/toolbar/toolbar.html) - W3C WAI ARIA practices

<section id="Quick_links">
<strong><a href="/en-US/docs/Web/Accessibility/ARIA/Attributes">WAI-ARIA states and properties</a></strong>
{{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/aria/Attributes")}}
</section>
