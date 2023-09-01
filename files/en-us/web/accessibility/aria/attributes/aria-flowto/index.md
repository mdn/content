---
title: aria-flowto
slug: Web/Accessibility/ARIA/Attributes/aria-flowto
page-type: aria-attribute
spec-urls: https://w3c.github.io/aria/#aria-flowto
---

The global `aria-flowto` attribute identifies the next element (or elements) in an alternate reading order of content. This allows assistive technology to override the general default of reading in document source order at the user's discretion.

## Description

Web pages should be sequentially navigable. For this reason, developers are dissuaded from using the global [tabindex](/en-US/docs/Web/HTML/Global_attributes/tabindex) attribute which can change tab order and the CSS {{CSSXRef('order')}} property, which can change visual order from the DOM order. However, in rare circumstances a reading path different from the source order is required. For such cases, the `aria-flowto` attribute can make the content more accessible for users of assistive technologies.

The global `aria-flowto` attribute lets the author indicate to assistive technology users which element or elements might want to be focused on next, providing an alternate reading order to the source order. This allows assistive technology to read a document in an order other than the default document source reading order.

When `aria-flowto` has a single [id](/en-US/docs/Web/HTML/Global_attributes/id) reference, it allows assistive technologies to, at the user's request, go to the element targeted via that `id` instead of reading the document in the order of the DOM. When the `aria-flowto` value uses a space separated list of multiple `id` references, assistive technology can provide the user with a list of path choices, with each `id` referenced being a choice. The path choice names are determined by the accessible name of each target element of the `aria-flowto` attribute.

> **Note:** Setting `aria-flow` does not impact the content's tab order. It only provides users the option to follow a content path that doesn't match the DOM order when using tech that supports this attribute.

## Values

- `id`
  - : Suggested next element in the reading order.
- `id` list
  - : Space separated list of ID values referencing the suggested elements the user may want to go to next in the alternate reading order of content.

## Associated roles

Used in **ALL** roles.

## Specifications

{{Specifications}}

## See Also

- HTML [id](/en-US/docs/Web/HTML/Global_attributes/id) attribute
- HTML [tabindex](/en-US/docs/Web/HTML/Global_attributes/tabindex) attribute
- CSS {{CSSXRef('order')}} property
- [WCAG: source order](/en-US/docs/Web/Accessibility/Understanding_WCAG/Operable#guideline_2.4_—_navigable_provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [Using aria-flowto](https://www.w3.org/WAI/GL/wiki/Using_aria-flowto) - W3 Wiki

<section id="Quick_links">
<strong><a href="/en-US/docs/Web/Accessibility/ARIA/Attributes">WAI-ARIA states and properties</a></strong>
{{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/aria/Attributes")}}
</section>
