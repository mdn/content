---
title: 'ARIA: menubar role'
slug: Web/Accessibility/ARIA/Roles/menubar_role
tags: 
  - Accessibility
  - ARIA
  - roles
  - Reference
  - ARIA roles
  - menubar role
  - composite widget role
  - menubar
---

A `menubar` is a presentation of `menu` that usually remains visible and is usually presented horizontally. 

## Description

A menu is a widget that offers a list of choices to the user, such as a set of actions or functions. Menu widgets behave like native operating system menus, such as the menus that pull down from the menubars commonly found at the top of many desktop application windows. 

A menu that is visually persistent is a `menubar`. A menubar is typically horizontal and is often used to create a menu bar similar to those found near the top of the window in many desktop applications, offering the user quick access to a consistent set of commands.

A presentation of menu that usually remains visible and is usually presented horizontally.

The menubar role is used to create a menu bar similar to those found in Windows, Mac, and Gnome desktop applications. A menu bar is used to create a consistent set of frequently used commands. Authors SHOULD ensure that menubar interaction is similar to the typical menu bar interaction in a desktop graphical user interface.

To be keyboard accessible, authors SHOULD manage focus of descendants for all instances of this role, as described in Managing Focus.

Elements with the role menubar have an implicit aria-orientation value of horizontal.

### Associated WAI-ARIA roles, states, and properties

- [`group`](/en-US/docs/Web/Accessibility/ARIA/Roles/group_role) role
  - : 
- [`menuitem`](/en-US/docs/Web/Accessibility/ARIA/Roles/menuitem_role) role
  - : 
- [`menuitemradio`](/en-US/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role) role
  - : 
- [`menuitemcheckbox`](/en-US/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role) role
  - : 
- [`aria-orientation`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-orientation)
  - : Include `aria-orientation="vertical"` on `menubar` element if it's the menubar is vertical. The default orientation is `horizontal`.

### Keyboard interactions

### Required JavaScript features

## Examples

## Specifications

| Specification                                                                                                                    | Status                                           |
| -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| {{SpecName("ARIA","#menubar","ARIA: menubar role")}}                                             | {{Spec2('ARIA')}}                         |
| {{SpecName("ARIA Authoring Practices 1.2","#menu","menubar role")}} | {{Spec2('ARIA Authoring Practices 1.2')}} |

## See Also

- [`toolbar` role](/en-US/docs/Web/Accessibility/ARIA/Roles/toolbar_role)

<section id="Quick_links">

1. [**WAI-ARIA roles**](/en-US/docs/Web/Accessibility/ARIA/Roles)

    {{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/ARIA/Roles")}}

</section>
