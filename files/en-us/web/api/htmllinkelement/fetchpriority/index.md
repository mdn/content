---
title: "HTMLLinkElement: fetchPriority property"
short-title: fetchPriority
slug: Web/API/HTMLLinkElement/fetchPriority
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.HTMLLinkElement.fetchPriority
---

{{SeeCompatTable}}{{APIRef("HTML DOM")}}

The **`fetchPriority`** property of the
{{domxref("HTMLLinkElement")}} interface represents a hint given to the browser
on how it should prioritize the preload of the given resource relative to other
resources of the same type.

## Value

A string representing the priority hint. Possible values are:

- `high`
  - : Fetch the preload at a high priority relative to other resources
    of the same type.
- `low`
  - : Fetch the image at a low priority relative to other resources of
    the same type.
- `auto`
  - : Default mode, which indicates no preference for
    the fetch priority. The browser decides what is best for the user.

The `fetchPriority` property allows you to signal high or low priority preload
fetches. This can be useful when applied to {{HTMLElement("link")}} elements
to signal preloads that are more or less important to the user experience early
in the loading process.

The effects of the hint on resource loading is browser-specific so make sure to
test on multiple browser engines.

Use it sparingly for exceptional cases where the browser may not be able to
infer the best way to load the resource automatically. Over use can result in
degrading performance.

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
