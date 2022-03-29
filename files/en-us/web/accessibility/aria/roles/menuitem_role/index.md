---
title: 'ARIA: menuitem role'
slug: Web/Accessibility/ARIA/Roles/menuitem_role
tags: 
  - Accessibility
  - ARIA
  - roles
  - Reference
  - ARIA roles
  - menuitem
---

The `menuitem` role indicates the element is an option in a set of choices contained by a `menu` or `menubar`.

## Description

A `menuitem` is one of the three types of options in a set of choices contained by a [`menu`](/en-US/docs/Web/Accessibility/ARIA/Roles/menu_role) or [`menubar`](/en-US/docs/Web/Accessibility/ARIA/Roles/menubar_role); the other two being [`menuitemcheckbox`](/en-US/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role) and [`menuitemradio`](/en-US/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role). The `menuitem` is only found as a descendant of, or owned by, elements with role `menu` or `menubar`, optionally nested within an with role [`group`](/en-US/docs/Web/Accessibility/ARIA/Roles/group_role) that is contained in, or owned by, a menu. 

If the `menuitem` is not a descendant of a menu in the DOM, include the [`aria-owns`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-owns) attribute on menu to indicate the relationship.

Every `menuitem` in a menu is focusable, whether or not it is disabled. Indicate a `menuitem` is disabled by setting [`aria-disabled="true"`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-disabled) on the element with the role. 

If a `menuitem` has a submenu, program it to display a new sub-level menu when the menu item is activated and include [`aria-haspopup="true"`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup) to indicate to assistive technologies that the menu item is used to open a submenu.

Every `menuitem` must have an accessible name. This name comes from the element's contents by default. If the contents don't provide for a useful accessible name, [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) can be used to reference visible label. If no visible content is availabe to provide the accessible name, a label can be provided with [`aria-label`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label).

### Associated WAI-ARIA roles, states, and properties

- [`menu`](/en-US/docs/Web/Accessibility/ARIA/Roles/menu_role) role
  - : A widget providing a list of choices. Required context role (or `menubar`)
- [`menubar`](/en-US/docs/Web/Accessibility/ARIA/Roles/menubar_role) role
  - : A presentation of a `menu` that usually remains visible and is usually presented horizontally. Required context role (or `menu`)
- [`group`](/en-US/docs/Web/Accessibility/ARIA/Roles/group_role)  role
  - : Can be used to identify a set of related `menuitem`s within or otherwise owned by a `menu` or `menubar`
- [`aria-disabled`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-disabled)
  - : Indicates the element is perceivable but disabled, so it is not editable or otherwise operable.
- [`aria-haspopup`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup)
  - : Indicates the availability and type of interactive popup that can be triggered by the `menuitem`

### Keyboard interactions

## Examples

## Specifications

| Specification                                                                                                                    | Status                                           |
| -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| {{SpecName("ARIA","#menuitem","ARIA: menuitem role")}}                                             | {{Spec2('ARIA')}}                         |
| {{SpecName("ARIA Authoring Practices 1.2","#menu","menuitem role")}} | {{Spec2('ARIA Authoring Practices 1.2')}} |

## See Also

-  [`menuitemcheckbox`](/en-US/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role)
-  [`menuitemradio`](/en-US/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role).

<section id="Quick_links">

1. [**WAI-ARIA roles**](/en-US/docs/Web/Accessibility/ARIA/Roles)

    {{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/ARIA/Roles")}}

</section>
