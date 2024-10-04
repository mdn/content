---
title: "HTMLLinkElement: fetchPriority property"
short-title: fetchPriority
slug: Web/API/HTMLLinkElement/fetchPriority
page-type: web-api-instance-property
browser-compat: api.HTMLLinkElement.fetchPriority
---

{{APIRef("HTML DOM")}}

The **`fetchPriority`** property of the {{domxref("HTMLLinkElement")}} interface represents a hint to the browser indicating how it should prioritize fetching a given resource relative to other
resources of the same type and internal prioritization.
It reflects the [`fetchpriority`](/en-US/docs/Web/HTML/Element/link#fetchpriority) attribute of the corresponding {{htmlelement("link")}} element, for the allowed values.

The property allows a developer to signal that fetching a particular resource early in the loading process has more or less impact on user experience than a browser can reasonably infer when assigning an internal priority, in particular when preloading resources.
This in turn allows the browser to increase or decrease the priority, and potentially load the resource earlier or later than it would otherwise.
The property should be used sparingly, as excessive or incorrect prioritization can degrade performance.

Note that both the internal priority of any fetch operation, and the impact of `fetchPriority` on the priority, are entirely browser dependent.

## Value

A string representing the priority hint. Possible values are:

- `high`
  - : Fetch the preload resource at a high priority relative to other resources of the same type and internal prioritization.
- `low`
  - : Fetch the preload resource at a low priority relative to other resources of the same type and internal prioritization.
- `auto`
  - : No user preference for the fetch priority.
    This is the default.

The property is `null` or an empty string if any other value is set.

## Examples

```js
const preloadLink = document.createElement("link");
preloadLink.href = "myimage.jpg";
preloadLink.rel = "preload";
preloadLink.as = "image";
preloadLink.fetchPriority = "high";
document.head.appendChild(preloadLink);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLImageElement.fetchPriority")}}
- {{domxref("HTMLScriptElement.fetchPriority")}}
- HTTP {{httpheader("Link")}} header
- [Optimize resource loading with the Fetch Priority API](https://web.dev/articles/fetch-priority?hl=en#browser_priority_and_fetchpriority) for information about how this API affects priorities on Chrome.
