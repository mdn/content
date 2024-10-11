---
title: "ARIA: treeitem role"
slug: Web/Accessibility/ARIA/Roles/treeitem_role
page-type: aria-role
spec-urls:
  - https://w3c.github.io/aria/#treeitem
  - https://www.w3.org/WAI/ARIA/apg/patterns/treeview/examples/treeview-navigation/
---

{{AccessibilitySidebar}}

A `treeitem` is an item in a `tree`.

## Description

A [`tree`](/en-US/docs/Web/Accessibility/ARIA/Roles/tree_role) is a hierarchical list with parent and child nodes that can expand and collapse. A `treeitem` is a node in a `tree`. The root of the tree is `tree`, but all tree nodes are `treeitem` elements, even if they themselves have nested `treeitem` nodes.

An example of a `tree` is a file system selection user interface: a tree view displaying folders and files. Each folder and file is a `treeitem`. Folder items, which are `treeitem` elements, can be expanded to reveal the contents of the folder—which may be files, folders, or both, and are all `treeitems`—and collapsed, hiding its contents.

In a tree hierarchy, the _root node_ has the role `tree`. All other nodes, other than the root node, have the role of `treeitem`, whether or not they have children. A `treeitem` that is a parent is a **parent node**. A `treeitem` that is not a parent is an _end node_.

Tree items that have children can be expanded or collapsed, showing and hiding their children. A parent node that is expanded so its child nodes are visible is an **open node**. A parent node that is collapsed so the child nodes are not visible is a **closed node**.

Each parent node contains or owns an element with role [`group`](/en-US/docs/Web/Accessibility/ARIA/Roles/group_role). A parent node is an expandable collection of `treeitem` elements. These child nodes are not direct descendants of the parent node: rather, they should be enclosed in an element with the `group` role.

Each parent node should include the [`aria-expanded`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-expanded) attribute. It is set to `false` when closed `true` when open. End nodes should not have the `aria-expanded` attribute included as the presence of the attribute indicates to assistive technologies that the node is a parent.

> [!NOTE]
> ARIA tree views use navigation more similar to native applications than to web applications and are navigated primarily with arrow keys on the keyboard instead of the <kbd>Tab</kbd>. This form of navigation is not common for most browser content, though normal and expected for native applications. For this reason, consider alternative options to address the functionality you need before creating a tree view.

Any element with a `treeitem` role must be nested in, or owned by, an element with role `tree`. Tree items can be a child of `tree`, `treeitem`, or an element with role `group` that is contained in, or owned by, an element with role `tree` or `treeitem`. If a `treeitem` is not nested within a `tree`, or nested in a `group` that is owned by a `tree`, include the [`id`](/en-US/docs/Web/HTML/Global_attributes/id) of the `treeitem` in the [`aria-owns`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-owns) attribute value on the owning `tree`, `treeitem` or `group` element.

Trees can be "single-select", allowing users to choose just one `treeitem` for an action, or "multi-select", where users are able to select more than one `treeitem` nodes for an action. In both cases, to be keyboard accessible, focus must be managed for all tree descendants.

In single-select trees, only one treeitem can have [`aria-selected`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-selected) (or [`aria-checked`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-checked)) set to `true`. When a single-select tree receives focus, if no `treeitem` is selected before the tree receives focus, focus is set on the first `treeitem`. If a `treeitem` is selected before the tree receives focus, focus is set on the single `treeitem` that has `aria-selected="true"` set.

All nodes that are selectable but not selected have either `aria-selected` or `aria-checked` set to `false`. If the tree contains nodes that are not selectable, do not include either `aria-selected` or `aria-checked`, as the presence of either attribute indicates to assistive technologies the node is selectable.

No more than one node can be selected at a time unless the `tree` node has [`aria-multiselectable="true"`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-multiselectable) set.

When a multi-select tree receives focus, if none of the tree items are selected before the tree receives focus, focus is set on the first `treeitem`. If one or more tree items are selected before the tree receives focus, focus is set on the first selected `treeitem`.

In multi-select trees, all selected tree items have either `aria-selected="true"` (or `aria-checked="true"`) set. All tree item nodes that are selectable but not currently selected should have `aria-selected="false"` (or `aria-checked="false"`) set.

Either `aria-selected` or `aria-checked` can be used to indicate selection for `treeitem` elements. Some user interfaces indicate selection with `aria-selected` in single-select trees and with `aria-checked` in multi-select trees.

Using both `aria-selected` and `aria-checked` in the same `tree` is strongly discouraged. Don't use both `aria-selected` and `aria-checked` on treeitems in a single tree unless the meaning and purpose of `aria-selected` is different from the meaning and purpose of `aria-checked`, the meaning and purpose of each state apparent, and the user interface provides a separate method for controlling each state.

In multi-select trees, the selected state should be independent of the focus. For example, in a typical file system navigator, the user can move focus to select any number of files for an action, such as copy or move. The visual design should make it clear which items are selected and which item has focus.

If the complete set of available treeitems is not present in the DOM due to dynamic loading as the user moves focus in or scrolls the tree, each `treeitem` should have [`aria-level`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-level), [`aria-setsize`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-setsize), and [`aria-posinset`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-posinset) specified.

A `treeitem` is required to have an accessible name. Generally, that name comes from the `treeitem`'s contents. The accessible name can also be set via [`aria-label`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label) or [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby).

### Associated WAI-ARIA roles, states, and properties

- [`tree`](/en-US/docs/Web/Accessibility/ARIA/Roles/tree_role) role
  - : The root node for the hierarchical list of parent and child `treeitem` nodes that can expand and collapse
- [`group`](/en-US/docs/Web/Accessibility/ARIA/Roles/group_role) role
  - : Identifies a set of `treeitem` child nodes.
- [`aria-expanded`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-expanded)
  - : Set on the root `tree` and on `group` nodes that are parents of `treeitem` nodes, to indicate whether the tree view is expanded (`true`) or collapsed (`false`).
- [`aria-selected`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-selected)
  - : Set to `true` or `false`, indicates a `treeitem` is selectable, and whether or not it is currently selected.
- [`aria-checked`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-checked)
  - : Set to `true` or `false`, indicates the `treeitem` can be checked, and whether or not it is currently checked.

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
<li>When focus is on a closed tree, does nothing.
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
<td>Performs the default action of the currently focused node. For parent nodes, it opens or closes the node. In single-select trees, if the node has no children, selects the current node if not already selected (which is the default action).
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

## Examples

The following is how one might mark up a directory listing of web development courses as a tree view:

```html
<div>
  <h3 id="treeLabel">Developer Learning Path</h3>
  <ul role="tree" aria-labelledby="treeLabel">
    <li role="treeitem" aria-expanded="true">
      <span>Web</span>
      <ul role="group">
        <li role="treeitem" aria-expanded="false">
          <span>Languages</span>
          <ul role="group">
            <li role="treeitem" aria-expanded="false">
              <span>HTML</span>
              <ul role="group">
                <li role="treeitem">Document structure</li>
                <li role="treeitem">Head elements</li>
                <li role="treeitem">Semantic elements</li>
                <li role="treeitem">Attributes</li>
                <li role="treeitem">Web forms</li>
              </ul>
            </li>
            <li role="treeitem">CSS</li>
            <li role="treeitem">JavaScript</li>
          </ul>
        </li>
        <li role="treeitem" aria-expanded="false">
          <span>Accessibility</span>
          <ul role="group">
            <li role="treeitem" aria-label="accessibility object model">AOM</li>
            <li role="treeitem">WCAG</li>
            <li role="treeitem">ARIA</li>
          </ul>
        </li>
        <li role="treeitem" aria-expanded="false">
          <span>Web Performance</span>
          <ul role="group">
            <li role="treeitem">Load time</li>
          </ul>
        </li>
        <li role="treeitem">APIs</li>
      </ul>
    </li>
  </ul>
</div>
```

The above provides the semantics for a tree view, but does not provide any of the interactivity. That must be added in with JavaScript.

If the tree items aren't by default focusable, JavaScript can be used [`tabIndex="-1"`](/en-US/docs/Web/HTML/Global_attributes/tabindex) to all the treeitems except the one that should receive focus when the user tabs into the tree which should be set to `tabIndex="0"`.

All the keyboard functionality in Keyboard interactions and all pointer events need to be programmed, including focus management, going up and down the tree, expanding and collapsing parent nodes, and selection management.

If the tree has more than 7 tree items, including type ahead functionality is recommended.

## Specifications

{{Specifications}}

## See also
