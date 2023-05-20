---
title: "ARIA: listbox role"
slug: Web/Accessibility/ARIA/Roles/listbox_role
page-type: aria-role
spec-urls:
  - https://w3c.github.io/aria/#listbox
  - https://w3c.github.io/aria-practices/#Listbox
---

The `listbox` role is used for lists from which a user may select one or more items which are static and, unlike HTML {{HTMLElement('select')}} elements, may contain images.

## Description

The `listbox` role is used to identify an element that creates a list from which a user may select one or more static items, similar to the HTML {{HTMLElement('select')}} element. Unlike {{HTMLElement('select')}}, a listbox can contain images. Each child of a listbox should have a role of [option](https://www.w3.org/TR/2010/WD-wai-aria-20100916/roles#option).

It is highly recommended using the HTML select element, or a group of radio buttons if only one item can be selected, or a group of checkboxes if multiple items can be selected, because there is a lot of keyboard interactivity to manage focus for all the descendants, and native HTML elements provide this functionality for you for free.

Elements with the role `listbox` have an implicit [`aria-orientation`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-orientation) value of `vertical`.

When a list is tabbed to, the first item in the list will be selected if nothing else already is. Up/down arrows navigate the list, and pressing Shift + Up/Down arrows will move and extend the selection. Typing one or more letters will navigate the list items (same letter goes to each item starting with that, different letters go to the first item starting with that entire string). If the current item has an associated context menu, Shift+F10 will launch that menu. If list items are checkable, Space can be used to toggle [checkboxes](/en-US/docs/Web/Accessibility/ARIA/Roles/checkbox_role). For selectable list items, Space toggles their selection, Shift+Space can be used to select contiguous items, Ctrl+Arrow moves without selecting, and Ctrl+Space can be used to select non-contiguous items. It is recommended that a checkbox, link or other method be used to select all items, and Ctrl+A could be used as a shortcut key for this.

When the listbox role is added to an element, or such an element becomes visible, screen readers announce the label and role of the listbox when it gets focus. If an option or item is focused within the list, it gets announced next, followed by an indication of the item's position with the list if the screen reader supports this. As focus moves within the list, the screen reader announces the relevant items.

### Associated ARIA roles, states, and properties

#### Associated Roles

- [`option`](/en-US/docs/Web/Accessibility/ARIA/Roles/option_role) role
  - : One or more nested options are required. All selected options have [`aria-selected`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-selected) set to `true`. All options that are not selected have [`aria-selected`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-selected) set to `false`. If an option is not selectable, omit the [`aria-selected`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-selected).
- [`list`](/en-US/docs/Web/Accessibility/ARIA/Roles/list_role) role
  - : A section containing `listitem` elements

#### States and Properties

- [`aria-activedescendant`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-activedescendant)
  - : Holds the `id` string of the currently active element within the listbox. If that's an option element, then that would be the `id` of the most recently interacted with option, regardless of whether that option has an [`aria-selected`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-selected) value of `true` or not. Takes the value of only one `id`, even in a multiselectable listbox. If the `id` does not refer to a DOM descendant of the listbox, then that `id` must be included among the IDs in the [`aria-owns`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-owns) attribute.
- [`aria-owns`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-owns)

  - : This is a space-separated list of element IDs which are not DOM child elements of the listbox. IDs listed here cannot also be listed in [`aria-owns`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-owns) attributes of any other elements.

- [`aria-multiselectable`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-multiselectable)

  - : Include and set to `true` if the user can select more than one option. If set to `true`, _every_ selectable option should have an [`aria-selected`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-selected) attribute included and set to `true` or `false`. Options which are _not_ selectable _should not_ have the [`aria-selected`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-selected) attribute. If `false` or omitted, only the currently selected option, if any option is selected, needs the [`aria-selected`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-selected) attribute, and it must be set to `true`.

- [`aria-required`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-required)

  - : A Boolean attribute which indicates that an option with a non-empty string value must be selected.

- [`aria-readonly`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-readonly)

  - : The user cannot change which options are selected or unselected, but the listbox is otherwise operable.

- [`aria-label`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label)

  - : A human-readable string value which identifies the listbox. If there's a visible label, then [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) should be used instead to refer to that label.

- [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)

  - : Identifies the visible element or elements in a space-separated list of element IDs which identify the listbox. If there's no visible label, then [`aria-label`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label) should be used instead to include a label. (Note: "labelled", with two L's, is the correct spelling based on the accessibility API conventions.)

- [`aria-roledescription`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-roledescription)
  - : A human-readable string value which more clearly identifies the role of the listbox. Screen readers will often read this value to the user after reading the label (if there is one), in place of saying "listbox".

### Keyboard interactions

- When a single-select listbox receives focus:

  - If none of the options are selected before the listbox receives focus, the first option receives focus. Optionally, the first option may be automatically selected.
  - If an option is selected before the listbox receives focus, focus is set on the selected option.

- When a multi-select listbox receives focus:

  - If none of the options are selected before the listbox receives focus, focus is set on the first option and there is no automatic change in the selection state.
  - If one or more options are selected before the listbox receives focus, focus is set on the first option in the list that is selected.

- <kbd>Down Arrow</kbd>

  : Moves focus to the next option. Optionally, in a single-select listbox, selection may also move with focus.

- <kbd>Up Arrow</kbd>

  : Moves focus to the previous option. Optionally, in a single-select listbox, selection may also move with focus.

- <kbd>Home</kbd>

  (Optional): Moves focus to first option. Optionally, in a single-select listbox, selection may also move with focus. Supporting this key is strongly recommended for lists with more than five options.

- <kbd>End</kbd>

  (Optional): Moves focus to last option. Optionally, in a single-select listbox, selection may also move with focus. Supporting this key is strongly recommended for lists with more than five options.

- Type-ahead is recommended for all listboxes, especially those with more than seven options:

  - Type a character: focus moves to the next item with a name that starts with the typed character.
  - Type multiple characters in rapid succession: focus moves to the next item with a name that starts with the string of characters typed.

- **Multiple Selection**: Authors may implement either of two interaction models to support multiple selection: a recommended model that does not require the user to hold a modifier key, such as

  <kbd>Shift</kbd>

  or

  <kbd>Control</kbd>

  , while navigating the list or an alternative model that does require modifier keys to be held while navigating in order to avoid losing selection states.

  - Recommended selection model — holding modifier keys is not necessary:

    - <kbd>Space</kbd>

      : changes the selection state of the focused option .

    - <kbd>Shift + Down Arrow</kbd>

      (Optional): Moves focus to and toggles the selected state of the next option.

    - <kbd>Shift + Up Arrow</kbd>

      (Optional): Moves focus to and toggles the selected state of the previous option.

    - <kbd>Shift + Space</kbd>

      (Optional): Selects contiguous items from the most recently selected item to the focused item.

    - <kbd>Control + Shift + Home</kbd>

      (Optional): Selects the focused option and all options up to the first option. Optionally, moves focus to the first option.

    - <kbd>Control + Shift + End</kbd>

      (Optional): Selects the focused option and all options down to the last option. Optionally, moves focus to the last option.

    - <kbd>Control + A</kbd>

      (Optional): Selects all options in the list. Optionally, if all options are selected, it may also unselect all options.

### Required JavaScript features

#### selecting an option in a single select listbox

When the user selects an option, the following must occur:

1. Deselect the previously selected option, setting the [`aria-selected`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-selected) to `false`, or removing the attribute altogether, changing the appearance of the newly unselected option to appear not selected.
2. Select the newly selected option, setting `aria-selected="true"` on the option and changing the appearance of the newly selected option to appear selected.
3. Update the [`aria-activedescendant`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-activedescendant) value on the listbox to the id of the newly selected option
4. Visually handle the blur, focus, and selected states of the option

#### Toggling the state of an option in a multi select listbox

When the user clicks on an option, hits <kbd>Space</kbd> when focused on an option, or otherwise toggles the state of an option, the following must occur:

1. Toggle the [`aria-selected`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-selected) state of the currently focused option, changing the state of the `aria-selected` to true if it was false or false if it was true.
2. Change the appearance of the option to reflect its selected state
3. Update the [`aria-activedescendant`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-activedescendant) value on the listbox to the ID of the option the user just interacted with, even if they toggled the option to be unselected.

> **Note:** The first rule of ARIA use is you can use a native feature with the semantics and behavior you require already built in, instead of re-purposing an element and **adding** an ARIA role, state or property to make it accessible, then do so. The {{HTMLElement('select')}} element with descendant {{HTMLElement('option')}} elements handles all the needed interactions natively.

## Examples

### Example 1: A single select listbox that uses `aria-activedescendant`

The snippet below, using [`aria-activedescendant`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-activedescendant), shows how the listbox role is added directly into the HTML source code.

```html
<p id="listbox1label" role="label">Select a color:</p>
<div
  role="listbox"
  tabindex="0"
  id="listbox1"
  aria-labelledby="listbox1label"
  onclick="return listItemClick(event);"
  onkeydown="return listItemKeyEvent(event);"
  onkeypress="return listItemKeyEvent(event);"
  aria-activedescendant="listbox1-1">
  <div role="option" id="listbox1-1" class="selected" aria-selected="true">
    Green
  </div>
  <div role="option" id="listbox1-2">Orange</div>
  <div role="option" id="listbox1-3">Red</div>
  <div role="option" id="listbox1-4">Blue</div>
  <div role="option" id="listbox1-5">Violet</div>
  <div role="option" id="listbox1-6">Periwinkle</div>
</div>
```

This could have more easily been handled with the native HTML {{HTMLElement('select')}} and {{HTMLElement('label')}} elements.

```html
<label for="listbox1">Select a color:</label>
<select id="listbox1">
  <option selected>Green</option>
  <option>Orange</option>
  <option>Red</option>
  <option>Blue</option>
  <option>Violet</option>
  <option>Periwinkle</option>
</select>
```

### More examples

- [Scrollable Listbox Example](https://w3c.github.io/aria-practices/examples/listbox/listbox-scrollable.html): Single-select listbox that scrolls to reveal more options, similar to HTML {{HTMLElement('select')}} with `size` attribute greater than one.
- [Collapsible Dropdown Listbox Example](https://w3c.github.io/aria-practices/examples/listbox/listbox-collapsible.html): Single-select collapsible listbox that expands when activated, similar to HTML {{HTMLElement('select')}} with the attribute `size="1"`.
- [Example Listboxes with Rearrangeable Options](https://w3c.github.io/aria-practices/examples/listbox/listbox-rearrangeable.html): Examples of both single-select and multi-select listboxes with accompanying toolbars where options can be added, moved, and removed.

## Best practices

- To be keyboard-accessible, authors should [manage focus](https://www.w3.org/TR/wai-aria-1.1/#managingfocus) of all descendants of this role.
- It is recommended that authors use different styling for the selection when the list is not focused, e.g. a non-active selection is often shown with a lighter background color.
- If the listbox is not part of another widget, it should have the [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) property set.
- If one or more entries are not DOM children of listbox, additional `aria-*` properties will need to be set (see [ARIA Best Practices](https://www.w3.org/TR/wai-aria-practices/#listbox_div)).
- If there is a valid reason to [expand](https://www.w3.org/TR/wai-aria-1.1/#aria-expanded) the listbox, the [`combobox`](/en-US/docs/Web/Accessibility/ARIA/Roles/combobox_role) role may be more appropriate.

## Specifications

{{Specifications}}

## See also

- HTML {{HTMLElement('select')}} element
- HTML {{HTMLElement('label')}} element
- HTML {{HTMLElement('option')}} element
- [ARIA: `combobox` role](/en-US/docs/Web/Accessibility/ARIA/Roles/combobox_role)
- [ARIA: `option` role](/en-US/docs/Web/Accessibility/ARIA/Roles/option_role)
- [ARIA: `list` role](/en-US/docs/Web/Accessibility/ARIA/Roles/list_role)
- [ARIA: `listitem` role](/en-US/docs/Web/Accessibility/ARIA/Roles/listitem_role)
- [ARIA Best Practices – Listbox](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/)
- [ARIA Role Model – Listbox](https://www.w3.org/TR/wai-aria-1.1/#listbox)

<section id="Quick_links">

1. [**WAI-ARIA roles**](/en-US/docs/Web/Accessibility/ARIA/Roles)

   {{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/ARIA/Roles")}}

</section>
