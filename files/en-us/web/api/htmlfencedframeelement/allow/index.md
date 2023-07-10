---
title: "HTMLFencedFrameElement: allow property"
short-title: allow
slug: Web/API/HTMLFencedFrameElement/allow
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.HTMLFencedFrameElement.allow
---

{{SeeCompatTable}}{{APIRef("Fenced Frame API")}}

The **`allow`** property of the {{domxref("HTMLFencedFrameElement")}} gets and sets the value of the corresponding {{domxref("fencedframe")}} `allow` attribute, which represents a [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy) applied to the content when it is first embedded.

## Value

A string representing a [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy).

## Examples

```js
const frame = document.createElement("fencedframe");
frame.allow = "geolocation 'self' https://a.example.com https://b.example.com";
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Fenced frames](https://developer.chrome.com/docs/privacy-sandbox/fenced-frame/) on developer.chrome.com
- [The Privacy Sandbox](https://developer.chrome.com/docs/privacy-sandbox/) on developer.chrome.com
