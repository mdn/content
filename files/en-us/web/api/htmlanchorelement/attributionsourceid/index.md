---
title: "HTMLAnchorElement: attributionSourceId property"
short-title: attributionSourceId
slug: Web/API/HTMLAnchorElement/attributionSourceId
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.HTMLAnchorElement.attributionSourceId
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

The **`attributionSourceId`** property of the {{domxref("HTMLAnchorElement")}} interface gets and sets the `attributionsourceid` HTML attribute on an {{htmlelement("a")}} element.

The `attributionSourceId` is used as part of the [Private Click Measurement](https://privacycg.github.io/private-click-measurement/) specification to identify the content that was clicked when following a link to another site.

## Value

A number. Valid values for private click measurement are between `0` and `255`. The default value is `0`. Values outside this range will not cause an error when setting the property, but will be ignored by the browser for attribution purposes.

## Examples

### Setting an attribution source ID on a link

```html
<a
  id="ad-link"
  href="https://example.com"
  attributiondestination="https://example.com">
  Click to visit our shop
</a>
```

```js
const adLink = document.getElementById("ad-link");
adLink.attributionSourceId = 17;

console.log(adLink.attributionSourceId); // 17
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLAnchorElement")}}
- {{htmlelement("a")}} HTML element
- [Private Click Measurement](https://privacycg.github.io/private-click-measurement/) specification
