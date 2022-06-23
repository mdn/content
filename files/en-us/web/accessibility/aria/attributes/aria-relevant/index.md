---
title: 'aria-relevant'
slug: Web/Accessibility/ARIA/Attributes/aria-relevant
tags:
  - Accessibility
  - ARIA
  - ARIA attribute
  - ARIA property
  - aria-relevant
  - Reference
spec-urls: https://w3c.github.io/aria/#aria-relevant
---

Used in ARIA live regions, the global `aria-relevant` attribute indicates what notifications the user agent will trigger when the [accessibility tree](/en-US/docs/Glossary/Accessibility_tree) within a live region is modified.

## Description

[ARIA live regions](/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions) are areas of a web page that are updated when user's attention may be elsewhere. When an update is outside of the user's keyboard focus, assistive technologies such as screen readers use a live region area to report updates to the user.

Examples of live regions include news marquees, stock tickers, chat windows, and score boards. These update without user interaction. Some updates are important for the user to know about. They're relevant. Others are not. The `aria-relevant` is used to describe what types of changes have occurred to an [`aria-live`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-live) region, and which are relevant and should be announced.

The value is a space-separated list of change types, including `additions`, `removals`, and `text`, with a shorthand `all` meaning all three.

When `aria-relevant` is not defined, the value is inherited from the nearest ancestor with a defined value. Inherited values are not additive; the value provided on a descendant element completely overrides any inherited value from an ancestor element. When a live region doesn't have an `aria-relevant` attribute set and has no ancestor with it set, it defaults to `additions text`, because generally text modifications and node additions are relevant, but node removals are not.

While not a supported value, if the value of `none` makes the most sense, it should not be a live region.

The values of `removals` and `all` should be used sparingly. For example, when a goal happens in the World Cup, the new score (the addition) is important, the old value (the removal) is not. Assistive technologies only need to be informed of content removal when its removal represents an important change, such as a when a player is taken out of the game.

## Values

- `additions`
  - : Element nodes are added to the accessibility tree within the live region.
- `all`
  - : Shorthand for `additions removals text`.
- `removals`
  - : Text content, a text alternative, or an element node within the live region is removed from the accessibility tree.
- `text`
  - : Text content or a text alternative is added to any descendant in the accessibility tree of the live region.
- `additions text` (default)
  - : Element nodes are added to the accessibility tree within the live region AND text content or a text alternative is added to any descendant in the accessibility tree of the live region.

## ARIAMixin API

- {{domxref("Element.ariaRelevant")}}
  - : The [`ariaRelevant`](/en-US/docs/Web/API/Element/ariaRelevant) property, part of the {{domxref("Element")}} interface, reflects the value of the `aria-relevant` attribute.
- {{domxref("ElementInternals.ariaRelevant")}}
  - : The [`ariaRelevant`](/en-US/docs/Web/API/ElementInternals/ariaRelevant) property, part of the {{domxref("ElementInternals")}} interface, reflects the value of the `aria-relevant` attribute.

## Associated roles

Used in **ALL** roles.

## Specifications

{{Specifications}}

## See Also

- [`aria-atomic`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-atomic)
- [`aria-live`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-live)
- [`aria-busy`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-busy)
- [ARIA live regions](/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions)

<section id="Quick_links">
<strong><a href="/en-US/docs/Web/Accessibility/ARIA/Attributes">WAI-ARIA states and properties</a></strong>
{{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/aria/Attributes")}}
</section>
