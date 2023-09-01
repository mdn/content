---
title: "ARIA: menuitem role"
slug: Web/Accessibility/ARIA/Roles/menuitem_role
page-type: aria-role
spec-urls:
  - https://w3c.github.io/aria/#menuitem
  - https://w3c.github.io/aria-practices/#menu
---

The `menuitem` role indicates the element is an option in a set of choices contained by a `menu` or `menubar`.

## Description

A `menuitem` is one of the three types of options in a set of choices contained by a [`menu`](/en-US/docs/Web/Accessibility/ARIA/Roles/menu_role) or [`menubar`](/en-US/docs/Web/Accessibility/ARIA/Roles/menubar_role); the other two being [`menuitemcheckbox`](/en-US/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role) and [`menuitemradio`](/en-US/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role). The `menuitem` is only found as a descendant of, or owned by, elements with role `menu` or `menubar`, optionally nested within an element with role [`group`](/en-US/docs/Web/Accessibility/ARIA/Roles/group_role) that is contained in, or owned by, a menu.

If the `menuitem` is not a descendant of a menu in the DOM, include the [`aria-owns`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-owns) attribute on menu to indicate the relationship. If `aria-owns` is set on the menu container to include elements that are not DOM children of the container, those elements will appear in the reading order in the sequence they are referenced and after any items that are DOM children in supporting technologies. Ensure the visual focus order matches the assistive technology reading order.

Every `menuitem` in a menu is focusable, whether or not it is disabled. Indicate a `menuitem` is disabled by setting [`aria-disabled="true"`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-disabled) on the element with the role.

If a `menuitem` has a submenu, program it to display a new sub-level menu when the menu item is activated and include [`aria-haspopup="menu"`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup) or with the `true` value to indicate to assistive technologies that the menu item is used to open a submenu.

A common convention for indicating that a `menuitem` launches a dialog box is to append "…" (ellipsis) to the menu item label, e.g., "Save as …".

Every `menuitem` must have an accessible name. This name comes from the element's contents by default. If the contents don't provide for a useful accessible name, [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) can be used to reference visible label. If no visible content is available to provide the accessible name, an accessible name can be provided with [`aria-label`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label).

## Associated WAI-ARIA roles, states, and properties

- [`menu`](/en-US/docs/Web/Accessibility/ARIA/Roles/menu_role) role
  - : A widget providing a list of choices. Required context role (or `menubar`)
- [`menubar`](/en-US/docs/Web/Accessibility/ARIA/Roles/menubar_role) role
  - : A presentation of a `menu` that usually remains visible and is usually presented horizontally. Required context role (or `menu`)
- [`group`](/en-US/docs/Web/Accessibility/ARIA/Roles/group_role) role
  - : Can be used to identify a set of related `menuitem`s within or otherwise owned by a `menu` or `menubar`
- [`aria-disabled`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-disabled)
  - : Indicates the element is perceivable but disabled, so it is not operable
- [`aria-haspopup`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup)
  - : Indicates the availability and type of interactive popup that can be triggered by the `menuitem`

## Keyboard interactions

- <kbd>Enter</kbd> and <kbd>Space</kbd>
  - : If the `menuitem` has a submenu, opens the submenu and places focus on its first item. Otherwise, activates the item and closes the menu.
- <kbd>Down Arrow</kbd>
  - : On a `menuitem` that has a submenu in a `menubar`, opens the submenu and places focus on the first item in the submenu. Otherwise, moves focus to the next item, optionally wrapping from the last to the first.
- <kbd>Up Arrow</kbd>
  - : Moves focus to the previous item, optionally wrapping from the first to the last. Optionally, if the `menuitem` is in a menubar and has a submenu, opens the submenu and places focus on the last item in the submenu.
- <kbd>Right Arrow</kbd>
  - : If in a `menu` opened with a menubutton and not in a `menubar`, if the menuitem does not have a submenu, does nothing. When focus is in a `menubar`, moves focus to the next item, optionally wrapping from the last to the first. When focus is in a `menu` and on a `menuitem` that has a submenu, opens the submenu and places focus on its first item. When focus is in a `menu` and on an item that does not have a submenu, closes the submenu and any parent menus, moves focus to the next item in the `menubar`, and, if focus is now on a `menuitem` with a submenu, either opens the submenu of that `menuitem` without moving focus into the submenu, or opens the submenu of that `menuitem` and places focus on the first item in the submenu.
- <kbd>Left Arrow</kbd>
  - : When focus is in a `menubar`, moves focus to the previous item, optionally wrapping from the first to the last. When focus is in a submenu of an item in a menu, closes the submenu and returns focus to the parent `menuitem`. When focus is in a submenu of an item in a `menubar`, closes the submenu, moves focus to the previous item in the `menubar`, and, if focus is now on a `menuitem` with a submenu, either opens the submenu of that `menuitem` without moving focus into the submenu, or opens the submenu of that `menuitem` and places focus on the first item in the submenu.
- <kbd>Home</kbd>
  - : If arrow key wrapping is not supported, moves focus to the first item in the current `menu` or `menubar`.
- <kbd>End</kbd>
  - : If arrow key wrapping is not supported, moves focus to the last item in the current `menu` or `menubar`.
- Any key that corresponds to a printable character (Optional)
  - : Move focus to the next item in the current menu whose label begins with that printable character.
- <kbd>Escape</kbd>
  - : Close the menu that contains focus and return focus to the element or context, e.g., menu button or parent `menuitem`, from which the menu was opened.
- <kbd>Tab</kbd>
  - : Moves focus to the next element in the tab sequence, and if the item that had focus is not in a menubar, closes its menu and all open parent menu containers.
- <kbd>Shift + Tab</kbd>
  - : Moves focus to the previous element in the tab sequence, and if the item that had focus is not in a menubar, closes its menu and all open parent menu containers.

If a menu is opened or a menu bar receives focus as a result of a context action, <kbd>Escape</kbd> or <kbd>Enter</kbd> may return focus to the invoking context.

Some implementations of navigation menubars may have menuitem elements that both perform a function and open a submenu. In such implementations, <kbd>Enter</kbd> and <kbd>Space</kbd> perform a navigation function while <kbd>Down Arrow</kbd>, in a horizontal menubar, opens the submenu associated with that same menuitem.

When items in a `menubar` are arranged vertically and items in menu containers are arranged horizontally the <kbd>Down Arrow</kbd> performs as <kbd>Right Arrow</kbd> is described above, the <kbd>Up Arrow</kbd> performs as <kbd>Left Arrow</kbd> is described above, and vice versa.

## Examples

```html
<div>
  <button id="menubutton" aria-haspopup="true" aria-controls="menu">
    <img src="hamburger.svg" alt="Page Sections" />
  </button>
  <ul id="menu" role="menu" aria-labelledby="menubutton">
    <li role="presentation">
      <a role="menuitem" href="#description">Description</a>
    </li>
    <li role="presentation">
      <a
        role="menuitem"
        href="#associated_wai-aria_roles_states_and_properties">
        Associated WAI-ARIA roles, states, and properties
      </a>
    </li>
    <li role="presentation">
      <a role="menuitem" href="#keyboard_interactions">
        Keyboard interactions
      </a>
    </li>
    <li role="presentation">
      <a role="menuitem" href="#examples">Examples</a>
    </li>
    <li role="presentation">
      <a role="menuitem" href="#specifications">Specifications</a>
    </li>
    <li role="presentation">
      <a role="menuitem" href="#see_also">See Also</a>
    </li>
  </ul>
</div>
```

## Specifications

{{Specifications}}

## See Also

- [`menuitemcheckbox` role](/en-US/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role)
- [`menuitemradio` role](/en-US/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role)
- [`listitem` role](/en-US/docs/Web/Accessibility/ARIA/Roles/listitem_role)
- [`option` role](/en-US/docs/Web/Accessibility/ARIA/Roles/option_role)

<section id="Quick_links">

1. [**WAI-ARIA roles**](/en-US/docs/Web/Accessibility/ARIA/Roles)

   {{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/ARIA/Roles")}}

</section>
