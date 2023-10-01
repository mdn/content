---
title: "ARIA: menuitemcheckbox role"
slug: Web/Accessibility/ARIA/Roles/menuitemcheckbox_role
page-type: aria-role
spec-urls:
  - https://w3c.github.io/aria/#menuitemcheckbox
  - https://w3c.github.io/aria-practices/#menu
---

A `menuitemcheckbox` is a `menuitem` with a checkable state whose possible values are `true`, `false`, or `mixed`.

## Description

The items in menu and menubars are menu items. There are three types of menu items: [`menuitem`](/en-US/docs/Web/Accessibility/ARIA/Roles/menuitem_role), [`menuitemradio`](/en-US/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role), and `menuitemcheckbox`.

These three elements can only be contained in, or owned by, an element with role [`menu`](/en-US/docs/Web/Accessibility/ARIA/Roles/menu_role) or [`menubar`](/en-US/docs/Web/Accessibility/ARIA/Roles/menubar_role), optionally nested within a grouping element with role of [`group`](/en-US/docs/Web/Accessibility/ARIA/Roles/group_role). Being nested or otherwise owned (see [`aria-owns`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-owns)) in a `menu` or `menubar` identifies the menu items as being related widgets.

Menu items, including `menuitemcheckbox` elements, may be grouped within `group` elements or separated by elements with the [`separator`](/en-US/docs/Web/Accessibility/ARIA/Roles/separator_role) role or other equivalent native role such as {{HTMLElement('fieldset')}} and {{HTMLElement('hr')}}.

Menu items containing the role of `menuitemcheckbox` must include the [`aria-checked`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-checked) attribute to expose the checkbox's state to assistive technology, unless using [`<input type="checkbox">`](/en-US/docs/Web/HTML/Element/input/checkbox), in which case the ['checked'](/en-US/docs/Web/HTML/Element/input/checkbox#checked) attribute should be used.

Similar to the 'checked' attribute of {{HTMLElement('input')}}s of type `checkbox`, the `aria-checked` attribute of a `menuitemcheckbox` indicates whether the menu item is checked (`true`), unchecked (`false`), or represents a sub-level menu of other menu items that have a mixture of checked and unchecked values (`mixed`). The `mixed` value is similar to the checkbox's [`indeterminate`](/en-US/docs/Web/HTML/Element/input/checkbox#indeterminate_state_checkboxes) attribute, which gives the appearance of a third, neither checked nor unchecked, state. If missing, the value defaults to `false`.

An accessible name is required. Ideally, the accessible name should come from an associated {{htmlelement('label')}} element if using `<input type="checkbox">` or visible, descendant content. Realize if the label or descendant content is not sufficient and, preferably, [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) is used referencing non-descendant content or [`aria-label`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label) is used, these two ARIA properties will hide other descendant content from assistive technologies.

If all elements in the set are not present in the DOM include the [`aria-setsize`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-setsize) and [`aria-posinset`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-posinset) properties. When specifying `aria-setsize` and `aria-posinset` on a `menuitemcheckbox`, set the value with respect to the total number of items in the menu, excluding any separators.

The `menuitemcheckbox` element can have phrasing content, but can not have interactive content as descendants and no descendants with a `tabindex` attribute specified.

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

When a `menu` opens, or when a `menubar` receives focus, keyboard focus is placed on the first item. All items in both are focusable, including all `menuitemcheckbox` elements.

If the `menuitemcheckbox` is in a submenu in a `menubar` or a menu opened with a menu button, the following keyboard interactions must be programmed in. :

- <kbd>Enter</kbd>
  - : Toggles the `aria-checked` state of the `menuitemcheckbox` and closes the menu.
- <kbd>Space</kbd>
  - : Toggles the `aria-checked` state of the `menuitemcheckbox`. Does not close the menu.
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
  - : Handle mouse clicks on both the checkbox and the associated label that will change the state of the checkbox by changing the value of the `aria-checked` attribute and the appearance of the checkbox so it appears checked or unchecked to the sighted user
- `onKeyDown`
  - : Handle the case where the user presses the <kbd>Space</kbd> key to change the state of the checkbox by changing the value of the `aria-checked` attribute and the appearance of the checkbox so it appears checked or unchecked to the sighted user. Also handles all keys listed in the keyboard navigation section above.

## Examples

```html
<li role="menuitemcheckbox" tabindex="-1" aria-checked="false">Purple</li>
```

The [`tabindex="-1"`](/en-US/docs/Web/HTML/Global_attributes/tabindex) makes the `menuitemcheckbox` focusable but not part of the page tab sequence. Had we included `aria-checked="true"` it would have indicated that the `menuitemcheckbox` was checked, and we would have visually styled the selected state to look checked using the attribute selector `[role='menuitemcheckbox'][aria-checked='true']`. Instead, the presence of `aria-checked="false"` indicates to assistive technologies that the `menuitemcheckbox` is checkable but not currently checked. The accessible name "purple" comes from the contents.

The visual appearance of the selected state is a checked checkbox which we can create using [generated content](/en-US/docs/Web/CSS/CSS_generated_content), making it visible and the same color as the content by synchronizing with the `aria-checked` value using CSS [attribute selectors](/en-US/docs/Web/CSS/Attribute_selectors) and [inheriting](/en-US/docs/Web/CSS/inherit) the color.

```css
[role="menuitemcheckbox"]::before {
  display: inline-block;
  content: "";
  color: transparent;
  width: 1em;
  text-align: center;
  outline: 1px solid;
  margin-inline-end: 2px;
  font-family: sans-serif;
}
[role="menuitemcheckbox"][aria-checked="true"]::before {
  color: inherit;
  content: "X";
}
```

### Prefer HTML

The first rule of ARIA is: if a native HTML element or attribute has the semantics and behavior you require, use it instead of re-purposing an element and adding an ARIA role, state or property to make it accessible. As such, it is recommended to use the native [HTML checkbox](/en-US/docs/Web/HTML/Element/input/checkbox) form control instead of recreating a checkbox's functionality with JavaScript and ARIA.

## Specifications

{{Specifications}}

## See Also

- [`menuitemradio` role](/en-US/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role)
- [`checkbox` role](/en-US/docs/Web/Accessibility/ARIA/Roles/checkbox_role)
- [`<input type="checkbox">`](/en-US/docs/Web/HTML/Element/input/checkbox)

<section id="Quick_links">

1. [**WAI-ARIA roles**](/en-US/docs/Web/Accessibility/ARIA/Roles)

   {{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/ARIA/Roles")}}

</section>
