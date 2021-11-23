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

When content changes after initial load, assistive technology (AT) users may not see the changes. Some changes aren't important. Others are. The `aria-live` attribute enables developers to inform user of updates and choose, based on importance and urgency, whether to immediately, proactively, or passively inform AT users of changes to the content. 

If a section of the screen updates, if styled in a way to be noticeable, sighted users will likely notice it. Screen readers, on the other hand, only focus on one part of the page at a time; and that part may not be where the update is. The `aria-live` attribute provides a way for developers to annouce such changes to AT based on event triggers set by the developer rather than by user intiated actions so they too can realize the content has been updated. 

The `aria-live` attribute allows all of us to notify screen reader users when the content is updated in specific areas of the page. Include an empty element with the `aria-live` attribute set. When a section of the page updates, update the contents of this empty element with a brief brief announcement that an update has been made. Do not give the element focus. Include `aria-atomic`  

### Choosing a value

As assitive technology users can't "see" these live updates, the `aria-live` attribute is used to define what updated information the user should be made aware of immediately, what information they should be informed about if the opportunity avails itself, and what updates they don't need to be proactively informed about but, rather, can learn when they choose to focus on the updated area.

The `aria-live` attribute is set on elements that may be updated. The value, expressed in degrees of importance, describes the types of updates the user agents, assistive technologies, and user can expect from the live region. When set to `polite`, assistive technologies will notify users of updates but generally do not interrupt the current task, with the updates having a low priority. When set to `assertive`, assistive technologies immediately notify the user, potentially clearing the speech queue of previous updates. 

Screen readers buffer content when the page is loaded so content added after the initial accessibility tree is built may not be noticed as AT users may start consuming content before dynamic widgets are populated; they may not see the tell tale sign of content moving around as widgets finish loading. You likely want users to know about the page has been updated when the opportunity arises by setting `aria-live="polite"`. 

Fully populated pages may have updates too. Some pages have real-time sports scores, news crawlers, and stock market tickers. With these frequently updating features, unless these are the main function of the page, you likely do want the user to know the widget will be updated automatically but don't want to inform them of each update as it happens. Here you would set `aria-live="off"`. There is no reason to inform the user of updates unless the user is focused on the live region. In fact, when [`role="marquee"`](/en-US/docs/Web/Accessibility/ARIA/Roles/marquee_role) is set, the implied value is `aria-live="off"`,

Some live updates are important and time sensitive. If you are selling concert tickets and the user has a limited time to make the purchase, you don't want to wait until a lull in activity. Here you would set `aria-live="assertive"`. To be accessible, you would also provide a way for a user to extend the time to perform the task or turn the timer off completely.

### Using `aria-live`

A live region includes the element and all it's descendants. When not set on updating content, the value comes from the nearest ancestor with a valid `aria-live` attribute value set. When set to `off`, or when the attribute is omitted altogether on the updated element and all the ancestor nodes in the DOM tree, the user is not informed, but will see the updates if they navigate to the live region.

> **Warning:** Because an interruption may disorient users or cause them to not complete their current task, don't use the `assertive` value unless the interruption is imperative.

## Example


## Values

- `assertive`	
  - : Indicates that updates to the region have the highest priority and should be presented the user immediately.
- `off` (default)	
  - : Indicates that updates to the region should **not** be presented to the user unless the user is currently focused on that region.
- `polite`
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
- [`alert` role](/en-US/docs/Web/Accessibility/ARIA/Roles/alert_role)

<section id="Quick_links">
<strong><a href="/en-US/docs/Web/Accessibility/ARIA/Attributes">WAI-ARIA states and properties</a></strong>
{{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/aria/Attributes")}}
</section>