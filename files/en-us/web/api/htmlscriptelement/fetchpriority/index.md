---
title: "HTMLScriptElement: fetchPriority property"
short-title: fetchPriority
slug: Web/API/HTMLScriptElement/fetchPriority
page-type: web-api-instance-property
browser-compat: api.HTMLScriptElement.fetchPriority
---

{{APIRef("HTML DOM")}}

The **`fetchPriority`** property of the {{domxref("HTMLScriptElement")}} interface represents a hint to the browser indicating how it should prioritize fetching an external script relative to other external scripts.
It reflects the [`fetchpriority`](/en-US/docs/Web/HTML/Element/script#fetchpriority) attribute of the {{HTMLElement("script")}} element.

The property allows a developer to signal that fetching a particular script early or late in the loading process has more or less impact on user experience than a browser can reasonably infer when assigning an internal priority.
This in turn allows the browser to increase or decrease the priority, and potentially load the script earlier or later than it would otherwise.
The property should be used sparingly, as excessive or incorrect prioritization can degrade performance.

The fetch priority allows you to decrease the priority of late-body scripts, or to increase the priority of `async` scripts without having to use [preloading](/en-US/docs/Web/HTML/Attributes/rel/preload).
When early loading of a script is important, the priority can be used to complement preloading, boosting the priority ahead of less-impactful resources that have a higher default priority.

Note that both the internal priority of any fetch operation, and the impact of `fetchPriority` on the priority, are entirely browser dependent.

## Value

A string representing the priority hint. Possible values are:

- `high`
  - : Fetch the external script at a high priority relative to other external scripts.
- `low`
  - : Fetch the external script at a low priority relative to other external scripts.
- `auto`
  - : Don't set a preference for the fetch priority.
    This is the default.
    It is used if no value is set or if an invalid value is set.

## Examples

```html
<script id="el" type="module" src="main.js" fetchpriority="high"></script>
```

```js
const el = document.getElementById("el");
console.log(el.fetchPriority); // Output: "high"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLImageElement.fetchPriority")}}
- {{domxref("HTMLLinkElement.fetchPriority")}}
- HTTP {{httpheader("Link")}} header
- [Optimize resource loading with the Fetch Priority API](https://web.dev/articles/fetch-priority?hl=en#browser_priority_and_fetchpriority) for information about how this API affects priorities on Chrome.
