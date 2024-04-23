---
title: "HTMLScriptElement: fetchPriority property"
short-title: fetchPriority
slug: Web/API/HTMLScriptElement/fetchPriority
page-type: web-api-instance-property
browser-compat: api.HTMLScriptElement.fetchPriority
---

{{APIRef("HTML DOM")}}

The **`fetchPriority`** property of the {{domxref("HTMLScriptElement")}} interface represents a hint given to the browser on how it should prioritize fetching of an external script relative to other external scripts.

It reflects the `fetchpriority` attribute of the {{HTMLElement("script")}} element.

## Value

A string representing the priority hint. Possible values are:

- `high`
  - : Fetch the external script at a high priority relative to other external scripts.
- `low`
  - : Fetch the external script at a low priority relative to other external scripts.
- `auto`
  - : Default mode, which indicates no preference for the fetch priority.
    The browser decides what is best for the user.

If the `fetchpriority` attribute is not specified or is specified with any other value, it is the same as specifing it as `auto`.

The `fetchPriority` property allows you to signal high or low priority external script
fetches. This can be useful when applied to {{HTMLElement("script")}} elements
to signal external scripts that are "important" to the user experience early in the
loading process.

The effects of the hint on resource loading is browser-specific so make sure to
test on multiple browser engines.

Use it sparingly for exceptional cases where the browser may not be able to
infer the best way to load the external script automatically. Over use can result in
degrading performance.

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
