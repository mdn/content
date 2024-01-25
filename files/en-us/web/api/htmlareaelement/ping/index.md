---
title: "HTMLAreaElement: ping property"
short-title: ping
slug: Web/API/HTMLAreaElement/ping
page-type: web-api-instance-property
browser-compat: api.HTMLAreaElement.ping
---

{{ApiRef("HTML DOM")}}

The **`ping`** property of the {{domxref("HTMLAreaElement")}} interface is a space-separated list of URLs.

It reflects the `ping` attribute of the {{HTMLElement("area")}} element.

> **Note:** This property is not effective in Firefox and its usage may be limited due to privacy and security concerns.

## Example

```html
<map>
  <area
    href="https://example.com"
    ping="https://example-tracking.com"
    alt="example" />
</map>
```

```js
const areaCollection = document.getElementsByTagName("map")[0].areas;
console.log(areaCollection[0].ping); // Output: "https://example-tracking.com"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLAnchorElement.ping")}} property
