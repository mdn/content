---
title: 'aria-live'
slug: Web/Accessibility/ARIA/Attributes/aria-live
tags: 
  - Accessibility
  - ARIA
  - ARIA attribute
  - ARIA property
  - aria-live
  - Reference
---

The global `aria-live` attribute indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.

## Description

Sighted users will generally notice live updates, such as live sports scores, news, and stock market tickers, when they appear on screen, if they're styled in a way to be noticeable. Updating areas of content are called "live regions". Sometimes the live region information is important for a user to know immediately. Sometimes updated information, like stock prices, are background noise to those reading a finance article on a page with stock ticker. As assitive technology users can't "see" these live updated, the `aria-live` attribute is used to define what updated information the user should be made aware of immediately, what they should be informed about if the opportunity avails itself, and what updated they don't need to be proactively informed about but, rather, can learn when they choose to focus on the updated area.  

The `aria-live` attribute is set on elements that may be updated. The value, expressed in degrees of importance, describes the types of updates the user agents, assistive technologies, and user can expect from the live region.

When set to `polite`, assistive technologies will notify users of updates but generally do not interrupt the current task, and updates take low priority. When set to `assertive`, assistive technologies immediately notify the user, potentially clearing the speech queue of previous updates.

A live region includes the element and all it's descendants. When not set on updating content, the value comes from the nearest ancestor with a valid `aria-live` attribute value set.

> **Warning:** Because an interruption may disorient users or cause them to not complete their current task, don't use the `assertive` value unless the interruption is imperative.

## Values

- `assertive`	
  - : Indicates that updates to the region have the highest priority and should be presented the user immediately.
- `off` (default)	
  - : Indicates that updates to the region should **not** be presented to the user unless the user is currently focused on that region.
- polite
  - : Indicates that updates to the region should be presented at the next graceful opportunity, such as at the end of speaking the current sentence or when the user pauses typing.

## ARIAMixin API 

- {{domxref("Element.ariaLive")}}
  - : The  [`ariaLive`](/en-US/docs/Web/API/Element/ariaLive) property, part of the {{domxref("Element")}} interface, reflects the value of the `aria-live` attribute.
- {{domxref("ElementInternals.aria-live")}}
  - : The  [`ariaLive`](/en-US/docs/Web/API/ElementInternals/ariaLive) property, part of the {{domxref("ElementInternals")}} interface, reflects the value of the `aria-live` attribute.

## Associated roles

Used in **ALL** roles. 

## Specifications

| Specification | Status | 
| ------------- | ------  |
| {{SpecName("ARIA","#aria-live","ARIA: aria-live Attribute")}}  | {{Spec2('ARIA')}} |

## See Also

- [`aria-atomic`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-atomic)
- [`aria-relevant`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-relevant)
- [`aria-busy`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-busy)

<section id="Quick_links">
<strong><a href="/en-US/docs/Web/Accessibility/ARIA/Attributes">WAI-ARIA states and properties</a></strong>
{{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/aria/Attributes")}}
</section>