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

A `tabpanel` is part of the a tab intereface. 

Tabs are a common user experience pattern in which a group of visual tabs, usually above or to the side of a content area enable quick switching between multiple layered views. Each tab is defined as such with the [`tab`](/en-US/docs/Web/Accessibility/ARIA/Roles/tab_role) role. The group of tabs is a [`tablist`](/en-US/docs/Web/Accessibility/ARIA/Roles/tablist_role). And every pane of content that is made visible by selecting a tab has a container with the `tabpanel` role. 

Tabpanels are displayed one panel of content at a time. Selecting a different tab changes the currently visible tab; changing the content by making visible a new panel while making the newly selected tab more prominent than the other tabs.

The `tabpanel` role indicates the element is a container for the resources associated with a `tab` role, where each `tab` is contained in a `tablist`. Each element that contains the content panel for a tab has role `tabpanel`.


Each tab in a tab list serves as the label for one of the tab panels and can be activated to display that panel. The `tabpanel`, in turn, is the element that contains the content associated with a tab.

When a tabbed interface is initialized, one tab panel is displayed and its associated tab is styled to indicate that it is active. When the user activates one of the other tab elements, the previously displayed tab panel is hidden, the tab panel associated with the activated tab becomes visible, and the tab is considered "active".

Carousel can be created using this tab pattern: slide picker controls can be marked up as `tabs` in a `tablist` with the slide represented by a `tabpanel` element.

Associate each `tabpanel` with its associated `tab` either by including the {{HTMLAttrXRef('id')}} of the `tabpanel` as the value of the `tab`'s [`aria-controls`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-controls) attribute, or by including the id of the tab as the value of the tabpanel's [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) attribute, or both.

### Associated Roles and Attributes

### Keyboard interaction

| Key               | Action |
| ----------------- | ------ |
| <kbd>Tab</kbd>    |        |
| <kbd>→</kbd>      |        |
| <kbd>←</kbd>      |        |
| <kbd>Delete</kbd> |        |



## Example

See the [`tabpanel`, `tab`, and `tablist` example](/en-US/docs/Web/Accessibility/ARIA/Roles/tab_role#Example) in the [`tab`](/en-US/docs/Web/Accessibility/ARIA/Roles/tab_role) role definition.

## Specifications

| Specification                                                                        | Status                                           |
| ------------------------------------------------------------------------------------ | ------------------------------------------------ |
| {{SpecName("ARIA","#tabpanel","tabpanel")}}                             | {{Spec2('ARIA')}}                         |
| {{SpecName("ARIA Authoring Practices 1.2","#tabpanel","tabpanel")}} | {{Spec2('ARIA Authoring Practices 1.2')}} |


<section id="Quick_links">

1. [**WAI-ARIA roles**](/en-US/docs/Web/Accessibility/ARIA/Roles)

    {{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/ARIA/Roles")}}

</section>
