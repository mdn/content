---
title: "ARIA: timer role"
slug: Web/Accessibility/ARIA/Roles/timer_role
page-type: aria-role
spec-urls: https://w3c.github.io/aria/#timer
---

The **`timer`** role indicates to assistive technologies that an element is a numerical counter listing the amount of elapsed time from a starting point or the remaining time until an end point. Assistive technologies will not announce updates to a timer as it has an implicit [aria-live](https://www.w3.org/TR/wai-aria/#aria-live) value of `off`.

```html
<div role="timer" id="eggtimer">0</div>
```

This defines this `div` element as a timer with no remaining time.

## Description

The `timer` role indicates to assistive technologies that this part of the web content is a live region containing a timer listing the time remaining or elapsed time. A timer's inner text should be an updating current time measurement. While the value does not necessarily need to be machine parsable, it should continuously update at regular intervals unless the timer is paused or reaches its end-point.

Along with [`alert`](/en-US/docs/Web/Accessibility/ARIA/Roles/alert_role), [`log`](/en-US/docs/Web/Accessibility/ARIA/Roles/log_role), [`marquee`](/en-US/docs/Web/Accessibility/ARIA/Roles/marquee_role), and [`status`](/en-US/docs/Web/Accessibility/ARIA/Roles/status_role) the `timer` role is a live region and can be modified by [live region](/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions) attributes.

### Associated WAI-ARIA roles, states, and properties

- [`aria-label`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label) or [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)

  - : Some screen readers announce the name of a timer element before announcing its contents. If a name is visible, reference it using `aria-labelledby`. Including an `aria-label` provides a method for prefacing the visible content of a timer element with text that is not displayed when a screen reader reads the content. Naming a timer is not required so if nothing is appropriate both these attributes can be omitted.

- [`aria-live`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-live)

  - : Elements with the role `timer` have an implicit [aria-live](https://www.w3.org/TR/wai-aria/#aria-live) value of `off`.

## Accessibility concerns

If a time limit needs to be in place, for example, for security reasons, the user should have the option to turn it off or extend it. This restriction does not apply if the time limit is due to a live event, such as an auction or a game, or if the time to complete the form is essential for a valid submission.

## Specifications

{{Specifications}}

## See also

- [ARIA: `alert` role](/en-US/docs/Web/Accessibility/ARIA/Roles/alert_role)
- [ARIA: `log` role](/en-US/docs/Web/Accessibility/ARIA/Roles/log_role)
- [ARIA: `marquee` role](/en-US/docs/Web/Accessibility/ARIA/Roles/marquee_role)
- [ARIA: `status` role](/en-US/docs/Web/Accessibility/ARIA/Roles/status_role)
- [ARIA live regions](/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions)
- [`timer` example on Codepen](https://codepen.io/heydon/pres/NGgNjZ) by Heydon Pickering

<section id="Quick_links">

1. [**WAI-ARIA roles**](/en-US/docs/Web/Accessibility/ARIA/Roles)

   {{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/ARIA/Roles")}}

</section>
