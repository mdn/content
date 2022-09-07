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
spec-urls:
  - https://w3c.github.io/aria/#menubar
  - https://w3c.github.io/aria-practices/#menu
---

A `menubar` is a presentation of `menu` that usually remains visible and is usually presented horizontally.

## Description

A menu is a widget that offers a list of choices to the user, such as a set of actions or functions. The menubar type of menu is usually presented as a persistently visible horizontal bar of commands. Menubars behave like native operating system menubars, such as the menubars containing pull down menus, commonly found at the top of many desktop application windows.

The `menubar` role is used to create a menu bar similar to those found near the top of the window in many desktop applications, visually persistent, typically horizontal, bar of menu items offering the user quick access to a consistent set of commands.

A `menubar` contains three types of menu items, including [`menuitem`](/en-US/docs/Web/Accessibility/ARIA/Roles/menuitem_role), [`menuitemradio`](/en-US/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role) and  [`menuitemcheckbox`](/en-US/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role). These menu items may optionally be nested in one or more  [`group`](/en-US/docs/Web/Accessibility/ARIA/Roles/group_role) containers. Groups or items may optionally by separated with [`separator`](/en-US/docs/Web/Accessibility/ARIA/Roles/separator_role) elements. While every menu item must be able to receive focus, even if disabled, the `group` and `separator` elements are not focusable.

An example of a native menubar is the bar which may be present at the top of the screen if you are reading this in a desktop browser. An example of a web-based menubar is the horizontal menu bar that reads "File Edit View Insert Format", etc., which is usually visible under the document name in a Google doc.

Menubar interactions should be similar to the typical menu bar interaction in a desktop graphical user interface. In Google Docs, each of those menu items is a `menuitem` with a popup submenu, so each has an `aria-haspopup` attribute set to `true`. The `menubar` element does not.

The menubar and all the menu items are focusable and have a {{htmlattrdef('tabindex')}} attribute set. When the menubar receives focus thru tabbing, keyboard focus is placed on the first menuitem. Each item in the menu has `tabindex` set to `-1`, except the first item has which has its `tabindex` set to `0`.

If a menubar receives focus as a result of a context action, such as a shortcut key, <kbd>Escape</kbd> or <kbd>Enter</kbd> may return focus to the invoking context. That said, make sure not to create shortcut keys that interfere with user agent, operating system, or assistive technology shortcuts - any UA, OS, or AT.

Every menu item, no matter how deeply nested, is able to receive focus, even if disabled.

If a `menubar` has a visible label, include [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) set to a value that refers to the labelling element. Otherwise, provide the menubar with an accessible name by including a descriptive [`aria-label`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label).

A `menuitem` element in the `menubar` can contain a child submenu of menu items. Submenus can be nested several deep. Generally, the outer `menubar` is horizontal and all the submenus are vertical. If this is not the case, if your menubar is vertical, include [`aria-orientation="vertical"`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-orientation) on the `menubar` element. Otherwise, this attribute is not necessary, as the default value is horizontal.

### Associated WAI-ARIA roles, states, and properties

- [`group`](/en-US/docs/Web/Accessibility/ARIA/Roles/group_role) role
  - : Identifies a set of menu items
- [`menuitem`](/en-US/docs/Web/Accessibility/ARIA/Roles/menuitem_role) role
  - : An option in a set of choices contained by a `menubar`. May have a submenu.
- [`menuitemradio`](/en-US/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role) role
  - : A checkable menu item in a set of elements with the same role, only one of which can be checked at a time.
- [`menuitemcheckbox`](/en-US/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role) role
  - : a menu item with a checkable state whose possible values are `true`, `false`, or `mixed`.
- [`aria-orientation`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-orientation)
  - : Include `aria-orientation="vertical"` on `menubar` element if it's the menubar is vertical. The default orientation is `horizontal`.

### Keyboard interactions

When focus is in a `menubar` it is always on a menu item within the menu bar. When focus is on a top level `menuitem` in a menu bar, the following keyboard interactions must be supported:

- <kbd>Down Arrow</kbd>
  - : If the currently focused `menuitem` has a submenu, opens the submenu and places focus on the first item in the submenu.
- <kbd>Up Arrow</kbd>
  - : (Optional) If the currently focused `menuitem` has a submenu, opens the submenu and places focus on the _last_ item in the submenu.
- <kbd>Right Arrow</kbd>
  - : Moves focus to the next item, optionally wrapping from the last to the first.
- <kbd>Left Arrow</kbd>
  - : Moves focus to the previous item, optionally wrapping from the first to the last.
- <kbd>Home</kbd>
  - : If arrow key wrapping is not supported, moves focus to the first item in the `menubar`.
- <kbd>End</kbd>
  - : If arrow key wrapping is not supported, moves focus to the last item in the `menubar`.
- <kbd>Tab</kbd>
  - : Moves focus to the next element in the tab sequence. If that makes it exit the menubar, all submenus in the menubar get closed.
- <kbd>Tab</kbd>
  - : Moves focus to the previous element in the tab sequence. If that makes it exit the menubar, all submenus in the menubar get closed.

See [`menuitem` keyboard interactions](/en-US/docs/Web/Accessibility/ARIA/Roles/menuitem_role#keyboard_interactions), [`menuitemradio` keyboard interactions](/en-US/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role#keyboard_interactions), and [`menuitemcheckbox` keyboard interactions](/en-US/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role#keyboard_interactions) for more information on keyboard interactions when focus is on a menuitem in a menubar (which it always is).

Note: The above interactions assumed the `menubar` is horizontal. If the `menubar` is vertical, include `aria-orientation="vertical"` and change the following keyboard keys accordingly:

- <kbd>Down Arrow</kbd>
  - : Performs like the <kbd>Right Arrow</kbd> as described above.
- <kbd>Up Arrow</kbd>
  - : Performs like the <kbd>Left Arrow</kbd> as described above
- <kbd>Right Arrow</kbd>
  - : Performs like the <kbd>Down Arrow</kbd> as described above.
- <kbd>Left Arrow</kbd>
  - : Performs as the <kbd>Up Arrow</kbd> as described above

## Examples

- [W3C WAI-ARIA practices: navigation `menubar` example](https://www.w3.org/TR/2019/WD-wai-aria-practices-1.2-20191218/examples/menubar/menubar-1/menubar-1.html)
- [W3C WAI-ARIA practices: editor `menubar` example](https://www.w3.org/TR/2019/WD-wai-aria-practices-1.2-20191218/examples/menubar/menubar-2/menubar-2.html)

## Specifications

{{Specifications}}

## See Also

- [`toolbar` role](/en-US/docs/Web/Accessibility/ARIA/Roles/toolbar_role)

<section id="Quick_links">

1. [**WAI-ARIA roles**](/en-US/docs/Web/Accessibility/ARIA/Roles)

    {{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/ARIA/Roles")}}

</section>
