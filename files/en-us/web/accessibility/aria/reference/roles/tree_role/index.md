---
title: "ARIA: tree role"
short-title: tree
slug: Web/Accessibility/ARIA/Reference/Roles/tree_role
page-type: aria-role
spec-urls:
  - https://w3c.github.io/aria/#tree
  - https://www.w3.org/WAI/ARIA/apg/patterns/treeview/examples/treeview-navigation/
sidebar: accessibilitysidebar
---

A `tree` is a widget that allows the user to select one or more items from a hierarchically organized collection.

## Description

A `tree` widget is a hierarchical list with parent and child nodes that can expand and collapse. Any item in the hierarchy may have child tree items, set with [`role="treeitem"`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/treeitem_role). Tree items that have children can be expanded or collapsed, showing and hiding their children.

An example of a `tree` is a file system selection user interface: a tree view displaying folders and files. Folder items can be expanded to reveal the contents of the folder — which may be files, folders, or both — and collapsed, hiding its contents.

ARIA tree views are navigated primarily with arrow keys on the keyboard instead of the <kbd>Tab</kbd>. This form of navigation is not common for most browser content, though normal and expected for native applications. For this reason, before creating a tree view, consider alternative options to address the functionality you need.

> [!WARNING]
> Tree views use navigation more similar to native applications than to web applications. For this reason, consider alternative options to address the functionality you need before creating a tree view.

For more information about how individual tree nodes should be marked up, see [`treeitem`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/treeitem_role).

### Single and multiple select trees

Trees can be "single-select", allowing users to choose just one item for an action, or "multi-select", where users are able to select more than one item for an action. In multi-select trees, the `tree` has [`aria-multiselectable`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiselectable) set to true. Otherwise, `aria-multiselectable` is either set to `false` or the default value of `false` is implied. In both cases, to be keyboard accessible, focus must be managed for all tree descendants.

In some implementations of single-select tree, the focused item also has a selected state; this is known as "selection follows focus". When a single-select tree receives focus, if none of the tree items are selected before the tree receives focus, focus is set on the first node. If a tree item is selected before the tree receives focus, focus is set on the selected tree item.

When a multi-select tree receives focus, if none of the tree items are selected before the tree receives focus, focus is set on the first tree item. If one or more tree items are selected before the tree receives focus, focus is set on the first selected node.

In multi-select trees, the selected state is always independent of the focus. For example, in a typical file system navigator, the user can move focus to select any number of files for an action, such as copy or move. The visual design should make it clear which items are selected and which item has focus.

### Tree hierarchy

In a tree view, the `tree` element is the container for the hierarchy of `treeitem` nodes. Each element serving as a tree node has role `treeitem`. The top-level tree items are root nodes; they can have child, grandchild, and further descendant tree items.

### DOM placement and presence

All treeitems are contained in or owned by an element with role `tree`. If there are any root nodes that are not contained in the `tree` in the DOM, include [`aria-owns`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns) on the owning tree container to reference them. These non-child owned elements will appear in the reading order in the sequence they are referenced and after any tree items that are DOM children. Scripts that manage focus need to ensure the visual focus order matches this assistive technology reading order.

### Accessible name

The `tree` must be provided with an accessible name. Either reference a visible label referenced with [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) or specify a label with [`aria-label`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label).

### Menu orientation

Elements with the role `tree` have an implicit [`aria-orientation`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation) value of vertical. If the tree element is horizontally oriented, include `aria-orientation="horizontal"`.

### Associated WAI-ARIA roles, states, and properties

- [`role="treeitem"`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/treeitem_role)
  - : An item in a tree.
- [`role="group"`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/group_role)
  - : An expandable collection of tree items.
- [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : Identifies the element (or elements) that labels the `tree` providing the required accessible name when a visible label is present. Otherwise use `aria-label`.
- [`aria-label`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : Defines a string value that labels the `tree` when no visible label is present.
- [`aria-orientation`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation)
  - : Indicates whether the tree orientation is horizontal or vertical; defaults to `vertical` if omitted.
- [`aria-multiselectable`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiselectable)
  - : When set to true, indicates the user may select more than one tree item from the tree's current selectable descendants.

### Keyboard interactions

For a vertically oriented `tree`, which is the default orientation:

<table>
<tr>
<td><kbd>Right arrow</kbd></td>
<td>
<ul>
<li>When focus is on a closed node, opens the node; focus does not move.
<li>When focus is on an open node, moves focus to the first child node.
<li>When focus is on an end node (a tree item with no children), does nothing.
</td>
</tr>
<tr>
<td><kbd>Left arrow</kbd></td>
<td>
<ul>
<li>When focus is on an open node, closes the node.
<li>When focus is on a child node that is also either an end node or a closed node, moves focus to its parent node.
<li>When focus is on a root node that is also either an end node or a closed node, does nothing.
</td>
</tr>
<tr>
<td><kbd>Down Arrow</kbd></td>
<td> Moves focus to the next node that is focusable without opening or closing a node.
</td>
</tr>
<tr>
<td><kbd>Up Arrow</kbd></td>
<td> Moves focus to the previous node that is focusable without opening or closing a node.
</td>
</tr>
<tr>
<td><kbd>Home</kbd></td>
<td> Moves focus to the first node in the tree without opening or closing a node.
</td>
</tr>
<tr>
<td><kbd>End</kbd></td>
<td> Moves focus to the last node in the tree that is focusable without opening the node.
</td>
</tr>
<tr>
<td><kbd>Enter</kbd></td>
<td>Performs the default action of the currently focused node. For parent nodes, opening or closing the node is one possible default action. In single-select trees where selection does not follow focus, the default action typically selects the current node if not already selected.
</td>
</tr>
<tr>
<td>Type a character*</td>
<td>
<ul>
<li>Focus moves to the next node with a name that starts with the typed character.
<li>If multiple characters are typed in rapid succession, focus moves to the next node with a name that starts with the string of characters typed.
</td>
</tr>
<tr>
<td>
<kbd>*</kbd> (Optional)</td>
<td> Expands all siblings that are at the same level as the current node.
</td>
</tr>
</table>

\* Type-ahead is recommended for all trees, especially for trees with more than 7 root nodes

### Multi-select keyboard interactions

There are two interaction models for multi-select trees: While you can require that users press a modifier key, such as <kbd>Shift</kbd> or <kbd>Control</kbd> while navigating the list in order to avoid losing selection states, the model that does not require the user to hold a modifier key is recommended.

#### Recommended multi user select model

<table>
<tr>
<td><kbd>Space</kbd></td>
<td> Toggles the selection state of the focused node.
</td>
</tr>
<tr>
<td><kbd>Shift + Down Arrow</kbd> (Optional)</td>
<td> Moves focus to and toggles the selection state of the next node.
</td>
</tr>
<tr>
<td><kbd>Shift + Up Arrow</kbd> (Optional)</td>
<td> Moves focus to and toggles the selection state of the previous node.
</td>
</tr>
<tr>
<td><kbd>Shift + Space</kbd> (Optional)</td>
<td> Selects contiguous nodes from the most recently selected node to the current node.
</td>
</tr>
<tr>
<td><kbd>Control + Shift + Home</kbd> (Optional)</td>
<td> Selects the node with focus and all nodes up to the first node. Optionally, moves focus to the first node.
</td>
</tr>
<tr>
<td><kbd>Control + Shift + End</kbd> (Optional)</td>
<td> Selects the node with focus and all nodes down to the last node. Optionally, moves focus to the last node.
</td>
</tr>
<tr>
<td><kbd>Control + A</kbd> (Optional)</td>
<td> Selects all nodes in the tree. Optionally, if all nodes are selected, it can also unselect all nodes.</td>
</tr>
</table>

#### Alternative multi-selection model

The alternative multi-selection model is a modifier key model in which moving focus without holding a modifier key such as <kbd>Shift</kbd> or <kbd>Control</kbd> unselects all selected nodes except for the focused node:

<table>
<tr>
<td><kbd>Shift + Down Arrow</kbd></td>
<td> Moves focus to and toggles the selection state of the next node.
</td>
</tr>
<tr>
<td><kbd>Shift + Up Arrow</kbd></td>
<td> Moves focus to and toggles the selection state of the previous node.
</td>
</tr>
<tr>
<td><kbd>Control + Down Arrow</kbd></td>
<td> Without changing the selection state, moves focus to the next node.
</td>
</tr>
<tr>
<td><kbd>Control + Up Arrow</kbd></td>
<td> Without changing the selection state, moves focus to the previous node.
</td>
</tr>
<tr>
<td><kbd>Control + Space</kbd></td>
<td> Toggles the selection state of the focused node.
</td>
</tr>
<tr>
<td><kbd>Shift + Space</kbd> (Optional)</td>
<td> Selects contiguous nodes from the most recently selected node to the current node.
</td>
</tr>
<tr>
<td><kbd>Control + Shift + Home</kbd> (Optional)</td>
<td> Selects the node with focus and all nodes up to the first node. Optionally, moves focus to the first node.
</td>
</tr>
<tr>
<td><kbd>Control + Shift + End</kbd> (Optional)</td>
<td> Selects the node with focus and all nodes down to the last node. Optionally, moves focus to the last node.
</td>
</tr>
<tr>
<td><kbd>Control + A</kbd> (Optional)</td>
<td> Selects all nodes in the tree. Optionally, if all nodes are selected, it can also unselect all nodes.
</td>
</tr>
</table>

## Specifications

{{Specifications}}
