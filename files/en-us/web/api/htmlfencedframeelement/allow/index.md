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

The **`allow`** property of the {{domxref("HTMLFencedFrameElement")}} gets and sets the value of the corresponding {{htmlelement("fencedframe")}} `allow` attribute, which represents a [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy) applied to the content when it is first embedded.

Not all permissions policies are allowed in fenced frames. The following permissions are allowed, and are required for fenced frame content originating from the specified APIs to load:

If you don't set the `allow` attribute, these permissions will be allowed by default. If you do set the `allow` atribute, you need to make sure that all of the required permissions for the APIs you are using are set. See [Permissions policies available to fenced frames](/en-US/docs/Web/HTML/Element/fencedframe#permissions_policies_available_to_fenced_frames) for more details.

## Value

A string representing a [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy).

## Examples

```js
const frame = document.createElement("fencedframe");
console.log(frame.allow);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Fenced frames](https://developer.chrome.com/docs/privacy-sandbox/fenced-frame/) on developer.chrome.com
- [The Privacy Sandbox](https://developer.chrome.com/docs/privacy-sandbox/) on developer.chrome.com
