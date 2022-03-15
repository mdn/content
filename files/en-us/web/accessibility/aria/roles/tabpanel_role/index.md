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
---

The ARIA `tabpanel` is a container for the resources of layered content associated with a `tab`.

## Description

A `tabpanel` is part of the a tab interface. Tabs are a common user experience pattern in which a group of visual tabs, usually above or to the side of a content area enable quick switching between multiple layered views. Each tab is defined as such with the [`tab`](/en-US/docs/Web/Accessibility/ARIA/Roles/tab_role) role. The group of selectable tabs is a [`tablist`](/en-US/docs/Web/Accessibility/ARIA/Roles/tablist_role). The `tabpanel` role is the role of the container of every pane of content that is made visible by selecting a tab. Only one tab panel is visible at a time.

In other words, the `tabpanel` role indicates the element is a container for the resources associated with a `tab` role, where each `tab` is contained in a `tablist`. 

Tab panels are displayed one panel of content at a time. Selecting a different `tab` changes the currently visible tab panel; the content area changes by making visible a new panel while hiding the previously visible panel and making the newly selected tab more prominent than the other tabs. User focus, however, does not change on tab selection. 

Tabs are not anchor links to associated panel content. In a tab interface, selecting a tab makes the associated tabpanel visible but does not not move user focus to the associated panel of content. Tab selection just visually reveals the content of the associated panel. 

Each `tab` in a `tablist` serves as the label for one of the tab panels and can be activated to display that panel. The `tabpanel`, in turn, is the element that contains the content associated with a tab. Associate each `tabpanel` with its associated `tab` either by including the {{HTMLAttrXRef('id')}} of the `tabpanel` as the value of the `tab`'s [`aria-controls`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-controls) attribute, or by including the id of the tab as the value of the tabpanel's [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) attribute, or both.

When a tabbed interface is initialized, one tab panel is displayed and its associated tab is styled to indicate that it is active. When the user activates one of the other tab elements, the previously displayed tab panel is hidden, the tab panel associated with the activated tab becomes visible, and the tab is considered "active".

To navigate by keyboard from a selected tab to its associated visible tab panel, if the `tablist` precedes the `tabpanel` in source order, the user will expect to be able to step through the remaining tabs in focus order or select the <kbd>down arrow</kbd> to give focus to the visible tabpanel. 

Include [`tabindex="-1"`](/en-US/docs/Web/HTML/Global_attributes/tabindex) on each tabpanel to put the `tabpanel` in the page Tab focus sequence for keyboard users. This helps facilitate movement to the panel's content for assistive technology users, especially for panels that do not contain any natively focusable elements. Make sure to include focus styles for the `tabpanel` that has focus, optimally using the CSS {{CSSXref(':focus')}} pseudoclass, so keyboard users know there was a change in focus and are aware of what content currently has focus.

Hide the non-visible tabpanels that are not currently relevant with the HTML {{htmlattrxref('hidden')}} attribute or set [`aria-hidden="true"`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby). Browsers won't render elements with the `hidden` attribute set. If using `aria-hidden`, use CSS to hide the hidden tab panels. 

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

See the [`tabpanel`, `tab`, and `tablist` example](/en-US/docs/Web/Accessibility/ARIA/Roles/tab_role#Example) in the [`tab`](/en-US/docs/Web/Accessibility/ARIA/Roles/tab_role) role definition.

## Specifications

| Specification                                                                        | Status                                           |
| ------------------------------------------------------------------------------------ | ------------------------------------------------ |
| {{SpecName("ARIA","#tabpanel","tabpanel")}}                             | {{Spec2('ARIA')}}                         |
| {{SpecName("ARIA Authoring Practices 1.2","#tabpanel","tabpanel")}} | {{Spec2('ARIA Authoring Practices 1.2')}} |

## See Also

- [ARIA `tab` role](/en-US/docs/Web/Accessibility/ARIA/Roles/tab_role)
- [ARIA `tablist` role](/en-US/docs/Web/Accessibility/ARIA/Roles/)
- [Example: Tabs with Automatic Activation](https://w3c.github.io/aria-practices/examples/tabs/tabs-1/tabs.html) - W3C
- [Example: Tabs with Manual Activation](https://w3c.github.io/aria-practices/examples/tabs/tabs-2/tabs.html) -W3C
- [Example: Codepen of tab interface](https://codepen.io/heydon/pen/veeaEa/) - Heydon Pickering

<section id="Quick_links">

1. [**WAI-ARIA roles**](/en-US/docs/Web/Accessibility/ARIA/Roles)

    {{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/ARIA/Roles")}}

</section>
