---
title: 'ARIA: menu role'
slug: Web/Accessibility/ARIA/Roles/menu_role
tags: 
  - Accessibility
  - ARIA
  - roles
  - Reference
  - ARIA roles
  - Menu role
  - composite widget role
---

The `menu` roles is a type of widget that offers a list of choices to the user.

## Description

A menu is often a list of common actions or functions that the user can invoke. The `menu` role is appropriate when a list of menu items is presented in a manner similar to a menu on a desktop application. Submenus, also known as pop-up menus, also have the role `menu`.

A `menu` widget is usually opened, or made visible, by activating a menu button, choosing an item in a menu that opens a sub menu, or by invoking a command, such as <kbd>Shift + F10</kbd> in Windows, that opens a context specific menu. 

When a user activates a choice in a menu, the menu usually closes unless the choice opened a submenu. 

When a menu opens, keyboard focus is placed on the first menu item. To be keyboard accessible, you need to manage focus for all descendants for every instance of the `menu` role.  All menu items within the menu are focusable. 

The menu button which opens the menu and the menu items, rather than the menu, are the focusable elements. Menu items include [`menuitem`](/en-US/docs/Web/Accessibility/ARIA/Roles/menuitem_role), [`menuitemcheckbox`](/en-US/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role), and [`menuitemradio`](/en-US/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role). Disabled menu items are focusable but cannot be activated. These menu items can be grouped in elements with the [`group`](/en-US/docs/Web/Accessibility/ARIA/Roles/group_role) role, and separated by elements with role [`separator`](/en-US/docs/Web/Accessibility/ARIA/Roles/separator_role). Neither `group` nor `separator` receive focus or are interactive. 

If a `menu` is opened as a result of a context action, <kbd>Escape</kbd> or <kbd>Enter</kbd> may return focus to the invoking context. 

Elements with the role `menu` have an implicit [`aria-orientation`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-orientation) value of `vertical`.

A menu that is visually persistent is a [`menubar`](/en-US/docs/Web/Accessibility/ARIA/Roles/menubar_role). 


### Associated WAI-ARIA roles, states, and properties

A `menu` is a container of items that represent choices. The element serving as the menu has a role of either `menu` or `menubar`. Related roles and properties include:

- [`menuitem`](/en-US/docs/Web/Accessibility/ARIA/Roles/menuitem_role), [`menuitemcheckbox`](/en-US/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role), and [`menuitemradio`](/en-US/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role)
  - : Menu items. The role of items contained in a menu as child elements of the containing `menu` or `menubar`. 
- [`group`](/en-US/docs/Web/Accessibility/ARIA/Roles/group_role)
  - :  Menu items can be nested in a [`group`](/en-US/docs/Web/Accessibility/ARIA/Roles/group_role) 
- [`separator`](/en-US/docs/Web/Accessibility/ARIA/Roles/separator_role)
  - : A divider that separates and distinguishes sections of content or groups of menu items within the menu 
- {{HTMLAttrXref('tabindex')}}
  - : The menu container has tabindex set to -1 or 0. Each item in the menu has tabindex set to -1, except in a menubar, where the first item has tabindex set to 0.
-  [`aria-activedescendant`]() 
   - : Set to the ID of the focused item.
- [`aria-orientation`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-orientation) 
  - : indicates whether the menu orientation is horizontal or vertical; defaults to `vertical` if omitted. 


If a menubar has a visible label, the element with role menubar has aria-labelledby set to a value that refers to the labelling element. Otherwise, the menubar element has a label provided by aria-label.
If a menubar is vertically oriented, it has aria-orientation set to vertical. The default value of aria-orientation for a menubar is horizontal.
An element with role menu either has:
aria-labelledby set to a value that refers to the menuitem or button that controls its display.
A label provided by aria-label.
If a menu is horizontally oriented, it has aria-orientation set to horizontal. The default value of aria-orientation for a menu is vertical.
NOTE
If aria-owns is set on the menu container to include elements that are not DOM children of the container, those elements will appear in the reading order in the sequence they are referenced and after any items that are DOM children. Scripts that manage focus need to ensure the visual focus order matches this assistive technology reading order.


### Keyboard interactions

- <kbd>Space</kdb> / <kbd>Enter</kdb>	
  - : If the item is a parent menu item, opens submenu and moves focus to first item in the submenu. Otherwise, activates the menu item, which loads new content and places focus on the heading that titles the content.
- <kbd>Escape</kbd>	
  - : When in a submenu, closes the submenu and moves focus to parent menubar item.
- <kbd>Right Arrow</kdb>	
  - : Moves focus to the next item in the menubar. If focus is on the last item, moves focus to the first item. If in a submenu, if focus is on an item that does not have a submenu, closes the submenu and moves focus to next item in the menubar. Otherwise,opens submenu of newly focused menubar item, keeping focus on that parent menubar item.
- <kbd>Left Arrow	</kdb>	
  - : Moves focus to the previous item in the menubar. If focus is on the first item, moves focus to the last item. If in a submenu, closes submenu and moves focus to parent menu item.
- <kbd>Down Arrow</kdb>	
  - : Opens submenu and moves focus to first item in the submenu.
- <kbd>Up Arrow</kdb>	
  - : Opens submenu and moves focus to last item in the submenu.
- <kbd>Home</kdb>	
  - : Moves focus to first item in the menubar.
- <kbd>End</kdb>	
  - : Moves focus to last item in the menubar.
- Any character key	
  - : Moves focus to next item in the menubar having a name that starts with the typed character. If none of the items have a name starting with the typed character, focus does not move.

### Required JavaScript features

## Examples

## Accessibility Concerns

## Best Practices

### Prefer HTML

## Specifications

| Specification                                                                                                                    | Status                                           |
| -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| {{SpecName("ARIA","#menu","ARIA: menu role")}}                                             | {{Spec2('ARIA')}}                         |
| {{SpecName("ARIA Authoring Practices 1.2","#menu","menu role")}} | {{Spec2('ARIA Authoring Practices 1.2')}} |

## See Also

- [`menu`](/en-US/docs/Web/Accessibility/ARIA/Roles/menu_role)
- [`menubar`](/en-US/docs/Web/Accessibility/ARIA/Roles/menubar_role)
- [`menuitem`](/en-US/docs/Web/Accessibility/ARIA/Roles/menuitem_role)
- [`menuitemcheckbox`](/en-US/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role)
- [`menuitemradio`](/en-US/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role)

<section id="Quick_links">

1. [**WAI-ARIA roles**](/en-US/docs/Web/Accessibility/ARIA/Roles)

    {{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/ARIA/Roles")}}

</section>
