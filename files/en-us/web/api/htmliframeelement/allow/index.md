---
title: "HTMLIFrameElement: allow property"
short-title: allow
slug: Web/API/HTMLIFrameElement/allow
page-type: web-api-instance-property
browser-compat: api.HTMLIFrameElement.allow
---

{{APIRef("HTML DOM")}}

The **`allow`** property of the {{domxref("HTMLIFrameElement")}} interface indicates the [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy) specified for this `<iframe>` element. The policy defines what features are available to the `<iframe>` element (for example, access to the `microphone`, `camera`, `battery`, `web-share`, etc.) based on the origin of the request.

The Permissions Policy specified by the `allow` attribute implements a further restriction on top of the policy specified in the {{HTTPHeader("Permissions-Policy")}} header. It doesn't replace it.

See [`<iframe>`'s Permissions Policy syntax](/en-US/docs/Web/HTTP/Headers/Permissions-Policy#iframes) for more details.

It reflects the `allow` attribute of the {{HTMLElement("iframe")}} element.

## Value

A string indicates the [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy) specified for this {{HTMLElement("iframe")}} element, each policy must be separated by space.

## Examples

```html
<iframe
  id="el"
  src="https://example.com"
  allow="geolocation 'self' https://a.example.com https://b.example.com; fullscreen 'none'"></iframe>
```

```js
const el = document.getElementById("el");
console.log(el.allow); // Output: "geolocation 'self' https://a.example.com https://b.example.com; fullscreen 'none'"
```

See [Permissions Policy in `<iframe>` element](/en-US/docs/Web/HTTP/Headers/Permissions-Policy#iframes) for more available examples.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy)
