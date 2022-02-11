---
title: 'ARIA: tree role'
slug: Web/Accessibility/ARIA/Roles/tree_role
tags: 
  - Accessibility
  - ARIA
  - roles
  - Reference
  - ARIA roles
  - Tree role
  - composite widget role
---

A `tree` is a widget that allows the user to select one or more items from a hierarchically organized collection.

## Description

A `tree` widget is a hierarchical list. Any item in the hierarchy may have child tree items, set with [`role="treeitem"`](/en-US/docs/Web/Accessibility/ARIA/Roles/treeitem_role). Tree items that have children can be expanded or collapsed, showing and hiding their children. 

An example of a `tree` is a file system selection user interface: a tree view displaying folders and files. Folder items can be expanded to reveal the contents of the folder -- which may be files, folders, or both -- and collapsed, hiding its contents. 

Trees can be "single-select", allowing users to choose just one item for an action, or "multi-select", where users are able to select more than one item for an action. In both cases, to be keyboard accessible, focus must be managed for all tree descendants.

In some implementations of single-select tree, the focused item also has a selected state; this is known as "selection follows focus". In multi-select trees, the selected state is always independent of the focus. For example, in a typical file system navigator, the user can move focus to select any number of files for an action, such as copy or move. The visual design should make it clear which items are selected and which item has focus. 

In a tree view, the `tree` node is the root node; it can have child, grandchild, and further descendant `treeitem` nodes. 

In multi-select trees, the `tree` has [aria-multiselectable] set to true. Otherwise, aria-multiselectable is either set to false or the default value of false is implied.

Each element serving as a tree node has role `treeitem`, except for the root tree node which has a role of `tree`.  A `tree` does not have a parent `tree` node - it is the root node. If a node is both nested in a tree and has descendant tree items, then it has the role `treeitem`.

`treeitem` nodes can be direct children of the `tree` root node or nested `treeitem` nodes, optionally nested in a [`group`](/en-US/docs/Web/Accessibility/ARIA/Roles/group_role) element. 

The root `tree` and each element with role `treeitem` that serves as a parent node to other tree items has the [`aria-expanded`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-expanded) attribute. It is set to `false` when the node is in a closed state and set to `true` when the node is in an open state. Do not include `aria-expanded` on end nodes, those without tree item children, as that would incorrectly described the node as a parent node to assistive technologies.

All treeitems are contained in or owned by an element with role `tree`. If there are any tree items that are not direct descendants of the `tree` in the markup, include [`aria-owns`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-owns) on the tree container to include elements that are not DOM children of the container. These non-child owned elements will appear in the reading order in the sequence they are referenced and after any tree items that are DOM children. Scripts that manage focus need to ensure the visual focus order matches this assistive technology reading order. 


Elements with the role `tree` have an implicit [`aria-orientation`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-orientation) value of vertical.



    
If the tree supports selection of more than one node, the element with role tree has aria-multiselectable set to true. Otherwise, aria-multiselectable is either set to false or the default value of false is implied.
    If the tree does not support multiple selection, aria-selected is set to true for the selected node and it is not present on any other node in the tree.
    if the tree supports multiple selection:
        All selected nodes have aria-selected set to true.
        All nodes that are selectable but not selected have aria-selected set to false.
        If the tree contains nodes that are not selectable, those nodes do not have the aria-selected state.
    The element with role tree has either a visible label referenced by aria-labelledby or a value specified for aria-label.
    If the complete set of available nodes is not present in the DOM due to dynamic loading as the user moves focus in or scrolls the tree, each node has aria-level, aria-setsize, and aria-posinset specified.
    If the tree element is horizontally oriented, it has aria-orientation set to horizontal. The default value of aria-orientation for a tree is vertical.



### Associated WAI-ARIA roles, states, and properties


- [`role="treeitem"`](/en-US/docs/Web/Accessibility/ARIA/Roles/treeitem_role) and [`role="group"`](/en-US/docs/Web/Accessibility/ARIA/Roles/group_role) owning `treeitem`
  - : 
- [`role="treegrid"`](/en-US/docs/Web/Accessibility/ARIA/Roles/treegrid_role) 
  - : 

- [`aria-label`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label) or [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)
  - : The `tree` is required to have an accessible name.  Use `aria-labelledby` if a visible label is present, otherwise use `aria-label`. 
- [`aria-expanded`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-expanded)
  - : Set on the the root `tree` and on `treeitem` nodes that are parents of other `treeitem` nodes, to indicate whether the tree view is expanded (`true`) or collapsed (`false`).
- [`aria-orientation`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-orientation) 
  - : indicates whether the tree orientation is horizontal or vertical; defaults to `vertical` if omitted.
- [`aria-errormessage`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-errormessage)
  - : 
- [`aria-invalid`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-invalid)
  - : 
- [`aria-multiselectable`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-multiselectable)
  - : 
- [`aria-required`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-required
  - : 

### Keyboard interactions

### Required JavaScript features

## Examples

## Accessibility Concerns

## Best Practices

### Prefer HTML

## Specifications

| Specification                                                                                                                    | Status                                           |
| -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| {{SpecName("ARIA","#tree","ARIA: tree role")}}                                             | {{Spec2('ARIA')}}                         |
| {{SpecName("ARIA Authoring Practices 1.2","#TreeView","tree view")}} | {{Spec2('ARIA Authoring Practices 1.2')}} |

## See Also

<section id="Quick_links">

1. [**WAI-ARIA roles**](/en-US/docs/Web/Accessibility/ARIA/Roles)

    {{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/ARIA/Roles")}}

</section>
