---
title: "ARIA: marquee role"
slug: Web/Accessibility/ARIA/Reference/Roles/marquee_role
page-type: aria-role
spec-urls: https://w3c.github.io/aria/#marquee
sidebar: accessibilitysidebar
---

A `marquee` is a type of [live region](/en-US/docs/Web/Accessibility/ARIA/Guides/Live_regions) containing non-essential information which changes frequently.

## Description

The `marquee` role defines an area as a type of live region that presents non-essential information that changes frequently. Examples of marquees include stock tickers and ad banners; information that is not necessarily sought out by the user that may be presented in any order. The main difference between a `marquee` and a [`log`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/log_role) is that log information is presented in a meaningful order such as a by date.

Elements with the role marquee have an implicit [aria-live](/en-US/docs/Web/Accessibility/ARIA/Guides/Live_regions) value of `off`.

The marquee is required to have an accessible name. Use [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) if a visible label is present, otherwise use [`aria-label`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label).

### Associated WAI-ARIA roles, states, and properties

- [`aria-live`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live)

  - : Defines when assistive technology should inform the user of updates to content. Elements with the role `marquee` have an implicit [aria-live](https://www.w3.org/TR/wai-aria-1.1/#aria-live) value of `off`, meaning screen readers will not announce changes inside the marquee, even when the user is idle.

- [`aria-label`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) or [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)

  - : The `marquee` is required to have an accessible name. Use `aria-labelledby` if a visible label is present, otherwise use `aria-label`.

## Specifications

{{Specifications}}

## See also

- [ARIA: `alert` role](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role)
- [ARIA: `log` role](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/log_role)
- [ARIA: `status` role](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/status_role)
- [ARIA: `timer` role](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/timer_role)
- [ARIA live regions](/en-US/docs/Web/Accessibility/ARIA/Guides/Live_regions)
