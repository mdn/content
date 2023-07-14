---
title: "ARIA: menuitemradio role"
slug: Web/Accessibility/ARIA/Roles/menuitemradio_role
page-type: aria-role
spec-urls:
  - https://w3c.github.io/aria/#menuitemradio
  - https://w3c.github.io/aria-practices/#menu
---

A `menuitemradio` is checkable menuitem in a set of elements with the same role, only one of which can be checked at a time.

## Description

The items in menu and menubars are menu items. There are three types of menu items: [`menuitem`](/en-US/docs/Web/Accessibility/ARIA/Roles/menuitem_role), [`menuitemcheckbox`](/en-US/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role), and `menuitemradio`. To limit the number of checked menu items to one within a group, use the `menuitemradio` role on all the elements in the group.

A `menuitemradio` is checkable menuitem in a set of elements with the same role, of which only can be checked at a time.

The three menu item elements can only be contained in, or owned by, an element with role [`menu`](/en-US/docs/Web/Accessibility/ARIA/Roles/menu_role) or [`menubar`](/en-US/docs/Web/Accessibility/ARIA/Roles/menubar_role), optionally nested within a grouping element with role of [`group`](/en-US/docs/Web/Accessibility/ARIA/Roles/group_role). Being nested or otherwise owned (see [`aria-owns`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-owns)) in a `menu` or `menubar` identifies the menu items as being related widgets.

When all items in a submenu are members of the same radio group, the `group` is defined by the menu element; the `group` element is not necessary.

Menu items containing the role of `menuitemradio` must include the [`aria-checked`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-checked) attribute to expose the radio button's state to assistive technology, unless using [`<input type="radio">`](/en-US/docs/Web/HTML/Element/input/checkbox), in which case the ['checked'](/en-US/docs/Web/HTML/Element/input/checkbox#checked) attribute should be used.

Similar to the 'checked' attribute of {{HTMLElement('input')}}s of type `radio`, the `aria-checked` attribute of a `menuitemradio` indicates whether the menu item is checked (`true`), unchecked (`false`). If missing, the value defaults to `false`. There is no `mixed` value like there is for `menuitemcheckbox`.

Only one `menuitemradio` in a group can be checked at the same time. When one item in the group is checked, the `aria-checked` attribute gets set to `true`, while the previously checked `menuitemradio` element in the same group, if there was one, becomes unchecked, by having the `aria-checked` attribute value switched to `false`.

If your want more than one item in a group to be checked, or if you want to enable checking and unchecking an item, consider using `menuitemcheckbox`.

If a `menu` or `menubar` contains more than one group of `menuitemradio` elements, or if the `menu` contains a group of `menuitemradio` elements as well as other, unrelated `menuitem` elements and/or `menuitemcheckbox` elements, contain each set of related `menuitemradio` elements in a `group` element or delimit the group the `menuitemradio` elements from the other menu items with a `separator` element (or an HTML element with an equivalent role such as a {{HTMLElement('fieldset')}} grouping or a thematic break {{HTMLElement('hr')}} separator.

An accessible name is required. Ideally, the accessible name should come from an associated {{htmlelement('label')}} element if using `<input type="radio">` or visible, descendant content. Realize if the label or descendant content is not sufficient and, preferably, [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) is used referencing non-descendant content or [`aria-label`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label) is used, these two ARIA properties will hide other descendant content from assistive technologies.

If all elements in the set are not present in the DOM include the [`aria-setsize`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-setsize) and [`aria-posinset`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-posinset) properties. When specifying `aria-setsize` and `aria-posinset` on a `menuitemradio`, set the value with respect to the total number of items in the menu, excluding any separators.

The `menuitemradio` element can have phrasing content, but can not have interactive content as descendants and no descendants with a `tabindex` attribute specified.

### All descendants are presentational

There are some types of user interface components that, when represented in a platform accessibility API, can only contain text. Accessibility APIs do not have a way of representing semantic elements contained in a `menuitemradio`. To deal with this limitation, browsers, automatically apply role [`presentation`](/en-US/docs/Web/Accessibility/ARIA/Roles/presentation_role) to all descendant elements of any `menuitemradio` element as it is a role that does not support semantic children.

For example, consider the following `menuitemradio` element, which contains a heading.

```html
<div role="menuitemradio"><h6>Name of my radio button</h6></li>
```

Because descendants of `menuitemradio` are presentational, the following code is equivalent:

```html
<div role="menuitemradio"><h6 role="presentation">Name of my radio button</h6></li>
```

From the assistive technology user's perspective, the heading does not exist since the previous code snippets are equivalent to the following in the [accessibility tree](/en-US/docs/Glossary/Accessibility_tree):

```html
<div role="menuitemradio">Name of my radio button</div>
```

### Associated WAI-ARIA roles, states, and properties

- [`menu`](/en-US/docs/Web/Accessibility/ARIA/Roles/menu_role) role
  - : Widget that offers a list of common actions or functions the user can invoke.
- [`menubar`](/en-US/docs/Web/Accessibility/ARIA/Roles/menubar_role) role
  - : Similar to `menu` for a consistent set of frequently used commands remaining visible and usually presented horizontally.
- [`group`](/en-US/docs/Web/Accessibility/ARIA/Roles/group_role) role
  - : Container for a group of `menuitem` elements, including `menuitemradio` elements within a `menu` or `menubar`.
- [`aria-checked`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-checked) (Required)
  - : Set to `true`, `false`, or `mixed`, it indicates the current "checked" state of the menuitemradio

### Keyboard interactions

When a `menu` opens, or when a `menubar` receives focus, keyboard focus is placed on the first item. All items in both are focusable, including all `menuitemradio` elements.

If the `menuitemradio` is in a submenu in a `menubar` or a menu opened with a menu button, the following keyboard interactions must be programmed in. :

- <kbd>Enter</kbd>
  - : If not checked, checks the focused `menuitemradio` and unchecks any other checked `menuitemradio` element in the same group. Also, closes the menu.
- <kbd>Space</kbd>
  - : If not checked, checks the focused `menuitemradio` and unchecks any other checked `menuitemradio` element in the same group without closing the menu.
- <kbd>Escape</kbd>
  - : Closes menu. In menubar, moves focus to parent menubar item.
- <kbd>Right Arrow</kbd>
  - : Closes submenu. In menubar, moves focus to next item in the menubar, opening any submenu if there is one.
- <kbd>Left Arrow</kbd>
  - : Closes menu. In menubar, moves focus to previous item in the menubar, opening any submenu if there is one.
- <kbd>Down Arrow</kbd>
  - : Moves focus to the next item in the menu. If focus is on the last item, moves focus to the first item.
- <kbd>Up Arrow</kbd>
  - : Moves focus to previous item in the menu. If focus is on the first item, moves focus to the last item.
- <kbd>Home</kbd>
  - : Moves focus to the first item in the menu.
- <kbd>End</kbd>
  - : Moves focus to the last item in the menu.
- <kbd>Character</kbd>
  - : Moves focus to the next item having a name that starts with the typed character. If none of the items have a name starting with the typed character, focus does not move.

### Required JavaScript

#### Required event handlers

- `onclick`
  - : Handle mouse clicks on both the radio button and the associated label that will change the state of the radio button by changing the value of the `aria-checked` attribute and the appearance of the radio button so it appears checked or unchecked to the sighted user
- `onKeyDown`
  - : Handle the case where the user presses the <kbd>Space</kbd> key to change the state of the radio button by changing the value of the `aria-checked` attribute and the appearance of the radio button so it appears checked or unchecked to the sighted user. Also handles all keys listed in the keyboard navigation section above.

## Examples

```html
<li role="menuitemradio" tabindex="-1" aria-checked="false">Purple</li>
```

The [`tabindex="-1"`](/en-US/docs/Web/HTML/Global_attributes/tabindex) makes the `menuitemradio` focusable but not part of the page tab sequence. Had we included `aria-checked="true"` it would have indicated that the `menuitemradio` was checked, and we would have visually styled the selected state to look checked using the attribute selector `[role='menuitemradio'][aria-checked='true']`. Instead, the presence of `aria-checked="false"` indicates to assistive technologies that the `menuitemradio` is checkable but not currently checked. The accessible name "purple" comes from the contents.

The visual appearance of the selected state is a checked radio button which we can create using [generated content](/en-US/docs/Web/CSS/CSS_Generated_Content), making it visible and the same color as the content by synchronizing with the `aria-checked` value using CSS [attribute selectors](/en-US/docs/Web/CSS/Attribute_selectors) and changing the [`background-color`](/en-US/docs/Web/CSS/background-color).

```css
[role="menuitemradio"]::before {
  display: inline-block;
  content: "";
  width: 1em;
  height: 1em;
  padding: 0.1em;
  border: 2px solid #333;
  border-radius: 50%;
  box-sizing: border-box;
  background-clip: content-box;
  margin-inline-end: 2px;
}
[role="menuitemradio"][aria-checked="true"]::before {
  background-color: purple;
}
```

Don't use the [`background`](/en-US/docs/Web/CSS/background) shorthand property, as that will override the [`background-clip`](/en-US/docs/Web/CSS/background-clip) property we used to create the radio button effect.

### Prefer HTML

The first rule of ARIA is: if a native HTML element or attribute has the semantics and behavior you require, use it instead of re-purposing an element and adding an ARIA role, state or property to make it accessible. As such, it is recommended to use the native [HTML radio button](/en-US/docs/Web/HTML/Element/input/radio) form control instead of recreating a radio button's functionality with JavaScript and ARIA.

## Specifications

{{Specifications}}

## See Also

- [`radio` role](/en-US/docs/Web/Accessibility/ARIA/Roles/radio_role)
- [`<input type="radio">`](/en-US/docs/Web/HTML/Element/input/radio)

<section id="Quick_links">

1. [**WAI-ARIA roles**](/en-US/docs/Web/Accessibility/ARIA/Roles)

   {{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/ARIA/Roles")}}

</section>
