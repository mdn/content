---
title: 'aria-expanded'
slug: Web/Accessibility/ARIA/Attributes/aria-expanded
tags: 
  - Accessibility
  - ARIA
  - ARIA attribute
  - ARIA property
  - aria-expanded
---

The `aria-expanded` attribute indicates whether a grouping element owned or controlled by the element on which it is set is expanded or collapsed.

## Description

There are several widgets that can be expanded and collapsed, including menus, dialogs, and accordian panels. Each of these objects, in turn, has an interactive element that controls their opening and closing. The `aria-expanded` attribute is applied to this focusable, interactive control that toggles the visibility of the object. 

For example, `aria-expanded` is applied to the parent item in a DOM tree to indicate whether its child branch of the tree is shown. The parent controls the visibility of the associated child branch, as well.

There are two declarations that can be applied to objects that control the visibility of another object: `aria-controls` or `aria-owns` combined with `aria-expanded`. The `aria-controls` and `aria-owns` indicate the relationship between the controlling element and the controlled element while the `aria-expanded` indicates to assistive technology whether the controlled element is expanded or collapsed. 

When a grouping container that can be expanded or collapsed is not owned by the element that has the `aria-expanded` attribute, identify the controlling relationship by referencing the container from the element that has `aria-expanded` with the `aria-controls` property. If it is owned, use the `aria-owns` property.

A button that opens a widget will have `aria-controls` set to the `id` of the widget and `aria-expanded` set to the current state of the widget.

```html
<button aria-expanded="false" aria-controls="widget1" aria-label="Open widget 1">Show widget</button>
```
When the widget is visible, the controlling object relays that information via having `aria-expanded="true"` set on it. The accessible name of the controlling object should reflect this change.

```html
<button aria-expanded="true" aria-controls="widget1">Hide widget</button>
```

A parent [`menuitem`](/en-US/docs/Web/Accessibility/ARIA/roles/menuitem_role) has `aria-expanded` set to false when its child menu is not visible, and set to `true` when the child menu is visible.

By default, some roles are hidden or collapsed and other roles are open or expanded by default. Elements with role [`combobox`](/en-US/docs/Web/Accessibility/ARIA/roles/combobox_role) have a default value for `aria-expanded` of `false`. When a combobox popup is not visible, the element with role `combobox` has `aria-expanded` set to `false`. This is the default state. When the popup element is visible, `aria-expanded` should be set to `true`.

```html
<label for="username">Username</label>
<input id="username" name="username" aria-describedby="username-desc">
<button aria-expanded="false" aria-controls="username-desc" aria-label="Help about username">
  <span aria-hidden="true">?</span>
</button>
<p id="username-desc" hidden>
  Your username is the name that you use to log in to this service.
</p>
```

`aria-expanded` is also relevant with menus, treeitems, and rows. When a menu is displayed, the button object that toggles the visibility of that menu has `aria-expanded` set to true. When the menu is hidden, aria-expanded can be omitted. If specified when the menu is hidden, it should be set as `aria-expanded="false"`.

Each element with role `treeitem` that serves as a parent node has `aria-expanded="false"` when the node is in a closed state and `aria-expanded="true"`when the node is in an open state. End nodes should not have the `aria-expanded` attribute because, if they were to have it, they would be incorrectly described to assistive technologies as parent nodes.

In a table or grid, a row that can be expanded or collapsed to show or hide a set of child rows is a parent row. Each parent row has the `aria-expanded` state set on either the row element or on a cell contained in the row. When the child rows are hidden The `aria-expanded="false"` is set. `aria-expanded="true"` is set when the child rows are displayed. Rows that do not control the display of child rows should not include the `aria-expanded` attribute at all because including the attribute defines the rows as parent rows.

> **Note:** Do not include the `aria-expanded` attribute on elements that don't control the expanded state of other elements because the presence of the attribute indicates control.

## Values

- `false`	
  - : The grouping element this element owns or controls is collapsed.
- `true`
  - :	The grouping element this element owns or controls is expanded.
- `undefined` (default)
  - :	The element does not own or control a grouping element that is expandable.

## ARIAMixin API 

- {{domxref("Element.ariaExpanded")}}
  - : The  [`ariaExpanded`](/en-US/docs/Web/API/Element/ariaExpanded) property, part of the {{domxref("Element")}} interface, reflects the value of the `aria-expanded` attribute.
- {{domxref("ElementInternals.ariaExpanded")}}
  - : The  [`ariaExpanded`](/en-US/docs/Web/API/Element/ariaExpanded) property, part of the {{domxref("ElementInternals")}} interface, reflects the value of the `aria-expanded` attribute.

## Associated roles

Used in roles: 

- [`application`](/en-US/docs/Web/Accessibility/ARIA/roles/application_role)
- [`button`](/en-US/docs/Web/Accessibility/ARIA/roles/button_role)
- [`checkbox`](/en-US/docs/Web/Accessibility/ARIA/roles/checkbox_role)
- [`combobox`](/en-US/docs/Web/Accessibility/ARIA/roles/combobox_role)
- [`gridcell`](/en-US/docs/Web/Accessibility/ARIA/roles/gridcell_role)
- [`link`](/en-US/docs/Web/Accessibility/ARIA/roles/link_role)
- [`listbox`](/en-US/docs/Web/Accessibility/ARIA/roles/listbox_role)
- [`menuitem`](/en-US/docs/Web/Accessibility/ARIA/roles/menuitem_role)
- [`row`](/en-US/docs/Web/Accessibility/ARIA/roles/row_role)
- [`rowheader`](/en-US/docs/Web/Accessibility/ARIA/roles/rowheader_role)
- [`tab`](/en-US/docs/Web/Accessibility/ARIA/roles/tab_role)
- [`treeitem`](/en-US/docs/Web/Accessibility/ARIA/roles/treeitem_role)

Inherits into roles:

- [`columnheader`](/en-US/docs/Web/Accessibility/ARIA/roles/columnheader_role)
- [`menuitemcheckbox`](/en-US/docs/Web/Accessibility/ARIA/roles/menuitemcheckbox_role)
- [`menuitemradio`](/en-US/docs/Web/Accessibility/ARIA/roles/menuitemradio_role)
- [`rowheader`](/en-US/docs/Web/Accessibility/ARIA/roles/rowheader_role)
- [`switch`](/en-US/docs/Web/Accessibility/ARIA/roles/switch_role)

## Specifications

| Specification | Status | 
| ------------- | ------  |
| {{SpecName("ARIA","#aria-expanded","ARIA: aria-expanded Attribute")}}  | {{Spec2('ARIA')}} |

## See Also

- [`aria-controls`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-controls)
