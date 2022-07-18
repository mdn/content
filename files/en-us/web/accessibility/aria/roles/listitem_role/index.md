---
title: 'ARIA: listitem role'
slug: Web/Accessibility/ARIA/Roles/listitem_role
tags:
  - ARIA
  - ARIA Role
  - ARIA listitem
  - Accessibility
  - Reference
  - Role
  - listitem
  - document structure role
spec-urls: https://w3c.github.io/aria/#listitem
---
The ARIA `listitem` role can be used to identify an item inside a list of items. It is normally used in conjunction with the [`list`](/en-US/docs/Web/Accessibility/ARIA/Roles/list_role) role, which is used to identify a list container.

```html
<section role="list">
  <div role="listitem">List item 1</div>
  <div role="listitem">List item 2</div>
  <div role="listitem">List item 3</div>
</section>
```

## Description

Any content that consists of an outer container with a list of elements inside it can be identified to assistive technologies using the `list` and `listitem` containers respectively.

There are no hard and fast rules about which elements you should use to mark up the list and list items, but you should make sure that the list items make sense in the context of a list, e.g. a shopping list, recipe steps, driving directions.

> **Note:** If at all possible in your work, you should use the appropriate semantic HTML elements to mark up a list and its listitems — {{HTMLElement("ul")}}/{{HTMLElement("ol")}} and {{HTMLElement("li")}}. See [Best practices](#best_practices) for a full example.

### Associated WAI-ARIA Roles, States, and Properties

- [`list`](/en-US/docs/Web/Accessibility/ARIA/Roles/list_role)
  - : A list of items. Elements with role `list` must have one or more elements with the role `listitem` as children, a one or more elements with the role of `group` that have one or more elements with the `listitem` role as children.
- [`group`](/en-US/docs/Web/Accessibility/ARIA/Roles/group_role)
  - : A collection of related objects, limited to list items when nested in a list, not important enough to have their own place in a pages table of contents.

## Best practices

Only use `role="list"` and `role="listitem"` if you have to — for example if you don't have control over your HTML but are able to improve accessibility dynamically after the fact with JavaScript.

If at all possible, you should use the appropriate semantic HTML elements to mark up a list and listitems — {{HTMLElement("ol")}}, {{HTMLElement("ul")}} and {{HTMLElement("li")}}. For example, our above example should be rewritten as follows:

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

> **Note:** Styling a list with `list-style: none;` in CSS removes the list semantics. Adding `role="listitem"` returns the semantics.

> **Note:**  If you are marking up a list of items that will function as a tabbed interface, you should instead use the [`tab`](/en-US/docs/Web/Accessibility/ARIA/Roles/tab_role), [`tabpanel`](/en-US/docs/Web/Accessibility/ARIA/Roles/tabpanel_role), and [`tablist`](/en-US/docs/Web/Accessibility/ARIA/Roles/tablist_role) roles.

## Specifications

{{Specifications}}

## See also

- [HTML `<li>` element](/en-US/docs/Web/HTML/Element/li)
- [HTML `<ul>` element](/en-US/docs/Web/HTML/Element/ul)
- [HTML `<ol>` element](/en-US/docs/Web/HTML/Element/ol)
- [ARIA: `list` role](/en-US/docs/Web/Accessibility/ARIA/Roles/list_role)
- [ARIA: `group` role](/en-US/docs/Web/Accessibility/ARIA/Roles/group_role)
- [Accessibility Object Model](https://wicg.github.io/aom/spec/)
- [ARIA in HTML](https://w3c.github.io/html-aria/)
- [ARIA Lists examples](https://www.scottohara.me/blog/2018/05/26/aria-lists.html) — by Scott O'Hara

<section id="Quick_links">

1. [**WAI-ARIA roles**](/en-US/docs/Web/Accessibility/ARIA/Roles)

    {{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/ARIA/Roles")}}

</section>
