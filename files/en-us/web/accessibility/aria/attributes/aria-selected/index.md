---
title: aria-selected
slug: Web/Accessibility/ARIA/Attributes/aria-selected
page-type: aria-attribute
spec-urls: https://w3c.github.io/aria/#aria-selected
---

The `aria-selected` attribute indicates the current "selected" state of various widgets.

## Description

The `aria-selected` attribute indicates the current "selected" state for [`gridcell`](/en-US/docs/Web/Accessibility/ARIA/Roles/gridcell_role), [`option`](/en-US/docs/Web/Accessibility/ARIA/Roles/option_role), [`row`](/en-US/docs/Web/Accessibility/ARIA/Roles/row_role) and [`tab`](/en-US/docs/Web/Accessibility/ARIA/Roles/tab_role) roles.

This attribute is used to indicate which elements within single-selection and multiple-selection composite widgets are selected. If more than one element is selectable at a time, include `aria-multiselectable="true"` on the grid, listbox, tablist, or other owning role, while including `aria-selected` only on the selectable cells, options, and tabs.

For other roles, the currently selected state is set with [`aria-current`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-current), or possibly [`aria-checked`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-checked) or [`aria-pressed`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-pressed), depending on the role.

Widgets that support both `aria-selected` and `aria-current` at the same time have different meanings for each. For example, `aria-current="page"` can be used in a navigation tree to indicate which page is currently displayed, while `aria-selected="true"` indicates which page will be displayed if the user activates the `treeitem`.

### Grid

Setting `aria-selected="false"` on a focusable gridcell indicates the cell is selectable. If the grid allows more than one gridcell to be selected at a time, set `aria-multiselectable="true"` on the element with role [`grid`](/en-US/docs/Web/Accessibility/ARIA/Roles/grid_role). Setting `aria-selected` on a column or row header gridcell does not propagate the state to other cells in the column or row.

### Option

Both `aria-selected` and `aria-checked` are valid for [`option`](/en-US/docs/Web/Accessibility/ARIA/Roles/option_role). Some user interfaces indicate selection with `aria-selected` in single-select list boxes and with `aria-checked` in multi-select list boxes.

Don't specify both `aria-selected` and `aria-checked` on `option` elements contained by the same `listbox` unless the meaning and purpose of `aria-selected` is different from the meaning and purpose of aria-checked in the user interface, the meaning and purpose of each state apparent, and the UI provides separate methods for controlling each state.

### Row

The `aria-selected` attribute is supported on `row` but not `column`. If a grid supports selection, when a cell or row is selected, the selected element has `aria-selected="true"` set.

If the grid supports column selection and a column is selected, all cells in the column have `aria-selected` set to `true`.

### Tab

In a tablist, `aria-selected` is used on a tab to indicate the currently-displayed [`tabpanel`](/en-US/docs/Web/Accessibility/ARIA/Roles/tabpanel_role).

The selected [`tab`](/en-US/docs/Web/Accessibility/ARIA/Roles/tab_role) in a [`tablist`](/en-US/docs/Web/Accessibility/ARIA/Roles/tablist_role) should have has its `aria-selected="true"` set. All inactive tabs in the tablist should have `aria-selected="false"` set. Setting the state only impacts the accessibility tree: make sure to style the active tab in a way that visual indicates it's selected state. The default value for `aria-selected` on a `tab` role is `false`.

If more than one tab is selectable at a time, include `aria-multiselectable` on the `tablist`.

## Examples

In this `tablist` example, the first `tab` is selected:

```html
<div class="tab-interface">
  <div role="tablist" aria-label="Sample Tabs">
    <span
      role="tab"
      aria-selected="true"
      aria-controls="panel-1"
      id="tab-1"
      tabindex="0">
      First Tab
    </span>
    <span
      role="tab"
      aria-selected="false"
      aria-controls="panel-2"
      id="tab-2"
      tabindex="-1">
      Second Tab
    </span>
    <span
      role="tab"
      aria-selected="false"
      aria-controls="panel-3"
      id="tab-3"
      tabindex="-1">
      Third Tab
    </span>
  </div>
  <div id="panel-1" role="tabpanel" tabindex="0" aria-labelledby="tab-1">
    <p>Content for the first panel</p>
  </div>
  <div id="panel-2" role="tabpanel" tabindex="0" aria-labelledby="tab-2" hidden>
    <p>Content for the second panel</p>
  </div>
  <div id="panel-3" role="tabpanel" tabindex="0" aria-labelledby="tab-3" hidden>
    <p>Content for the third panel</p>
  </div>
</div>
```

> **Note:** ARIA only modifies the accessibility tree for an element and how assistive technology presents the content to users. ARIA doesn't change anything about an element's function or behavior.

## Values

- `true`
  - : The selectable element is selected.
- `false`
  - : The selectable element is not selected. Implicit default for [`tab`](/en-US/docs/Web/Accessibility/ARIA/Roles/tab_role).
- `undefined` (default)
  - : The element is not selectable.

## ARIAMixin API

- {{domxref("Element.ariaSelected")}}
  - : The [`ariaSelected`](/en-US/docs/Web/API/Element/ariaSelected) property, part of the {{domxref("Element")}} interface, reflects the value of the `aria-selected` attribute.
- {{domxref("ElementInternals.ariaSelected")}}
  - : The [`ariaSelected`](/en-US/docs/Web/API/ElementInternals/ariaSelected) property, part of the {{domxref("ElementInternals")}} interface, reflects the value of the `aria-selected` attribute.

## Associated roles

Used in roles:

- [`gridcell`](/en-US/docs/Web/Accessibility/ARIA/Roles/gridcell_role)
- [`option`](/en-US/docs/Web/Accessibility/ARIA/Roles/option_role)
- [`row`](/en-US/docs/Web/Accessibility/ARIA/Roles/row_role)
- [`tab`](/en-US/docs/Web/Accessibility/ARIA/Roles/tab_role)

Inherited into roles:

- [`columnheader`](/en-US/docs/Web/Accessibility/ARIA/Roles/columnheader_role)
- [`rowheader`](/en-US/docs/Web/Accessibility/ARIA/Roles/rowheader_role)
- [`treeitem`](/en-US/docs/Web/Accessibility/ARIA/Roles/treeitem_role)

## Specifications

{{Specifications}}

## See Also

- [`aria-pressed`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-pressed)
- [`aria-checked`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-checked)

<section id="Quick_links">
<strong><a href="/en-US/docs/Web/Accessibility/ARIA/Attributes">WAI-ARIA states and properties</a></strong>
{{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/aria/Attributes")}}
</section>
