---
title: "Request: targetAddressSpace property"
short-title: targetAddressSpace
slug: Web/API/Request/targetAddressSpace
page-type: web-api-instance-property
browser-compat: api.Request.targetAddressSpace
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

The read-only **`targetAddressSpace`** property of the {{DOMxRef("Request")}} interface returns the request's target address space, which indicates whether it is intended to be a loopback, local, or public request.

## Value

An enumerated value, which can be one of:

- `local`
  - : The request URL is a local address, which is only accessible on the local network: iIts target will differ on different networks. For example, `http://192.168.0.1`.
- `loopback`
  - : The request URL is a loopback address, which is only accessible on the local device: Its target will differ on every device. For example, `127.0.0.1`, which is generally known as `localhost`.
- `public`
  - : The request URL is a public web address, that is, an address whose target is the same for all devices globally on the IP network. For example, `https://example.com`.
- `unknown`
  - : No `targetAddressSpace` was set on the request.

## Description

In browsers that support [Local Network Access](/en-US/docs/Web/Security/Defenses/Local_network_access), loopback and local requests are gated behind specific permissions — `local-network` and `loopback-network`, respectively. Requiring user permissions for such requests mitigates the risk of [cross-site request forgery (CSRF)](/en-US/docs/Web/Security/Attacks/CSRF) attacks against local network devices such as routers and printers, and reduces the ability of sites to use these requests to fingerprint the user's local network.

This permission is restricted to secure contexts. If granted, the permissions additionally relax [mixed content](/en-US/docs/Web/Security/Defenses/Mixed_content) blocking for local network requests. This is useful because many local devices are not able to obtain publicly trusted TLS certificates for various reasons. For example, it allows public websites to access local testing servers or devices running on HTTP.

The `targetAddressSpace` property, when set to `local` or `loopback` on new requests (via the {{domxref("Request.Request", "Request()")}} constructor or directly in the {{domxref("Window.fetch", "fetch()")}} method), explicitly tells supporting browsers to skip mixed content checks. This is needed in cases where a URL is a public domain address, but ends up resolving to a local network address, such as `http://example.com`.

Some addresses such as private IP literals (such as `http://192.168.0.1`) and `local` addresses (such as `http://router.local`) are exempt from mixed content checks, so don't need the `targetAddressSpace` property to be set.

## Examples

### Basic usage

```js
const req = new Request("http://localhost:8888", {
  method: "get",
  mode: "cors",
  targetAddressSpace: "loopback",
});

console.log(req.targetAddressSpace);
// loopback

fetch(req);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Local Network Access](/en-US/docs/Web/Security/Defenses/Local_network_access)
- {{httpheader("Permissions-Policy/local-network", "local-network")}} permissions policy
- {{httpheader("Permissions-Policy/loopback-network", "loopback-network")}} permissions policy
