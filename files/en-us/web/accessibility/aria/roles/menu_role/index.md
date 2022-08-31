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
spec-urls:
  - https://w3c.github.io/aria/#menu
  - https://w3c.github.io/aria-practices/#menu
---

The `menu` role is a type of composite widget that offers a list of choices to the user.

## Description

A `menu` generally represents a grouping of common actions or functions that the user can invoke. The `menu` role is appropriate when a list of menu items is presented in a manner similar to a menu on a desktop application. Submenus, also known as pop-up menus, also have the role `menu`.

While the term "menu" is generically used a term used to describe site navigation, the `menu` role is for a list of action or functions that require complex functionality, such as composite widget focus management and first-character navigation

A menu can be a permanently visible list of controls or a widget that can be made to open and close. A closed `menu` widget is usually opened, or made visible, by activating a menu button, choosing an item in a menu that opens a submenu, or by invoking a command, such as <kbd>Shift + F10</kbd> in Windows which opens a context specific menu.

When a user activates a choice in a menu that has been opened, the menu usually closes. If the menu choice action invokes a submenu, the menu will remain open and the submenu is displayed.

When a menu opens, keyboard focus is placed on the first menu item. To be keyboard accessible, you need to [manage focus](https://usability.yale.edu/web-accessibility/articles/focus-keyboard-operability) for all descendants: all menu items within the `menu` are focusable. The menu button which opens the menu and the menu items, rather than the menu itself, are the focusable elements.

Menu items include [`menuitem`](/en-US/docs/Web/Accessibility/ARIA/Roles/menuitem_role), [`menuitemcheckbox`](/en-US/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role), and [`menuitemradio`](/en-US/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role). [Disabled](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-disabled) menu items are focusable but cannot be activated.

Menu items can be grouped in elements with the [`group`](/en-US/docs/Web/Accessibility/ARIA/Roles/group_role) role, and separated by elements with role [`separator`](/en-US/docs/Web/Accessibility/ARIA/Roles/separator_role). Neither `group` nor `separator` receive focus or are interactive.

If a `menu` is opened as a result of a context action, <kbd>Escape</kbd> or <kbd>Enter</kbd> may return focus to the invoking context. If focus was on the menu button, <kbd>Enter</kbd> opens the menu, giving focus to the first menu item. If focus is on the menu itself, <kbd>Escape</kbd> closes the menu and returns focus to the menu button or parent menubar item (or the context action that opened the menu).

Elements with the role `menu` have an implicit [`aria-orientation`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-orientation) value of `vertical`. For horizontally oriented menu, use [`aria-orientation="horizontal"`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-orientation).

If the menu is visually persistent, consider the [`menubar`](/en-US/docs/Web/Accessibility/ARIA/Roles/menubar_role) role instead.

### Associated WAI-ARIA roles, states, and properties

- [`menuitem`](/en-US/docs/Web/Accessibility/ARIA/Roles/menuitem_role), [`menuitemcheckbox`](/en-US/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role), and [`menuitemradio`](/en-US/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role) roles
  - : Roles of items contained in a containing `menu` or `menubar`, known collectively as "menu items". These must be able to receive focus.
- [`group`](/en-US/docs/Web/Accessibility/ARIA/Roles/group_role) role
  - :  Menu items can be nested in a [`group`](/en-US/docs/Web/Accessibility/ARIA/Roles/group_role)
- [`separator`](/en-US/docs/Web/Accessibility/ARIA/Roles/separator_role) role
  - : A divider that separates and distinguishes sections of content or groups of menu items within the menu

- {{HTMLAttrXref('tabindex')}} attribute
  - : The `menu` container has `tabindex` set to `-1` or `0` and each item in the menu has `tabindex` set to `-1`.
- [`aria-activedescendant`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-activedescendant)
  - : Set to the ID of the focused item, if there is one.
- [`aria-orientation`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-orientation)
  - : indicates whether the menu orientation is horizontal or vertical; defaults to `vertical` if omitted.
- [`aria-label`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label) or [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)
  - : The `menu` is required to have an accessible name.  Use `aria-labelledby` if a visible label is present, otherwise use `aria-label`. Either include the `aria-labelledby` set to a the `id` to the `menuitem` or `button` that controls its display or use `aria-label` to define the label.
- [`aria-owns`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-owns)
  - : Only set on the menu container to include elements that are not DOM children of the container. If set, those elements will appear in the reading order in the sequence they are referenced and after any items that are DOM children. When managing focus, ensure the visual focus order matches this assistive technology reading order.

### Keyboard interactions

- <kbd>Space</kdb> / <kbd>Enter</kdb>
  - : If the item is a parent menu item, opens submenu and moves focus to first item in the submenu. Otherwise, activates the menu item, which loads new content and places focus on the heading that titles the content.
- <kbd>Escape</kbd>
  - : When in a submenu, closes the submenu and moves focus to parent menu or menubar item.
- <kbd>Right Arrow</kdb>
  - : In a menubar, moves focus to the next item in the menubar. If focus is on the last item, moves focus to the first item. If in a submenu, if focus is on an item that does not have a submenu, closes the submenu and moves focus to next item in the menubar. Otherwise, opens submenu of newly focused menubar item, keeping focus on that parent menubar item. If not in a menubar or submenu and not on a menuitem with a submenu, if focus is not the last focusable element in the menu, optionally moves focus to the next focusable element.
- <kbd>Left Arrow </kdb>
  - : Moves focus to the previous item in the menubar. If focus is on the first item, moves focus to the last item. If in a submenu, closes submenu and moves focus to parent menu item. If not in a menubar or submenu, if focus is not the first focusable element in the menu, optionally moves focus to the last focusable element.
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

Below are two example menu implementations.

### Example 1: navigation menu

```html
<div>
  <button id="menubutton" aria-haspopup="true" aria-controls="menu">
    <img src="hamburger.svg" alt="Page Sections">
  </button>
  <ul id="menu" role="menu" aria-labelledby="menubutton">
    <li role="presentation">
      <a role="menuitem" href="#description">
        Description
      </a>
    </li>
    <li role="presentation">
      <a role="menuitem" href="#associated_wai-aria_roles_states_and_properties">
        Associated WAI-ARIA roles, states, and properties
      </a>
    </li>
    <li role="presentation">
      <a role="menuitem" href="#keyboard_interactions">
        Keyboard interactions
      </a>
    </li>
    <li role="presentation">
      <a role="menuitem" href="#examples">
        Examples
      </a>
    </li>
    <li role="presentation">
      <a role="menuitem" href="#specifications">
        Specifications
      </a>
    </li>
    <li role="presentation">
      <a role="menuitem" href="#see_also">
        See Also
      </a>
    </li>
  </ul>
</div>
```

To progressively enhance this navigation widget that is by default accessible, the class to hide the `menu` and the inclusion of `tabindex="-1"` on the interactive menuitem content should be added with JavaScript on load.

When including a "menu" for site navigation, do not use the `menu` role. Rather, for the main site navigation use the native HTML {{HTMLElement('nav')}} element or simply a list of links. The `menu` role should be reserved for composite widgets requiring focus management. See [ARIA practices for disclosure navigation](https://www.w3.org/TR/wai-aria-practices-1.2/examples/disclosure/disclosure-navigation.html) for an explanation and additional examples.

### Example 2: menubar submenu option picker

The following snippet of code is a popup menu nested in a menubar. It is displayed when the menu button is activated. It is a menu to select the text color from a list of color options:

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

The opening and closing of the menu toggles the [`aria-expanded="true"`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-expanded) attribute on the button. It is added when the menu is open. Removed or set to `false` when the menu is closed. The `true` value indicates that the menu is displayed and that activating the menu button closes the menu.

When the menu is open, the button itself generally does not received focus as users arrow thru the menuitems. Rather, <kbd>Escape</kbd> and optionally <kbd>Shift + Tab</kbd> closes the menu and returns focus to the menu button.

The `menu` role was set on the {{HTMLElement('ul')}}, identifying the `<ul>` element as a menu.

The showing and hiding of the menu can be done with CSS. For example, in these code examples we can use the attribute and adjacent sibling selectors to toggle the visibility of the menu:

```css
[role="menu"] {
  display: none;
}
[aria-expanded="true"] + [role="menu"] {
  display: block;
}
```

The navigation example has a static button. In submenu example has a button that gets updated when the user selects a new value. In this case, the `aria-label="Text Color: purple"` is set on the `menu` element. It defines the accessible name for the menu as "Text color: purple"; identifying the purpose of the menu (selecting a text color) and the current value (purple). When a selection to a new color is made, the value of the `aria-label` property should be updated as well.

## Specifications

{{Specifications}}

## See Also

- [`menubar`](/en-US/docs/Web/Accessibility/ARIA/Roles/menubar_role)
- [`menuitem`](/en-US/docs/Web/Accessibility/ARIA/Roles/menuitem_role)
- [`menuitemcheckbox`](/en-US/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role)
- [`menuitemradio`](/en-US/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role)
- [`aria-haspopup`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup)

<section id="Quick_links">

1. [**WAI-ARIA roles**](/en-US/docs/Web/Accessibility/ARIA/Roles)

    {{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/ARIA/Roles")}}

</section>
