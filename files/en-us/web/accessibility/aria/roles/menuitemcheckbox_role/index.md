---
title: 'ARIA: menuitemcheckbox role'
slug: Web/Accessibility/ARIA/Roles/menuitemcheckbox_role
tags: 
  - Accessibility
  - ARIA
  - roles
  - Reference
  - ARIA roles
  - menuitemcheckbox
---
A menuitem with a checkable state whose possible values are `true`, `false`, or `mixed`.

## Description

Menu and menubars contain menu items. There are three types of menu items:  [`menuitem`](/en-US/docs/Web/Accessibility/ARIA/Roles/menuitem_role), `menuitemcheckbox`, and [`
menuitemradio`](/en-US/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role).

These three elements can only be contained in, or owned by, an element with role [`menu`](/en-US/docs/Web/Accessibility/ARIA/Roles/menu_role) or [`menubar`](/en-US/docs/Web/Accessibility/ARIA/Roles/menubar_role), optionally nested within a grouping element with role of [`group`](/en-US/docs/Web/Accessibility/ARIA/Roles/group_role). Groups may be separated by elements with the [`seperator`](/en-US/docs/Web/Accessibility/ARIA/Roles/seperator_role) role

The [`aria-checked`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-checked) attribute of a `menuitemcheckbox` indicates whether the menu item is checked (`true`), unchecked (`false`), or represents a sub-level menu of other menu items that have a mixture of checked and unchecked values (`mixed`). If missing, the value defaults to `false`.

In order to identify that they are related widgets, authors MUST ensure that menu item checkboxes are owned by an element with role `menu` or [`menubar`](/en-US/docs/Web/Accessibility/ARIA/Roles/menubar_role). Authors MAY separate menu items into sets by use of a separator or an element with an equivalent role from the native markup language.

An accessible name is required.contents or author

If all elements in the set are not present in the DOM include the [`aria-setsize`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-setsize) and [`aria-posinset`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-posinset) properties. When specifying `aria-setsize` and `aria-posinset` on a `menuitemcheckbox`, set the value with respect to the total number of items in the menu, excluding any separators.

### All descendants are presentational

There are some types of user interface components that, when represented in a platform accessibility API, can only contain text. Accessibility APIs do not have a way of representing semantic elements contained in a `menuitemcheckbox`. To deal with this limitation, browsers, automatically apply role [`presentation`](/en-US/docs/Web/Accessibility/ARIA/Roles/presentation_role) to all descendant elements of any `menuitemcheckbox` element as it is a role that does not support semantic children.

For example, consider the following `menuitemcheckbox` element, which contains a heading.

```html
<div role="menuitemcheckbox"><h6>Name of my checkbox</h6></li>
```

Because descendants of `menuitemcheckbox` are presentational, the following code is equivalent:

```html
<div role="menuitemcheckbox"><h6 role="presentation">Name of my checkbox</h6></li>
```

From the assistive technology user's perspective, the heading does not exist since the previous code snippets are equivalent to the following in the [accessibility tree](/en-US/docs/Glossary/Accessibility_tree):

```html
<div role="menuitemcheckbox">Name of my checkbox</div>
```

### Associated WAI-ARIA roles, states, and properties

- [`menu`](/en-US/docs/Web/Accessibility/ARIA/Roles/menu_role) role
  - : Widget that offers a list of common actions or functions the user can invoke.
- [`menubar`](/en-US/docs/Web/Accessibility/ARIA/Roles/menubar_role) role
  - : Similar to `menu` for a consistent set of frequently used commands remaining visible and usually presented horizontally.
- [`group`](/en-US/docs/Web/Accessibility/ARIA/Roles/group_role) role
  - : Container for a group of `menuitem` elements, including `menuitemcheckbox` elements within a `menu` or `menubar`.
- [`aria-checked`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-checked) (Required)
  - : Set to `true`, `false`, or `mixed`, it indicates the current "checked" state of the menuitemcheckbox

### Keyboard interactions

- <kbd>Space</kbd> (Optional)
  - : When focus is on a `menuitemcheckbox`, changes the state. Does not close the `menu` parent.

### Required JavaScript features

## Examples

## Accessibility Concerns

## Best Practices

### Prefer HTML 

## Specifications

| Specification                                                                                                                    | Status                                           |
| -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| {{SpecName("ARIA","#menuitemcheckbox","ARIA: menuitemcheckbox role")}}                                             | {{Spec2('ARIA')}}                         |
| {{SpecName("ARIA Authoring Practices 1.2","#menu","Menu or Menu bar")}} | {{Spec2('ARIA Authoring Practices 1.2')}} |

## See Also

-  [`menuitemradio`](/en-US/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role)

<section id="Quick_links">

1. [**WAI-ARIA roles**](/en-US/docs/Web/Accessibility/ARIA/Roles)

    {{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/ARIA/Roles")}}

</section>
