---
title: "ARIA: tablist role"
slug: Web/Accessibility/ARIA/Roles/tablist_role
page-type: aria-role
spec-urls: https://w3c.github.io/aria/#tablist
---

{{AccessibilitySidebar}}

The `tablist` role identifies the element that serves as the container for a set of `tabs`. The tab content are referred to as `tabpanel` elements.

## Description

You may be interacting with a tabbed interface as you read this! Browser tabs allow a user have multiple web pages open in a single window. Clicking on a tab in the tablist at the top of the browser window enables the user to display the associated content in the main content area, the tabpanel, one site at a time. This is called a "tab design pattern".

When implementing a tab design pattern, the [`tab`](/en-US/docs/Web/Accessibility/ARIA/Roles/tab_role), `tablist` and [`tabpanel`](/en-US/docs/Web/Accessibility/ARIA/Roles/tabpanel_role) roles are used.

Tabs are a set of layered sections of content, known as tab panels, that display one panel of content at a time. Each tab panel has an associated `tab` element, that, when activated, displays the panel. The list of tab elements is arranged along one edge of the currently displayed panel, most commonly the top edge, nested in a `tablist` element.

Each `tab` in a `tablist` serves as a label for one `tabpanel` and can be activated to display that panel. The `tablist` is the containing element for the set of tab elements contained.

When a tabbed interface is initialized, one tab panel is displayed and its associated tab is styled to indicate that it is active. When the user activates one of the other tab elements, the previously displayed tab panel is hidden, the tab panel associated with the activated tab becomes visible, and the tab is considered "active".

For a single-selectable tablist, the non-active tabpanel elements should be hidden from the user until the user selects the tab associated with that tabpanel.

When creating a multi-selectable tablist, include [`aria-multiselectable="true"`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-multiselectable) on the `tablist element`.

The `tab` elements not the `tablist`, have the [`aria-selected`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-selected) attribute. Set to `aria-selected="true"` for the tabs associated with each visible tabpanel. The tabs associated with hidden tabpanel elements have their `aria-selected` attributes set to `false`.

If the tab list has a visible label, set [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) to the `id` of the labelling element. If not, use [`aria-label`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label) to provide a label.

To be keyboard accessible, focus must be managed for the descendants of this role.

Elements with the `tablist` role have an implicit [`aria-orientation`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-orientation) value of `horizontal`.

### Associated WAI-ARIA roles, states, and properties

- [`tab`](/en-US/docs/Web/Accessibility/ARIA/Roles/tab_role) role
  - : Required Owned Elements. Every tablist must have one or more `tab` children.
- [`aria-multiselectable`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-multiselectable)
  - : When set to `true`, indicates the user may select more than one `tab` from the `tablist` descendants.
- [`aria-orientation`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-orientation)
  - : If the tablist element is vertically oriented, set `aria-orientation="vertical"`. The default is `horizontal`.

### Keyboard interactions

For the tab list:

- <kbd>Tab</kbd>
  - : When focus moves into the tab list, places focus on the active `tab` element. <br/><br/>When the tab list contains the focus, moves focus to the next element in the page tab sequence outside the tablist, which is the tabpanel unless the first element containing meaningful content inside the tabpanel is focusable.

When focus is on a tab element in a horizontal tab list:

- <kbd>Left Arrow</kbd>
  - : moves focus to the previous tab. If focus is on the first tab, moves focus to the last tab. Optionally, activates the newly focused tab
- <kbd>Right Arrow</kbd>
  - : Moves focus to the next tab. If focus is on the last tab element, moves focus to the first tab. Optionally, activates the newly focused tab

When focus is on a tab element in a vertical tab list:

- <kbd>Up Arrow</kbd>
  - : moves focus to the previous tab. If focus is on the first tab, moves focus to the last tab. Optionally, activates the newly focused tab
- <kbd>Down Arrow</kbd>
  - : Moves focus to the next tab. If focus is on the last tab element, moves focus to the first tab. Optionally, activates the newly focused tab

If the tab list is horizontal, it does not listen for <kbd>Down Arrow</kbd> or <kbd>Up Arrow</kbd> so those keys can provide their normal browser scrolling functions even when focus is inside the tab list.

When focus is on a tab in a tablist with either horizontal or vertical orientation:

- <kbd>Space</kbd> or <kbd>Enter</kbd>
  - : Activates the tab if it was not activated automatically on focus.
- <kbd>Home</kbd> (Optional)
  - : Moves focus to the first tab. Optionally, activates the newly focused tab
- <kbd>End</kbd> (Optional)
  - : Moves focus to the last tab. Optionally, activates the newly focused tab
- <kbd>Shift + F10</kbd>
  - : If the tab has an associated popup menu, opens the menu.
- <kbd>Delete</kbd> (Optional)
  - : If deletion is allowed, deletes (closes) the current tab element and its associated tab panel, sets focus on the tab following the tab that was closed, and optionally activates the newly focused tab. If there is not a tab that followed the tab that was deleted, e.g., the deleted tab was the right-most tab in a left-to-right horizontal tab list, sets focus on and optionally activates the tab that preceded the deleted tab. If the application allows all tabs to be deleted, and the user deletes the last remaining tab in the tab list, the application moves focus to another element that provides a logical work flow. As an alternative to Delete, or in addition to supporting Delete, the delete function is available in a context menu.

<!--
### Required JavaScript features

## Accessibility concerns

## Best Practices

### Prefer HTML
-->

## Examples

See the [`tabpanel`, `tab`, and `tablist` example](/en-US/docs/Web/Accessibility/ARIA/Roles/tab_role#example) in the [`tab`](/en-US/docs/Web/Accessibility/ARIA/Roles/tab_role) role definition.

## Specifications

{{Specifications}}

## See also

- [`tab` role](/en-US/docs/Web/Accessibility/ARIA/Roles/tab_role)
- [`tabpanel` role](/en-US/docs/Web/Accessibility/ARIA/Roles/tabpanel_role)
