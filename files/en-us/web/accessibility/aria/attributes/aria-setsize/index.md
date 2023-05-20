---
title: aria-setsize
slug: Web/Accessibility/ARIA/Attributes/aria-setsize
page-type: aria-attribute
spec-urls: https://w3c.github.io/aria/#aria-setsize
---

The `aria-setsize` attribute defines the number of items in the current set of listitems or treeitems when not all items in the set are present in the DOM.

## Description

Browsers automatically calculate the set size and position for each item in a group of items, like the number of {{HTMLelement('li')}}s in a list, buttons in a same-named group of [radio buttons](/en-US/docs/Web/HTML/Element/input/radio), and {{HTMLelement('option')}}s in a {{HTMLelement('select')}}. Assistive technologies, like screen readers, take advantage of this state management to report set sizes to the user.

When the DOM is not complete, the browser calculation of the number of items in a set can be incorrect. When only a subset of items, such as list items, are loaded into the DOM, the browser calculates the number of items based only on those present. The `aria-setsize` attribute should be used to override the browser's incorrect count. It defines the number of items in the current set of listitems or treeitems had the entire set been loaded.

`aria-setsize` attribute is set on each item, rather than on any containing element. The value is the same for each item: an integer reflecting number of items in the complete set, or `-1` if the set size is unknown. If all the items are present in the DOM, the browser can calculate the set size and the position of each item, making both `aria-setsize` and `aria-posinset` unnecessary.

Elements with the `aria-setsize` generally have the [`aria-posinset`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-posinset) attribute included as well to indicate the position of that item within the set. The `aria-posinset` value is between `1` and the positive value of `aria-setsize`.

For example, in a page's comments section, When comments in are not all in the DOM, such as when comments are paginated, the level, total number of comments, and position of each comment should be set with ARIA. The hierarchical level of comments can be indicated with [`aria-level`](/en-US/docs/Web/Accessibility/aria/Attributes/aria-level). Group positional information is indicated with `aria-posinset` and `aria-setsize`.

When a feed has a static number of articles, `aria-setsize` can be added to each article element with the value being either the total number of articles loaded or the total number in the feed. The value chosen depends on which value is most helpful to users. If the number of articles is extremely large, indefinite, or changes often, `aria-setsize="-1"` can be set to communicate the size of the set is unknown.

In a [`listbox`](/en-US/docs/Web/Accessibility/ARIA/Roles/listbox_role), when the complete set of available options is not present in the DOM due to dynamic loading on scroll, both `aria-setsize` and `aria-posinset` can be set on each [`option`](/en-US/docs/Web/Accessibility/ARIA/Roles/option_role).

In a tree view, if the complete set of available nodes is not present in the DOM due to dynamic loading as the user moves focus in or scrolls the tree, each node has `aria-level`, `aria-setsize`, and `aria-posinset` set.

In a menu, `aria-setsize` is set on all [`menuitem`](/en-US/docs/Web/Accessibility/ARIA/Roles/menuitem_role), [`menuitemcheckbox`](/en-US/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role), or [`menuitemradio`](/en-US/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role) roles, with the value being the total number of items in the menu, excluding any separators.

## Example

The following example shows items 5 through 8 in a set of 16.

```html
<h2 id="label_fruit">Available Fruit</h2>
<ul role="listbox" aria-labelledby="label_fruit">
  <li role="option" aria-setsize="16" aria-posinset="5">apples</li>
  <li role="option" aria-setsize="16" aria-posinset="6">bananas</li>
  <li role="option" aria-setsize="16" aria-posinset="7">cantaloupes</li>
  <li role="option" aria-setsize="16" aria-posinset="8">dates</li>
</ul>
```

To orient the user, assistive technologies would list the bananas above as "item 6 out of 16."

## Values

- `<integer>`
  - : The number of items in the full set or `-1` is the set size is unknown.

## ARIAMixin API

- {{domxref("Element.ariaSetSize")}}
  - : The [`ariaSetSize`](/en-US/docs/Web/API/Element/ariaSetSize) property, part of the {{domxref("Element")}} interface, reflects the value of the `aria-setsize` attribute.
- {{domxref("ElementInternals.ariaSetSize")}}
  - : The [`ariaSetSize`](/en-US/docs/Web/API/ElementInternals/ariaSetSize) property, part of the {{domxref("ElementInternals")}} interface, reflects the value of the `aria-setsize` attribute.

## Associated roles

Used in roles:

- [`article`](/en-US/docs/Web/Accessibility/ARIA/Roles/article_role)
- [`associationlistitemkey`](/en-US/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`associationlistitemvalue`](/en-US/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`comment`](/en-US/docs/Web/Accessibility/ARIA/Roles/comment_role)
- [`listitem`](/en-US/docs/Web/Accessibility/ARIA/Roles/listitem_role)
- [`menuitem`](/en-US/docs/Web/Accessibility/ARIA/Roles/menuitem_role)
- [`option`](/en-US/docs/Web/Accessibility/ARIA/Roles/option_role)
- [`radio`](/en-US/docs/Web/Accessibility/ARIA/Roles/radio_role)
- [`row`](/en-US/docs/Web/Accessibility/ARIA/Roles/row_role)
- [`tab`](/en-US/docs/Web/Accessibility/ARIA/Roles/tab_role)

Inherits into roles:

- [`comment`](/en-US/docs/Web/Accessibility/ARIA/Roles/comment_role)
- [`menuitemcheckbox`](/en-US/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role)
- [`menuitemradio`](/en-US/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role)
- [`treeitem`](/en-US/docs/Web/Accessibility/ARIA/Roles/treeitem_role)

## Specifications

{{Specifications}}

## See Also

- [`aria-posinset`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-posinset)
- [Treegrid Email Inbox](https://www.w3.org/TR/2019/WD-wai-aria-practices-1.2-20191218/examples/treegrid/treegrid-1.html) example
- [Navigation Treeview Using Declared Properties](https://www.w3.org/TR/2019/WD-wai-aria-practices-1.2-20191218/examples/treeview/treeview-2/treeview-2b.html) example

<section id="Quick_links">
<strong><a href="/en-US/docs/Web/Accessibility/ARIA/Attributes">WAI-ARIA states and properties</a></strong>
{{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/aria/Attributes")}}
</section>
