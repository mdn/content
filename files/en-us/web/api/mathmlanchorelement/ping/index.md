---
title: "MathMLAnchorElement: ping property"
short-title: ping
slug: Web/API/MathMLAnchorElement/ping
page-type: web-api-instance-property
status:
  - experimental
  - non-standard
browser-compat: api.MathMLAnchorElement.ping
---

{{ApiRef("HTML DOM")}}{{SeeCompatTable}}{{non-standard_header}}

The **`ping`** property of the {{domxref("MathMLAnchorElement")}} interface is a space-separated list of URLs. When the link is followed, the browser will send {{HTTPMethod("POST")}} requests with the body `PING` to the URLs.

It reflects the `ping` attribute of the [`<a>`](/en-US/docs/Web/MathML/Reference/Element/a) element.

> [!NOTE]
> This property is not effective in Firefox and its usage may be limited due to privacy and security concerns.

## Value

A string.

## Examples

### Basic usage

Given this MathML:

```html
<math>
  <a
    id="myAnchor"
    href="https://example.com"
    ping="https://example-tracking.com https://example-analytics.com"
    >...</a
  >
</math>
```

you can get the `ping` value of the anchor like this:

```js
const mathAnchor = document.getElementById("myAnchor");
mathAnchor.ping; // "https://example-tracking.com https://example-analytics.com"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The MathML [`<a>`](/en-US/docs/Web/MathML/Reference/Element/a) element
