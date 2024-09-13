---
title: aria-atomic
slug: Web/Accessibility/ARIA/Attributes/aria-atomic
page-type: aria-attribute
spec-urls: https://w3c.github.io/aria/#aria-atomic
---

{{AccessibilitySidebar}}

In ARIA live regions, the global `aria-atomic` attribute indicates whether assistive technologies such as a screen reader will present all, or only parts of, the changed region based on the change notifications defined by the [`aria-relevant`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-relevant) attribute.

## Description

Live regions are sections of a web page that are updated, whether by user interaction or not, when user focus is elsewhere. As they update outside the user's focus, assistive technologies such as screen readers may not "see" the update to report it to the user. WAI-ARIA has 4 properties that allow the developer to identify these live regions and tell the assistive technology how to process them, including [`aria-live`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-live), [`aria-relevant`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-relevant), [`aria-busy`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-busy) and `aria-atomic`.

When the content of a live region changes, the DOM is traversed from the changed element through its ancestors to find the first element with `aria-atomic` set. This determines the content that the user should be presented with.

If no ancestor has explicitly set `aria-atomic`, only the node or nodes of live region content that have been updated are read. The difference between omitting `aria-atomic` altogether and explicitly setting an ARIA live region's ancestor node with `aria-atomic="false"` is that explicitly setting `aria-atomic="false"` will stop the screen reader from going up the ancestor chain. Both lead to only the updated node being read. When set to `aria-atomic="true"`, the entire changed region as a whole will be presented, including the updated node's `label`, if there is one.

## Values

- `false` (default)
  - : present only the changed node or nodes.
- `true`
  - : present the entire changed region as a whole, including the author-defined label if one exists.

## Associated roles

Used in **ALL** [roles](/en-US/docs/Web/Accessibility/ARIA/Roles).

## Specifications

{{Specifications}}

## See also

- [Event.ariaAtomic](/en-US/docs/Web/API/Element/ariaAtomic)
