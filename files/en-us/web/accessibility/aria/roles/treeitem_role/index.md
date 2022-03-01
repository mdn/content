---
title: 'ARIA: treeitem role'
slug: Web/Accessibility/ARIA/Roles/treeitem_role
tags: 
  - Accessibility
  - ARIA
  - roles
  - Reference
  - ARIA roles
  - treeitem
---

A `treeitem` is an item in a `tree`.

## Description

A `treeitem` is an element nested in a [`tree`](/en-US/docs/Web/Accessibility/ARIA/Roles/tree_role). A `tree` is a hierarchical list with parent and child nodes that can expand and collapse. The root of the tree is `tree`, but all tree nodes are `treeitem` elememnts, even if they themselves have nested `treeitem` elements. 

An example of a `tree` is a file system selection user interface: a tree view displaying folders and files. Each folder and file is a `treeitem`. Folder items, which are `treeitem` elements, can be expanded to reveal the contents of the folder -- which may be files, folders, or both, all `treeitems` -- and collapsed, hiding its contents. 

All items in a tree hierarchy, other than the `tree` root, are `treeitem`. Tree items that have children can be expanded or collapsed, showing and hiding their children. An expandable collection of `treeitem` elements should be enclosed in an element with the [`group`](/en-US/docs/Web/Accessibility/ARIA/Roles/group_role) role.

> **Note:** ARIA tree views use naviation more similar to native applications than to web applications and are navigated primarily with arrow keys on the keyboard instead of the <kbd>Tab</kbd>. This form of navigation is not common for most browser content, though normal and expected for native applications. For this reason, consider alternative options to address the functionality you need before creating a tree view. 

Any element with a `treeitem` role must be contained in, or owned by, an element with role `tree` or an element with role `group` that is contained in, or owned by, an element with role `treeitem`. If a `treeitem` is not nested within a `tree`, or nested in a `group` that is owned by a `tree`, include the {{HTMLattrxref('id')}} of the `treeitem` in the [`aria-owns`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-owns) attribute value on the owning `tree`, `treeitem` or `group` element.

Trees can be "single-select", allowing users to choose just one `treeitem` for an action, or "multi-select", where users are able to select more than one `treeitem` for an action. In both cases, to be keyboard accessible, focus must be managed for all tree descendants.

When a single-select tree receives focus, if no `treeitem` is selected before the tree receives focus, focus is set on the first `treeitem`. If a `treeitem` is selected before the tree receives focus, focus is set on the single `treeitem` that has including having [`aria-selected="true"`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-selected) set. In single-select trees, only one treeitem can have `aria-selected` set to `true`.

When a multi-select tree receives focus, if none of the tree items are selected before the tree receives focus, focus is set on the first `treeitem`. If one or more tree items are selected before the tree receives focus, focus is set on the first selected `treeitem`.

In multi-select trees, all selected tree items have either `aria-selected="true"` (or [`aria-checked="true"`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-checked)) set. All tree item nodes that are selectable but not currently selected should have `aria-selected="false"` (or `aria-checked="false"`) set. 

Either `aria-selected` or `aria-checked` can be used to indicate selection for `treeitem` elements. Some user interfaces indicate selection with `aria-selected` in single-select trees and with `aria-checked` in multi-select trees. Don't use both `aria-selected` and `aria-checked` on treeitems in a single  tree unless the meaning and purpose of `aria-selected` is different from the meaning and purpose of `aria-checked`, the meaning and purpose of each state apparent, and the user interface provides a separate method for controlling each state.

In multi-select trees, the selected state should be independent of the focus. For example, in a typical file system navigator, the user can move focus to select any number of files for an action, such as copy or move. The visual design should make it clear which items are selected and which item has focus.

If the complete set of available treeitems is not present in the DOM due to dynamic loading as the user moves focus in or scrolls the tree, each `treeitem` should have [`aria-level`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-level), [`aria-setsize`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-setsize), and [`aria-posinset`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-posinset) specified.

### Associated WAI-ARIA roles, states, and properties

- [`aria-expanded`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-expanded)
  - : Set on the the root `tree` and on `treeitem` nodes that are parents of other `treeitem` nodes, to indicate whether the tree view is expanded (`true`) or collapsed (`false`).
  
### Keyboard interactions

### Required JavaScript features

## Examples


## Specifications

| Specification                                                                                                                    | Status                                           |
| -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| {{SpecName("ARIA","#treeitem","ARIA: treeitem role")}}                                             | {{Spec2('ARIA')}}                         |
| {{SpecName("ARIA Authoring Practices 1.2","#aria_lh_treeitem_role","treeitem role")}} | {{Spec2('ARIA Authoring Practices 1.2')}} |

## See Also


<section id="Quick_links">

1. [**WAI-ARIA roles**](/en-US/docs/Web/Accessibility/ARIA/Roles)

    {{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/ARIA/Roles")}}

</section>
