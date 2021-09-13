---
title: 'ARIA: list role'
slug: Web/Accessibility/ARIA/Roles/List_role
tags:
  - ARIA
  - ARIA Role
  - ARIA list
  - Accessibility
  - Reference
  - Role
  - list
---
The ARIA `list` role can be used to identify a list of items. It is normally used in conjunction with the `listitem` role, which is used to identify a list item contained inside the list.

```html
<section role="list">
  <div role="listitem">List item 1</div>
  <div role="listitem">List item 2</div>
  <div role="listitem">List item 3</div>
</section>
```

## Description

Any content that consists of an outer container with a list of elements inside it can be identified to assistive technologies using the `list` and `listitem` containers respectively. A `list` must have one or more `listitem` children, or, alternatively, have one or more `group`s as children, with each `group` having one or more `listitem`s as children.

There are no hard and fast rules about which elements you should use to mark up the list and list items, but you should make sure that the list items make sense in the context of a list, e.g. a shopping list, recipe steps, driving directions.

<div class="notecard warning"><h4>Warning</h4><p>If at all possible in your work, you should use the appropriate semantic HTML elements to mark up a list and its listitems — {{HTMLElement("ul")}}, {{HTMLElement("ol")}} and {{HTMLElement("li")}}. See {{anch("Best practices")}} for a full example.</p></div>

### Associated WAI-ARIA Roles, States, and Properties

- [listitem](/en-US/docs/Web/Accessibility/ARIA/Roles/Listitem_role)
  - : A single item in a list or directory. Elements with role listitem can only be found in an element with the role `list` or `group`.
- [group](/en-US/docs/Web/Accessibility/ARIA/Roles/group_role)
  - : A collection of related objects, limited to list items when nested in a list, not important enough to have their own place in a pages table of contents.

### Keyboard Interactions

None.

### Required JavaScript features

None.

## Examples

[ARIA Lists](https://www.scottohara.me/blog/2018/05/26/aria-lists.html) — some useful examples and thoughts by Scott O'Hara

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

<div class="notecard note"><p><strong>Note</strong>: The ARIA list/listitem roles don't distinguish between ordered and unordered lists.</p></div>

As an aside, note that if you are using the semantic HTML elements of ol or ul and apply a role of [presentation](/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_presentation_role), each child `li` element inherits the `presentation` role because ARIA requires the `listitem` elements to have the parent `list` element. So, the `li` elements are not exposed to assistive technologies, but elements contained inside of those `li` elements, including nested lists, are visible to assistive technologies.

<div class="notecard note"><p><strong>Note</strong>: If you are marking up a list of items that will function as a tabbed interface, you should instead use the `tab`, `tabpanel`, and `tablist` roles.</p></div>

## Specifications

| Specification                                    | Status                   |
| ------------------------------------------------ | ------------------------ |
| {{SpecName("ARIA","#list","list")}} | {{Spec2('ARIA')}} |



TBD

## See also

- [Accessibility Object Model](https://wicg.github.io/aom/spec/)
- [ARIA in HTML](https://w3c.github.io/html-aria/)
- {{HTMLElement("ul")}}
- {{HTMLElement("ol")}}
- {{HTMLElement("li")}}
- [ARIA: listitem role](/en-US/docs/Web/Accessibility/ARIA/Roles/Listitem_role)
- [ARIA: group role](/en-US/docs/Web/Accessibility/ARIA/Roles/group_role)

<section id="Quick_links"><ol><li><a href="/en-US/docs/Web/Accessibility/ARIA/Roles"><strong>WAI-ARIA roles</strong></a>{{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/ARIA/Roles")}}</li></ol></section>
