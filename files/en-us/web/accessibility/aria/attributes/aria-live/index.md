---
title: aria-live
slug: Web/Accessibility/ARIA/Attributes/aria-live
page-type: aria-attribute
spec-urls: https://w3c.github.io/aria/#aria-live
---

The global `aria-live` attribute indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.

## Description

When content changes after initial load, assistive technology (AT) users may not "see" the changes. Some changes are important. Others are not. The `aria-live` attribute enables developers to inform the user of updates and choose, based on importance and urgency, whether to immediately, proactively, or passively inform AT users of changes to the content.

If a section of the screen updates, if it's styled in a way to be noticeable, most sighted users will generally notice live updates. Screen readers, on the other hand, only focus on one part of the page at a time; and that part may not be where the update is. The `aria-live` attribute provides a way for developers to announce such changes to AT based on event triggers set by the developer rather than by user initiated actions so they are made aware that the content has changed.

```html
<div id="announce" aria-live="polite"></div>
```

The `aria-live` attribute is set on an **empty** element. When an update to the page occurs, the empty element with that `aria-live` attribute should be updated with a brief announcement informing the user an update has been made.

```html
<div id="announce" aria-live="polite">
  <p>This message is announced.</p>
</div>
```

When the accessibility API recognizes a change to the live region above, it will announce the contents of that live region based on the value of the attribute. The element is **not** given focus.

If you want all the contents of the live region to be read, use the [`aria-atomic`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-atomic). Use [`aria-relevant`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-relevant) to define only the sections of an update that need to be reread to the user. Use [`aria-busy`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-busy) to prevent announcements while updates are still being made.

### Choosing the `aria-live` value

As some assistive technology users can't "see" live updates, the `aria-live` attribute is used to define what updated information the user should be:

- Made aware of immediately,
- Informed about if the opportunity avails itself, and
- Proactively informed about but can learn when they choose to focus on the updated area.

`aria-live`'s value describes the types of updates the user agents, assistive technologies, and user can expect from the live region, and is used to express degrees of importance.

When `aria-live`'s attribute is set to `polite`, assistive technologies will notify users of updates but generally do not interrupt the current task, with the updates having a low priority. When set to `assertive`, assistive technologies immediately notify the user, potentially clearing the speech queue of previous updates.

Screen readers buffer content when the page is loaded. Because of this, content added after the initial accessibility tree is built may not be noticed as AT users start consuming content before dynamic widgets are populated—users may not know about the page or view content updating as widgets finish loading. In this situation you can let users know the page has been updated by setting `aria-live="polite"`.

Fully populated pages may have updates too. Examples are content like real-time sports scores, news crawlers, and stock market tickers. Unless these kinds of updates are the main function of the page, you likely do not want to inform the user every time it updates, but do want to inform them the widget does get updated. Here, you would set `aria-live="off"`. In these scenarios there is no reason to inform the user of updates unless they are focused on the live region.

Some live updates are important and time sensitive. For example, if you are selling concert tickets and the user has a limited time to make the purchase, you don't want to wait until a lull in activity to tell them their time is almost up (or already over). When being informed as soon as possible is necessary, set `aria-live="assertive"`. If the updated information is an [`alert`](/en-US/docs/Web/Accessibility/ARIA/Roles/alert_role), the `aria-live` attribute is not needed.

In this time-limit scenario, to be accessible, you need to also [provide a way for users to extend the time available or turn the timer off completely](https://www.w3.org/WAI/WCAG21/Understanding/timing-adjustable.html).

### Using `aria-live`

A live region includes the element and all its descendants. When not set on updating content, `aria-live`'s value comes from the nearest ancestor with a valid `aria-live` attribute value set. When set to `off`, or when the attribute is omitted altogether on the updated element and all the ancestor nodes in the DOM tree, the user is not informed. Users will still be able to hear the updates if they navigate to the live region, however.

> **Warning:** Because an interruption may disorient users or cause them to not complete their current task, don't use the `assertive` value unless the interruption is imperative.

## Values

- `assertive`
  - : Indicates that updates to the region have the highest priority and should be presented to the user immediately.
- `off` (default)
  - : Indicates that updates to the region should **not** be presented to the user unless the user is currently focused on that region.
- `polite`
  - : Indicates that updates to the region should be presented at the next graceful opportunity, such as at the end of speaking the current sentence or when the user pauses typing.

## ARIAMixin API

- {{domxref("Element.ariaLive")}}
  - : The [`ariaLive`](/en-US/docs/Web/API/Element/ariaLive) property, part of the {{domxref("Element")}} interface, reflects the value of the `aria-live` attribute.
- {{domxref("ElementInternals.aria-live")}}
  - : The [`ariaLive`](/en-US/docs/Web/API/ElementInternals/ariaLive) property, part of the {{domxref("ElementInternals")}} interface, reflects the value of the `aria-live` attribute.

## Associated roles

Used in **ALL** roles.

## Specifications

{{Specifications}}

## See Also

- [`aria-atomic`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-atomic)
- [`aria-relevant`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-relevant)
- [`aria-busy`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-busy)
- [`alert` role](/en-US/docs/Web/Accessibility/ARIA/Roles/alert_role)

<section id="Quick_links">
<strong><a href="/en-US/docs/Web/Accessibility/ARIA/Attributes">WAI-ARIA states and properties</a></strong>
{{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/aria/Attributes")}}
</section>
