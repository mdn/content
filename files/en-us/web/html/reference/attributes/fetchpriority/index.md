---
title: "HTML attribute: fetchpriority"
short-title: fetchpriority
slug: Web/HTML/Reference/Attributes/fetchpriority
page-type: html-attribute
status:
  - experimental
  - non-standard
browser-compat:
  - html.elements.img.fetchpriority
  - html.elements.link.fetchpriority
  - html.elements.script.fetchpriority
sidebar: htmlsidebar
---

{{SeeCompatTable}}{{non-standard_header}}

The **`fetchpriority`** attribute allows a developer to signal that fetching a particular image early in the loading process has more or less impact on user experience than a browser can reasonably infer when assigning an internal priority.
This in turn allows the browser to increase or decrease the priority, and potentially load the image earlier or later than it would otherwise.

This attribute may be applied to {{HTMLElement("img")}}, {{HTMLElement("link")}}, and {{HTMLElement("script")}} elements. It also has an [SVG counterpart](/en-US/docs/Web/SVG/Reference/Attribute/fetchpriority).

The fetch priority can be used to complement [preloading](/en-US/docs/Web/HTML/Reference/Attributes/rel/preload), allowing a developer to boost the priority ahead of less-impactful resources that have a higher default priority.
For example, if a developer knows that a particular image significantly contributes to the website's {{glossary("Largest Contentful Paint")}} (LCP) they could add [`<link rel="preload">`](/en-US/docs/Web/HTML/Reference/Attributes/rel/preload) for the image and then further boost the priority using the `fetchpriority` attribute.

Note that both the internal priority of any fetch operation, and the impact of `fetchpriority` on the priority, are entirely browser dependent.

This attribute is [enumerated](/en-US/docs/Glossary/Enumerated) and can have one of the following values:

- `high`
  - : Fetches the external resource at a high priority relative to other external resources.
- `low`
  - : Fetches the external resource at a low priority relative to other external resources.
- `auto`
  - : Doesn't set a preference for the fetch priority.
    It is used if no value or an invalid value is set.
    This is the default.

## Usage notes

The attribute should be used sparingly, as excessive or incorrect prioritization can degrade performance.

## Browser compatibility

{{Compat}}

## See also

- SVG [`fetchpriority`](/en-US/docs/Web/SVG/Reference/Attribute/fetchpriority) attribute
