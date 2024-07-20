---
title: "ARIA: list role"
slug: Web/Accessibility/ARIA/Roles/list_role
page-type: aria-role
spec-urls: https://w3c.github.io/aria/#list
---

{{AccessibilitySidebar}}

The ARIA `list` role can be used to identify a list of items. It is normally used in conjunction with the `listitem` role, which is used to identify a list item contained inside the list.

```html
<div role="list">
  <div role="listitem">List item 1</div>
  <div role="listitem">List item 2</div>
  <div role="listitem">List item 3</div>
</div>
```

## Description

Any content that consists of an outer container with a list of elements inside can be identified to assistive technologies using the `list` and `listitem` containers, respectively. A `list` can only contain zero or more `listitem` children.

There are no hard and fast rules about which elements you should use to mark up the list and list items, but you should make sure that the list items make sense in the context of a list, e.g. a shopping list, recipe steps, driving directions.

> **Note:** Best practices dictate using the appropriate semantic HTML elements over ARIA roles to mark up lists and listitems — {{HTMLElement("ul")}}, {{HTMLElement("ol")}} and {{HTMLElement("li")}}. See [Best practices](#best_practices) for a full example.

### Associated WAI-ARIA Roles, States, and Properties

- [`listitem`](/en-US/docs/Web/Accessibility/ARIA/Roles/listitem_role) role
  - : A single item in a list. Elements with role `listitem` can only be found in an element with the role `list`.

## Best practices

Only use `role="list"` and `role="listitem"` if you have to — for example if you don't have control over your HTML but are able to improve accessibility dynamically after the fact with JavaScript.

Unlike the HTML {{HTMLElement("ol")}} and {{HTMLElement("ul")}}, the ARIA `list` roles doesn't distinguish between ordered and unordered lists. If at all possible, you should use the appropriate semantic HTML elements to mark up a list ({{HTMLElement("ol")}} and {{HTMLElement("ul")}}) and list items ({{HTMLElement("li")}}). For example, our above example should be rewritten as follows:

```html
<ul>
  <li>List item 1</li>
  <li>List item 2</li>
  <li>List item 3</li>
</ul>
```

or use an ordered list if the order of the list items matters:

```html
<ol>
  <li>List item 1</li>
  <li>List item 2</li>
  <li>List item 3</li>
</ol>
```

> **Note:** The ARIA `list` / `listitem` roles don't distinguish between ordered and unordered lists.

As an aside, note that if you are using the semantic HTML elements of `<ol>` or `<ul>` and apply a role of [`presentation`](/en-US/docs/Web/Accessibility/ARIA/Roles/presentation_role), each child `<li>` element inherits the `presentation` role because ARIA requires the `listitem` elements to have the parent `list` element. So, the `<li>` elements are not exposed to assistive technologies, but elements contained inside of those `<li>` elements, including nested lists, are visible to assistive technologies.

> **Note:** If you are marking up a list of items that will function as a tabbed interface, you should instead use the [`tab`](/en-US/docs/Web/Accessibility/ARIA/Roles/tab_role), [`tabpanel`](/en-US/docs/Web/Accessibility/ARIA/Roles/tabpanel_role), and [`tablist`](/en-US/docs/Web/Accessibility/ARIA/Roles/tablist_role) roles.

## Specifications

{{Specifications}}

## See also

- The {{HTMLElement("ul")}} element
- The {{HTMLElement("ol")}} element
- The {{HTMLElement("li")}} element
- [ARIA: listitem role](/en-US/docs/Web/Accessibility/ARIA/Roles/listitem_role)
- [ARIA Lists examples](https://www.scottohara.me/blog/2018/05/26/aria-lists.html) — by Scott O'Hara
- [Accessibility Object Model](https://wicg.github.io/aom/spec/)
- [ARIA in HTML](https://w3c.github.io/html-aria/)
