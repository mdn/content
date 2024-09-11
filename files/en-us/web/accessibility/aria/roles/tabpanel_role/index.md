---
title: "ARIA: tabpanel role"
slug: Web/Accessibility/ARIA/Roles/tabpanel_role
page-type: aria-role
spec-urls:
  - https://w3c.github.io/aria/#tabpanel
  - https://www.w3.org/WAI/ARIA/apg/patterns/tabs/examples/tabs-manual/
---

{{AccessibilitySidebar}}

The ARIA `tabpanel` is a container for the resources of layered content associated with a `tab`.

## Description

The `tabpanel` role indicates the element is a container for the resources associated with a [`tab`](/en-US/docs/Web/Accessibility/ARIA/Roles/tab_role) role, where each `tab` is contained in a [`tablist`](/en-US/docs/Web/Accessibility/ARIA/Roles/tablist_role).

A `tabpanel` is part of a tab interface, a common user experience pattern in which a group of visual tabs allow for quickly switching between multiple layered views. Each tab is defined as such with the `tab` role, and these tabs are contained within an element with the `tablist` role. The `tablist` is often visually positioned above or to the side of a content area, containing the associated tabpanels. The `tabpanel` is the role of the container for each pane of content that is associated with a corresponding `tab` in the tab interface's `tablist`.

In many tab interfaces, only a single `tabpanel` will be visible at a time. However, some interfaces may require multiple tab panels to be displayed at once. In these cases the `tablist` would be provided the [`aria-multiselectable`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-multiselectable) attribute, and the `tab` elements would then use the [`aria-expanded`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-expanded) attribute to indicate whether its associated `tabpanel` was visible or not. The tab's selected state would instead be used to indicate which tabpanel is the currently 'active' panel. For example, this could indicate which tabpanel keyboard focus would move to if someone were to press the <kbd>tab</kbd> key when focused on an tab within the multi-select `tablist`.

In single-select tab interfaces, only the `tabpanel` associated with the currently selected tab is displayed. All other `tabpanel` elements associated with the unselected tabs must be hidden from users. So when tab selection changes, the displayed tabpanel would also, while the previously-displayed tabpanel would then become hidden.

In multi-select tab interfaces, multiple `tabpanel` elements may be displayed, matching the expanded state of their associated `tab` elements.

Tabs do not act as anchor links to individual panels — and upon activation, keyboard focus should remain on the current `tab` element and not automatically move to the newly displayed `tabpanel`. While a tab interface may be progressively enhanced based off an underlying markup pattern of in-page hyperlinks pointing to their associated sections of content, when JavaScript is used to modify these elements into a tabbed interface, the hyperlinks' default behavior should be prevented. Ideally, this could be done by removing or modifying the `href` attribute, as this would have the added benefit of removing the hyperlink-specific menu items from the element's browser context menu.

When keyboard focus is on a `tablist`, or a `tab` within the `tablist`, the <kbd>Tab</kbd> key should be programmed to move from the focused tab — which may or may not be the selected tab — to the `tabpanel` which represents the currently selected tab.

Each `tab` in a `tablist` can serve as the label for its corresponding `tabpanel`. Include the `id` of each `tab` as the value for each `tabpanel`'s [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) attribute.

You can also optionally associate each `tabpanel` with its associated `tab` by including the [`id`](/en-US/docs/Web/HTML/Global_attributes#id) of the `tabpanel` as the value of the `tab`'s [`aria-controls`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-controls) attribute.

When a tabbed interface is initialized, one `tabpanel` is displayed and its associated `tab` is styled to indicate that it is active, reflecting its programmatic state. All inactive `tabpanel` elements must be hidden to all users. This is most commonly achieved by use of CSS's `display: none`.

See the [ARIA `tab` role](/en-US/docs/Web/Accessibility/ARIA/Roles/tab_role) article for more information specific to the use of this role.

Include [`tabindex="-1"`](/en-US/docs/Web/HTML/Global_attributes/tabindex) to allow a `tabpanel` to receive focus without including the `tabpanel` in the page's keyboard focus order.

Make sure to define styles for a `tabpanel` for when it receives focus, optimally using the CSS {{CSSXref(':focus')}} pseudo-class, so keyboard users know there was a change in focus and are aware of what content currently has focus.

Carousels can be created using this tab pattern: A slide picker controls can be marked up as `tabs` in a `tablist` with the slide represented by a `tabpanel` element.

### Associated Roles and Attributes

- [`tab` role](/en-US/docs/Web/Accessibility/ARIA/Roles/tab_role)
  - : Controls the visibility of the associated `tabpanel`
- [`tablist` role](/en-US/docs/Web/Accessibility/ARIA/Roles/tablist_role)
  - : Group of `tab` elements.
- [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)
  - : Provides an accessible name. References the `tab` element that controls the panel
- [`aria-expanded`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-expanded)
  - : Should be used on the necessary `tab` elements if a multi-selectable `tablist` is used.

### Keyboard interactions

See the [`tablist` keyboard interactions](/en-US/docs/Web/Accessibility/ARIA/Roles/tablist_role#keyboard_interactions) in the [`tablist`](/en-US/docs/Web/Accessibility/ARIA/Roles/tablist_role) role definition.

## Example

See the [`tabpanel`, `tab`, and `tablist` example](/en-US/docs/Web/Accessibility/ARIA/Roles/tab_role#example) in the [`tab`](/en-US/docs/Web/Accessibility/ARIA/Roles/tab_role) role definition.

## Specifications

{{Specifications}}

## See also

- [ARIA `tab` role](/en-US/docs/Web/Accessibility/ARIA/Roles/tab_role)
- [ARIA `tablist` role](/en-US/docs/Web/Accessibility/ARIA/Roles/tablist_role)
- [Example: Tabs with Automatic Activation](https://www.w3.org/WAI/ARIA/apg/example-index/tabs/tabs-automatic.html) - W3C
- [Example: Tabs with Manual Activation](https://www.w3.org/WAI/ARIA/apg/example-index/tabs/tabs-manual.html) -W3C
