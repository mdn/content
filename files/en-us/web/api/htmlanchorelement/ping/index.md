---
title: "HTMLAnchorElement: ping property"
short-title: ping
slug: Web/API/HTMLAnchorElement/ping
page-type: web-api-instance-property
browser-compat: api.HTMLAnchorElement.ping
---

{{ApiRef("HTML DOM")}}

The **`ping`** property of the {{domxref("HTMLAnchorElement")}} interface is a space-separated list of URLs. When the link is followed, the browser will send {{HTTPMethod("POST")}} requests with the body PING to the URLs.

It reflects the `ping` attribute of the {{HTMLElement("a")}} element.

> [!NOTE]
> This property is not effective in Firefox and its usage may be limited due to privacy and security concerns.

## Example

```html
<a
  id="exampleLink"
  href="https://example.com"
  ping="https://example-tracking.com https://example-analytics.com"
  >Example Link</a
>
```

```js
const anchorElement = document.getElementById("exampleLink");
console.log(anchorElement.ping); // Output: "https://example-tracking.com https://example-analytics.com"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLAreaElement.ping")}} property
