---
title: 'ARIA: status role'
slug: Web/Accessibility/ARIA/Roles/status_role
tags: 
  - Accessibility
  - ARIA
  - roles
  - Reference
  - ARIA roles
  - ARIA status
  - status role
---

The `status` role defines a [live region](/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions) containing advisory information for the user that is not important enough to be an [`alert`](/en-US/docs/Web/Accessibility/ARIA/Roles/alert_role).

## Description

A `status` is a type of [live region](/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions) providing advisory information that is not important enough to justify an alert. It is often, but not necessarily, presented as a status bar.

As the content is not vital, do not give focus to the status when its content updates. 

If another part of the page controls what appears in the status, make the relationship explicit with the [`aria-controls`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-controls) attribute on the controlling element (not on the status). 

Elements with the role status have an implicit [`aria-live`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-live) value of `polite` and an implicit [`aria-atomic`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-atomic) value of `true`.  


### Associated WAI-ARIA roles, states, and properties

- [`aria-atomic`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-atomic)

  - : Defines whether assistive technologies should present all, or only parts of, the changed region. Elements with the role `status` have an implicit [aria-atomic](https://www.w3.org/TR/wai-aria-1.1/#aria-atomic) value of `true`.

- [`aria-live`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-live)

  - : Defines when assistive technology should inform the user of updates to content. Elements with the role `status` have an implicit [aria-live](https://www.w3.org/TR/wai-aria-1.1/#aria-live) value of `polite`, meaning screen readers will announce changes inside the log when the user is idle.

- [`aria-label`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label)

  - : Some screen readers announce the name of a status element before announcing the content of the status element. Including an `aria-label` provides a method for prefacing the visible content of a status element with text that is not displayed when a screen reader reads the content.  

## Specifications

| Specification                                                                                                                    | Status                                           |
| -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| {{SpecName("ARIA","#status","ARIA: status role")}}                                             | {{Spec2('ARIA')}}                         |



## See Also

- [ARIA: using the `status` role](/en-US/docs/Web/Accessibility/ARIA/aria_techniques/using_the_status_role)
- [ARIA: `alert` role](/en-US/docs/Web/Accessibility/ARIA/Roles/alert_role)
- [ARIA: `log` role](/en-US/docs/Web/Accessibility/ARIA/Roles/log_role)
- [ARIA: `marquee` role](/en-US/docs/Web/Accessibility/ARIA/Roles/marquee_role)
- [ARIA: `timer` role](/en-US/docs/Web/Accessibility/ARIA/Roles/timer_role)
- [ARIA live regions](/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions)

<section id="Quick_links">

1. [**WAI-ARIA roles**](/en-US/docs/Web/Accessibility/ARIA/Roles)

    {{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/ARIA/Roles")}}

</section>