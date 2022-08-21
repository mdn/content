---
title: 'ARIA: tabpanel role'
slug: Web/Accessibility/ARIA/Roles/tabpanel_role
tags:
  - ARIA
  - ARIA Role
  - ARIA Tab
  - ARIA Tabpanel
  - ARIA widget
  - Reference
spec-urls:
  - https://w3c.github.io/aria/#tabpanel
  - https://w3c.github.io/aria-practices/#tabpanel
---
The ARIA `tabpanel` is a container for the resources of layered content associated with a `tab`.

## Description

The `tabpanel` role indicates the element is a container for the resources associated with a [`tab`](/en-US/docs/Web/Accessibility/ARIA/Roles/tab_role) role, where each `tab` is contained in a [`tablist`](/en-US/docs/Web/Accessibility/ARIA/Roles/tablist_role).

A `tabpanel` is part of the a tab interface, a common user experience pattern in which a group of visual tabs each enable quick switching between multiple layered views. Each tab is defined as such with the `tab` role. The `tablist` role is used on the container grouping the selectable tabs. The `tablist` is usually above or to the side of a content area. The `tabpanel` role is the role of the container of every pane of content that is made visible by selecting a tab. Only one `tabpanel` is visible at a time.

Only the `tabpanel` associated with the currently selected `tab` is displayed. The other `tabpanel` elements, the ones associated with the unselected `tabs` are hidden.

Selecting a different `tab` changes the currently visible tab panel. The content area changes by making visible a new panel while hiding the previously visible panel and making the newly selected tab more prominent than the other tabs. User focus, however, does not change on tab selection.

Tabs do not act as anchor links to individual panels. While semantic HTML may be coded with the tabs being anchor links navigating to the tab's associated tabpanel, when JavaScript is used to progressively enhance the content to a tabbed interface, the link's default behavior should be prevented.

In a tab interface, selecting a `tab` makes the associated `tabpanel` visible but does not move user focus. Tab selection only reveals the content of the associated panel visually and unhides them from assistive technologies. The <kbd>Tab</kbd> key should be programmed to move from the focused tab to the tab's associated tabpanel.

Each `tab` in a `tablist` serves as the label for one of the tab panels and can be activated to display that panel. Include the `id` of each `tab` as the value of each `tabpanel`'s [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) attribute.

You can also optionally associate each `tabpanel` with its associated `tab` by including the {{HTMLAttrXRef('id')}} of the `tabpanel` as the value of the `tab`'s [`aria-controls`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-controls) attribute.

When a tabbed interface is initialized, one `tabpanel` is displayed and its associated `tab` is styled to indicate that it is active.  Hide the non-visible tabpanels with the HTML {{htmlattrxref('hidden')}} attribute or set [`aria-hidden="true"`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby). Browsers won't render elements with the `hidden` attribute set, so long as [CSS is declared on a `hidden` attribute selector to remove it](/en-US/docs/Web/CSS/display#none).

If using `aria-hidden`, use CSS to hide the hidden tab panels. When a new `tab` is selected, remove the `hidden` attribute from the newly active panel or set the `aria-hidden` attribute to `false`, while adding `hidden` or `aria-hidden="true"` to the previously active `tabpanel`.

The newly selected `tab` is considered "active" and should have its [`aria-selected`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-selected) attribute set to `true` while all other tabs in the same `tablist` should have the `aria-selected` attribute set to `false`, or removed altogether. See [ARIA `tab` role](/en-US/docs/Web/Accessibility/ARIA/Roles/tab_role) for move information.

If the `tablist` precedes the `tabpanel` in source order, the user will expect to be able to step through the remaining tabs in focus order or select the <kbd>down arrow</kbd> to give focus to the visible tabpanel when navigating by keyboard.

Include [`tabindex="-1"`](/en-US/docs/Web/HTML/Global_attributes/tabindex) on enable a `tabpanel` to receive focus without putting the `tabpanel` in the page <kbd>Tab</kbd> focus sequence for keyboard users.

Make sure to include focus styles for the `tabpanel` that has focus, optimally using the CSS {{CSSXref(':focus')}} pseudoclass, so keyboard users know there was a change in focus and are aware of what content currently has focus.

Carousels can be created using this tab pattern: A slide picker controls can be marked up as `tabs` in a `tablist` with the slide represented by a `tabpanel` element.

### Associated Roles and Attributes

- [`tab` role](/en-US/docs/Web/Accessibility/ARIA/Roles/tab_role)
  - : Controls the visibility of the associated `tabpanel`
- [`tablist` role](/en-US/docs/Web/Accessibility/ARIA/Roles/tablist_role)
  - : Group of `tab` elements.
- [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)
  - : Provides an accessible name. References the `tab` element that controls the panel
- [`aria-hidden`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)
  - : Indicates whether an element is exposed to the accessibility API.
- [HTML `hidden` attribute](/en-US/docs/Web/HTML/Global_attributes/hidden)
  - : Indicates an element is not currently relevant and browsers won't render it.

### Keyboard interaction

See the [`tablist` keyboard interactions](/en-US/docs/Web/Accessibility/ARIA/Roles/tablist_role#keyboard_interaction) in the [`tablist`](/en-US/docs/Web/Accessibility/ARIA/Roles/tablist_role) role definition.

## Example

See the [`tabpanel`, `tab`, and `tablist` example](/en-US/docs/Web/Accessibility/ARIA/Roles/tab_role#example) in the [`tab`](/en-US/docs/Web/Accessibility/ARIA/Roles/tab_role) role definition.

## Specifications

{{Specifications}}

## See Also

- [ARIA `tab` role](/en-US/docs/Web/Accessibility/ARIA/Roles/tab_role)
- [ARIA `tablist` role](/en-US/docs/Web/Accessibility/ARIA/Roles)
- [Example: Tabs with Automatic Activation](https://www.w3.org/WAI/ARIA/apg/example-index/tabs/tabs-automatic.html) - W3C
- [Example: Tabs with Manual Activation](https://www.w3.org/WAI/ARIA/apg/example-index/tabs/tabs-manual.html) -W3C
- [Example: Codepen of tab interface](https://codepen.io/heydon/pen/veeaEa/) - Heydon Pickering

<section id="Quick_links">

1. [**WAI-ARIA roles**](/en-US/docs/Web/Accessibility/ARIA/Roles)

    {{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/ARIA/Roles")}}

</section>
