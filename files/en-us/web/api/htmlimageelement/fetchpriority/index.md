---
title: "HTMLImageElement: fetchPriority property"
short-title: fetchPriority
slug: Web/API/HTMLImageElement/fetchPriority
page-type: web-api-instance-property
browser-compat: api.HTMLImageElement.fetchPriority
---

{{APIRef("HTML DOM")}}

The **`fetchPriority`** property of the {{domxref("HTMLImageElement")}} interface represents a hint to the browser indicating how it should prioritize fetching a particular image relative to other images.
It reflects the [`fetchpriority`](/en-US/docs/Web/HTML/Element/img#fetchpriority) attribute of the corresponding {{htmlelement("img")}} element.

The property allows a developer to signal that fetching a particular image early in the loading process has more or less impact on user experience than a browser can reasonably infer when assigning an internal priority.
This in turn allows the browser to increase or decrease the priority, and potentially load the image earlier or later than it would otherwise.
The property should be used sparingly, as excessive or incorrect prioritization can degrade performance.

The fetch priority can be used to complement [preloading](/en-US/docs/Web/HTML/Attributes/rel/preload), allowing a developer to boost the priority ahead of less-impactful resources that have a higher default priority.
For example, if a developer knows that a particular image significantly contributes to the website's {{glossary("Largest Contentful Paint")}} (LCP) they could add [`<link rel="preload">`](/en-US/docs/Web/HTML/Attributes/rel/preload) for the image and then further boost the priority using the `fetchpriority` property.

Note that both the internal priority of any fetch operation, and the impact of `fetchPriority` on the priority, are entirely browser dependent.

## Value

A string representing the priority hint.
Possible values are:

- `high`
  - : Fetch the image at a high priority relative to other images with the same internal prioritization.
- `low`
  - : Fetch the image at a low priority relative to other images with the same internal prioritization.
- `auto`
  - : Don't set a user preference for the fetch priority.
    This is the default.
    It is used if no value is set or if an invalid value is set.

## Examples

```js
const img = new Image();
img.fetchPriority = "high";
img.src = "img/logo.png";
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLLinkElement.fetchPriority")}}
- {{domxref("HTMLScriptElement.fetchPriority")}}
- HTTP {{httpheader("Link")}} header
- [Optimize resource loading with the Fetch Priority API](https://web.dev/articles/fetch-priority?hl=en#browser_priority_and_fetchpriority) for information about how this API affects priorities on Chrome.
