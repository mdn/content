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

When a user activates a choice in a menu, the menu usually closes, unless the menu choice action is to opening a submenu, in which case the menu remains open as the submenu is opened. 

When a menu opens, keyboard focus is placed on the first menu item. To be keyboard accessible, you need to [manage focus](https://usability.yale.edu/web-accessibility/articles/focus-keyboard-operability) for all descendants: all menu items within the `menu` are focusable. The menu button which opens the menu and the menu items, rather than the menu itself, are the focusable elements. 

Menu items include [`menuitem`](/en-US/docs/Web/Accessibility/ARIA/Roles/menuitem_role), [`menuitemcheckbox`](/en-US/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role), and [`menuitemradio`](/en-US/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role). [Disabled](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-disabled) menu items are focusable but cannot be activated. These menu items can be grouped in elements with the [`group`](/en-US/docs/Web/Accessibility/ARIA/Roles/group_role) role, and separated by elements with role [`separator`](/en-US/docs/Web/Accessibility/ARIA/Roles/separator_role). Neither `group` nor `separator` receive focus or are interactive. 

If a `menu` is opened as a result of a context action, <kbd>Escape</kbd> or <kbd>Enter</kbd> may return focus to the invoking context. 

Elements with the role `menu` have an implicit [`aria-orientation`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-orientation) value of `vertical`. Include `aria-orientation="horizontal"`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-orientation).

If the menu is visually persistent, consider the [`menubar`](/en-US/docs/Web/Accessibility/ARIA/Roles/menubar_role) instead. 

### Associated WAI-ARIA roles, states, and properties

A `menu` is a container of items that represent choices. The element serving as the menu has a role of either `menu` or `menubar`. Related roles and properties include:

- [`menuitem`](/en-US/docs/Web/Accessibility/ARIA/Roles/menuitem_role), [`menuitemcheckbox`](/en-US/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role), and [`menuitemradio`](/en-US/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role) roles
  - : Menu items. The role of items contained in a menu as child elements of the containing `menu` or `menubar`. 
- [`group`](/en-US/docs/Web/Accessibility/ARIA/Roles/group_role) role
  - :  Menu items can be nested in a [`group`](/en-US/docs/Web/Accessibility/ARIA/Roles/group_role) 
- [`separator`](/en-US/docs/Web/Accessibility/ARIA/Roles/separator_role) role
  - : A divider that separates and distinguishes sections of content or groups of menu items within the menu 

  
- {{HTMLAttrXref('tabindex')}} attribute
  - : The menu container has tabindex set to -1 or 0. Each item in the menu has tabindex set to -1, except in a menubar, where the first item has tabindex set to 0.
-  [`aria-activedescendant`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-activedescendant) 
   - : Set to the ID of the focused item, if there is one.
- [`aria-orientation`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-orientation) 
  - : indicates whether the menu orientation is horizontal or vertical; defaults to `vertical` if omitted.
- [`aria-label`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label) or [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)
  - : The `menu` is required to have an accessible name.  Use `aria-labelledby` if a visible label is present, otherwise use `aria-label`. The `aria-labelledby` should set to a value that refers to the `menuitem` or `button` that controls its display.
- [`aria-owns`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-owns)
  - : Only set on the menu container to include elements that are not DOM children of the container. If set, those elements will appear in the reading order in the sequence they are referenced and after any items that are DOM children. When managing focus, ensure the visual focus order matches this assistive technology reading order.

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

## Examples

The following snippet of code is a popup menu that is displaye when the menu button is activated:

```html
<div>
  <button type="button" aria-haspopup="menu" aria-controls="colormenu" tabindex="0" aria-label="Text Color: purple">
    Purple
    <span></span>
  </button>
  <ul role="menu" id="colormenu" aria-label="Color Options" tabindex="-1">
    <li role="menuitemradio" aria-checked="true" style="color: purple" tabindex="-1">Purple</li>
    <li role="menuitemradio" aria-checked="false" style="color: magenta" tabindex="-1">Magenta</li>
    <li role="menuitemradio" aria-checked="false" style="color: black;" tabindex="-1">Black</li>
  </ul>
</div>
```

The button that opens the menu has [`aria-haspopup="menu"`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup) set, explicitly indicating that the popup it controls is a `menu`.

For a menu to open, the user generally interacts with a menu button as the opener. The menu button must be focusable and respond to both click and keyboard events. When focused, selecting <kbd>Enter</kbd>, <kbd>Space</kbd>, <kbd>Down Arrow</kbd>, or the <kbd>Up Arrow</kbd> should open the menu and place focus on a menu item.  

The opening and closing of the menu toggles the [`aria-expanded="true"`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-expanded) attribute on the button. It is added when the menu is open. Removed or set to `false` when the menu is closed. It indicates that the menu is displayed and that activating the menu button closes the menu. Keyboard users should not be able to focus on the the menu button when the menu is open.

The `menu` role was set on the {{HTMLElement('ul')}}, identifying the `<ul>` element as a menu. 

The showing and hiding of the menu can be done with CSS. For example, in this code example with can use the attribute and adjacent sibling selectors to toggle the visibility of the menu:

```css
[role="menu"] { 
  display: none;
}
[aria-expanded="true"] + [role="menu"] {
  display: block;
}
```

The `aria-label="Color: purple"` is set on the `menu` element. It defines the accessible name for the menu as "Color: purple"; identifying the purpose of the menu (selecting a color) and the current value (purple). When a selection to a new color is made, the value of the `aria-label` property should be updated as well.

## Specifications

| Specification                                                                                                                    | Status                                           |
| -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| {{SpecName("ARIA","#menu","ARIA: menu role")}}                                             | {{Spec2('ARIA')}}                         |
| {{SpecName("ARIA Authoring Practices 1.2","#menu","menu role")}} | {{Spec2('ARIA Authoring Practices 1.2')}} |

## See Also

- [`menubar`](/en-US/docs/Web/Accessibility/ARIA/Roles/menubar_role)
- [`menuitem`](/en-US/docs/Web/Accessibility/ARIA/Roles/menuitem_role)
- [`menuitemcheckbox`](/en-US/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role)
- [`menuitemradio`](/en-US/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role)
- [`aria-haspopup](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup)

<section id="Quick_links">

1. [**WAI-ARIA roles**](/en-US/docs/Web/Accessibility/ARIA/Roles)

    {{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/ARIA/Roles")}}

</section>
