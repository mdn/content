---
title: aria-posinset
slug: Web/Accessibility/ARIA/Attributes/aria-posinset
page-type: aria-attribute
spec-urls: https://w3c.github.io/aria/#aria-posinset
---

{{AccessibilitySidebar}}

The `aria-posinset` attribute defines an element's number or position in the current set of listitems or treeitems when not all items are present in the DOM.

## Description

Short for "position in set", the `aria-posinset` attribute defines the position of the element within the whole set of listitems or treeitems when only a subset of the items are present in the DOM.

If all the items in a list are present in the DOM, the browser can calculate the total and the position of each, making `aria-posinset` unnecessary. When only a portion of a set is in the DOM, include `aria-posinset` to provide information about the element's position within the set along with [`aria-setsize`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-setsize) to inform the user how many items are in the full set.

The following example shows a listbox with four element options out of the 118 in the periodic table of chemical elements.

```html
<h2 id="periodic-table">Periodic table of chemical elements</h2>
<ul role="listbox" aria-labelledby="periodic-table">
  <li role="option" aria-setsize="118" aria-posinset="1">Hydrogen</li>
  <li role="option" aria-setsize="118" aria-posinset="3">Lithium</li>
  <li role="option" aria-setsize="118" aria-posinset="11">Sodium</li>
  <li role="option" aria-setsize="118" aria-posinset="19">Potassium</li>
</ul>
```

The value of each `aria-posinset` is an integer greater than or equal to `1`, and less than or equal to the size of the set when that size is known.

> [!NOTE]
> When using `aria-posinset` you must also include value for [`aria-setsize`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-setsize), which is the size of the entire set. If the size of the entire set is unknown, set `aria-setsize="-1"`.

For [`menuitem`](/en-US/docs/Web/Accessibility/ARIA/Roles/menuitem_role), [`menuitemcheckbox`](/en-US/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role), or [`menuitemradio`](/en-US/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role), set the value of `aria-posinset` with respect to the total number of items in the menu, excluding any separators.

In a [`feed`](/en-US/docs/Web/Accessibility/ARIA/Roles/feed_role), each {{HTMLElement('article')}} element has `aria-posinset` set to a value that represents its position in the feed along with the `aria-setsize` set to either the number of articles that have been loaded or the total number in the feed, depending on which value is most helpful to users.

## Values

- `<integer>`
  - : Integer greater than or equal to 1, and less than or equal to the value of `aria-setsize`.

## Associated interfaces

- {{domxref("Element.ariaPosInSet")}}
  - : The [`ariaPosInSet`](/en-US/docs/Web/API/Element/ariaPosInSet) property, part of the {{domxref("Element")}} interface, reflects the value of the `aria-posinset` attribute.
- {{domxref("ElementInternals.ariaPosInSet")}}
  - : The [`ariaPosInSet`](/en-US/docs/Web/API/ElementInternals/ariaPosInSet) property, part of the {{domxref("ElementInternals")}} interface, reflects the value of the `aria-posinset` attribute.

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

## See also

- [`aria-setsize`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-setsize)
