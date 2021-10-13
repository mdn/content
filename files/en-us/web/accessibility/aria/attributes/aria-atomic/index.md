---
title: 'ARIA: aria-atomic attribute'
slug: web/Accessibility/ARIA/Attributes/aria-atomic
tags: 

  - Accessibility
  - ARIA
  - ARIA attribute
  - ARIA property
  - aria-atomic
  - NeedsExample
---

Used in ARIA live regions, the global `aria-atomic` attribute indicates whether assistive technologies such as a screen reader will present all, or only parts of, the changed region based on the change notifications defined by the [`aria-relevant`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-relevant) attribute.

## Description

Live regions sections of a web page updated, whether by by user interaction or not, when user focus is elsewhere. As they update outside the user's focus, assistive technologies such as screen readers may not "see" the update to report it to the user. WAI-ARIA has 4 properties that allow the developer to identify these live regions and tell the assistive technology how to process them, inluding [`aria-live`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-live), [`aria-relevant`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-relevant),  [`aria-busy`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-busy) and `aria-atomic`.

When content of a live region changes, the DOM is traversed from the changed element thru its ancestors to find the first element with `aria-atomic` set in determining what content the user should be presented.

If none of the ancestors have explicitly set `aria-atomic`, or an ancestor in the DOM tree has `aria-atomic="false"` explicitly set, the screen reader will stop going up the ancestory tree and present only the node or nodes of live region content that have been updated. When set to `aria-atomic="true"`, the entire changed region as a whole will be presented, including the updated node's `label`, if there is one. 

## Values

- `false` (default)
  - : present only the changed node or nodes.
- `true`
  - : present the entire changed region as a whole, including the author-defined label if one exists.
  
## Associated roles

Used in **ALL** [roles](/en-US/docs/Web/Accessibility/ARIA/Roles). 

## Specifications

| Specification         | Status            |
| ---------------- | ---------------- |
| {{SpecName("ARIA","#aria-atomic","ARIA: aria-atomic Attribute")}}              | {{Spec2('ARIA')}}                         |


## See Also

- [Event.ariaAtomic](/en-US/docs/Web/API/Element/ariaAtomic)

<section id="Quick_links">

1. [**WAI-ARIA states and properties**](/en-US/docs/Web/Accessibility/ARIA/Attributes)

    {{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/ARIA/Attributes")}}

</section>
