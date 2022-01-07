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

The `aria-expanded` attribute is set on an element to indicate if a control is expanded or collapsed, and whether or not its child elements are displayed or hidden.

## Description

There are several widgets that can be expanded and collapsed, including menus, dialogs, and accordion panels. Each of these objects, in turn, has an interactive element that controls their opening and closing. The `aria-expanded` attribute is applied to this focusable, interactive control that toggles the visibility of the object.

For example, `aria-expanded` is applied to the parent item in a DOM tree to indicate whether its child branch is shown. The parent controls the visibility of the associated child branch, as well.

There are two declarations that can be applied to objects that control the visibility of another object: [`aria-controls`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-controls), or [`aria-owns`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-owns) combined with `aria-expanded`. The `aria-controls` and `aria-owns` indicate the relationship between the controlling element and the controlled element. The `aria-expanded` indicates to assistive technology whether the controlled element is expanded or collapsed.

Use the `aria-owns` property on the elements that own expandable grouping containers. If the expandable and collapsible grouping container is not owned by the element that has the `aria-expanded` attribute, use the `aria-controls` property to reference the grouping container instead.

### Buttons

A button that opens a widget should have `aria-controls` set to the {{htmlattrxref("id")}} of the expandable widget and `aria-expanded` set to the current state of the widget.

```html
<button aria-expanded="false" aria-controls="widget1">Show widget</button>
```

When the widget is visible, the controlling object relays that information via having `aria-expanded="true"` set on it. The accessible name of the controlling object should reflect this change.

```html
<button aria-expanded="true" aria-controls="widget1">Hide widget</button>
```

### Menu

When a [`menu`](/en-US/docs/Web/Accessibility/ARIA/Roles/Menu_role) is displayed, the button object that toggles the visibility of that menu has `aria-expanded="true"` set. When the menu is hidden, aria-expanded can be omitted. If specified when the menu is hidden, it should be set as `aria-expanded="false"`. When a child menu is not visible, its parent [`menuitem`](/en-US/docs/Web/Accessibility/ARIA/Roles/menuitem_role) has `aria-expanded`. It should be set to `true` when the child menu is visible.

### Combobox

By default, some roles are hidden or collapsed and other roles are open or expanded by default. Elements with role [`combobox`](/en-US/docs/Web/Accessibility/ARIA/Roles/Combobox_role) have a default value for `aria-expanded` of `false`. When a combobox popup is not visible, the element with role `combobox` has `aria-expanded` set to `false`. This is the default state. When the popup element is visible, `aria-expanded` should be set to `true`.

```html
<label for="username">Username</label>
<input id="username" name="username" aria-describedby="username-desc">
<button aria-expanded="false" aria-controls="username-desc" aria-label="Help about username" type="button">
  <span aria-hidden="true">?</span>
</button>
<p id="username-desc" hidden>
  Your username is the name that you use to log in to this service.
</p>
```

> **Note:** The presence of the `aria-expanded` attribute indicates control. Avoid including it on elements that do not control the expanded state of other elements.

### Treeitems

Each element with role [`treeitem`](/en-US/docs/Web/Accessibility/ARIA/Roles/Treeitem_role) that serves as a parent node has `aria-expanded="false"` when the node is in a closed state and `aria-expanded="true"`when the node is in an open state. End nodes, nodes with no descendant nodes, should not have the `aria-expanded` attribute because, if they were to have it, they would be incorrectly described to assistive technologies as parent nodes.

### Rows

A parent row is a row that can be expanded or collapsed to show or hide a set of child rows in a table or grid. Each parent row has the `aria-expanded` state set on either the row element or on a cell contained in the row. When the child rows are hidden, `aria-expanded="false"` is set. `aria-expanded="true"` is set when the child rows are displayed. Rows that do not control the display of child rows should not include the `aria-expanded` attribute at all because including the attribute defines the rows as parent rows.

## Values

- `false`
  - : The grouping element this element owns or controls is collapsed.

- `true`
  - : The grouping element this element owns or controls is expanded.

- `undefined` (default)
  - : The element does not own or control a grouping element that is expandable.


## ARIAMixin API

- {{domxref("Element.ariaExpanded")}}
  - : The  [`ariaExpanded`](/en-US/docs/Web/API/Element/ariaExpanded) property, part of the {{domxref("Element")}} interface, reflects the value of the `aria-expanded` attribute.
- {{domxref("ElementInternals.ariaExpanded")}}
  - : The  [`ariaExpanded`](/en-US/docs/Web/API/Element/ariaExpanded) property, part of the {{domxref("ElementInternals")}} interface, reflects the value of the `aria-expanded` attribute.

## Associated roles

Used in roles:

- [`application`](/en-US/docs/Web/Accessibility/ARIA/Roles/Application_role)
- [`button`](/en-US/docs/Web/Accessibility/ARIA/Roles/Button_role)
- [`checkbox`](/en-US/docs/Web/Accessibility/ARIA/Roles/Checkbox_role)
- [`combobox`](/en-US/docs/Web/Accessibility/ARIA/Roles/Combobox_role)
- [`gridcell`](/en-US/docs/Web/Accessibility/ARIA/Roles/Gridcell_role)
- [`link`](/en-US/docs/Web/Accessibility/ARIA/Roles/Link_role)
- [`listbox`](/en-US/docs/Web/Accessibility/ARIA/Roles/Listbox_role)
- [`menuitem`](/en-US/docs/Web/Accessibility/ARIA/Roles/Menuitem_role)
- [`row`](/en-US/docs/Web/Accessibility/ARIA/Roles/row_Role)
- [`rowheader`](/en-US/docs/Web/Accessibility/ARIA/Roles/Rowheader_role)
- [`tab`](/en-US/docs/Web/Accessibility/ARIA/Roles/Tab_role)
- [`treeitem`](/en-US/docs/Web/Accessibility/ARIA/Roles/Treeitem_role)

Inherits into roles:

- [`columnheader`](/en-US/docs/Web/Accessibility/ARIA/Roles/Columnheader_role)
- [`menuitemcheckbox`](/en-US/docs/Web/Accessibility/ARIA/Roles/Menuitemcheckbox_role)
- [`menuitemradio`](/en-US/docs/Web/Accessibility/ARIA/Roles/Menuitemradio_role)
- [`rowheader`](/en-US/docs/Web/Accessibility/ARIA/Roles/rowheader_role)
- [`switch`](/en-US/docs/Web/Accessibility/ARIA/Roles/Switch_role)

## Specifications

| Specification | Status |
| ------------- | ------  |
| {{SpecName("ARIA","#aria-expanded","ARIA: aria-expanded Attribute")}}  | {{Spec2('ARIA')}} |

## See Also

- [`aria-controls`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-controls)
- [`aria-owns`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-owns)
- [`aria-hidden`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-hidden)
- HTML {{htmlattrxref("hidden")}} attribute

<section id="Quick_links">
<strong><a href="/en-US/docs/Web/Accessibility/ARIA/Attributes">WAI-ARIA states and properties</a></strong>
{{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/aria/Attributes")}}
</section>
